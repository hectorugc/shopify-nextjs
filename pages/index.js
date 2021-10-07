
import {getProductInCollection} from "../lib/shopify"
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
export default function Home({products}) {
 
  return (
    <div className="">
     <Hero/>
     <ProductList products={products}/>
  
   </div>
  )
}





export async function getStaticProps() {
  const products = await getProductInCollection()
  return {
    props: {products}, // will be passed to the page component as props
  }
}


