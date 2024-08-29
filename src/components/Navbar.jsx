import logo from "../assets/img/logo.png";
import buttonGroup from "../assets/img/button-group.svg";
import { Link, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <nav className="lg:px-[3.75rem] px-6 py-[35px] bg-[#5B0017] flex items-start justify-between flex-wrap gap-8 font-cotoris">
      <div
        className="shrink-0 mx-auto cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={logo} alt="logo" />
      </div>
      <div className="flex flex-1 items-center relative">
        <ul
          className={`flex lg:gap-[85px] mx-auto text-white text-[21px] ${
            open
              ? "max-lg:flex-col max-lg:absolute top-12 right-0 max-lg:bg-neutral-900 px-8 py-4 z-20 rounded-lg"
              : "max-lg:hidden"
          }`}
        >
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>Menu</li>
          <li>Venue</li>
          <li>Events</li>
        </ul>
        <div className="flex gap-4 items-center relative max-lg:ml-auto">
          <button className="bg-[#CC9D2F] text-[#5B0017] text-[24px] w-44 h-16 mr-9">
            Book Now
          </button>
          <div className="absolute right-0 -top-1.5">
            <img src={buttonGroup} alt="button attachments" />
          </div>
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          <IoMdMenu className="text-[#CC9D2F] size-10" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
