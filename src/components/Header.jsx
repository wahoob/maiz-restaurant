import hero from "../assets/img/hero.png";
import heroSVG from "../assets/img/hero.svg";
import circleSVG from "../assets/img/circle.svg";

const Header = () => {
  return (
    <header className="lg:px-[3.75rem] px-6 py-[35px] flex flex-col gap-4 relative">
      <div className="realtive flex flex-wrap gap-4 w-full">
        {/* text */}
        <div className="flex flex-col gap-10 text-white py-11 z-10">
          <div className="bg-[#5B0017B2] lg:w-9/12 pr-4">
            <h1 className="font-cotoris-bold text-6xl lg:text-9xl lg:leading-[8.25rem]">
              Taste the authentic Saudi cuisine
            </h1>
          </div>
          <p className="font-inter font-light text-[23px] leading-[27.84px] max-w-md">
            Among the best Saudi chefs in the world, serving you something
            beyond flavor.
          </p>
          <button className="border-[3px] border-[#CC9D2F] text-[#CC9D2F] w-[171px] h-[63px] font-cotoris-bold text-[24px]">
            Our Menu
          </button>
        </div>

        {/* image */}
        <div className="z-0 relative lg:absolute lg:right-[3.75rem] lg:pl-[32rem] max-lg:w-full">
          <img
            src={hero}
            alt="hero"
            className="-scale-x-100 object-cover object-bottom w-full lg:w-[763px] max-h-[534px]"
          />
          <img src={heroSVG} alt="star" className="absolute -top-6 -right-6" />
        </div>

        <div className="relative">
          <img src={circleSVG} alt="circle" className="" />
          <img
            src={circleSVG}
            alt="circle"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bottom-0 size-[80%]"
          />
          <img
            src={circleSVG}
            alt="circle"
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 bottom-0 size-[45%]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
