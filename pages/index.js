import {getProductInCollection,getCollections, getProductInCollectionAutom} from "../lib/shopify"
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import { PromoSection } from "../components/PromoSection";
export default function Home({products,collections,productAutumn}) {
console.warn("Collections Autumn",productAutumn);
  return (
    <div className="">
     <Hero collections={collections}/>
     <PromoSection  productAutumn={productAutumn}/>
     <ProductList products={products}/>
    
   </div>
  )
}





export async function getStaticProps() {
  const products = await getProductInCollection()
  const productAutumn = await getProductInCollectionAutom()
  const collections = await getCollections()
  return {
    props: {products,collections,productAutumn}, // will be passed to the page component as props
  }
}


