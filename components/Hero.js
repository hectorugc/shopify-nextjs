import Link from "next/link"
import Image from 'next/image'
import { Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'

const Hero = ({collections}) => {

  const images = []

  collections.edges.map((item,index) =>{
    const handle =  item.node.handle
    const image = item.node.image.originalSrc
    const alt = item.node.image.altText
    const width = item.node.image.width
    const height = item.node.image.height
   images.push(
     <SwiperSlide key={`slide-${index}`}>
       <Image src={image} alt={alt} layout="fill" objectFit="cover" width={width} height={height}/>
     </SwiperSlide>
   )
  })

  SwiperCore.use([Navigation,Pagination]) 
    
    return (
       <>
        <section className="text-blueGray-700 ">
        <div className="container flex flex-col px-5 py-24 mx-auto lg:items-center">
          <div className="flex flex-col w-full mb-12 text-left lg:text-center">
            <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">a great header right here</h2>
            <h1 className="mb-6 text-2xl font-semibold tracking-tighter text-black sm:text-5xl title-font"> A centered <br className="md:hidden"/> medium length headline. </h1>
            <p className="mx-auto text-base font-medium leading-relaxed text-blueGray-700 lg:w-2/3">You're about to launch soon and must be 100% focused on your product. Don't loose precious days designing, coding the landing page and testing . </p>
          </div>
          <div className="flex justify-left lg:justify-center ">
            <button className="flex items-center px-6 py-2 mt-auto mr-3 font-semibold text-white transition duration-500 ease-in-out transform bg-gray-900 rounded-lg hover:bg-gray-200 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Button</button>
            <button className="flex items-center px-6 py-2 mt-auto font-semibold text-white transition duration-500 ease-in-out transform bg-black rounded-lg hover:bg-gray-700 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Button</button>
          </div>
        </div>
      </section>
      <div className="max-w-md ml-auto mr-auto border bg-white object-center	 rounded-2xl overflow-hidden shadow-lg md:w-1/2" >
     
      <Swiper
       style={{'--swiper-navigation-color':'#000','--swiper-navigation-color':'#000'}}
       navigation
       pagination={{clickable:true}}
       className="h-96  rounded-2xl "
       loop="true"
       >
         {images}
       </Swiper>
    
      </div>
       
       <br />
       <br />
       <br />
       <br />
        
    </>
    )
}

export default Hero
