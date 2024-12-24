import SearchBoxCategory from "./searchBoxCategory";
import Categories from "./categories";
import arrowDownWhite from "./icons/arrowDownWhite.svg";
import hero from "./icons/hero.svg";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-left">
        <h1>Discover Your Next Favourite Products from africa!</h1>
        <SearchBoxCategory
          inputGroupClass={"hero-input-category"}
          inputBtnClass={"hero-input-btn"}
          inputFieldClass={"hero-input"}
          inputArrowClass={"hero-input-arrow"}
          inputSearchClass={"hero-search"}
          arrow={arrowDownWhite}
        />
        <p>Explore these categories:</p>
        <button className="btn-hero">Fabrics</button>
        <button className="btn-hero">Arts</button>
        <button className="btn-hero">Fashion</button>
        <button className="btn-hero">Clothing</button>
        <button className="btn-hero">Foods</button>
        <button className="btn-hero">Auction</button>
      </div>
      <div className="hero-right">
        <img src={hero} className="hero" />
      </div>
    </div>
  );
};

export default Hero;
