import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ViewDetails = () => {
    const datas = useLoaderData(); // Get the data from loader
    const { id } = useParams(); // Get the 'id' from URL

    // Find the specific card based on the id from URL
    const card = datas.find(card => card._id === id); // Assuming '_id' is the key, update if necessary

    // Return a message if the card is not found
    if (!card) {
        return <div>Card not found</div>;
    }

    console.log(card); // You can check the details of the card here

    return (
        <div className="p-6 w-mx-7xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                {/* Image */}
                <img
                    className="w-full h-[550px] object-cover mb-4 rounded-lg"
                    src={card.PhotoUrl}
                    alt={card.spot}
                />
                
                {/* Tourist Spot Name */}
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{card.spot}</h1>

                {/* Country Name */}
                <p className="text-xl text-gray-600 mb-2">Country: {card.country}</p>

                {/* Location */}
                <p className="text-lg text-gray-500 mb-4">Location: {card.location}</p>

                {/* Short Description */}
                <p className="text-lg text-gray-700 mb-4">{card.shortDescription}</p>

                {/* Average Cost */}
                <p className="text-lg text-green-600 font-semibold mb-2">Average Cost: {card.average_cost}</p>

                {/* Seasonality */}
                <p className="text-lg text-gray-600 mb-2">Seasonality: {card.seasonality}</p>

                {/* Travel Time */}
                <p className="text-lg text-gray-600 mb-2">Travel Time: {card.
travelTime}</p>

                {/* Total Visitors Per Year */}
                <p className="text-lg text-gray-600 mb-2">Total Visitors Per Year: {card.totalVisitor}</p>

                {/* User Email */}
                <p className="text-lg font-bold text-gray-600 mb-2">{card.short}</p>

                
           
                <div className="text-center mt-4">
                    <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition">
                        Book Now →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
