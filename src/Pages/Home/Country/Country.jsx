import React, { useEffect, useState } from "react";
import CountryDetails from "./CountryDetails";
;

const Country = () => {
    const [datas, settourdata] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/country") 
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            settourdata(data);
          })
          .catch((error) => console.error("Error fetching data:", error));
    }, []);
    

    // const country = "Japan"; // Example country

    // useEffect(() => {
    //   fetch(`http://localhost:5000/Touristspot/${country}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data); // Logs the tourist spots in Japan
    //     })
    //     .catch((error) => console.error("Error fetching data:", error));
    // }, [country]); // Re-fetch if `country` changes
    
  return (
    <div className="mt-10 ">
      <div>
        <div className="bg-gray-100  flex items-center justify-center p-6">
          <div className="max-w-7xl w-full bg-white shadow-sm rounded-lg p-8">
            {/* Heading */}
            <h1 className="text-4xl font-bold text-center mb-6">
              Get Ready <br /> To <br />{" "}
              <span className="text-blue-600">Explore Top Destinations</span>
            </h1>
            {/* Description */}
            <p className="text-gray-600 text-center mb-8">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece <br /> of classical Latin literature from
              45 BC, making it over 2000 years old.
            </p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-3">

        {
            datas.map(data=> <CountryDetails data={data} key={data._id}></CountryDetails> )
         }
        </div>
        
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Country;
