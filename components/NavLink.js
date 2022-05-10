import Link from 'next/link'

export default function NavLink({href, children}) {
  return (
    <div className='container'>
            <Link href={href} className="px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg lg:hover:bg-blue-200">
              <a className="px-2 py-2 text-gray-300 hover:text-white hover:bg-gray-700/40 rounded-lg lg:hover:bg-sky-500 transition duration-200 ease-in-out">
                {children}
                </a>
                </Link>
    </div>
  )
}
