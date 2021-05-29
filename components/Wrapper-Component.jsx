import loadable from '@loadable/component'

const Navigation = loadable(()=>import("./Navigation-Component"))
const Head = loadable(()=>import('next/head'))

export default function Wrapper({title, description, children}){
  return(
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/logo.webp"/>
      </Head>
      <Navigation></Navigation>
      <div className="min-h-screen bg-white z-0 mb-10 lg:mb-0">
        {children}
      </div>          
    </>
  )
}