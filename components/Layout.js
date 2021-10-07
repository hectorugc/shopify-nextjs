import Nav from "./Nav"
import Footer from "./Footer"
import { getMenus } from "../lib/shopify"
const Layout = ({children,menus}) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <main>
                <Nav menus={menus}/>
                {children}
            </main>

            <Footer/>
        </div>
    )
}

export default Layout


