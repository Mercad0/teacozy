import Link from "next/link";
import React from "react";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="h-16 fixed border-b bg-black border-b-white w-full shadow-md font-bold z-50 text-white">
        <div className="flex items-center justify-between">
          <picture>
            <img
              className="h-14 pt-2 px-4 transform hover:scale-105"
              src="https://content.codecademy.com/courses/freelance-1/unit-4/img-tea-cozy-logo.png?_gl=1*1hzum4a*_ga*ODc5NTYxNDkyMy4xNjcwODcxMzAw*_ga_3LRZM6TM9L*MTY3ODIxOTg5My4zNS4xLjE2NzgyMTk5MjkuMjQuMC4w"
              alt="logo"
            />
          </picture>
          <ul className="hidden space-x-7 pr-4 text-2xl md:flex">
            <li className="transform hover:scale-105 border-b-2">
              <Link href="#mission" className="hover:text-orange-600">
                Mission
              </Link>
            </li>
            <li className="transform hover:scale-105 border-b-2">
              <Link href="#featuredTeas" className="hover:text-orange-600">
                Featured Tea
              </Link>
            </li>
            <li className="transform hover:scale-105 border-b-2">
              <Link href="#locations" className="hover:text-orange-600">
                Locations
              </Link>
            </li>
          </ul>
          <button
            className="block md:hidden ml-auto px-4 text-white"
            onClick={toggle}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>
      <MobileNav isOpen={isOpen} onClose={toggle} />
    </>
  );
}

export default NavBar;
