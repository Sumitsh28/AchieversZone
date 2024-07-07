import React, { useState } from "react";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import Logo from "../../assets/website/vector.png";
import DarkMode from "./DarkMode";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const MenuLinks = [
  {
    id: 1,
    name: "Teachers",
    link: "/#about",
  },
  {
    id: 2,
    name: "Pricing",
    link: "/#pricing",
  },
  {
    id: 3,
    name: "Announcements",
    link: "/#Announcements",
  },
  {
    id: 4,
    name: "Contact Us",
    link: "/#contact",
  },
  {
    id: 5,
    name: "Notes",
    link: "/notes",
  },
];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div
      className="relative z-10 w-full dark:bg-black dark:text-white duration-300
    "
    >
      <div className="fixed top-0 left-0 w-full h-8 bg-gradient-to-r from-blue-500 to-green-500 text-white flex items-center justify-center overflow-hidden">
        <motion.div
          className="text-lg font-bold whitespace-nowrap"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <span className="mr-2">Registrations started. </span>
          <a
            href="https://forms.gle/fKyB9792DzVtBLKF7"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-200 hover:text-yellow-100"
          >
            Click Here to Register for best online courses ( ₹9 for
            registration)
          </a>
        </motion.div>
      </div>

      <div className="container mt-10">
        <div className="flex justify-between items-center">
          {/* Logo section */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="" className="w-[90px] h-[90px]" />
            <span className="text-lg md:text-3xl font-semibold text-primary">
              Achiever's
            </span>
            <span className="text-lg md:text-3xl font-semibold text-[#35AB9C]">
              Zone
            </span>
          </Link>
          {/* Desktop view Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {MenuLinks.map(({ id, name, link }) => (
                <li key={id} className="py-4">
                  {id === 5 ? (
                    <Link
                      to={link}
                      className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                    >
                      {name}
                    </Link>
                  ) : (
                    <a
                      href={link}
                      className=" text-lg font-medium  hover:text-primary py-2 hover:border-b-2 hover:border-primary transition-colors duration-500  "
                    >
                      {name}
                    </a>
                  )}
                </li>
              ))}
              <button
                className="primary-btn"
                onClick={() =>
                  window.open("https://forms.gle/fKyB9792DzVtBLKF7", "_blank")
                }
              >
                Get in Touch
              </button>
              <DarkMode />
            </ul>
          </nav>
          {/* Mobile view Drawer  */}
          <div className="flex items-center gap-4 md:hidden ">
            <DarkMode />
            {/* Mobile Hamburger icon */}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} toggle={toggleMenu} />
    </div>
  );
};

export default Navbar;
