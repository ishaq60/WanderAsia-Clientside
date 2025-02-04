import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const Updated = () => {
    const updates = useLoaderData();
    const { id } = useParams();
    const users = updates.find(update => update._id === id);

    if (!users) {
        return <div>Card not found</div>;
    }

    const {
        email,
        username,
        PhotoUrl,
        spot,
        country,
        location,
        cost,
        season,
        travelTime,
        short
    } = users;

    const handleUpdate = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedInfo = {
            email: form.email.value,
            username: form.usersname.value,
            PhotoUrl: form.PhotoUrl.value,
            spot: form.spot.value,
            country: form.country.value,
            location: form.location.value,
            cost: form.cost.value,
            season: form.season.value,
            travelTime: form.travelTime.value,
            short: form.short.value
        };

        fetch(`http://localhost:5000/Touristspot/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedInfo)
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to update data');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        icon: "success",
                        title: "Success!",
                        text: "Tourist Spot Details Updated Successfully",
                    });
                } else {
                    Swal.fire({
                        icon: "info",
                        title: "No Changes",
                        text: "No changes were made to the tourist spot.",
                    });
                }
            })
            .catch(error => {
                console.error("Error:", error);
                Swal.fire({
                    icon: "error",
                    title: "Error!",
                    text: "Could not update tourist spot. Please try again.",
                });
            });
    };

    return (
        <div className="bg-base-200 w-full min-h-screen flex items-center justify-center p-4">
            <div className="bg-base-100 w-full max-w-4xl shadow-md rounded-lg p-6 sm:p-8">
                <div className="text-center mb-6">
                    <h1 className="text-2xl sm:text-3xl font-bold">Update Tourist Spot</h1>
                </div>
                <form onSubmit={handleUpdate} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Enter Your Email"
                            defaultValue={email}
                            className="input input-bordered w-full"
                            required
                            aria-label="Email"
                        />
                    </div>

                    {/* Username */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input
                            name="usersname"
                            type="text"
                            placeholder="Enter Your Name"
                            defaultValue={username}
                            className="input input-bordered w-full"
                            required
                            aria-label="Username"
                        />
                    </div>

                    {/* Image URL */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input
                            name="PhotoUrl"
                            type="url"
                            placeholder="Enter Image URL"
                            defaultValue={PhotoUrl}
                            className="input input-bordered w-full"
                            required
                            aria-label="Image URL"
                        />
                    </div>

                    {/* Tourist Spot Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Tourist Spot Name</span>
                        </label>
                        <input
                            name="spot"
                            type="text"
                            placeholder="Tourist Spot Name"
                            defaultValue={spot}
                            className="input input-bordered w-full"
                            required
                            aria-label="Tourist Spot Name"
                        />
                    </div>

                    {/* Country Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input
                            name="country"
                            type="text"
                            placeholder="Country Name"
                            defaultValue={country}
                            className="input input-bordered w-full"
                            required
                            aria-label="Country Name"
                        />
                    </div>

                    {/* Location Dropdown */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <select
                            name="location"
                            defaultValue={location}
                            className="select select-bordered w-full"
                            required
                            aria-label="Location"
                        >
                            <option value="">Select Location</option>
                            <optgroup label="Bangladesh">
                                <option value="Sundarban">Sundarban</option>
                                <option value="Cox’s Bazar">Cox’s Bazar</option>
                                <option value="Rangamati">Rangamati</option>
                                <option value="Bandarban">Bandarban</option>
                                <option value="Saint Martin’s Island">Saint Martin’s Island</option>
                            </optgroup>
                            <optgroup label="Thailand">
                                <option value="Bangkok">Bangkok</option>
                                <option value="Chiang Mai">Chiang Mai</option>
                                <option value="Ayutthaya">Ayutthaya</option>
                                <option value="Phuket">Phuket</option>
                                <option value="Phi Phi Islands">Phi Phi Islands</option>
                            </optgroup>
                            <optgroup label="Indonesia">
                                <option value="Bali">Bali</option>
                                <option value="Borobudur Temple">Borobudur Temple</option>
                                <option value="Komodo National Park">Komodo National Park</option>
                                <option value="Raja Ampat Islands">Raja Ampat Islands</option>
                                <option value="Yogyakarta">Yogyakarta</option>
                            </optgroup>
                            <optgroup label="Malaysia">
                                <option value="Kuala Lumpur">Kuala Lumpur</option>
                                <option value="Langkawi">Langkawi</option>
                                <option value="Penang">Penang</option>
                            </optgroup>
                            <optgroup label="Vietnam">
                                <option value="Ha Long Bay">Ha Long Bay</option>
                                <option value="Ho Chi Minh City">Ho Chi Minh City</option>
                                <option value="Hoi An Ancient Town">Hoi An Ancient Town</option>
                                <option value="Phong Nha Caves">Phong Nha Caves</option>
                                <option value="Mekong Delta">Mekong Delta</option>
                            </optgroup>
                        </select>
                    </div>

                    {/* Average Cost */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Average Cost</span>
                        </label>
                        <input
                            name="cost"
                            type="number"
                            placeholder="Average Cost"
                            defaultValue={cost}
                            className="input input-bordered w-full"
                            required
                            aria-label="Average Cost"
                        />
                    </div>

                    {/* Seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seasonality</span>
                        </label>
                        <select
                            name="season"
                            defaultValue={season}
                            className="select select-bordered w-full"
                            required
                            aria-label="Seasonality"
                        >
                            <option value="">Select Seasonality</option>
                            <option value="Summer">Summer</option>
                            <option value="Winter">Winter</option>
                            <option value="All Year Round">All Year Round</option>
                        </select>
                    </div>

                    {/* Travel Time */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Travel Time (Days)</span>
                        </label>
                        <input
                            name="travelTime"
                            type="number"
                            placeholder="Travel Time"
                            defaultValue={travelTime}
                            className="input input-bordered w-full"
                            required
                            aria-label="Travel Time"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="form-control sm:col-span-2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <textarea
                            name="short"
                            placeholder="Short Description"
                            defaultValue={short}
                            className="textarea textarea-bordered w-full"
                            rows="3"
                            required
                            aria-label="Short Description"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="form-control sm:col-span-2">
                        <button type="submit" className="btn btn-success w-full" aria-label="Update Tourist Spot">
                            Update Tourist Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Updated;