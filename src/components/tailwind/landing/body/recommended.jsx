import Product from "../../../common/tailwindcss/products";
import explore from "../../../common/icons/arrow-right.svg";

function Recommended() {
  return (
    <section className="bg-stone-100 py-16">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto py-3 px-5">
        <div className="flex justify-between max-md:justify-center items-center">
          <h2 className="text-2xl font-bold md:">Recommended Products</h2>
          <p className="max-lg:hidden text-lg font-medium">
            {"Explore recommended products"}
            <img src={explore} alt="Explore More" className="inline" />
          </p>
        </div>
        {/* <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10"> */}
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
          <Product />
          <Product />
          <Product />
          <div className="lg:flex md:hidden">
            <Product />
          </div>
        </div>
        <p className="lg:hidden text-lg font-medium self-center">
          {"Explore recommended products"}
          <img src={explore} alt="Explore More" className="inline" />
        </p>
      </div>
    </section>
  );
}

export default Recommended;
