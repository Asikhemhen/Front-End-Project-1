const CartUpdateButtons = (props) => {
  return (
    <div className={`flex items-center gap-1 ${"pt-" + props.pt}`}>
      <button
        style={{
          width: props.width * 4 + "px",
          height: props.height * 4 + "px",
          fontSize: props.btnTextSize + "px",
        }}
        className={`${"h-" + props.height + " w-" + props.width} rounded-md ${
          props.itemCounts === 1
            ? "bg-stone-400"
            : "bg-indigo-950 hover:bg-indigo-900 border active:border-indigo-950"
        } text-white`}
        onClick={props.handleDecrement}
        disabled={props.itemCounts === 1}
      >
        -
      </button>
      <input
        style={{
          width: props.width * 4 + "px",
          height: props.height * 4 + "px",
          fontSize: props.inputTextSize + "px", // Handle text size dynamically
        }}
        type="text"
        className={`rounded-md bg-transparent text-center ${
          "text-" + props.inputTextSize
        } outline-none focus:ring-1 focus:ring-transparent`}
        value={props.itemCounts}
        readOnly
        // onChange={(e) => handleChange(e)}
      />
      <button
        style={{
          width: props.width * 4 + "px",
          height: props.height * 4 + "px",
          fontSize: props.btnTextSize + "px", // Handle text size dynamically
        }}
        className="rounded-md bg-indigo-950 hover:bg-indigo-900 border active:border-indigo-950 text-white"
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
