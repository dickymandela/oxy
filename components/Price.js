import Image from 'next/image'

export const Price = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto text-center">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="bc9273ce-29bb-4565-959b-714607d4d027"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#bc9273ce-29bb-4565-959b-714607d4d027)"
                  width="52"
                  height="24"
                />
              </svg>
            </span>{' '}
            Harga Air Oxy
          </h2>
          <p className="text-base text-rose-700 md:text-lg text-center">
            Harga belum Termasuk Ongkir .
          </p>
        </div>
        <div className="grid max-w-md gap-10 row-gap-8 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
              <Image
                src="/h1.webp"
                className="object-cover w-full h-full rounded-t absolute"
                alt="1"
                width={500} 
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Basic</div>
                <p className="text-sm text-gray-900">
                1 dus 24 botol
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl pt-3">
                  Rp. 230.000
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=6282126161609&text=Pesan+Paket+Basic&app_absent=0"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none"
              >
                Pesan Basic
              </a>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
            <Image
                src="/h1.webp"
                className="object-cover w-full h-full rounded-t absolute"
                alt="2"
                width={500} 
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Popular</div>
                <p className="text-sm text-gray-900">
                3 dus 72 botol
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl pt-3">
                  Rp. 620.000
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=6282126161609&text=Pesan+Paket+Populer&app_absent=0"
                className="inline-flex  items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none"
              >
                Pesan Populer
              </a>
            </div>
          </div>
          <div className="flex flex-col transition duration-300 bg-white rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
            <Image
                src="/h1.webp"
                className="object-cover w-full h-full rounded-t absolute "
                alt="3"
                width={500} 
                height={300}
              />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
              <div>
                <div className="text-lg font-semibold">Special</div>
                <p className="text-sm text-gray-900">
                6 dus 144 botol
                </p>
                <div className="mt-1 mb-4 mr-1 text-4xl font-bold sm:text-4xl">
                  Rp. 1.200.000
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send/?phone=6282126161609&text=Pesan+Paket+Special&app_absent=0"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-sky-600 hover:bg-sky-500 focus:shadow-outline focus:outline-none"
              >
                Pesan Special
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };