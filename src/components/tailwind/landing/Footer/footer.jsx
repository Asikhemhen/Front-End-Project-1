import { NavLink } from "react-router-dom";
import facebook from "../../../common/icons/facebook.svg";
import instagram from "../../../common/icons/instagram.svg";
import line from "../../../common/icons/hl.svg";
import ellipse from "../../../common/icons/ellipse.svg";
import message from "../../../common/icons/message.svg";

function Footer() {
  return (
    <footer className="">
      <section className="bg-amber-400">
        <div className="flex flex-col justify-center items-center basis-full gap-6 sm:flex-row sm:gap-10 max-w-7xl mx-auto px-5 py-20">
          <div className="">
            <h1 className="text-3xl font-bold">Join Our Newsletter</h1>
            <p>Receive pricing updates, shopping tips & more!</p>
          </div>
          <div className="w-full max-w-xl flex border rounded-lg bg-white h-16 border-white relative">
            <img src={message} className="h-6 self-center absolute left-5" />
            <input
              className="w-full rounded-l-lg bg-white text-md text-stone-900 m-1 mr-0 pl-14 pr-8"
              type="text"
              placeholder="Enter email address..."
            />
            <button className="min-w-28 border rounded-lg text-white text-sm font-medium m-2 ml-0 right-0 btn-landing">
              Join Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-indigo-950">
        <div className="max-w-7xl mx-auto py-3 px-5">
          <div className="text-sm flex flex-col items-center gap-4 sm:flex-row justify-between  text-white py-5">
            <div className="flex space-x-5">
              <NavLink to="/Home">Home</NavLink>
              <NavLink to="/About-US">About Us</NavLink>
              <NavLink to="/Blog">Blog</NavLink>
              <NavLink to="/Careers">Careers</NavLink>
              <NavLink to="/FAQs">FAQs</NavLink>
              <NavLink to="/Contact-US">Contact Us</NavLink>
            </div>
            <div>
              <img className="inline mr-2" src={facebook} alt="facebook" />
              <img className="inline" src={instagram} alt="instagram" />
            </div>
          </div>
          <img className="min-w-full" src={line} alt="line" />
          <div className="text-sm flex flex-col-reverse sm:flex-row justify-between items-center text-white pt-3">
            <p>Copyright&copy; 2023 All Rights Reserved</p>
            <div>
              <NavLink to="privacy-policy">Privacy Policy</NavLink>
              <img className="inline m-5" src={ellipse} alt="facebook" />
              <NavLink to="t&c">Terms & Conditions</NavLink>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
