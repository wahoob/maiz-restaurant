import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import venue1 from "../assets/img/venue1.jpeg";

const About = () => {
  return (
    <div className="grid max-lg:text-center lg:grid-cols-2 gap-8 lg:px-16 px-4 py-8 bg-[#5B0017] border-t border-[#CC9D2F]">
      <div className="font-medium flex flex-col justify-between gap-12">
        <div className="flex flex-col gap-6 text-lg text-neutral-300 font-inter">
          <h3 className="text-7xl font-bold text-white font-cotoris-bold mb-6">
            Our Story and Vision
          </h3>
          <p>
            Our restaurant provides a welcoming atmosphere where every guest
            feels like family. From our attentive service to our cozy ambiance,
            we strive to create a dining experience that is both enjoyable and
            unique. Join us and savor the essence through our delicious cuisine
            and warm hospitality.
          </p>
          <p>
            We craft exceptional dishes using the freshest local ingredients,
            blending traditional flavors with modern twists. Each meal is
            designed to provide a unique and delightful dining experience.
          </p>
        </div>
        <div className="flex justify-between items-center px-8 sm:px-24">
          <p className="text-lg font-cotoris-bold text-[#CC9D2F]">Follow us</p>
          <div className="flex gap-2 text-2xl text-white">
            <div className="bg-blue-800 p-1 rounded-full cursor-pointer">
              <FaFacebookF />
            </div>
            <div className="bg-pink-500 p-1 rounded-full cursor-pointer">
              <FaInstagram />
            </div>
            <div className="bg-green-500 p-1 rounded-full cursor-pointer">
              <FaWhatsapp />
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <img src={venue1} alt="venue" />
      </div>
    </div>
  );
};

export default About;
