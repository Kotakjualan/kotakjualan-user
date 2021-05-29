import loadable from '@loadable/component'

const Wrapper = loadable(()=>import("../../components/Wrapper-Component"))
const Image = loadable(()=>import("../../components/ImageLazy-Component"))

export default function DetailMarket(){
  return(
    <Wrapper title="Market - Gadai Syariah Indonesia" description="This page will provide access to users to buy and sell gold">
      <div className="px-4 lg:px-10 mt-10">
        <div className="flex flex-wrap mb-20">  
          <div className="w-full lg:w-1/4">
            <div className="">
              <Image className="w-full rounded-lg object-cover" src={`/produk1.webp`} ></Image>
            </div>
          </div>
          <div className="w-full lg:w-2/4">
            <div className="lg:px-10">
              <div className="text-lg mb-1">
                <span>{`Toko Reza - Indomie Goreng`}</span>
              </div>
              <div className="text-sm font-light text-blue-500 mb-5">
                <span>{`Stok (10})`}</span>
              </div>
              <div className="text-4xl font-bold mb-10">
                <span>{`Rp.100.000`}</span>
              </div>
              <div className="text-xl text-blue-500 font-bold">
                <span>Description :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`Indomie merupakan makanan cepat saji berbentuk mie`}</span>
              </div>
              <div className="text-base font-bold mb-1 mt-5">
                <span>Brand :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`Indofood`}</span>
              </div>
              <div className="text-base font-bold mb-1 mt-5">
                <span>Kategori :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`Makanan Ringan`}</span>
              </div>
              <div className="text-base font-bold mb-1 mt-5">
                <span>Weight :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`10 gram`}</span>
              </div>
              <div className="text-base font-bold mb-1 mt-5">
                <span>Maximal Order :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`10 item`}</span>
              </div>
              <div className="text-base font-bold mb-1 mt-5">
                <span>Minimal Order :</span>
              </div>
              <div className="text-sm text-gray-500 text-justify">
                <span>{`1 item`}</span>
              </div>                  
            </div>
          </div>
          <div className="w-full lg:w-1/4 mt-20 lg:mt-0">
            <div className="lg:shadow-xl lg:p-7 rounded">
              <div className="text-2xl font-semibold">
                <span>Atur Pembelian</span>
              </div>
              
              <div className="text-xs mt-1" >
                <span>Section ini akan memberikan kamu akses untuk mengatur pembelian pada produk</span>
              </div>
              <div className="text-sm text-gray-500 text-justify mt-5" >
                <span>Sisa stok</span>
              </div>
              <div className="text-base font-bold mb-1">
                <span>{`2 item`}</span>
              </div>                 

              <div className="text-sm text-gray-500 text-justify mt-5" >
                <span>Subtotal</span>
              </div>
              <div className="text-xl font-bold mb-1">
                <span>{`Rp.100.000`}</span>
              </div>                 

              <div className="my-5">
                <div className="mb-2">
                  <span>Stok Pembelian</span>
                </div>
                <input className="w-full p-2 rounded hover:border-yellow-300 ring-1 ring-gray-400" type="number"></input>
              </div>

              <button className="mt-2 w-full bg-yellow-400 hover:bg-yellow-500 rounded text-white font-semibold p-3">
                + Keranjang
              </button>                                    
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}