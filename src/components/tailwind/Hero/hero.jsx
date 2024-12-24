import hero from "../../common/icons/hero.svg";
import search from "../../common/icons/search.svg";
import arrowDownWhite from "../../common/icons/arrowDownWhite.svg";

function Hero() {
  return (
    <section className="bg-indigo-100 flex">
      <div className="flex basis-full max-w-2xl mx-auto py-3 px-5 hero-container">
        <div className="bg-indigo-100 flex flex-col justify-center basis-full space-y-5">
          <div>
            <img src={search} className="h-6 self-center absolute left-48" />
            <img src={search} className="h-6 self-center absolute left-48" />
            <img src={search} className="h-6 self-center absolute left-48" />
            <h6>Trusted by over 2M+ buyers!</h6>
          </div>
          <h1 className="hero-text text-indigo-950 text-4xl font-extrabold">
            Discover Your Next Favourite Product From Africa!
          </h1>
          <div className="flex border rounded-xl bg-white h-16 border-white relative">
            <button className="min-w-40 border rounded-l-xl text-white text-sm font-medium m-1 mr-0 btn-search-hero">
              All Categories{" "}
              <img src={arrowDownWhite} className="inline" alt="arrow-down" />
            </button>
            <input
              className="w-full rounded-r-xl bg-stone-50 text-sm text-stone-900 m-1 ml-0 pl-16 pr-8"
              type="text"
              placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
            />
            <img src={search} className="h-6 self-center absolute left-48" />
          </div>
          <div className="space-y-2">
            <h6>Explore these categories:</h6>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
              Fabrics
            </button>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
              Arts
            </button>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
              Fashion
            </button>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
              Clothing
            </button>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9 mr-3">
              Foods
            </button>
            <button className="border border-indigo-950 bg-transparent rounded-md px-4 h-9">
              Auction
            </button>
          </div>
        </div>
      </div>
      <img className="hero-image" src={hero} alt="hero image" />
    </section>
  );
}

export default Hero;
