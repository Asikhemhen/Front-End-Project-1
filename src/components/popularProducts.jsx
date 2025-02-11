import more from "../assets/images/arrow-right.svg";
import data from "../data/data.json";
import Product from "./products";

const PopularProducts = () => {
  return (
    <section className="my-14">
      <div className="flex flex-col gap-8 max-w-7xl mx-auto py-3 px-5">
        <div className="flex justify-between max-md:justify-center items-center">
          <h2 className="text-2xl font-bold md:">Popular products now</h2>
          <p className="max-lg:hidden text-lg font-medium">
            {"Explore popular products"}
            <img src={more} alt="Explore More" className="inline" />
          </p>
        </div>
        <div className="grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-4">
          {data.popularProducts.map((product) => (
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
              product={product}
            />
          ))}
        </div>
        <p className="lg:hidden text-lg font-medium self-center">
          {"Explore popular products"}
          <img src={more} alt="Explore More" className="inline" />
        </p>
      </div>
    </section>
  );
};

export default PopularProducts;
