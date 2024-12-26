import Shops from "../../../common/tailwindcss/shops";
import explore from "../../../common/icons/whygiri.svg";

function WhyGiri() {
  return (
    <section className="bg-indigo-50 flex flex-col justify-center mt-20">
      <div className="max-w-7xl mx-auto px-5 mt-16 pb-10">
        <div className="max-w-xl">
          <h3 className="text-3xl font-bold text-center">Why GiriToday?</h3>
          <p className="text-md text-center">
            Uncover the GiriToday difference and experience the essence of
            Africa through out curated selection, authentic products, and
            seamless shopping experience.
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center max-lg:flex-col max-lg:content-center gap-5 pb-20  max-w-7xl mx-auto px-5">
        <div className="max-w-96 min-h-64 rounded-xl bg-white">
          <div className="p-6">
            <img src={explore} alt="giriToday" />
            <p className="text-lg font-semibold py-1">
              Authenticity Guaranteed
            </p>
            <p className="text-sm text-stone-500">
              At GiriToday, authenticity is our top priority. We meticulously
              verify each product and trader to ensure that you receive only
              genuine African treasures. Shop with confidence, knowing that
              every purchase supports local artisans and communities.
            </p>
          </div>
        </div>
        <div className="max-w-96 min-h-64 rounded-xl bg-white">
          <div className="p-6">
            <img src={explore} alt="giriToday" />
            <p className="text-lg font-semibold py-1">Diverse Selection</p>
            <p className="text-sm text-stone-500">
              Discover a world of diversity at GiriToday. Our platform offers a
              vast selection of handpicked goods, ranging from traditional
              crafts to contemporary creations. With over 300 qualitv
              traders/stores, you'll find something unique to suit every taste
              and stvle.
            </p>
          </div>
        </div>
        <div className="max-w-96 min-h-64 rounded-xl bg-white">
          <div className="p-6">
            <img src={explore} alt="giriToday" />
            <p className="text-lg font-semibold py-1">
              Seamless Shopping Experience
            </p>
            <p className="text-sm text-stone-500">
              Experience convenience like never before with GiriToday. Our
              user-friendly interface, secure payment options, and worldwide
              shipping make shopping a breeze. Whether you're browsing from your
              desktop or mobile device. GiriTodav ensures a seamless shopping
              experience from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyGiri;
