import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyListDetails from "./MyListDetails";
import Swal from 'sweetalert2';
const MyList = () => {
  const { user } = useContext(AuthContext);
  const {_id}=user;
  const [tours, setTours] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user?.email) {
      const url = `http://localhost:5000/Touristspot?email=${encodeURIComponent(user.email)}`;
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch data');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setTours(data);
          setError(null); // Reset error state on successful fetch
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError("Failed to fetch the data.");
        });
    }
  }, [user?.email]);

  const handleDelete= (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/Touristspot/${id}`, {
          method: "DELETE"
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
           
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            const remaining=tours.filter(tour=>tour._id!==id)
            setTours(remaining)
            }
          })
          .catch(error => {
            console.error("Error deleting the item:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an issue deleting the item.",
              icon: "error"
            });
          });
      }
    });
  };



const handaleUpdated=id=>{
  console.log("updated");
}


  return (
    <div className="mt-10 max-w-7xl mx-auto px-4">
      <h1 className="text-center font-bold text-4xl mb-6">My Tourist Spots</h1>

      {error && <div className="text-center text-red-500 mb-4">{error}</div>} {/* Display error message if any */}

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border p-3 text-left">Select</th>
              <th className="border p-3 text-left">Image</th>
              <th className="border p-3 text-left">Name</th>
              <th className="border p-3 text-left">Spot Location</th>
              <th className="border p-3 text-left">Cost</th>
              <th className="border p-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {tours.length > 0 ? (
              tours.map((tour) => (
                <MyListDetails handleDelete={handleDelete} handaleUpdated={handaleUpdated} tour={tour} key={tour._id} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No Tourist Spots Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
