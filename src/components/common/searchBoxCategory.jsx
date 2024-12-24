import search from "./icons/search.svg";
import Categories from "./categories";
const SearchBoxCategory = ({
  inputGroupClass,
  inputBtnClass,
  inputFieldClass,
  inputArrowClass,
  inputSearchClass,
  arrow,
}) => {
  return (
    <div className={inputGroupClass}>
      <button className={inputBtnClass}>
        All Categories
        <img src={arrow} className={inputArrowClass} />
      </button>
      <img src={search} className={inputSearchClass} />
      <input
        type="text"
        className={inputFieldClass}
        placeholder="Search choice of Fabrics, Art and Fashion, Jewelleries and more..."
      />
    </div>
  );
};

export default SearchBoxCategory;
