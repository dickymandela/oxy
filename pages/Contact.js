import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image"

export default function Contact() {
  return (
    <div>
      <Header />
      {/* Section Hero */}
      <div className="bg-gradient-to-br from-sky-600 to-indigo-600 py-4">
        <h1 className="mt-8 text-center text-5xl text-gray-100 font-bold subpixel-antialiased">
          Kontak &amp; Layanan.
        </h1>
        {/* Box */}
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* box-1 */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-600 mx-auto md:mx-0">
            <div className="w-sm">
              <Image
                className="w-64"
                src="/c1.jpg"
                alt="c1"
                width={500}
                height={500}
              />
              <div className="mt-4 text-indigo-600 text-center">
                <h1 className="text-xl font-bold">Produk</h1>
                <p className="mt-4 text-gray-600 leading-7 subpixel-antialiased tracking-tright">
                  Produk sudah dipastikan aman dan terdaftar di BPOM
                  dan sejenisnya.
                </p>
              </div>
            </div>
          </div>
          {/* box-2 */}
          <div className="mt-16 py-4 px-4 w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-600 mx-auto md:mx-0">
            <div className="w-sm">
              <Image
                className="w-64"
                src="/c2.jpg"
                alt="c2"
                width={500}
                height={500}
              />
              <div className="mt-4 text-indigo-600 text-center">
                <h1 className="text-xl font-bold tracking-tright">
                  Layanan Produk
                </h1>
                <p className="mt-4 text-gray-600 leading-7 subpixel-antialiased tracking-tright">
                  Memfasilitasi layanan pengembalian produk jika produk yang
                  anda terima tidak sesuai.
                </p>
              </div>
            </div>
          </div>
          {/* box-3 */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-600 mx-auto md:mx-0">
            <div className="w-sm">
              <Image
                className="w-64"
                src="/c3.jpg"
                alt="c3"
                width={500}
                height={500}
              />
              <div className="mt-4 text-indigo-600 text-center">
                <h1 className="text-xl font-bold tracking-tright">
                  Layanan Pelanggan
                </h1>
                <p className="mt-4 text-gray-600 leading-7 subpixel-antialiased tracking-tright text-justify">
                Menghadirkan layanan Customer Care yang siaga
                  membantu Anda dalam berkonsultasi atau bertanya seputar produk
                  dan layanan kami.{" "}
                </p>
                {/* <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-indigo-600 text-white tracking-widest hover:bg-indigo-600 transition duration-200">
          MORE
        </button> */}
              </div>
            </div>
          </div>
        </div>
        <section className="container px-6 py-6 mx-auto">
          <h1 className="mt-8 pb-8 text-center items-center justify-center mx-auto flex lg:text-5xl font-sans text-3xl text-indigo-50 font-bold subpixel-antialiased">
            Kontak Pemesanan
          </h1>
          <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}

            <div className="flex items-center p-4 text-indigo-50   dark:bg-gray-800">
              <div className="p-3 mr-4 text-indigo-600 bg-indigo-100 rounded-full">
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
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-medium uppercase font-medium text-indigo-50">
                  Alamat
                </p>
                <p className="text-sm font-normal text-indigo-50 capitalize leading-6 tracking-wide">
                  Jl. Rancasawo No.168 27A Kel. Margasari Kec. Buah Batu Kota
                  Bandung Jawa Barat
                </p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-center p-4  text-indigo-50 dark:bg-gray-800">
              <div className="p-3 mr-4 text-indigo-600 bg-indigo-100 rounded-full">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-50 uppercase">
                  Telpon &amp; Whatsapp
                </p>
                <p className="text-sm font-normal text-indigo-50 capitalize leading-6 tracking-wide">
                  08989510595
                </p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-center p-4  text-indigo-50 dark:bg-gray-800">
              <div className="p-3 mr-4 text-indigo-600 bg-indigo-100 rounded-full">
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
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-50">Email</p>
                <p className="text-sm font-normal text-indigo-50">
                  Admin@Oxy-web.com
                </p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex items-center p-4  text-indigo-50 dark:bg-gray-800">
              <div className="p-3 mr-4 text-indigo-600 bg-indigo-100  rounded-full">
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
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
                />
              </div>
              <div>
                <p className="mb-2 text-sm font-medium text-indigo-50 uppercase">
                  No Rekening
                </p>
                <p className="text-sm font-normal text-indigo-50">
                  089098-1290921-12898
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
