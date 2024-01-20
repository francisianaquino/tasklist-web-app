import CareLuLuLogo from "../../assets/carelulu-logo.png";
import MenuDropdown from "../MenuDropdown";

const Header = () => {
  return (
    <header className="w-full bg-[#23AAAA] flex justify-around">
      <img src={CareLuLuLogo} className="h-12 pt-1" />
      <div className="flex justify-between my-2">
        <input placeholder="Enter your zipcode" className="rounded-l text-sm px-2 py-1 my-1" />
        <button className="bg-[#EE2D68] rounded-r text-white text-sm px-2 py-1 my-1">Search</button>
        <div className="ml-24">
          <MenuDropdown />
        </div>
      </div>
    </header>
  );
}

export default Header;