import more from "../assets/images/arrow-right.svg";
import data from "../data/data.json";
import Shops from "./shops";

const PopularShops = () => {
  return (
    <section className="rounded-lg bg-slate-50 max-lg:bg-white max-w-7xl mx-auto py-12 px-5">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-semibold">Popular Shops</h3>
        <p className="text-md font-medium">
          {"View All"}
          <img src={more} alt="Explore More" className="inline" />
        </p>
      </div>
      <div className="grid place-self-center grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-5">
        {data.shops.map((store) => (
          <Shops
            key={store.id}
            name={store.name}
            image={require(`../assets/images${store.image}`)}
            logo={require(`../assets/images${store.logo}`)}
            caption={store.caption}
            reviews={store.reviews}
            followers={store.followers}
            sales={store.sales}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularShops;
