import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  incrementCount,
  decrementCount,
  resetCount,
  addItem,
  removeItem,
} from "../state/cartCountSlice";
import { clearSelectedProduct } from "../state/productSlice";
import emptyCart from "../assets/images/sadFace.svg";
import CartUpdateButtons from "./cartUpdateButtons";
import { useMediaQuery } from "react-responsive";

const FullCart = (props) => {
  const dispatch = useDispatch();

  const cartItemsCount = useSelector((state) => state.cartItems.count);
  const cartItems = useSelector((state) => state.cartItems.items);

  const itemIdSet = new Set(); // To track displayed product IDs

  //Count occurrences of each product in the cart
  const itemCounts = cartItems.reduce((allItems, eachItems) => {
    allItems[eachItems.id] = (allItems[eachItems.id] || 0) + 1;
    return allItems;
  }, {});

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
      dispatch(clearSelectedProduct());
    }
  };

  const handleDeleteItem = (id) => {
    const allItems = [...cartItems];
    const itemsLeft = allItems.filter((item) => item.id !== id);
    dispatch(removeItem(itemsLeft));
    dispatch(resetCount(itemsLeft.length));
  };

  function formatNumber(num) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  return (
    // <div className="grid grid-cols-1 h-auto md:grid-cols-10 gap-3 max-w-7xl mx-auto px-5 py-5 pb-10">
    <div className={`${cartItemsCount === 0 ? "h-screen" : "h-screen"}`}>
      {cartItemsCount > 0 ? (
        <div className="grid grid-cols-1 h-auto md:grid-cols-10 gap-3 max-w-7xl mx-auto px-5 pt-5 pb-10">
          <div className="md:col-span-7 flex flex-col gap-5 text-sm bg-stone-100 p-4 rounded-md">
            <div className="max-md:hidden grid grid-cols-10 border-b pb-4 pt-1">
              <div className="col-span-5 grid grid-cols-11">
                <p className="text-stone-600 font-medium text-md">Product</p>
              </div>
              <div className="col-span-5 flex items-center md:grid md:grid-cols-8 gap-2 justify-self-end">
                <div className="col-span-2">
                  <p className="text-stone-600 font-medium text-md">Price</p>
                </div>
                <div className="col-span-3 justify-self-start">
                  <p className="text-stone-600 font-medium text-md">Quantity</p>
                </div>
                <div className="col-span-2">
                  <p className="text-stone-600 font-medium text-md">Subtotal</p>
                </div>
                <div className="col-span-1">
                  <p className="text-stone-600 font-medium text-md"></p>
                </div>
              </div>
            </div>

            {cartItems.map((item, index) => {
              if (itemIdSet.has(item.id)) {
                return null; // Skip duplicate display
              }
              itemIdSet.add(item.id); // Track displayed products
              return (
                <div
                  className={`flex flex-col md:grid md:grid-cols-10 border-b pb-2`}
                >
                  <div className="col-span-5">
                    <div className="flex gap-2 w-full">
                      <img
                        src={require(`../assets/images${item.image}`)}
                        alt={item.name}
                        className="w-20 h-20 rounded-lg"
                      />
                      <p className="mt-2">{item.name}</p>
                    </div>
                  </div>
                  <div className="col-span-5 flex items-center md:grid md:grid-cols-8 gap-2 justify-self-end">
                    <div className="col-span-2 max-md:hidden justify-self-start">
                      <div className="flex items-center pt-4">
                        <p className="text-xs font-medium">$</p>
                        <p>
                          {formatNumber(
                            item.price - item.price * item.discount * 0.01
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <CartUpdateButtons
                        height={6}
                        width={6}
                        pt={4}
                        text={false}
                        btnTextSize={"sm"}
                        inputTextSize={"xs"}
                        itemCounts={itemCounts[item.id]}
                        handleIncrement={() => handleIncrement(item)}
                        handleDecrement={() => handleDecrement(item)}
                      />
                    </div>
                    <div className="col-span-2">
                      <div className="flex items-center pt-4">
                        <p className="text-xs font-medium">$</p>
                        <p>
                          {formatNumber(
                            (item.price - item.price * item.discount * 0.01) *
                              itemCounts[item.id]
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div
                        className="flex justify-center w-6 h-6 bg-red-700 hover:cursor-pointer hover:bg-red-600 rounded-md items-center text-md text-white font-medium mt-4"
                        onMouseDown={() => handleDeleteItem(item.id)}
                      >
                        x
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="md:col-span-3 flex flex-col h-full">
            <div className="bg-stone-100 rounded-t-lg rounded-b-2xl">
              <p className="text-md text-indigo-950 font-medium p-4">
                Order Summary
              </p>
              <div className="flex justify-between items-center  border-t px-4 pt-3 pb-1">
                <p className="text-sm text-stone-600 font-medium">Subtotal</p>
                <div className="flex justify-center items-center">
                  <p className="text-xs text-indigo-950">$</p>
                  <p className="text-md text-indigo-950">
                    {formatNumber(
                      cartItems.reduce(
                        (sum, item) =>
                          (sum +=
                            item.price - item.price * item.discount * 0.01),
                        0
                      )
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-stone-100 px-4 py-2 rounded-t-2xl rounded-b-lg">
              <div className="flex gap-2 h-9 mb-2">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="bg-white px-4 text-stone-600 w-full h-full text-sm border rounded-md border-stone-200 focus:outline-none focus:border-indigo-950"
                />
                <button className="text-xs text-white font-medium bg-indigo-950 rounded-lg w-16 h-full">
                  Enter
                </button>
              </div>
              <button className="h-9 w-full bg-indigo-950 text-white font-medium text-xs rounded-lg mb-2">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center gap-3 mt-28">
          <p className="text-sm text-stone-500 font-medium">
            Opps! Your cart is empty.
          </p>
          <img src={emptyCart} alt="sad face icon" />
        </div>
      )}
    </div>
  );
};

export default FullCart;
