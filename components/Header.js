import React from "react";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";

export default function Header() {
  return (
    <div className="bg-gradient-to-br from-sky-600 to-indigo-600">
         <MobileNav />
      <div className="hidden md:block border-b border-white/10 py-5">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <NavLink
                href="/"
               
              >
                <a  className="text-white font-medium text-lg uppercase ml-3 px-7 py-3">oxy water</a>
              </NavLink>
            </div>
            <div className="flex items-center gap-x-4 text-gray-300 tracking-tigh antialiased">
              <NavLink href="/">
                <a>Home</a>
              </NavLink>
              {/* <NavLink href="/About">
                <a>About</a>
              </NavLink> */}
              <NavLink href="/Testimonials">
                <a>Testimonials</a>
              </NavLink>
              <NavLink href="/Contact">
                <a>Contact</a>
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
