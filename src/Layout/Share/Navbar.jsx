import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/coconut-tree-logo-design-vector-illustration_1249925-2521.jpg";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  const handleSignOut = (e) => {
    e.preventDefault();
    SignOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User logged out successfully",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/alltourist">All Tourist Spots</Link></li>
      <li><Link to="/add">Add Tourist Spot</Link></li>
      <li><Link to="/mylist">My List</Link></li>
    </>
  );

  return (
    <div className="navbar fixed top-0 left-0 w-full bg-base-100 shadow-md px-4 md:px-8 lg:px-12 z-50">
      <div className="navbar-start flex items-center gap-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 p-2 bg-white shadow-lg rounded-box">
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 object-cover rounded-full" src={logo} alt="WanderAsia Logo" />
          <Link to="/" className="text-2xl md:text-3xl font-bold">WanderAsia</Link>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg font-medium">{navLinks}</ul>
      </div>
      <div className="navbar-end flex items-center gap-3">
        {user ? (
          <div className="flex items-center gap-3">
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img className="w-10 h-10 rounded-full ring ring-primary" src={user?.photoURL} alt="User Avatar" />
              {isHovered && (
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white text-xs p-1 rounded">
                  {user.displayName}
                </div>
              )}
            </div>
            <button className="bg-red-500 text-white px-3 py-1 rounded-lg" onClick={handleSignOut}>Sign Out</button>
          </div>
        ) : (
          <>
            <NavLink to="/login" className="btn btn-success px-4 py-2 text-white">Log In</NavLink>
            <NavLink to="/register" className="btn btn-success px-4 py-2 text-white">Register</NavLink>
          </>
        )}
        <input
          onChange={handleToggle}
          type="checkbox"
          checked={theme === "dark"}
          className="toggle theme-controller"
        />
      </div>
    </div>
  );
};

export default Navbar;
