import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';


const SignUp = () => {
  const { register,setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.PhotoUrl.value;
    const password = form.password.value;
    const confirmPassword = form.confirmpassword.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;
  setUser("")
    if (!hasUppercase) {
      return toast.error("Password must contain at least one uppercase letter.");
    }
  
    if (!hasLowercase) {
      return toast.error("Password must contain at least one lowercase letter.");
    }
  
    if (!isValidLength) {
      return toast.error("Password must be at least 6 characters long.");
    }
  
    if (password !== confirmPassword) {
      return toast.error("Passwords do not match!");



    }




    try {
      const result = await register(email, password, name, photoUrl);
      // await updateProfile(result.user, { displayName: name, photoURL: photoUrl });
      console.log("User created successfully:", result.user);
 toast.success("Account Create Successfully")
      // Swal.fire({
      //   // icon: "success",
      //   // title: "Registration Successful!",
      //   // text: "Your account has been created successfully.",
      //   // confirmButtonText: "Go to Login",
      // })
      .then(() => {
        navigate("/login"); // Redirect after confirmation
      });
      
    } catch (error) {
      console.error(error);
      toast.error(error.message || "Registration failed!");
    }
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl gap-6">
        {/* Left Side (Image Placeholder) */}
        <div className="hidden lg:block w-full lg:w-1/2"></div>

        {/* Right Side (Form) */}
        <div className="card bg-white p-8 w-full max-w-md shadow-2xl rounded-lg">
          <h1 className="text-3xl text-center font-bold mb-6">Register</h1>
          <form onSubmit={handleSignUp} className="card-body space-y-4">
            <div className="form-control">
              <label className="label"><span className="label-text">Name</span></label>
              <input type="text" name="name" placeholder="Your name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Email</span></label>
              <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Photo URL</span></label>
              <input type="text" name="PhotoUrl" placeholder="Photo URL" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Password</span></label>
              <input type="password" name="password" placeholder="Password" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label"><span className="label-text">Confirm Password</span></label>
              <input type="password" name="confirmpassword" placeholder="Confirm Password" className="input input-bordered w-full" required />
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-success w-full">Sign Up</button>
              <ToastContainer />
            </div>
          </form>
          <p className="text-center mt-2">
            Already have an account?{" "}
            <Link className="text-green-500 font-semibold" to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
