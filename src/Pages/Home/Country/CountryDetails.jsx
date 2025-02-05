import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css';
const CountryDetails = ({ data }) => {

  const { country, countryImage, shortDescription, _id, visitorsPerYear } =
    data;
    
    useEffect(() => {
      AOS.init({
        duration: 1000, // Animation duration in milliseconds
        // Whether animation should happen only once
        easing: "ease-in-out", // Animation easing
      });
    }, []);
  return (
    <Link to={`/country/${country}`}>
      <div  className="mt-5">
        <div data-aos="zoom-in" className="max-w-xl mt-4 bg-white rounded-2xl shadow-sm border  overflow-hidden">
          <img
            className="w-full h-48 object-cover"
            src={countryImage} // Replace with actual image URL
            alt="Vinales Valley"
          />

          {/* Card Content */}
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800"></h2>
            <p className="text-gray-500 text-2xl flex items-center">
              📍 {country}
            </p>

            {/* Price and Button */}
            <div className="mt-3 flex justify-between items-center">
              <span className="text-green-600 font-bold text-lg">
                VisitorsPerYear: {visitorsPerYear}
              </span>
            </div>
            
          </div>
  
  
        </div>
      </div>
    </Link>
  );
};

export default CountryDetails;
