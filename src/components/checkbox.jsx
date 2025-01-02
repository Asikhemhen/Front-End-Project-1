const CheckboxGroup = (props) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={props.id}
        id={props.id}
        checked={props.checkedItems}
        onChange={props.handleChange}
        className="h-3 w-3 accent-indigo-950"
      />
      <label htmlFor={props.id} className="ml-2">
        {props.label}
      </label>
    </div>
  );
};

export default CheckboxGroup;
