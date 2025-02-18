import done from "../assets/images/done.svg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { setSelectedProduct } from "../state/productSlice";
import lock from "../assets/images/lock.svg";
import {
  faCreditCard as solidCreditCard,
  faCcDiscover as solidDiscover,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCreditCard as regularCreditCard,
  faCcDiscover as regularDiscover,
} from "@fortawesome/free-regular-svg-icons";

const PaymentPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.cartItems.items);
  const cartItemsCount = useSelector((state) => state.cartItems.count);
  const itemIdSet = new Set(); // To track displayed product IDs

  //Count occurrences of each product in the cart
  const itemCounts = cartItems.reduce((allItems, eachItems) => {
    allItems[eachItems.id] = (allItems[eachItems.id] || 0) + 1;
    return allItems;
  }, {});

  const subtotal = cartItems.reduce(
    (sum, item) => (sum += item.price - item.price * item.discount * 0.01),
    0
  );
  const shippingFee = 10;
  const totalPrice = subtotal + shippingFee;

  function formatNumber(num) {
    return num.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const handleProductClick = (product) => {
    dispatch(setSelectedProduct(product));
    navigate(`/product-details`);
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto px-5 max-h-full mt-5  mb-10">
      <p className="text-xl text-indigo-950 font-semibold pb-4">Checkout</p>
      <div className="flex flex-col w-80 sm:w-96 relative">
        <div className="flex items-center justify-center px-6">
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-yellow-500 rounded-full min-w-6 min-h-6">
            <img src={done} alt="done" className="w-2.5" />
          </div>
          <div className="w-full h-1 bg-yellow-500"></div>
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-yellow-500 rounded-full min-w-6 min-h-6">
            2
          </div>
          <div className="w-full h-1 bg-yellow-500"></div>
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-stone-200 rounded-full min-w-6 min-h-6">
            3
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-indigo-950 font-medium pl-1 absolute  left-1 top-6">
            Shipping
          </p>
          <p className="text-sm text-indigo-950 font-medium pl-6 absolute right-32 sm:right-40 top-6">
            Payment
          </p>
          <p className="text-sm text-stone-500 font-medium absolute -right-3 top-6">
            Confirmation
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center w-full pt-10">
        <hr className="w-full" />
        <div className="flex justify-center items-center gap-1 min-w-[200px] max-w-[400px">
          <img src={lock} alt="lock icon" />
          <p className="text-xs text-indigo-950">Payment is 100% secured</p>
        </div>
        <hr className="w-full" />
      </div>
      <div className="flex flex-col gap-2 bg-stone-100 w-full rounded-md mt-10 p-4">
        <p className="text-lg text-indigo-950 font-semibold">Make payment</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-6">
          <div className="sm:col-span-1 flex flex-col gap-3 max-sm:border-b sm:border-r max-sm:pb-10 sm:pr-4">
            <p className="text-md text-indigo-950 font-medium">Fees summary</p>
            <div className="border bg-white flex flex-col rounded-md">
              <div className="flex justify-between items-center border-b">
                <div className="text-sm pl-3 py-2 h-full border-r text-indigo-950 w-full">
                  Subtotal
                </div>
                <div className="w-full pl-3 text-sm py-2">
                  <div className="flex items-center">
                    <p className="text-indigo-950 text-xs">$</p>
                    <p className="text-indigo-950 text-sm">
                      {formatNumber(subtotal)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center  border-b">
                <div className="text-sm pl-3 py-2 h-full border-r text-indigo-950 w-full">
                  Shipping fees
                </div>
                <div className="w-full pl-3 text-sm py-2">
                  <div className="flex items-center">
                    <p className="text-indigo-950 text-xs">$</p>
                    <p className="text-indigo-950 text-sm">
                      {formatNumber(shippingFee)}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-sm pl-3 py-2 h-full border-r text-indigo-950 font-semibold w-full">
                  Total
                </div>
                <div className="w-full pl-3 text-sm py-2 font-semibold">
                  <div className="flex items-center">
                    <p className="text-indigo-950 text-xs">$</p>
                    <p className="text-indigo-950 text-sm">
                      {formatNumber(totalPrice)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-md text-indigo-950 font-medium">Shipping to</p>
              <Link
                to="/dashboard-address-book"
                className="text-xs font-medium text-indigo-900 hover:text-indigo-600"
              >
                Edit details
              </Link>
            </div>
            <div className="flex flex-col bg-white rounded-md border p-4">
              <p className="text-indigo-950 text-sm font-semibold">
                John Smith
              </p>
              <p className="text-indigo-950 text-xs">
                Law Sch Rd, Connecticut, USA
              </p>
              <p className="text-indigo-950 text-xs">900001, US</p>
              <p className="text-indigo-950 text-xs">United state of America</p>
              <p className="text-indigo-950 text-xs">+12071234567</p>
            </div>
          </div>
          <div className="sm:col-span-1 flex flex-col gap-3 sm:pl-4 w-full">
            <p className="text-md text-indigo-950 font-medium">
              Payment method
            </p>
            <div className="flex justify-between items-center gap-1">
              <div className="flex flex-col items-center justify-center border rounded-md bg-white w-full px-1 h-16">
                <FontAwesomeIcon
                  icon={regularCreditCard}
                  className="text-indigo-950"
                />
                <p className="text-[10px] font-medium text-indigo-950">Card</p>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-md bg-white w-full px-1 h-16">
                <FontAwesomeIcon
                  icon={regularCreditCard}
                  className="text-indigo-950"
                />
                <p className="text-[9px] font-medium text-indigo-950">
                  CashApp
                </p>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-md bg-white w-full  px-1 h-16">
                <FontAwesomeIcon
                  icon={regularCreditCard}
                  className="text-indigo-950"
                />
                <p className="text-[9px] font-medium text-indigo-950">
                  Discover it
                </p>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-md bg-white w-full px-1 h-16">
                <FontAwesomeIcon
                  icon={regularCreditCard}
                  className="text-indigo-950"
                />
                <p className="text-[10px] font-medium text-indigo-950">
                  Revolut
                </p>
              </div>
              <div className="flex flex-col items-center justify-center border rounded-md bg-white w-full px-1 h-16">
                <FontAwesomeIcon
                  icon={regularCreditCard}
                  className="text-indigo-950"
                />
                <p className="text-[10px] font-medium text-indigo-950">AMEX</p>
              </div>
            </div>
            <div>
              <label
                htmlFor="card-name"
                className="block text-sm font-medium text-blue-950"
              >
                Card name
              </label>
              <input
                type="text"
                id="card-name"
                placeholder="Enter details here"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
              />
            </div>
            <div>
              <label
                htmlFor="card-number"
                className="block text-sm font-medium text-blue-950"
              >
                Card number
              </label>
              <input
                type="text"
                id="card-number"
                placeholder="Enter details here"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
              />
            </div>
            <div className="flex justify-between items-center gap-2">
              <div>
                <label
                  htmlFor="expiration-date"
                  className="block text-sm font-medium text-blue-950"
                >
                  Expiration date
                </label>
                <input
                  type="text"
                  id="expiration-date"
                  placeholder="MM/YY"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-blue-950"
                >
                  CVV
                </label>
                <input
                  type="password"
                  id="cvv"
                  placeholder="***"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name={"terms&conditions"}
                id={"terms&conditions"}
                // checked={checkedItems}
                // onChange={handleChange}
                className="h-3 w-3 accent-indigo-950"
              />
              <label
                htmlFor={"terms&conditions"}
                className="ml-2 text-sm text-indigo-950"
              >
                I accept the{" "}
                <Link
                  to={"/terms-of-service"}
                  className="font-medium text-indigo-900 hover:text-indigo-600"
                >
                  terms of service
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="w-full self-center h-12 px-4 text-white bg-indigo-950 rounded-lg hover:bg-indigo-900"
            >
              Proceed to payment
            </button>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-col w-full bg-stone-100 rounded-lg mt-10 p-4"> */}
      <div className="grid grid-cols-1 h-auto sm:grid-cols-10 pt-10 pb-10 w-full">
        <div className="sm:col-span-10 flex flex-col gap-2 bg-stone-100 p-4 rounded-md">
          <p className="text-md text-indigo-950 font-medium">
            Product information
          </p>
          <div className="max-sm:hidden grid grid-cols-10 border-b pb-1">
            <div className="col-span-5">
              <p className="text-stone-600 font-medium text-sm">Product</p>
            </div>
            <div className="col-span-5 flex items-center sm:grid sm:grid-cols-8 gap-4 justify-self-auto">
              <div className="col-span-3">
                <p className="text-stone-600 font-medium text-sm ">
                  Store name
                </p>
              </div>
              <div className="col-span-3 justify-self-start">
                <p className="text-stone-600 font-medium text-sm">Quantity</p>
              </div>
              <div className="col-span-2">
                <p className="text-stone-600 font-medium text-sm">Shipping</p>
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
                className={`flex flex-col sm:grid sm:grid-cols-10 pb-2 border-b`}
              >
                <div className="col-span-5">
                  <div className="flex gap-2 w-full">
                    <img
                      src={require(`../assets/images${item.image}`)}
                      alt={item.name}
                      className="w-14 h-14 rounded-lg hover:cursor-pointer"
                      onClick={() => handleProductClick(item)}
                    />
                    <p
                      className="mt-1 hover:cursor-pointer hover:text-indigo-800 text-sm text-indigo-950"
                      onClick={() => handleProductClick(item)}
                    >
                      {item.name}
                    </p>
                  </div>
                </div>
                <div className="col-span-5 flex flex-col sm:grid sm:grid-cols-8 sm:gap-4 justify-self-auto">
                  <div className="col-span-3 max-sm:pt-1">
                    <div className="flex sm:pt-2">
                      <p className="sm:hidden text-stone-600 text-xs font-medium pr-2">
                        Store name:{" "}
                      </p>{" "}
                      <p className="text-sm max-sm:text-xs text-indigo-950">
                        {item.shop}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-3 max-sm:pt-1">
                    <div className="flex items-center sm:pt-2">
                      <p className="sm:hidden text-stone-600 text-xs font-medium pr-2">
                        Guantity:{" "}
                      </p>{" "}
                      <p className="text-sm max-sm:text-xs text-indigo-950">
                        {itemCounts[item.id]}x
                      </p>
                    </div>
                  </div>
                  <div className="col-span-2 max-sm:pt-1">
                    <div className="flex items-center sm:pt-2">
                      <p className="sm:hidden text-stone-600 text-xs font-medium pr-2">
                        Shipping:{" "}
                      </p>{" "}
                      <p className="text-sm max-sm:text-xs text-indigo-950">
                        {item.delivery} days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default PaymentPage;
