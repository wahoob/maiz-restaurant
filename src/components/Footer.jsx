import { Link } from "react-router-dom";
import logo from "../assets/img/logo2.svg";
import facebook from "../assets/img/facebook.svg";
import x from "../assets/img/x.svg";
import instagram from "../assets/img/instagram.svg";
import linkedin from "../assets/img/linkedin.svg";

const Footer = () => {
  return (
    <div className="bg-[#CC9D2F] flex flex-col items-center gap-12">
      <div className="mt-12">
        <img src={logo} alt="logo" />
      </div>

      <ul className="flex flex-wrap px-12 gap-[40px] font-inter font-normal text-[18px] text-[#5B0017]">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Menu</li>
        <li>Venue</li>
        <li>Event</li>
        <li>Contact us</li>
      </ul>

      <div className="flex flex-wrap gap-4 items-center justify-between py-6 px-12 lg:px-40 border-t border-[#B68F34] w-full relative">
        <p className="text-[14.96px] text-[#243054] font-poppins font-normal">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
        <div className="flex items-center gap-6 lg:absolute left-1/2 lg:-translate-x-1/2 top-1/2 lg:-translate-y-1/2">
          <img src={facebook} alt="facebook" className="size-[13.51px]" />
          <img src={x} alt="x" className="size-[13.51px]" />
          <img src={instagram} alt="instagram" className="size-[13.51px]" />
          <img src={linkedin} alt="linkedin" className="size-[13.51px]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
