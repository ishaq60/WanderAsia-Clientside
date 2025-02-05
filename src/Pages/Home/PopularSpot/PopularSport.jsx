import React, { useEffect, useState } from "react";
import PopularSportCard from "./PopularSportCard";
import { Link } from "react-router-dom";
import AllTouristSpot from "../../AllTouristSport/AllTouristSpot";

import AOS from 'aos';
import 'aos/dist/aos.css';
const PopularSport = () => {
  const [tourdata, settourdata] = useState([]);
  const [datalength, setdatalength] = useState(6); // Show 3 tours by default

  useEffect(() => {
    fetch("http://localhost:5000/addtour")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        settourdata(data);
      });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      // Whether animation should happen only once
      easing: "ease-in-out", // Animation easing
    });
  }, []);


  return (
    <div data-aos="feed up" className="mt-12 max-w-7xl mx-auto px-4">
      {/* Title Section */}
      <div data-aos="fade-up" className="md:flex justify-between  items-center mt-10">
        <div className="md:w-2/3">
          <p className="text-green-700 text-lg">Perfect for You</p>
          <p className="font-bold text-4xl">Popular Tour Packages</p>
          <p className="text-gray-500 mt-4">
            Explore our exclusive and carefully curated tour packages designed
            for your perfect getaway. <br /> From adventurous trips to serene
            escapes, our popular tours offer something for everyone. <br /> Get
            ready to embark on an unforgettable journey with WanderAsia.
          </p>
        </div>
      </div>

      {/* Grid Layout for Tour Cards */}
      <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" className="grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 mt-10">
        {tourdata.length > 0 ? (
          tourdata.slice(0, datalength).map((data) => (
            <AllTouristSpot data={data} key={data._id}></AllTouristSpot>,  <PopularSportCard key={data._id} data={data} />
          ))
        ) : (
          <p className="text-gray-500 text-lg col-span-full text-center">
            No tour packages available.
          </p>
        )}
      </div>

      {/* View All Button (Only Shows If More Tours Exist) */}
      <div className={`${datalength >= tourdata.length ? "hidden" : ""} mt-4`}>
        <div className="mt-4 md:mt-0 flex justify-center">
       <Link   to="/alltourist">
       <button
            onClick={() => setdatalength(tourdata.length)}
            className="bg-green-600 text-white px-6 py-3 font-semibold rounded-md shadow-md hover:bg-green-700 transition duration-300"
          >
            View All
          </button>
       
       </Link>
        </div>
      </div>
    </div>
  );
};

export default PopularSport;
