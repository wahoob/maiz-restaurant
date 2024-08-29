import person from "../assets/img/person.png";
import quoteImg from "../assets/img/quote-img.png";
import play from "../assets/img/play.svg";
import quoteSVG from "../assets/img/quote.svg";

const Quote = () => {
  return (
    <div className="lg:px-[3.75rem] px-6 pt-56 pb-28">
      <div className="flex max-lg:flex-col bg-[#CC9D2F] h-[555.97px]">
        {/* info */}
        <div className="lg:basis-[45%] lg:py-24 py-8 px-10 lg:pr-20 relative">
          <div className="flex flex-col gap-6 justify-between h-full lg:max-w-[362.88px] lg:ml-auto">
            {/* quote */}
            <div className="relative">
              <p className="font-cotoris-bold text-[59.93px] absolute -top-8 -left-8">
                “
              </p>
              <h3 className="font-inter font-normal text-[#243054] text-[21px] leading-[39.95px]">
                You can&apos;t go wrong with Chicken Mandi, I had it twice. The
                chicken was cooked perfectly, juicy & soft (usually mandi
                chicken is a bit dry). I would defiantly recommend it.
              </h3>
            </div>

            {/* person */}
            <div className="flex justify-between items-center border-b border-[#9B8F3E] pb-4 relative">
              <div className="font-poppins font-medium text-[#243054]">
                <h5 className="text-[13.32px]">Khalid Al Dawsry</h5>
                <p className="text-[9.99px]">Jeddah, Saudi</p>
              </div>
              <img
                src={person}
                alt="khalid"
                className="size-[39.95px] object-cover rounded-full"
              />
            </div>

            <div className="bg-[#243054] h-[1px] w-[40.78px] absolute bottom-0 right-0" />
          </div>

          {/* svg */}
          <div className="absolute bottom-6 left-0">
            <img src={quoteSVG} alt="quote group" />
          </div>
        </div>

        {/* image */}
        <div className="relative lg:basis-[55%] w-full h-full">
          <img
            src={quoteImg}
            alt="food"
            className="w-full h-full object-cover"
          />
          <div className="h-full w-full bg-[#00000066] z-10 absolute inset-0" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <img src={play} alt="play" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
