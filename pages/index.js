import Head from 'next/head'
import {getProductInCollection} from "../lib/shopify"
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
export default function Home({products}) {
 
  return (
    <div className="">
      <Head>
        <title>Modern eCommerce Websites</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern eCommerce Website" />
        <meta property="og:title" content="Modern eCommerce Course" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shopify-nextjs-ten.vercel.app/" />
        <meta property="og:image" content="https://shopify-nextjs-ten.vercel.app/share.png" />
        <meta property="og:description"
          content="Modern eCommerce Website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Modern eCommerce Website" />
      </Head>
     <Hero/>
     <ProductList products={products}/>
     <FeatureSection/>
   </div>
  )
}





export async function getStaticProps() {
  const products = await getProductInCollection()
  return {
    props: {products}, // will be passed to the page component as props
  }
}


