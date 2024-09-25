import React from "react";
import NavLink from "./NavLink";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { auth } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Tours",
    path: "/tours",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const MenuOverlay = ({ links }) => {
  const { isLoggedIn, user } = useAuth();

  return (
    <ul className="absolute top-[115px] left-0 z-50 bg-[rgba(255,255,255,0.88)] backdrop-blur w-full flex flex-col justify-center gap-y-10  text-base font-light pl-8 pb-10">
      {isLoggedIn && (
        <div className="flex flex-col items-center py-20">
          {navLinks.map((link, index) => (
            <li key={index} className="py-10 text-2xl">
              <NavLink href={link.path} title={link.title} />
            </li>
          ))}
          <button
            className=" text-black font-light px-6 py-2 flex items-center border-black border-2 hover:bg-black hover:text-white text-2xl"
            variant="contained"
            color="secondary"
            onClick={() => auth.signOut()}
          >
            <span className="pl-">Logout</span>
          </button>
        </div>
      )}
      {!isLoggedIn && (
        <div className="flex justify-center items-center py-20">
          <button
            className=" text-black font-light px-6 py-2 flex items-center border-black border-2 hover:bg-black hover:text-white text-2xl"
            variant="contained"
            color="secondary"
            onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
          >
            <FaGoogle /> <span className="pl-2">Login</span>
          </button>
        </div>
      )}
    </ul>
  );
};

export default MenuOverlay;
