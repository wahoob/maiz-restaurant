import menuImg from "../assets/img/menu.png";
import menuSVG from "../assets/img/menu.svg";

const Menu = () => {
  return (
    <div className="relative w-full h-fit">
      <img
        src={menuImg}
        alt="menu image"
        className="w-full h-[871.17px] object-cover"
      />

      <div className="absolute inset-0 bg-custom-gradient" />

      <div className="absolute px-6 font-cotoris-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
        <img src={menuSVG} alt="menu icon" />
        <h1 className="text-5xl md:text-[70px] md:leading-[87.5px] max-w-[60rem] text-white text-center mb-12">
          A unique menu that reflects the true essence of the Saudi cuisine
        </h1>
        <div className="relative">
          <button className="text-2xl text-[#5B0017] bg-[#CC9D2F] w-[169.89px] h-[63px]">
            Our Venue
          </button>
          <div className="w-[169.89px] h-[63px] border-[3px] border-[#CC9D2F] absolute top-2 -left-2" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
