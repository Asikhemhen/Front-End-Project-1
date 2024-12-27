import React, { useRef } from "react";
import product_1 from "../icons/hero.svg";
import { NavLink } from "react-router-dom";

const categories = [
  { id: 1, caption: "Category 1", quantity: 3000, image: product_1 },
  { id: 2, caption: "Category 2", quantity: 3000, image: product_1 },
  { id: 3, caption: "Category 3", quantity: 3000, image: product_1 },
  { id: 4, caption: "Category 4", quantity: 3000, image: product_1 },
  { id: 5, caption: "Category 5", quantity: 3000, image: product_1 },
  { id: 6, caption: "Category 6", quantity: 3000, image: product_1 },
  { id: 7, caption: "Category 7", quantity: 3000, image: product_1 },
  { id: 8, caption: "Category 8", quantity: 3000, image: product_1 },
  { id: 9, caption: "Category 9", quantity: 3000, image: product_1 },
  { id: 10, caption: "Category 10", quantity: 3000, image: product_1 },
  { id: 11, caption: "Category 11", quantity: 3000, image: product_1 },
  { id: 12, caption: "Category 12", quantity: 3000, image: product_1 },
];

function Categories() {
  let scrollHorizontalRef = useRef(null);

  const handleWheel = (event) => {
    event.preventDefault();
    scrollHorizontalRef.current.scrollLeft += event.deltaY;
  };

  return (
    <section className="flex flex-col content-center gap-5 mt-20 mb-16">
      <h2 className="text-3xl font-semibold self-center pb-5">
        Shop by category
      </h2>
      <div
        className="overflow-x-auto scrollbar-hide"
        onWheel={handleWheel}
        ref={scrollHorizontalRef}
      >
        <div className="flex justify-between items-center gap-5">
          {categories.map((category) => (
            <NavLink
              to={"/" + category.caption}
              key={category.id}
              className="flex flex-col justify-center items-center hover:opacity-50"
            >
              <div className="flex justify-center items-center w-52 h-52 rounded-full overflow-hidden mb-3">
                <img
                  src={category.image}
                  alt={category.caption}
                  className="w-full"
                />
              </div>
              <p className="text-lg font-medium">{category.caption}</p>
              <p className="text-stone-400 text-md">
                {category.quantity}{" "}
                <span className="pl-1 text-m text-stone-400">Products</span>
              </p>
            </NavLink>
          ))}
        </div>
      </div>
      <button className="self-center max-w-56 h-12 px-4 mt-3 border border-indigo-950 rounded-lg text-sm font-medium">
        View all categories -12
      </button>
    </section>
  );
}

export default Categories;
