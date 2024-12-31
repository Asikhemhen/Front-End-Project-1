import data from "../data/data.json";

const CategoriesDropDown = (props) => {
  const allCat = { id: data.categories.length + 1, name: "All Categories" };
  const categories = [allCat, ...data.categories];

  return (
    <div
      ref={props.dropDownRef}
      className={`${props.display} text-indigo-950 bg-white border rounded-sm flex flex-col gap-2 absolute ${props.top} z-10 -left-0`}
    >
      {categories.map((category) => (
        <div
          key={category.id}
          className="text-md hover:cursor-pointer hover:bg-indigo-50 pl-6 pr-10 py-1"
          // data-name={}
          onClick={() => props.handleClickCategoryItem(category.name)}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default CategoriesDropDown;
