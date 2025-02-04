import React from "react";
import { Link } from "react-router-dom";

const PopularSportCard = ({ data }) => {
  const { PhotoUrl, spot, location, country, _id, season, username, cost } =
    data;
  return (
    <div className="mt-5">
      <div className="max-w-xl mt-4 bg-white rounded-2xl shadow-sm border  overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={PhotoUrl} // Replace with actual image URL
          alt="Vinales Valley"
        />

        {/* Card Content */}
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-800">{spot}</h2>
          <p className="text-gray-500 flex items-center">📍 {country}</p>

          {/* Price and Button */}
          <div className="mt-3 flex justify-between items-center">
            <span className="text-green-600 font-bold text-lg">${cost}</span>
            <Link to={`/view/${_id}`}>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                See Details →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularSportCard;
