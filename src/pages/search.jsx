import { NavLink, useLocation } from "react-router-dom";
import reset from "../assets/images/closeMenu.svg";
import arrowDown from "../assets/images/arrowDown.svg";
import data from "../data/data.json";
import Product from "../components/products";
import CheckboxGroup from "../components/checkbox";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Pagination from "../components/pagination";

//Check Box State
const Search = (props) => {
  const [checkedItems, setCheckedItems] = useState({
    anywhere: false,
    nigeria: false,
    customLocation: false,
    allPrices: false,
    under25: false,
    usd50to100: false,
    over100: false,
    customPrice: false,
    allItems: false,
    handmade: false,
    vintage: false,
    onSale: false,
    freeShipping: false,
    day1: false,
    day3: false,
  });

  //Filtered Products
  const [customFiltered, setCustomFiltered] = useState(data.products);

  //Custom Checkbox states
  const [location, setLocation] = useState("");
  const [lowPrice, setLowPrice] = useState("");
  const [highPrice, setHighPrice] = useState("");

  //Update the state of the checkboxes
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckedItems((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Filter products based on search term
  let filteredProducts = data.products.filter((product) =>
    product.name.toLowerCase().includes(props.searchItem.toLowerCase())
  );

  // Add Filter Based On Category
  if (props.category.toLowerCase() !== "all categories") {
    filteredProducts = filteredProducts.filter((product) =>
      product.categories.toLowerCase().includes(props.category.toLowerCase())
    );
  }

  //Filter based on Location
  if (!checkedItems.anywhere) {
    if (checkedItems.nigeria) {
      filteredProducts = filteredProducts.filter((product) =>
        product.location.toLowerCase().includes("nigeria")
      );
    } else if (checkedItems.customLocation) {
      filteredProducts = filteredProducts.filter((product) =>
        product.location.toLowerCase().includes(location.toLocaleLowerCase())
      );
    }
  }

  //Filter based on Prices
  if (!checkedItems.allPrices) {
    if (checkedItems.under25) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price < 25
      );
    } else if (checkedItems.usd50to100) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= 50 && product.price <= 100
      );
    } else if (checkedItems.over100) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price > 100
      );
    }
  }

  //Filter based on custom price
  const handleClickCustonPriceOk = () => {
    if (checkedItems.customPrice) {
      console.log(lowPrice, highPrice);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= lowPrice && product.price <= highPrice
      );
    }
    setCustomFiltered(filteredProducts);
  };

  filteredProducts =
    checkedItems.customPrice && filteredProducts !== customFiltered
      ? customFiltered
      : filteredProducts;

  //Filter based on Item Types
  if (!checkedItems.allItems) {
    if (checkedItems.handmade) {
      filteredProducts = filteredProducts.filter((product) =>
        product.itemType.toLowerCase().includes("handmade")
      );
    } else if (checkedItems.vintage) {
      filteredProducts = filteredProducts.filter((product) =>
        product.itemType.toLowerCase().includes("vintage")
      );
    }
  }

  //Filter based on special offers
  if (checkedItems.onSale) {
    filteredProducts = filteredProducts.filter((product) =>
      product.specialOffer.toLowerCase().includes("onsale")
    );
  } else if (checkedItems.freeShipping) {
    filteredProducts = filteredProducts.filter((product) =>
      product.specialOffer.toLowerCase().includes("freeshipping")
    );
  }

  //Filter based on Delivery Type
  if (checkedItems.day1) {
    filteredProducts = filteredProducts.filter(
      (product) => product.delivery === 1
    );
  } else if (checkedItems.day3) {
    filteredProducts = filteredProducts.filter(
      (product) => product.delivery > 1
    );
  }

  console.log(filteredProducts[0].delivery * 2);

  const handleChangeLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleChangeLowPrice = (event) => {
    setLowPrice(event.target.value);
  };

  const handleChangeHighPrice = (event) => {
    setHighPrice(event.target.value);
  };

  //Adjust "result" from singular to plural
  const results = () => {
    if (Object.keys(filteredProducts).length === 0) {
      return "No result";
    } else if (Object.keys(filteredProducts).length === 1) {
      return "result";
    } else {
      return "results";
    }
  };

  //pagination
  const [currentPage, setCurrentPage] = useState(1);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const itemsPerPage = isLargeScreen ? 15 : 14;

  const totalPage = Math.ceil(
    Object.keys(filteredProducts).length / itemsPerPage
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOFFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOFFirstItem,
    indexOfLastItem
  );

  return (
    <div className="mb-14">
      <section className="bg-indigo-50">
        <div className="max-w-7xl p-4 mx-auto">
          <div className="flex flex-col justify-center items  min-h-20 gap-2">
            <div className="flex justify-between items-center gap-10">
              <div>
                <NavLink to="/#">Home</NavLink>
                <span>{`   /   Search Results   /   ${
                  Object.keys(filteredProducts).length > 0
                    ? Object.keys(filteredProducts).length
                    : ""
                } ${results()} found for "${props.searchItem}"`}</span>
              </div>
              <div>
                <span>{`${
                  Object.keys(filteredProducts).length
                } Prducts - page ${currentPage} of ${totalPage}`}</span>
              </div>
            </div>
            <h1 className="text-2xl font-bold">{props.searchItem}</h1>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-2 max-w-7xl px-4 pt-12 pb-5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold">Filters</span>
            <div className="flex justify-center items-center rounded-full bg-yellow-500 h-5 w-5 text-xs font-medium">
              3
            </div>
            <span className="hover:cursor-pointer text-sm">
              <img
                src={reset}
                alt="reset"
                className="inline h-4 w-4 mb-1 ml-2 mr-1"
              />
              Reset
            </span>
          </div>
          <div>
            <div className="flex relative h-10 basis-full">
              <button className="w-full h-full bg-white border pl-3 pr-8 border-stone-300 rounded-md text-stone-500 text-sm font-medium">
                <span className="text-stone-500 text-sm font-bold pr-1">
                  Sort by:
                </span>
                {`${"Most Relevant"}`}{" "}
                <img
                  src={arrowDown}
                  className="absolute top-2.5 right-2 opacity-60"
                  alt="arrow-down"
                />
              </button>

              {/* <Categories
                  display={largeScreenDropdown ? "flex" : "hidden"}
                  handleClickCategoryItem={handleLargeScreenItemClick}
                  top="top-12"
                /> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <div className="hidden  sm:flex sm:flex-col min-w-40 gap-5">
            <div className="flex flex-col max-w-44">
              <div>
                <p className="text-md font-semibold pb-1">Shop location</p>
              </div>
              <CheckboxGroup
                label={"Anywhere"}
                id={"anywhere"}
                name={"anywhere"}
                handleChange={handleChange}
                checkedItems={checkedItems.anywhere}
              />
              <CheckboxGroup
                label={"Nigeria"}
                id={"nigeria"}
                name={"nigeria"}
                handleChange={handleChange}
                checkedItems={checkedItems.nigeria}
              />
              <CheckboxGroup
                label={"Custom"}
                id={"customLocation"}
                name={"customLocation"}
                handleChange={handleChange}
                checkedItems={checkedItems.customLocation}
              />
              <input
                type="text"
                name="custom-location"
                onChange={handleChangeLocation}
                value={location}
                placeholder="Enter specific location here"
                className="h-8 w-full text-xs text-center px-2 mt-1 bg-stone-100 border-stone-400 rounded-md accent-indigo-950"
              />
            </div>
            <div className="flex flex-col max-w-44">
              <div>
                <p className="text-md font-semibold pb-1">Price ($)</p>
              </div>
              <CheckboxGroup
                label={"All Prices"}
                id={"allPrices"}
                name={"allPrices"}
                handleChange={handleChange}
                checkedItems={checkedItems.allPrices}
              />
              <CheckboxGroup
                label={"Under USD 25"}
                id={"under25"}
                name={"under25"}
                handleChange={handleChange}
                checkedItems={checkedItems.under25}
              />
              <CheckboxGroup
                label={"USD 50 to USD 100"}
                id={"usd50to100"}
                name={"usd50to100"}
                handleChange={handleChange}
                checkedItems={checkedItems.usd50to100}
              />
              <CheckboxGroup
                label={"Over USD 100"}
                id={"over100"}
                name={"over100"}
                handleChange={handleChange}
                checkedItems={checkedItems.over100}
              />
              <CheckboxGroup
                label={"Custom"}
                id={"customPrice"}
                name={"customPrice"}
                handleChange={handleChange}
                checkedItems={checkedItems.customPrice}
              />
              <div className="flex jestify-between items-center gap-2">
                <input
                  type="text"
                  name="priceLow"
                  value={lowPrice}
                  onChange={handleChangeLowPrice}
                  placeholder="Low"
                  className="h-8 w-full text-xs text-center px-2 mt-1 bg-stone-100 border-stone-400 rounded-md accent-indigo-950"
                />
                <span>to</span>
                <input
                  type="text"
                  name="priceHigh"
                  value={highPrice}
                  onChange={handleChangeHighPrice}
                  placeholder="High"
                  className="h-8 w-full text-center text-xs px-2 mt-1 bg-stone-100 border-stone-400 rounded-md accent-indigo-950"
                />
                <button
                  className="h-8 w-full bg-indigo-900 text-white text-xs rounded-md"
                  onClick={handleClickCustonPriceOk}
                >
                  OK
                </button>
              </div>
            </div>
            <div className="flex flex-col max-w-44">
              <div>
                <p className="text-md font-semibold pb-1">Item Type</p>
              </div>
              <CheckboxGroup
                label={"All Items"}
                id={"allItems"}
                name={"allItems"}
                handleChange={handleChange}
                checkedItems={checkedItems.allItems}
              />
              <CheckboxGroup
                label={"Handmade"}
                id={"handmade"}
                name={"handmade"}
                handleChange={handleChange}
                checkedItems={checkedItems.handmade}
              />
              <CheckboxGroup
                label={"Vintage"}
                id={"vintage"}
                name={"vintage"}
                handleChange={handleChange}
                checkedItems={checkedItems.vintage}
              />
            </div>
            <div className="flex flex-col max-w-44">
              <div>
                <p className="text-md font-semibold pb-1">Special Offers</p>
              </div>
              <CheckboxGroup
                label={"On sale"}
                id={"onSale"}
                name={"onSale"}
                handleChange={handleChange}
                checkedItems={checkedItems.onSale}
              />
              <CheckboxGroup
                label={"Free Shipping"}
                id={"freeShipping"}
                name={"freeShipping"}
                handleChange={handleChange}
                checkedItems={checkedItems.freeShipping}
              />
            </div>
            <div className="flex flex-col max-w-44">
              <div>
                <p className="text-md font-semibold pb-1">Delivery Type</p>
              </div>
              <CheckboxGroup
                label={"1 business day"}
                id={"day1"}
                name={"day1"}
                handleChange={handleChange}
                checkedItems={checkedItems.day1}
              />
              <CheckboxGroup
                label={"1-3 business day"}
                id={"day3"}
                name={"day3"}
                handleChange={handleChange}
                checkedItems={checkedItems.day3}
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="min-h-screen grid  grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 pt-3">
              {currentItems.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  image={require(`../assets/images${product.image}`)}
                  rating={product.rating}
                  reviews={product.reviews}
                  price={product.price}
                  sales={product.sales}
                  shop={product.shop}
                  discount={product.discount}
                />
              ))}
            </div>
            <Pagination
              totalItems={Object.keys(filteredProducts).length}
              itemsPerPage={itemsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              isLargeScreen={isLargeScreen}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
