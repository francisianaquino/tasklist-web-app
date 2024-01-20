import CareLuLuLogo from "../../assets/carelulu-logo-square.png";
import Facebook from "../../assets/facebook.svg";
import Twitter from "../../assets/twitter.svg";
import Instagram from "../../assets/instagram.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="w-full bg-[#23AAAA] flex justify-between px-28 py-10 mt-20">
      <img src={CareLuLuLogo} className=" h-32" />
      <div className="flex flex-col justify-center text-white text-sm">
        <span className="pb-3">FOR PARENTS</span>
        <span className="">Parent Resources</span>
        <span className="">How It Works</span>
        <span className="">Testimonials</span>
        <span className="">Terms Of Use</span>
        <span className="">Privacy Policy</span>
      </div>
      <div className="flex flex-col justify-center text-white text-sm">
        <span className="pb-3">FOR PROVIDERS</span>
        <span className="">Provider Resources</span>
        <span className="">How It Works</span>
        <span className="">Testimonials</span>
        <span className="">Terms and Conditions</span>
        <span className="">List of Program</span>
      </div>
      <div className="flex flex-col justify-start text-white text-sm">
        <span className="pb-3">MORE</span>
        <span className="">About Us</span>
        <span className="">Press</span>
        <span className="">Jobs</span>
        <span className="">Contact Us</span>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <div className="flex gap-3">
          <img src={Facebook} id="facebook" className="w-10 h-10 p-1 rounded-full border border-black" />
          <img src={Twitter} id="twitter" className="w-10 h-10 p-1 rounded-full border border-black" />
          <img src={Instagram} id="instagram" className="w-10 h-10 p-1 rounded-full border border-black" />
        </div>
        <button className="bg-white text-[#23AAAA] text-sm mx-3 my-2 py-2 rounded-sm">Help Center</button>
      </div>
    </footer>
  );
}

export default Footer;