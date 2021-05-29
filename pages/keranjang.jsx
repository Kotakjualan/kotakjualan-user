import loadable from '@loadable/component'
import React from 'react'

import {useKeranjang} from '../api/index'
import {GoX} from 'react-icons/go'

const Loading = loadable(()=>import('../components/Loading-Component'))
const NotFound = loadable(()=>import("../components/NotFound-Component"))
const Wrapper = loadable(()=>import("../components/Wrapper-Component"))
const Image = loadable(()=>import("../components/ImageLazy-Component"))

export default function Keranjang(){

  const {loadingKeranjang, resKeranjang} = useKeranjang()

  if(loadingKeranjang){
    return(
      <Loading></Loading>
    )
  }
  else if(!resKeranjang == null || !resKeranjang?.length === 0){
    return(
      <NotFound></NotFound>
    )  
  }
  else{
    return(
      <Wrapper title={"Keranjang - Kotakjualan.com"} description={"Page ini akan menampilkan seluruh barang yang kamu ingin belanjakan"}>
        <div className="w-full flex flex-wrap md:px-10 px-4 lg:pt-10 pt-4">
          <div className="w-full lg:w-3/5">
            <div className="lg:pr-5">
              <div className="pb-5 lg:pb-10">
                <p className="text-2xl font-semibold text-gray-800">Halaman Keranjang</p>
                <p className="pt-1 text-sm text-gray-800">
                  Halaman ini akan memberikan kamu akses untuk melihat kembali barang yang telah kamu masukan ke dalam keranjang
                  dan kamu juga dapat melihat sub total dari seluruh barang yang kamu beli
                </p>
              </div>
              <div className="flex flex-wrap pt-5 lg:pt-0">
                <div className="lg:h-48 lg:w-48 w-full">
                  <Image src={"/produk1.webp"} className="object-cover rounded-lg"></Image>
                </div>
                <div className="flex flex-1 justify-between lg:pl-5 pt-5 lg:pt-0">                  
                  <div>
                    <p className="text-xs font-light text-gray-700">Kamu membeli produk ini sebanyak 10 item</p>
                    <p className="text-xl text-gray-800 mb-4">Laptop Asus - ROG</p>
                    <p className="text-sm text-gray-800">Harga X QTY</p>
                    <p className="text-xl">Subtotal</p>
                  </div>                  
                  <div>
                    <div className="p-1 hover:bg-gray-200 rounded-xl">
                      <GoX size={30} className="text-gray-800 cursor-pointer"></GoX>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap pt-5 lg:pt-0">
                <div className="lg:h-48 lg:w-48 w-full">
                  <Image src={"/produk1.webp"} className="object-cover rounded-lg"></Image>
                </div>
                <div className="flex flex-1 justify-between lg:pl-5 pt-5 lg:pt-0">                  
                  <div>
                    <p className="text-xs font-light text-gray-700">Kamu membeli produk ini sebanyak 10 item</p>
                    <p className="text-xl text-gray-800 mb-4">Laptop Asus - ROG</p>
                    <p className="text-sm text-gray-800">Harga X QTY</p>
                    <p className="text-xl">Subtotal</p>
                  </div>                  
                  <div>
                    <div className="p-1 hover:bg-gray-200 rounded-xl">
                      <GoX size={30} className="text-gray-800 cursor-pointer"></GoX>
                    </div>
                  </div>
                </div>
              </div>              
            </div>            
          </div>
          <div className="w-full lg:w-2/5 lg:shadow-xl rounded-lg">
            <div className="lg:px-5 py-7">     
              <p className="text-xl font-semibold text-gray-800 ">Ringkasan Tagihan</p>         
              <p className="text-sm pt-1 text-gray-800">Bagian ini akan menampilkan secara detail subtotal dari keseluruhan tagihan yang harus di bayarkan</p>
              <div className="pt-10 flex justify-between">
                <p className="text-lg font-semibold text-gray-800">Subtotal</p>
                <p className="text-gray-800">Rp.100.000</p>
              </div>
              <div className="pt-4 flex justify-between">
                <p className="font-medium text-gray-800">Biaya Runner</p>
                <p className="text-gray-800">Free</p>
              </div>
              <p className="text-sm mt-10 text-gray-800">Catatan Pesanan</p>
              <textarea className="mt-1 rounded px-2 text-sm py-2 text-gray-800 w-full h-20 ring-1 ring-gray-800"></textarea>
              <p className="text-xs text-red-500">*Pastikan kamu juga menuliskan alamat kamu yaa :)</p>
              <button className="bg-black text-white font-semibold w-full py-3 rounded mt-10 hover:bg-gray-900">Beli Sekarang (Rp. 1.000.000)</button>
            </div>
          </div>
        </div>
      </Wrapper>
    )
  }

}  