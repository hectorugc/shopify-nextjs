import { useRouter } from "next/router";
import { getPage,getPages } from "../lib/shopify"

 const Pages = ({menu}) => {
   
    const router = useRouter()
    console.warn(menu,router);
    if (router.isFallback) {
        return <div>Loading...</div>
    }
    return router?.query.slug.join('/')
}

export default Pages  




export async function getStaticProps({params}) {
    const page = await getPage(params.slug);

    

    return {
        props: {
             page
        }
    }
}

export async function getStaticPaths() {
     const pages = await getPages();


    const pathsData = []
    pages.map(item => {
        const slug = String(item.node.handle.split('/').filter(pageSlug => pageSlug));
        pathsData.push({params:{slug:[slug]}})    
       
    })
    return {
        paths:pathsData,
        fallback:true  
      };
}
 


