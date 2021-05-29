import loadable from '@loadable/component'

const Wrapper = loadable(()=>import("../components/Wrapper-Component"))
const Banner = loadable(()=>import("../components/Home-Component/Banner-Component"))

export default function Index(){
  return(
    <Wrapper title={"Dashboard -  Kotakjualan.com"} description={"Dashboard kotakjualan user merupakan landing page dari Kotakjualan.com"}>
      <Banner></Banner>
    </Wrapper>
  )
}