import { Menu } from "@headlessui/react";
import Link from 'next/link'
export default function ResponsiveNavLink({ href, children }) {
  return (
    <Menu.Item>
      <Link
        href={href}
        className="block px-4 py-2 overflow-hidden bg-purple-50 shadow-sm hover:bg-indigo-500 text-gray-500 hover:text-white"
      >
       <a className="block px-4 py-2 overflow-hidden bg-purple-50 shadow-sm hover:bg-indigo-500 text-gray-500 hover:text-white">{children}</a> 
      </Link>
    </Menu.Item>
  );
}
