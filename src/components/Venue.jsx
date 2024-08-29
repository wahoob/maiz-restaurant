import venue from "../assets/img/Venue.png";
import venue1 from "../assets/img/venue1.jpeg";
import venue2 from "../assets/img/venue2.jpeg";
import venue3 from "../assets/img/venue3.jpeg";
import rhombus from "../assets/img/rhombus.svg";

const Venue = () => {
  return (
    <div className="lg:px-[3.75rem] px-6 py-[35px] flex max-lg:flex-col gap-8 relative">
      {/* image */}
      <div className="w-full max-w-[404.84px] max-h-[621.05px] mx-auto">
        <img src={venue} alt="venue" className="h-full w-full object-cover" />
      </div>

      {/* text */}
      <div className="text-white flex flex-col gap-10">
        <div className="space-y-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl md:leading-[87.5px] font-cotoris-bold">
            A distinctive dining destination inspired by the culture.
          </h1>
          <p className="font-inter font-light text-base md:text-[23px]">
            Experience Al Balad old town of Jeddah vibes.{" "}
          </p>
        </div>
        <div className="relative">
          <button className="font-cotoris-bold text-2xl text-[#5B0017] bg-[#CC9D2F] w-[169.89px] h-[63px]">
            Our Venue
          </button>
          <div className="w-[169.89px] h-[63px] border-[3px] border-[#CC9D2F] absolute top-2 -left-2" />
        </div>
        <div className="flex flex-wrap gap-10">
          <img
            src={venue1}
            alt="venue"
            className="w-[151px] h-[156.17px] object-cover shrink-0"
          />
          <img
            src={venue2}
            alt="venue"
            className="w-[151px] h-[156.17px] object-cover shrink-0"
          />
          <img
            src={venue3}
            alt="venue"
            className="w-[151px] h-[156.17px] object-cover shrink-0"
          />
        </div>
        <div className="bg-[#CC9D2F] h-[3px] w-full max-w-[468px]" />
      </div>

      {/*  */}
      <div className="absolute bottom-16 right-[3.75rem]">
        <img src={rhombus} alt="rhombus" />
      </div>
    </div>
  );
};

export default Venue;
