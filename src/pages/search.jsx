import { NavLink } from "react-router-dom";

const Search = (props) => {
  return (
    <section className="bg-indigo-200">
      <div className="flex flex-col justify-center items  min-h-20 max-w-7xl p-4 mx-auto gap-2">
        <div className="flex justify-between items-center">
          <div>
            <NavLink to="/#">Home</NavLink>
            <span>{`   /   Search Results   /   ${props.results} results found for ${props.Search}`}</span>
          </div>
          <div>
            <span>{`${props.results} Prducts - page ${props.pageCurrent} of ${props.pageTotal}`}</span>
          </div>
        </div>
        <h1 className="text-2xl font-bold">{props.search} Artworks</h1>
      </div>
    </section>
  );
};

export default Search;
