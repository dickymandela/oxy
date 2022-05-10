import ResponsiveNavLink from "./ResponsiveNavLink";
import { Menu } from "@headlessui/react";

export default function MobileNav() {
  return (
    <Menu
      as="div"
      className="flex md:hidden items-center justify-between py-2.5 px-4 border-b border-gray-500"
    >
      <ResponsiveNavLink href="/" className="text-white font-medium text-lg uppercase">
        <a>oxy water</a>
      </ResponsiveNavLink>

      <Menu.Button className="focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </Menu.Button>

      <Menu.Items >
        <div >
        <div className="bg-white absolute right-0 mr-12 top-0 mt-4 py-1 rounded-lg w-56 overflow-hidden">
          <ResponsiveNavLink  href="/"><a>Home</a></ResponsiveNavLink>
          {/* <ResponsiveNavLink  href="/About"><a>About</a></ResponsiveNavLink> */}
          <ResponsiveNavLink  href="/Testimonials"><a>Testimonials</a></ResponsiveNavLink>
          <ResponsiveNavLink  href="/Contact"><a>Contact</a></ResponsiveNavLink>
        </div>
        </div>
      </Menu.Items>
    </Menu>
  );
}
