import loadable from '@loadable/component'  

import {AiOutlineHome} from  'react-icons/ai'
import {GoSearch, GoHeart} from 'react-icons/go'

const Link = loadable(()=>import("next/link"))
const Image = loadable(()=>import("next/image"))

export default function Navigation(){
  return(
    <>
    <div className="hidden md:block w-full border-b-2 border-gray-200">
      <div className="flex flex-wrap justify-between justify-items-center px-5 py-3">        
        <div className="flex content-center px-5 cursor-pointer">
          <Image src={"/logo.webp"} height={32} width={40} priority={true}></Image>
          <p className="pl-2 text-lg font-semibold text-gray-800 pt-1">Kotakjualan</p>
        </div>
        <div className="flex justify-items-center space-x-4 ">
          <Link href="/">
            <p className="px-4 py-2 cursor-pointer text-gray-800 font-medium rounded hover:bg-gray-200 hover:font-semibold">Home</p>
          </Link>
          <Link href="/market">
            <p className="px-4 py-2 cursor-pointer text-gray-800 font-medium rounded hover:bg-gray-200 hover:font-semibold">Market</p>          
          </Link>
          <Link href="/keranjang">
            <p className="px-4 py-2 cursor-pointer text-gray-800 font-medium rounded hover:bg-gray-200 hover:font-semibold">Keranjang</p>          
          </Link>
        </div>
      </div>
    </div>
    <div className="md:hidden fixed w-full bottom-0 bg-white text-gray-800 border-t-2 border-gray-200">
      <div className="flex flex-wrap">
        <Link href="/">
          <div className="w-2/6 flex justify-center cursor-pointer p-2 hover:bg-gray-200">
            <AiOutlineHome size={25}></AiOutlineHome>          
          </div>
        </Link>
        <Link href="/market">
          <div className="w-2/6 flex justify-center cursor-pointer p-2 hover:bg-gray-200">
            <GoSearch size={25}></GoSearch>
          </div>
        </Link>
        <Link href="/keranjang">
          <div className="w-2/6 flex justify-center cursor-pointer p-2 hover:bg-gray-200">
            <GoHeart size={25}></GoHeart>
          </div>
        </Link>
      </div>
    </div>
    </>
  )
}