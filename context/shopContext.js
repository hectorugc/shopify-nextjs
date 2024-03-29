import {createContext,useState,useEffect} from 'react'
import { createCheckout, updateCheckout } from '../lib/shopify'


const CartContext = createContext()



const ShopProvider = ({children}) => {

const [cart,setCart] = useState([])
const [cartOpen,setCartOpen] = useState(false)
const [checkoutId,setCheckoutId] = useState("")
const [checkoutUrl,setCheckoutUrl] = useState("")


useEffect(() => {
   if (localStorage.checkout_id) {
       const CartObject = JSON.parse(localStorage.checkout_id)
        if (CartObject[0].id) {
            setCart([CartObject[0]])
        } else if (CartObject[0].length > 0) {
            setCart(...[CartObject[0]])
        }
        setCheckoutId(CartObject[1].id)
        setCheckoutUrl(CartObject[1].webUrl)
   }
}, [])


async function addToCart(newItem) {

    setCartOpen(true)
    if (cart.length === 0)  {
        setCart([newItem])

        const checkout = await createCheckout(newItem.id,newItem.variantQuantity)

        setCheckoutId(checkout.id)
        setCheckoutUrl(checkout.webUrl)


        localStorage.setItem("checkout_id",JSON.stringify([newItem,checkout]))
    } else {
        let newCart = [...cart]
        cart.map( item => {
            if (item.id === newItem.id) {
                item.variantQuantity++
                newCart = [...cart]
            } else {
                newCart = [...cart,newItem]
            }
        })
        setCart(newCart)
        const newCheckout = await updateCheckout(checkoutId,newCart)
        localStorage.setItem("checkout_id",JSON.stringify([newCart,newCheckout]))
    }
}

async function removeCartItem(itemToRemove) {
    const updatedCart = cart.filter(item => item.id !== itemToRemove)
    setCart(updatedCart)

    const newCheckout = await updateCheckout(checkoutId,updatedCart)

    localStorage.setItem("checkout_id",JSON.stringify([updatedCart,newCheckout]))

    if (cart.length === 1) {
        setCartOpen(false)
    }
}
    return (
        <CartContext.Provider value={{
            cart,
            cartOpen,
            setCartOpen,
            addToCart,
            checkoutUrl,
            removeCartItem
        }}>
          {children}   
        </CartContext.Provider>
    )
}

const ShopConsumer = CartContext.Consumer

export {ShopConsumer, CartContext }

export default ShopProvider
