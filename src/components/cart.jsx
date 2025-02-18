// import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import deleteItem from "../assets/images/trash.svg";
import emptyCart from "../assets/images/sadFace.svg";
import item from "../assets/images/product.svg";
import {
  addItem,
  removeItem,
  incrementCount,
  decrementCount,
  resetCount,
} from "../state/cartCountSlice";
import { setSelectedProduct } from "../state/productSlice";
import { clearSelectedProduct } from "../state/productSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartUpdateButtons from "./cartUpdateButtons";

const SideCart = (props) => {
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    props.setOpenCart(false);
    navigate(`/product-details`);
  };

  const dispatch = useDispatch();

  const cartItemsCount = useSelector((state) => state.cartItems.count);
  const cartItems = useSelector((state) => state.cartItems.items);

  const itemIdSet = new Set(); // To track displayed product IDs

  const handleIncrement = (product) => {
    dispatch(addItem(product));
    dispatch(incrementCount());
  };

  const handleDecrement = (product) => {
    const allItems = [...cartItems];
    const indexToRemove = allItems.findIndex((item) => item.id === product.id);

    console.log("Before:", allItems);
    console.log(indexToRemove);

    if (indexToRemove !== -1) {
      allItems.splice(indexToRemove, 1);
    }

    dispatch(removeItem(allItems));
    dispatch(decrementCount());
    if (itemCounts === 0) {
      console.log("clear", dispatch(clearSelectedProduct()));
    }
  };

  const handleDeleteItem = (id) => {
    const allItems = [...cartItems];
    const itemsLeft = allItems.filter((item) => item.id !== id);
    dispatch(removeItem(itemsLeft));
    dispatch(resetCount(itemsLeft.length));
  };

  const handleGoToFullCart = () => {
    navigate(`/full-cart`);
    props.setOpenCart(false);
  };

  //Count occurrences of each product in the cart
  const itemCounts = cartItems.reduce((allItems, eachItems) => {
    allItems[eachItems.id] = (allItems[eachItems.id] || 0) + 1;
    return allItems;
  }, {});

  function formatNumber(num) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    <div className="h-full w-96" ref={props.cartRef}>
      {props.openCart && (
        <div className="flex justify-between bg-white h-full w-96 flex-col text-indigo-950 p-5 fixed top-0 right-0 z-20">
          <div className="flex flex-col overflow-x-auto scrollbar-hide mt-8">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold fixed top-4">
                In your cart ({cartItemsCount})
              </p>
              <div
                className="flex items-center gap-1 hover:cursor-pointer hover:bg-indigo-50 py-1 px-2 rounded-md fixed right-5 top-4"
                onMouseDown={() => props.setOpenCart((prev) => !prev)}
              >
                <span className="text-lg font-medium">X</span>
                <p className="text-xs font-medium">Close</p>
              </div>
            </div>
            {/* Cart Items */}
            <div className="">
              {cartItemsCount > 0 ? (
                cartItems.map((product, index) => {
                  if (itemIdSet.has(product.id)) {
                    return null; // Skip duplicate display
                  }
                  itemIdSet.add(product.id); // Track displayed products

                  return (
                    <div
                      className={`grid grid-cols-10 h-24 mb-4 ${
                        index > 0 ? "border-t-stone-100 border-t" : ""
                      } pt-3`}
                      key={index}
                    >
                      <div className="col-span-3">
                        <img
                          src={item}
                          alt={item.name}
                          className="rounded-lg h-full hover:cursor-pointer"
                          onMouseDown={() => handleProductClick(product)}
                        />
                      </div>
                      <div className="col-span-5 px-2">
                        <div className="flex flex-col justify-between h-full">
                          <p
                            className="text-xs font-semibold  hover:cursor-pointer  hover:text-indigo-800"
                            onMouseDown={() => handleProductClick(product)}
                          >
                            {product.name}
                          </p>
                          <CartUpdateButtons
                            height={6}
                            width={6}
                            pt={4}
                            text={false}
                            btnTextSize={12}
                            inputTextSize={12}
                            itemCounts={itemCounts[product.id]}
                            handleIncrement={() => handleIncrement(product)}
                            handleDecrement={() => handleDecrement(product)}
                          />
                        </div>
                      </div>
                      <div className="col-span-2">
                        <div className="flex flex-col justify-between h-full items-end">
                          <div className="flex items-center">
                            <p className="text-xs font-semibold">
                              {(
                                product.price -
                                product.price * product.discount * 0.01
                              ).toFixed(2)}
                            </p>
                          </div>
                          <div
                            className="flex justify-center items-center w-10 h-10 rounded-md hover:bg-indigo-50"
                            onMouseDown={() => handleDeleteItem(product.id)}
                          >
                            <img
                              src={deleteItem}
                              alt="delete icon"
                              className="w-5"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="flex flex-col justify-center items-center gap-3 mt-40">
                  <p className="text-sm text-stone-500 font-medium">
                    Opps! Your cart is empty.
                  </p>
                  <img src={emptyCart} alt="sad face icon" />
                </div>
              )}
            </div>
          </div>

          {/* Total Items */}
          <div className="flex flex-col gap-2 mt-2">
            <div className="flex flex-col py-3 border-t border-b">
              <div className="flex justify-between items-center text.md">
                <p className="text-stone-600 font-medium">Subtotal:</p>
                <div className="flex items-center justify-end">
                  <p className="text-xs font-medium">$</p>
                  <p>
                    {formatNumber(
                      cartItems.reduce(
                        (sum, price) =>
                          (sum +=
                            price.price - price.price * price.discount * 0.01),
                        0
                      )
                    )}
                  </p>
                </div>
              </div>
              <p className="text-xs text-stone-500">
                Note: This is the subtotal without shipping
              </p>
            </div>
            <button
              className={`w-full border rounded-md text-indigo-950 ${
                cartItemsCount > 0
                  ? "border-indigo-950 bg-white font-semibold"
                  : "border-stone-200 bg-stone-200 text-stone-600 font-semibold"
              } text-sm h-10 mt-2`}
              disabled={cartItemsCount === 0}
              onClick={handleGoToFullCart}
            >
              View full cart
            </button>
            <button
              className={`w-full border rounded-md ${
                cartItemsCount > 0
                  ? "border-indigo-950 bg-indigo-950 text-white font-semibold"
                  : "border-stone-200 bg-stone-200 text-stone-600 font-semibold"
              } text-sm h-10`}
              disabled={cartItemsCount === 0}
              onClick={() => navigate(`/checkout-shipping`)}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideCart;
