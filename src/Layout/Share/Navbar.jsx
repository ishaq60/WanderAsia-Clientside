import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/coconut-tree-logo-design-vector-illustration_1249925-2521.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, SignOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false); // State to manage hover effect

  const navlink = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/alltourist">All Tourist Spots</Link></li>
      <li><Link to="/add">Add Tourist Spot</Link></li>
      <li><Link to="/mylist">My List</Link></li>
    </>
  );

  const handleSignOut = (e) => {
    e.preventDefault();
    SignOut()
      .then(() => {
        console.log("logout successfully");
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "User logged out successfully",
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="navbar border relative border-gray-100 bg-base-100 px-4 ab md:px-8 lg:px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content font-bold rounded-box z-[1] mt-3 w-52 p-2 bg-white shadow-lg">
            {navlink}
          </ul>
        </div> 
        <div className='no-gap flex'>
          <img className='w-10 rounded-full' src={logo} alt="Logo" /> 
          <a className="btn btn-ghost text-2xl md:text-3xl   font-bold">WanderAsia</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-md text-xl menu-horizontal px-1">
          {navlink}
        </ul>
      </div>
      <div className="navbar-end gap-3">
        {user ? (
          <div className='flex gap-2'>
            <div
              className="avatar relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring ring-offset-2">
                <img src={user?.photoURL} alt="User Avatar" />
               
              </div>
              {isHovered && (
                <div className="absolute bottom-0 left-0 bg-gray-700 text-white text-sm p-1 rounded-md">
                  {user.displayName}
                </div>
              )}
            </div>
            <button className='bg-red-400 rounded-xl p-2' onClick={handleSignOut}>SignOut</button>
          </div>
        ) : (
          <>
            <NavLink to="/login">
              <button className="btn text-lg text-white btn-success px-4 py-2">Log In</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btn text-lg text-white btn-success px-4 py-2">Register</button>
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
