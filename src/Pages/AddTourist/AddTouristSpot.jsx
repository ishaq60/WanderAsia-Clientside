import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../Provider/AuthProvider';
const AddTouristSpot = () => {
  const {user}=useContext(AuthContext)

    const handleSubmitted = (e) => {
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const username = form.username.value;
        const PhotoUrl = form.PhotoUrl.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const cost = form.cost.value;
        const season = form.season.value;
        const travelTime = form.travelTime.value;
        const short = form.short.value;

        const formInfo = {
         email,username,PhotoUrl,spot,country,location,cost,season,travelTime,short
        };
        
        console.log("Form Submitted:", formInfo);
        
        fetch("http://localhost:5000/addtour", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Server Response:", data);
            if (data.insertedId) {
                Swal.fire({
                    icon: "success",
                    title: "Success!",
                    text: "New Spot Added Successfully",
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Failed!",
                    text: "Something went wrong",
                });
            }
        })
        .catch(error => {
            console.error("Error:", error);
            Swal.fire({
                icon: "error",
                title: "Error!",
                text: "Could not connect to server",
            });
        });
    }
    return (
        <div className="bg-base-200 w-full min-h-screen flex items-center justify-center p-4">
            <div className="bg-base-100 w-full max-w-4xl shadow-md rounded-lg p-6 sm:p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold">Add New Tourist Spot</h1>
                </div>
                <form onSubmit={handleSubmitted} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* User Email */}
                    <div className="form-control">
                        <label className="label">
                            <span  className="label-text"> </span>
                        </label>
                        <input name='email' type="email" placeholder="Enter Your Email" defaultValue={user.email} className="input input-bordered w-full" required />
                    </div>

                    {/* User Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input name='username' type="text" placeholder="Enter Your Name" className="input input-bordered w-full" required />
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input name='PhotoUrl' defaultValue={user.PhotoUrl} type="url" placeholder="Enter Image URL" className="input input-bordered w-full" required />
                    </div>

                    {/* Tourist Spot Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input name='spot' type="text" placeholder="Tourist Spot Name" className="input input-bordered w-full" required />
                    </div>

                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input name='country' type="text" placeholder="Country Name" className="input input-bordered w-full" required />
                    </div>

                    {/* Location Dropdown */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select name='location' className="select select-bordered w-full" required>
                            <option disabled selected>Select Location</option>
                            <optgroup label="Bangladesh">
                                <option>Sundarban</option>
                                <option>Cox’s Bazar</option>
                                <option>Rangamati</option>
                                <option>Bandarban</option>
                                <option>Saint Martin’s Island</option>
                            </optgroup>
                            <optgroup label="Thailand">
                                <option>Bangkok</option>
                                <option>Chiang Mai</option>
                                <option>Ayutthaya</option>
                                <option>Phuket</option>
                                <option>Phi Phi Islands</option>
                            </optgroup>
                            <optgroup label="Indonesia">
                                <option>Bali</option>
                                <option>Borobudur Temple</option>
                                <option>Komodo National Park</option>
                                <option>Raja Ampat Islands</option>
                                <option>Yogyakarta</option>
                            </optgroup>
                            <optgroup label="Malaysia">
                                <option>Kuala Lumpur</option>
                                <option>Langkawi</option>
                                <option>Penang</option>
                            </optgroup>
                            <optgroup label="Vietnam">
                                <option>Ha Long Bay</option>
                                <option>Ho Chi Minh City</option>
                                <option>Hoi An Ancient Town</option>
                                <option>Phong Nha Caves</option>
                                <option>Mekong Delta</option>
                            </optgroup>
                        </select>
                    </div>

                    {/* Average Cost */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input name='cost' type="number" placeholder="Average Cost" className="input input-bordered w-full" required />
                    </div>

                    {/* Seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <select name='season' className="select select-bordered w-full" required>
                            <option disabled selected>Select Seasonality</option>
                            <option>Summer</option>
                            <option>Winter</option>
                            <option>All Year Round</option>
                        </select>
                    </div>

                    {/* Travel Time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time (Days)</span>
                        </label>
                        <input name='travelTime' type="number" placeholder="Travel Time" className="input input-bordered w-full" required />
                    </div>

                    {/* Short Description (Full Width) */}
                    <div className="form-control sm:col-span-2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea name='short' placeholder="Short Description" className="textarea textarea-bordered w-full" rows="3" required />
                    </div>

                    {/* Submit Button (Full Width) */}
                    <div className="form-control sm:col-span-2">
                        <button type="submit" className="btn btn-success w-full">Add Tourist Spot</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddTouristSpot
