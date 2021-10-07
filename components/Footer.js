const navigation = [
    {name:'About',href:'https://www.linkedin.com/in/hectorugc/' },
    {name:'Contact',href:'https://www.linkedin.com/in/hectorugc/' },
    {name:'Shop',href:'https://www.linkedin.com/in/hectorugc/' },
    {name:'About',href:'https://www.linkedin.com/in/hectorugc/' },
    {name:'Terms and Conditons',href:'https://www.linkedin.com/in/hectorugc/' },
]

const Footer = () => {
    return (
         <footer className="bg-white">
            <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                <nav className=" flex flex-wrap justify-center">
                    {
                        navigation.map((item,i) => (
                            <div key={i} className="px-6 py-2">
                                <a href={item.href} className="text-gray-500 hover:text-gray-900">{item.name}</a>
                            </div>
                        ))
                    }
                </nav>
                <p className="mt-8 text-center text-gray-400">&copy; 2021 All Rigths Reserved</p>
            </div>
        </footer>
    )
}

export default Footer