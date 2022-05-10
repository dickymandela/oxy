import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Image from 'next/Image'



export default function Hero() {
  return (
    <div className="bg-gradient-to-br from-sky-600 to-indigo-600 ">
      <MobileNav />
      <div className="hidden md:block border-b border-white/10 py-3">
        <div className="container">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-x-2">
              <NavLink
                href="/"
                
              >
                <a className="text-white font-medium text-lg uppercase mr-6 px-10 py-3">oxy water</a></NavLink>
            
            </div>
            <div className="flex items-center gap-x-4 text-gray-300 tracking-tigh antialiased">
              <NavLink href="/"><a>Home</a></NavLink>
              {/* <NavLink href="/About"><a>About</a></NavLink> */}
              <NavLink href="/Testimonials"><a>Testimonials</a></NavLink>
              <NavLink href="/Contact"><a>Contact</a></NavLink>
            </div>
          </nav>
        </div>
      </div>

      <div className=" w-full h-full mx-auto">
        <div className=" grid lg:grid-cols-2 2xl:grid-cols-5">
          <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
            <div className="xl:max-w-xl">
        
              <h1 className="mt-6 text-3xl font-bold leading-none tracking-tighter text-gray-100 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl ">
                Tetap Sehat Minum air Oxy
                <br className="hidden lg:inline" />
                <span className="text-lime-400 font-bold  tracking-tighter text-2xl leading-8">
                  {" "}
                  Mengandung Oksigen Tinggi.
                </span>
              </h1>
              <p className="mt-2 text-gray-100 sm:mt-4 sm:text-xl text-base md:text-sm leading">
                Kesehatan adalah kekayaan utama dan investasi masa depan yang
                perlu kita jaga sejak dini. Supaya kebutuhan cairan tubuh dapat
                terpenuhi dengan baik.
              </p>
              <div className="mt-4 sm:mt-6">
                <NavLink
                  className="inline-block px-5 py-3 rounded-lg bg-white uppercase tracking-wider font-semibold text-sm text-indigo-600 shadow-lg sm:text-base"
                  href="#"
                ></NavLink>
                <a> Pesan Sekarang
                </a>
              </div>
            </div>
          </div>
          <div className="hidden relative lg:block 2xl:col-span-3">
          <Image
                className=" mt-3 rounded-lg shadow-xl sm:mt-2 sm:h-16 sm:w-16 sm:object-cover object-center lg:hidden"
                src="/hero.png"
                alt="hero "
                width={500}
                height={500}
                
              />
          </div>
        </div>
      </div>
    </div>
  );
}
