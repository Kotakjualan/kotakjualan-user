import useSWR from 'swr'

import {getKeranjang} from '../helper/localStorage'

export const useKeranjang = () => {
  const {data, error} = useSWR("/v1/api/keranjang/", getKeranjang)  
  const loadingKeranjang = !data && !error  
  return{
    resKeranjang : data,
    loadingKeranjang
  }
}