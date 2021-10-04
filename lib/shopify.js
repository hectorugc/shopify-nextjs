const domain = process.env.SHOPIFY_STORE_DOMAIN
const storefrontAccestoken = process.env.SHOPIFY_STOREFRONT_ACCESSTOKEN


async function ShopifyData(query) {
    const URL = `https://${domain}/api/2021-07/graphql.json`

    const options = {
        edpoint: URL,
        method:"POST",
        headers: {
            "X-Shopify-Storefront-Access-Token": storefrontAccestoken,
            "Accept":"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify({query})
    }

    try {
      const data = await fetch(URL,options).then(response => {
         return response.json()
      })
      return data
    } catch ( error) {
        throw new Error("Product not fetched")
    }
}



export async function getProductInCollection() {
    const query=`
    {
        collectionByHandle(handle:"frontpage") {
          title
          products(first:25) {
            edges {
              node {
                id
                title
                handle
                priceRange {
                  minVariantPrice {
                    amount
                  }
                }
                images(first:5) {
                  edges {
                    node {
                      id
                      originalSrc
                      altText
                    }
                  } 
                }
              }
            }
          }
        }
      }
    `
const response = await ShopifyData(query) 

const allProducts = response.data.collectionByHandle.products.edges

return allProducts

}


export async function getAllProducts() {
  const query = 
  `{
    products(first:25){
      edges{
        node{
          handle
          id
        }
      }
    }
  }`

  const response = await ShopifyData(query)

  const slugs = response.data.products.edges ? response.data.products.edges : []

  return slugs
}


export async function getProduct(handle){
  const query = `
  {
    productByHandle(handle: "${handle}"){
     collections(first:1){
       edges{
         node{
           products(first:5){
             edges{
               node{
                 priceRange{
                   minVariantPrice{
                     amount
                   }
                 }
                 handle
                 title
                 id
                 images(first:5){
                   edges{
                     node{
                       altText
                       originalSrc
                     }
                   }
                 }
               }
             }
           }
         }
       }
     }
       id
       title
       handle
       description
       images(first:5){
         edges{
           node{
             originalSrc
             altText
             width
             height
           }
         }
       }
       options{
         name
         values
         id
       }
       variants(first:25){
         edges{
           node{
             selectedOptions{
               name
               value
             }
             image{
               originalSrc
               altText
               height
               width
             }
             title
             id
             priceV2{
               amount
             }
           }
         }
       }
     }
 }
  `

const response = await ShopifyData(query)

const product = response.data.productByHandle ? response.data.productByHandle : []

return product
}



export async function createCheckout(id,quantity){
  const query = `
  mutation { 
    checkoutCreate(input: {
      lineItems: [{variantId:"${id}",quantity:${quantity}}]
    }){
      checkout{
        id
        webUrl
      }
    }
    
    }
  `
  const response = await ShopifyData(query)

    const checkout = response.data.checkoutCreate.checkout ? response.data.checkoutCreate.checkout : []

    return checkout
  
}


export async function updateCheckout(id,lineItems){
  const lineItemsObject = lineItems.map(item => {
    return `{
      variantId:"${item.id}",
      quantity:${item.variantQuantity}
    }`
  })
    const query = `
    mutation { 
      checkoutLineItemsReplace(lineItems:[${lineItemsObject}], checkoutId:"${id}"){
        checkout{
          id
          webUrl
          lineItems(first:25) {
             edges {
               node {
                 id
                 title
                 quantity
               }
             }
          }
        }
      }
      
      }`



    const response = await ShopifyData(query)
 

    const checkot = response.data.checkoutLineItemsReplace.checkout ? response.data.checkoutLineItemsReplace.checkout : []
    return checkot
  
}