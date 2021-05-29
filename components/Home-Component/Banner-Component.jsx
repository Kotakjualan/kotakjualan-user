export default function BannerComponent(){
  return(
    <div className="xl:min-h-screen px-4 md:px-10 py-20 text-center">
      <p className=" text-gray-800">Hai kamu pengunjung Kotakjualan.com, Apa kabar?</p>
      <p className="mt-5 text-4xl md:text-7xl font-semibold">Kotakjualan.com</p>      
      <p className="mt-5 text-lg text-gray-800">Platform Pasar Murah dan Mudah.</p>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 md:justify-center mt-10">
        <button className="bg-black px-5 py-2 text-white font-semibold hover:bg-white border-2 hover:border-black rounded hover:text-gray-800">Explore Sekarang</button>
        <button className="text-gray-800 px-5 py-2 border-2 border-black rounded font-semibold hover:text-gray-600">Keranjang</button>
      </div>
    </div>
  )
}