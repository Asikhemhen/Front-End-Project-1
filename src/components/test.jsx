const ResponsiveDropdown = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={toggleDropdown}
      >
        Toggle Dropdown
      </button>

      {isDropdownOpen && (
        <div
          className={`absolute mt-2 bg-white border rounded shadow-lg ${
            isLargeScreen ? "flex" : "hidden"
          }`}
        >
          <ul>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 1
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 2
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Option 3
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResponsiveDropdown;
