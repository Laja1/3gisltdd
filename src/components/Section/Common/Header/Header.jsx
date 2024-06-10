"use client"
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="drop-shadow">
        <nav className="bg-black  border-gray-200 text-white">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">3GIS</span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <Link href="/contact-us">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                   Contact Us
                </button>
              </Link>
              <button
                onClick={toggleMenu}
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 bg-black dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={isMenuOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
            <div
            
              className={`items-center justify-between ${isMenuOpen ? "block border-gray-200  rounded-lg border" : "hidden border-0 border-black"}  w-full md:flex md:w-auto md:order-1`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0  text-white  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black ">
                <Link
                  href="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white "
                  }
                >
                  Home
                </Link>
                 <Link
                  href="/service"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white "
                  }
                >
                 Services
                </Link>
                  <Link
                  href="/Partners"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white "
                  }
                >
                 Partners
                </Link>
                <Link
                  href="/about-us"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 md:p-0 text-white rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                      : "block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white "
                  }
                >
                  About
                </Link>
               
                
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
