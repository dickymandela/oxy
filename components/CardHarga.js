
function CardHarga(props) {
    return (
      <div className="container w-80 mx-auto bg-purple-800  shadow-md rounded">
        <div className="p-10 shadow-md items-center justify-center">
          <h1 className="text-gray-100 font-bold text-xl capitalize subpixel-antialiased">
            {props.content.paket}
          </h1>
          <h2 className="pt-2 text-gray-100 font-bold text-3xl capitalize subpixel-antialiased">
            {props.content.harga}
          </h2>
          <h3 className="pt-2 text-gray-100 text-base antialiased leading-7">
            {props.content.deskripsi}
          </h3>
  
          <div className="mt-8 mx-auto">
            <a
              className="shadow-md  py-2 px-4 text-indigo-700 font-semibold tracking-wider
                cursor-pointer bg-white hover:bg-purple-700 hover:text-white rounded text-lg text-center w-48"
              href="https://api.whatsapp.com/send/?phone=6282126161609&text=Halo+ka%2C+saya+mau+pesan+Oxy+water&app_absent=0"       
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardHarga;
  