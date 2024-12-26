import Product from "../../../common/tailwindcss/products";
import explore from "../../../common/icons/arrow-right.svg";

function Popular() {
  return (
    <section className="my-14">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto py-3 px-5">
        <div className="flex justify-between max-md:justify-center items-center">
          <h2 className="text-2xl font-bold md:">Popular products now</h2>
          <p className="max-lg:hidden text-lg font-medium">
            {"Explore popular products"}
            <img src={explore} alt="Explore More" className="inline" />
          </p>
        </div>
        {/* <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-10"> */}
        <div className="flex justify-between gap-4 flex-wrap max-md:justify-center">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <p className="lg:hidden text-lg font-medium self-center">
          {"Explore popular products"}
          <img src={explore} alt="Explore More" className="inline" />
        </p>
      </div>
    </section>
  );
}

export default Popular;
