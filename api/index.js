import useSWR from 'swr'

import {getKeranjang} from '../helper/localStorage'
import {NET} from '../helper/axios'

const fetcher = async (url) => {
  return await NET("GET",url)
}

export const useKeranjang = () => {
  const {data, error} = useSWR("/keranjang/", getKeranjang)  
  const loadingKeranjang = !data && !error  
  return{
    resKeranjang : data,
    loadingKeranjang
  }
}

export const useMarket = () => {
  const {data, error} = useSWR("/barang/", fetcher)
  const loadingMarket = !data && !error
  const notFoundMarket = (data?.data?.length === 0) || (data?.data == null)
  return{
    resMarket : data?.data,
    loadingMarket,
    notFoundMarket
  }
}