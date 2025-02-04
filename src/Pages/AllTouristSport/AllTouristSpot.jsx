import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const AllTouristSpot = () => {
    const datas = useLoaderData(); 
    
    
    
    
// Assuming it's an array of tourist spots

const {_id}=datas
    const [sortedData, setSortedData] = useState(datas); // State to manage sorted data
    const [sortOrder, setSortOrder] = useState('lowToHigh'); // Default sort order: low to high

    // Function to handle sorting based on cost
    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...datas].sort((a, b) => {
            if (order === 'lowToHigh') {
                return a.cost - b.cost; // Sort in ascending order based on cost
            } else {
                return b.cost - a.cost; // Sort in descending order based on cost
            }
        });
        setSortedData(sorted);
    };

    return (
        <div className="mt-10 container mx-auto text-center px-4">
            <h className="text-4xl justify-center text-center flex-row font-bold">All Tourist Spots</h>

            {/* Dropdown to select sort order */}
            <div className="mb-4">
                <label htmlFor="sort" className="mr-2">Sort by Cost: </label>
                <select
                    id="sort"
                    value={sortOrder}
                    onChange={(e) => handleSort(e.target.value)}
                    className="bg-gray-200 p-2 rounded-md"
                >
                    <option value="lowToHigh">Low to High</option>
                    <option value="highToLow">High to Low</option>
                </select>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {sortedData.map((data) => {
                    // Destructure each data object to get the required properties
                    const { PhotoUrl, cost, spot, travelTime, season, _id } = data;

                    return (
                        <div key={_id} className="bg-white rounded-2xl shadow-sm border overflow-hidden">
                            <img
                                className="w-full h-48 object-cover"
                                src={PhotoUrl}
                                alt={spot}
                            />

                            {/* Card Content */}
                            <div className="p-4">
                                <h2 className="text-lg font-semibold text-gray-800">{spot}</h2>
                                <p className="text-gray-500 flex items-center">📍 {season}</p>

                                <div className="mt-3 flex justify-between items-center">
                                    {/* Display the cost */}
                                    <span className="text-green-600 font-bold text-lg"> Cost:{cost}</span>
                                    
                                    {/* Display travel time */}
                                    <span className="text-gray-500">{travelTime} hours</span>
                                </div>

                                {/* Button to view details */}
                                <div className="mt-5 justify-end ">
                                    <Link to={`/view/${_id}`} >
                                    
                                    <button className="bg-green-500 justify-end w-full text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
                                        See Details →
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AllTouristSpot;
