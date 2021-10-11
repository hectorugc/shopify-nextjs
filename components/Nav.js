import Link from 'next/link'
import { useContext } from 'react'
import { CartContext } from '../context/shopContext'
import MiniCart from './MiniCart'
import { getMenus } from '../lib/shopify'

const Nav = () => {
   
    const { cart,cartOpen,setCartOpen} = useContext(CartContext)

    let cartQuantity = 0
    cart.map(item => {
        return( cartQuantity += item?.variantQuantity )
    })


    
    return (
        <header className="border-b sticky top-0 z-20 bg-white">
            <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mx-auto lg:max-w-screen-xl">
                <Link href="/" passHref>
                <a className="cursor-pointer">
                    <span className="text-lg pt-3 font-bold">Ecommerce website</span>
                   </a>
                </Link>



                <a 
                className="cursor-pointer text-md font-bold"
                onClick={()=> setCartOpen(!cartOpen)}
                > Cart ({cartQuantity})</a>
                <MiniCart cart={cart}/>
            </div>
        </header>
    )
}

export default Nav







