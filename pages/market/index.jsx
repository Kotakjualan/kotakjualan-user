import loadable from '@loadable/component'

import {useMarket} from '../../api/index'
import {FiSearch} from 'react-icons/fi'

const Link = loadable(()=>import("next/link"))
const Wrapper = loadable(()=>import("../../components/Wrapper-Component"))
const Loading = loadable(()=>import("../../components/Loading-Component"))
const NotFound = loadable(()=>import("../../components/NotFound-Component"))
const Image = loadable(()=>import("../../components/ImageLazy-Component"))

export default function Market(){

  const {resMarket, loadingMarket, notFoundMarket} = useMarket()

  if(loadingMarket){
    return(
      <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
        <Loading></Loading>
      </Wrapper>
    )
  }

  else if(!notFoundMarket){
    return(
      <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
        <NotFound></NotFound>
      </Wrapper>
    )
  }

  else{
    return(
      <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
        <div className="px-4 md:px-10 pt-10 w-full">
          <div className="flex justify-center">
            <div className="w-full md:w-96 shadow-xl rounded-full flex bg-white-400 px-4 py-2 ring-1 ring-gray-300">
              <input type="text" placeholder="Mau cari apa hari ini?" className="flex-1 px-2 outline-none ring-0 py-1 text-sm text-gray-800" />
              <button>
                <FiSearch size={25}></FiSearch>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-4 mt-10">
            
            <Link href={`/market/123`}>
              <div className="w-full rounded-lg overflow-hidden shadow md:shadow-lg my-2 cursor-pointer">
                <Image className="object-cover w-full h-48" src={"/produk1.webp"} />
                <div className="px-4 md:px-4 pt-4 pb-2">
                  <div className="font-extralight text-sm text-blue-600">{`Stok (10)`}</div>
                  <div className="font-extralight text-lg text-gray-800">{`Indomie Goreng`}</div>
                  <p className=" text-xl pt-4 font-semibold">
                    Rp.100.000
                  </p>
                </div>
                <div className="px-4 md:px-4 pb-4 text-sm text-gray-500">                                        
                </div>
              </div>
            </Link>            

            <Link href={`/market/123`}>
              <div className="w-full rounded-lg overflow-hidden shadow md:shadow-lg my-2 cursor-pointer">
                <Image className="object-cover w-full h-48" src={"/produk1.webp"} />
                <div className="px-4 md:px-4 pt-4 pb-2">
                  <div className="font-extralight text-sm text-blue-600">{`Stok (10)`}</div>
                  <div className="font-extralight text-lg text-gray-800">{`Indomie Goreng`}</div>
                  <p className=" text-xl pt-4 font-semibold">
                    Rp.100.000
                  </p>
                </div>
                <div className="px-4 md:px-4 pb-4 text-sm text-gray-500">                                        
                </div>
              </div>
            </Link>            

            <Link href={`/market/123`}>
              <div className="w-full rounded-lg overflow-hidden shadow md:shadow-lg my-2 cursor-pointer">
                <Image className="object-cover w-full h-48" src={"/produk1.webp"} />
                <div className="px-4 md:px-4 pt-4 pb-2">
                  <div className="font-extralight text-sm text-blue-600">{`Stok (10)`}</div>
                  <div className="font-extralight text-lg text-gray-800">{`Indomie Goreng`}</div>
                  <p className=" text-xl pt-4 font-semibold">
                    Rp.100.000
                  </p>
                </div>
                <div className="px-4 md:px-4 pb-4 text-sm text-gray-500">                                        
                </div>
              </div>
            </Link>            

            <Link href={`/market/123`}>
              <div className="w-full rounded-lg overflow-hidden shadow md:shadow-lg my-2 cursor-pointer">
                <Image className="object-cover w-full h-48" src={"/produk1.webp"} />
                <div className="px-4 md:px-4 pt-4 pb-2">
                  <div className="font-extralight text-sm text-blue-600">{`Stok (10)`}</div>
                  <div className="font-extralight text-lg text-gray-800">{`Indomie Goreng`}</div>
                  <p className=" text-xl pt-4 font-semibold">
                    Rp.100.000
                  </p>
                </div>
                <div className="px-4 md:px-4 pb-4 text-sm text-gray-500">                                        
                </div>
              </div>
            </Link>            

          </div>
        </div>
      </Wrapper>
    )
  }

}