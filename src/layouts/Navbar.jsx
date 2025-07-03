import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { MdSunny } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import { useCarousel } from "@/contexts/CarouselInViewContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { carouselInView, setCarouselInView } = useCarousel();

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="absolute sm:fixed top-0 mt-5 left-0 w-full h-20 bg-transparent px-4 sm:px-6 z-50 ">
      <div
        className={`absolute left-1/2 -translate-x-1/2 top-20 h-10 sm:h-20 flex items-center justify-center sm:top-0
               px-4 sm:px-6 ${
                 carouselInView
                   ? "bg-white"
                   : "bg-black dark:bg-white dark:bg-opacity-10 "
               } bg-opacity-10 backdrop-blur-md rounded-full z-50 transition-all ease-in-out duration-300`}
      >
        {/* Center: Navigation */}
        <ul className="flex gap-2 sm:gap-10 items-center">
          <li>
            <a
              href="/"
              className={`${
                location.hash === ""
                  ? "text-custom-accent font-bold "
                  : carouselInView
                  ? "text-custom-text-dark"
                  : "text-custom-text dark:text-custom-text-dark"
              } hover:text-custom-accent-hover text-sm sm:text-base transition-all ease-in-out duration-300`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className={`${
                location.hash === "#products"
                  ? "text-custom-accent font-bold "
                  : carouselInView
                  ? "text-custom-text-dark"
                  : "text-custom-text dark:text-custom-text-dark"
              } hover:text-custom-accent-hover text-sm sm:text-base transition-all ease-in-out duration-300`}
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#why"
              className={`${
                location.hash === "#why"
                  ? "text-custom-accent font-bold "
                  : carouselInView
                  ? "text-custom-text-dark"
                  : "text-custom-text dark:text-custom-text-dark"
              } hover:text-custom-accent-hover  text-sm sm:text-base transition-all ease-in-out duration-300`}
            >
              Why
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={`${
                location.hash === "#about"
                  ? "text-custom-accent font-bold "
                  : carouselInView
                  ? "text-custom-text-dark"
                  : "text-custom-text dark:text-custom-text-dark"
              } hover:text-custom-accent-hover text-sm sm:text-base transition-all ease-in-out duration-300`}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`${
                location.hash === "#contact"
                  ? "text-custom-accent font-bold "
                  : carouselInView
                  ? "text-custom-text-dark"
                  : "text-custom-text dark:text-custom-text-dark"
              } hover:text-custom-accent-hover text-sm sm:text-base transition-all ease-in-out duration-300`}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center sm:justify-between w-full h-full">
        {/* Left: Logo */}
        <div className="flex items-center justify-center sm:mb-0 mb-4">
          <img
            className="size-20 cursor-pointer"
            src="/logo.png"
            alt="Logo"
            onClick={() => navigate("/")}
          />
        </div>

        {/* Right: Theme toggle */}
        <div className="absolute right-1 -translate-y-2 sm:translate-y-0 mr-4 sm:mr-0 sm:static  flex items-center">
          <button
            onClick={toggleTheme}
            className="size-8 rounded-full flex items-center justify-center transition-colors duration-300 bg-custom-accent ml-2 sm:ml-4"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <MdSunny className="size-5 text-white" />
            ) : (
              <BsFillMoonStarsFill className="size-5 text-custom-text" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
