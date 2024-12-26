import Shops from "../../../common/tailwindcss/shops";
import explore from "../../../common/icons/arrow-right.svg";

function PopularShops() {
  return (
    <section className="rounded-lg bg-slate-50 max-lg:bg-white max-w-7xl mx-auto py-12 px-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Popular Shops</h3>
        <p className="text-md font-medium">
          {"View All"}
          <img src={explore} alt="Explore More" className="inline" />
        </p>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col max-lg:content-center max-lg:gap-8 py-6">
        <Shops />
        <Shops />
        <Shops />
      </div>
    </section>
  );
}

export default PopularShops;
