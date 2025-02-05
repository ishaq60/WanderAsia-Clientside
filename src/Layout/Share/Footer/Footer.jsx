import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* ========== FOOTER ========== */}
      <footer className="mt-auto bg-gray-900 w-full dark:bg-neutral-950">
        <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 lg:pt-20 mx-auto">
          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            <div className="col-span-full lg:col-span-1">
              <a
                className="flex-none text-xl font-semibold text-white focus:outline-none focus:opacity-80"
                href="#"
                aria-label="Brand"
              >
         WanderAsia
              </a>
            </div>

            {/* Product Section */}
            <div className="col-span-1">
         <Link to='/'>     <h4 className="font-semibold text-gray-100">Home</h4></Link>
              <div className="mt-3 grid space-y-3">
                {["Add tourist spot", "Changelog", "Docs"].map((item, index) => (
                  <p key={index}>
                    <a
                      className="text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      {item}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            {/* Company Section */}
            <div className="col-span-1">
              <h4 className="font-semibold text-gray-100">Add Tourist Spot</h4>
              <div className="mt-3 grid space-y-3">
                {["About us", "Blog", "Customers"].map((item, index) => (
                  <p key={index}>
                    <a
                      className="text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                      href="#"
                    >
                      {item}
                    </a>
                  </p>
                ))}
                <p>
                  <a
                    className="text-gray-400 hover:text-gray-200 focus:outline-none focus:text-gray-200"
                    href="#"
                  >
                    Careers
                  </a>{" "}
                  <span className="inline-block ms-1 text-xs bg-blue-700 text-white py-1 px-2 rounded-lg">
                    We're hiring
                  </span>
                </p>
              </div>
            </div>

            {/* Subscription Section */}
            <div className="col-span-2">
              <h4 className="font-semibold text-gray-100">Stay up to date</h4>
              <form>
                <div className="mt-4 flex flex-col sm:flex-row gap-2 bg-white rounded-lg p-2 dark:bg-neutral-900">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="py-3 px-4 w-full border-transparent rounded-lg text-sm dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto p-3 text-sm font-medium rounded-lg btn btn-success text-white hover:bg-blue-700 focus:outline-none"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-400">
                  New UI kits or big discounts. Never spam.
                </p>
              </form>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-5 sm:mt-12 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 dark:text-neutral-400">
              © {new Date().getFullYear()} WanderAsia Group
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-3">
              {["facebook", "twitter", "linkedin", "github"].map((platform) => (
                <a
                  key={platform}
                  className="size-10 flex justify-center items-center rounded-lg text-white hover:bg-white/10 focus:bg-white/10"
                  href="#"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${platform}/${platform}-original.svg`}
                    alt={platform}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
      {/* ========== END FOOTER ========== */}
    </>
  );
};

export default Footer;
