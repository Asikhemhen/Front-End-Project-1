const ProductDescription = (props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-indigo-950 mt-10">
      <div className="col-span-2  max-w-3xl">
        <h3 className="text-2xl font-semibold">Product description</h3>
        <p className="text-md pt-3">
          This beautiful painting is made by our talented artists in Nairobi.
          It's a beauty to behold and such a masterpiece. This will definitely
          brighten your space. <br />
          <br />
          When you love a piece of art enough to hang it on your wall, it says a
          lot about you. Without needing words, a good art piece can be a
          perfect way to express who you are to both yourself and to others.
          Pick a canvas-printed painting from these and adorn your home with
          artistic expressions, opening dialogue with your guests about these
          conversation-inducing pieces of art.
        </p>
        <ul className="text-md list-disc pl-10">
          <li>100% Cotton fabric</li>
          <li>High image quality and detail</li>
          <li>For indoor use</li>
        </ul>
      </div>
      <div className="col-span-1">
        <h3 className="text-2xl font-semibold">Product specifications</h3>
        <div className="border rounded-xl overflow-hidden max-w-xl mt-3">
          <div className="grid grid-cols-2 h-12 w-full">
            <div className="flex items-center pl-5 border-r border-b bg-stone-100">
              Color
            </div>
            <div className="flex items-center pl-5 border-b">Multicolour</div>
          </div>
          <div className="grid grid-cols-2 h-12 w-full">
            <div className="flex items-center pl-5 border-r border-b bg-stone-100">
              Medium
            </div>
            <div className="flex items-center pl-5 border-b">Acrylic paint</div>
          </div>
          <div className="grid grid-cols-2 h-12 w-full">
            <div className="flex items-center pl-5 border-r border-b bg-stone-100">
              Style
            </div>
            <div className="flex items-center pl-5 border-b">Abstract</div>
          </div>
          <div className="grid grid-cols-2 h-12 w-full">
            <div className="flex items-center pl-5 border-r bg-stone-100">
              Framing
            </div>
            <div className="flex items-center pl-5">Black wooden frame</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
