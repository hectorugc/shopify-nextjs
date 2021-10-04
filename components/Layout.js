import Nav from "./Nav"

const Layout = ({children}) => {
    return (
        <div className="flex flex-col justify-between min-h-screen">
            <main>
                <Nav/>
                {children}
            </main>
        </div>
    )
}

export default Layout
