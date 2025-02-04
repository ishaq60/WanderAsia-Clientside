import React, { useState, useEffect } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const SingleCountry = () => {
  const [scountry, setScountry] = useState([]); // Store country spots
  const data = useLoaderData(); // All country data
  const { country } = useParams(); // Get country name from URL

  useEffect(() => {
    // Get all spots in the selected country
    const countrySpots = data.filter((update) => update.country === country);

    if (countrySpots.length > 0) {
      setScountry(countrySpots); // Store all matching spots
    } else {
      setScountry([]); // Handle case where no spots exist
    }
  }, [country, data]); // Re-run when country or data changes

  return (
    <div className="mt-10  h-[850px] max-w-7xl mx-auto  gap-6">
        <h1 className="text-2xl font-bold text-center mb-6">
        All spots in {scountry.length > 0 ? scountry[0]?.country : country}
      </h1>
      {scountry.length > 0 ? (
        <div className="justify-center   grid grid-cols-1 md:grid-cols-2 no-gap lg:grid-cols-2 ">
          {scountry.map((spotData) => (
            
            <div
  
              key={spotData._id}
              className="max-w-xl bg-white rounded-2xl shadow-sm border no-gap overflow-hidden" >
              <img
                className="w-full h-48 object-cover"
                src={spotData.PhotoUrl}
                alt={spotData.spot}
              />
              {/* Card Content */}
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {spotData.spot}
                </h2>
                <p className="text-gray-500 flex items-center">
                  📍 {spotData.country}
                </p>

                {/* Price and Button */}
                <div className="mt-3 flex justify-between items-center">
                  <span className="text-green-600 font-bold text-lg">
                    ${spotData.cost}
                  </span>
                  <Link to={`/view/${spotData._id}`}>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                      See Details →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">
          No tourist spots available for {country}.
        </p>
      )}
    </div>
  );
};

export default SingleCountry;
