import React, { useEffect } from "react";
import image from "../../../assets/offer.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Offer = () => {
    useEffect(() => {
        AOS.init({
          duration: 2000, // Animation duration in milliseconds
          // Whether animation should happen only once
          easing: "ease-in-out", // Animation easing
        });
      }, []);
  return (
    <section className="w-full mt-10 mb-10">
      <div data-aos="fade-up"
     data-aos-duration="3000"
        className="w-full h-[520px] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${image})` }} // ✅ Dynamic background image
      >
        <div>
          <h1 className="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">
            Discover Your Tourist Spot
          </h1>
        </div>

        <div className="w-full flex justify-center mt-4 md:mt-6">
          <form className="w-full flex justify-center">
            <div className="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] w-[90%] flex gap-2">
              <input
                type="text"
                className="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                placeholder="Search for a Tourist Spot..."
              />
              <button
                type="submit"
                className="px-[10px] p-[10px] justify-center btn btn-success text-lg text-white rounded-md font-semibold"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Offer;
