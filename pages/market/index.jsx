import loadable from '@loadable/component'

import {useMarket} from '../../api/index'

const Wrapper = loadable(()=>import("../../components/Wrapper-Component"))
const Loading = loadable(()=>import("../../components/Loading-Component"))
const NotFound = loadable(()=>import("../../components/NotFound-Component"))

export default function Market(){

  const {resMarket, loadingMarket, notFoundMarket} = useMarket()

  if(loadingMarket){
    <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
      <Loading></Loading>
    </Wrapper>
  }

  else if(notFoundMarket){
    <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
      <NotFound></NotFound>
    </Wrapper>
  }

  else{
    return(
      <Wrapper title={"Market - Kotakjualan.com"} description={"Page ini akan menampilkan semua barang yang tersedia pada toko Kotakjualan.com"}>
        Hello
      </Wrapper>
    )
  }

}