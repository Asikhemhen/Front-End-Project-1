import CheckboxGroup from "../components/checkbox";
import { useNavigate } from "react-router-dom";

const CheckOutShipping = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/checkout-payment`);
  };
  return (
    <div className="flex flex-col items-center max-w-5xl mx-auto px-5 max-h-full mt-5  mb-10">
      <p className="text-xl text-indigo-950 font-semibold pb-4">Checkout</p>
      <div className="flex flex-col w-80 sm:w-96 relative">
        <div className="flex items-center justify-center px-6">
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-yellow-500 rounded-full min-w-6 min-h-6">
            1
          </div>
          <div className="w-full h-1 bg-yellow-500"></div>
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-stone-200 rounded-full min-w-6 min-h-6">
            2
          </div>
          <div className="w-full h-1 bg-stone-200"></div>
          <div className="flex justify-center items-center text-xs text-indigo-950 bg-stone-200 rounded-full min-w-6 min-h-6">
            3
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-sm text-indigo-950 font-medium pl-1 absolute  left-1 top-6">
            Shipping
          </p>
          <p className="text-sm text-stone-500 font-medium pl-6 absolute right-32 sm:right-40 top-6">
            Payment
          </p>
          <p className="text-sm text-stone-500 font-medium absolute -right-3 top-6">
            Confirmation
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col gap-2 bg-stone-100 rounded-md mt-10 p-4">
          <p className="text-lg text-indigo-950 font-semibold">
            Shipping information
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 max-sm:gap-6">
            <div className="sm:col-span-1 flex flex-col gap-3 max-sm:border-b sm:border-r max-sm:pb-10 sm:pr-4">
              <p className="text-md text-indigo-950 font-medium">
                Contact info
              </p>
              <div className="flex justify-between items-center gap-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-blue-950"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    placeholder="Enter first name"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-blue-950"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    placeholder="Enter last name"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone-number"
                  className="block text-sm font-medium text-blue-950"
                >
                  Phone number
                </label>
                <input
                  type="text"
                  id="phone-number"
                  placeholder="Enter first name"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-blue-950"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter email address"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
              <div>
                <label
                  htmlFor="notes"
                  className="block text-sm font-medium text-blue-950"
                >
                  Notes (Optional)
                </label>
                <input
                  type="text"
                  id="notes"
                  placeholder="Enter details here"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  //   required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
            </div>
            <div className="sm:col-span-1 flex flex-col gap-3 sm:pl-4">
              <p className="text-md text-indigo-950 font-medium">
                Address info
              </p>
              <div className="flex justify-between items-center gap-2">
                <div>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium text-blue-950"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    placeholder="Select country"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-blue-950"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    placeholder="Select state"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
              </div>
              <div className="flex justify-between items-center gap-2">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-blue-950"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    placeholder="Select city"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
                <div>
                  <label
                    htmlFor="postal-code"
                    className="block text-sm font-medium text-blue-950"
                  >
                    Postal code
                  </label>
                  <input
                    type="text"
                    id="postal-code"
                    placeholder="Select State"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="address-1"
                  className="block text-sm font-medium text-blue-950"
                >
                  Address line 1
                </label>
                <input
                  type="text"
                  id="address-1"
                  placeholder="Enter details here"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
              <div>
                <label
                  htmlFor="address-2"
                  className="block text-sm font-medium text-blue-950"
                >
                  Address line 2 (Optional)
                </label>
                <input
                  type="text"
                  id="address-2"
                  placeholder="Enter details here"
                  // value={email}
                  // onChange={(e) => setEmail(e.target.value)}
                  //   required
                  className="w-full px-4 h-11 text-sm mt-1 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-950"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full bg-stone-100 rounded-lg mt-10 p-4">
          <p className="text-md text-indigo-950 font-semibold pb-2">
            Send as a gift? (gift wrapping)
          </p>
          <div className="flex items-center">
            <input
              type="checkbox"
              name={"send-as-gift"}
              id={"send-as-gift"}
              // checked={checkedItems}
              // onChange={handleChange}
              className="h-3 w-3 accent-indigo-950"
            />
            <label htmlFor={"send-as-gift"} className="ml-2 text-sm">
              Use same information as shipping information
            </label>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-full bg-stone-100 rounded-lg mt-10 p-4">
            <p className="text-md text-indigo-950 font-semibold pb-2">
              Billing information
            </p>
            <div className="flex items-center">
              <input
                type="checkbox"
                name={"billing"}
                id={"billing"}
                // checked={checkedItems}
                // onChange={handleChange}
                className="h-3 w-3 accent-indigo-950"
              />
              <label htmlFor={"billing"} className="ml-2 text-sm">
                Use same information as shipping information
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full sm:w-96 self-center h-12 px-4 mt-10 text-white bg-indigo-950 rounded-lg hover:bg-indigo-900"
          >
            Proceed to payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckOutShipping;
