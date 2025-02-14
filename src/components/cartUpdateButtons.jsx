const CartUpdateButtons = (props) => {
  return (
    <div className={`flex items-center gap-1 ${"pt-" + props.pt}`}>
      <button
        className={`${"h-" + props.height + " w-" + props.width} rounded-md ${
          props.itemCounts === 1
            ? "bg-stone-400"
            : "bg-indigo-950 hover:bg-indigo-900 border active:border-indigo-950"
        } text-white ${"text-" + props.btnTextSize}`}
        onClick={props.handleDecrement}
        disabled={props.itemCounts === 1}
      >
        -
      </button>
      <input
        type="text"
        className={`${
          "h-" + props.height + " w-" + props.width
        } rounded-md bg-transparent text-center ${
          "text-" + props.inputTextSize
        } outline-none focus:ring-1 focus:ring-transparent`}
        value={props.itemCounts}
        readOnly
        // onChange={(e) => handleChange(e)}
      />
      <button
        className={`${
          "h-" + props.height + " w-" + props.width
        } rounded-md bg-indigo-950 hover:bg-indigo-900 border active:border-indigo-950 text-white ${
          "text-" + props.btnTextSize
        }`}
        onClick={props.handleIncrement}
      >
        +
      </button>
      {props.text && (
        <p className="text-sm text-indigo-950 pl-3">
          {props.itemCounts}{" "}
          {`${props.itemCounts > 1 ? "items" : "item"} added to cart.`}
        </p>
      )}
    </div>
  );
};

export default CartUpdateButtons;
