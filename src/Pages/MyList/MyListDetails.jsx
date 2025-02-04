import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MyListDetails = ({ tour, handleDelete, handaleUpdated }) => {
  const { user } = useContext(AuthContext);
  const { _id } = tour;

  return (
    <tr className="hover:bg-gray-100 transition">
      <td className="border p-3 text-center">
        <input type="checkbox" className="checkbox" />
      </td>
      <td className="border p-3 text-center">
        <div className="w-16 h-16 mx-auto">
          <img
            src={tour?.PhotoUrl}
            alt="Tour Spot"
            className="object-cover w-full h-full rounded-md"
          />
        </div>
      </td>
      <td className="border p-3">{tour.username}</td>
      <td className="border p-3">
        {tour.spot}
        <br />
        <span className="text-sm text-gray-500">{tour.location}</span>
      </td>
      <td className="border p-3 text-center">${tour.cost}</td>
      <td className="border p-3 text-center">
        <div className="flex justify-center gap-2">


      <Link to={`/update/${_id}`}>
      <button
              onClick={() => handaleUpdated(_id)}
              className="btn btn-outline btn-success"
            >
              Update
            </button>
      </Link>
            
         

          <button
            onClick={() => handleDelete(_id)}
            // Pass tour._id here
            className="btn text-white btn-error"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyListDetails;
