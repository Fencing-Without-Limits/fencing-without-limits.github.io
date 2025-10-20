import { Link, Outlet } from "react-router"
import fwlLogo from '/FWL Logo Black.png'

const Header = () => {
    return (
        <div className='w-full sticky'>
            <Link to="/" className=''>
                <img src={fwlLogo} className="w-3xs h-3xs" alt="FWL logo" />
            </Link>
        </div>
    )
}

export const Layout = () => {
    return (
        <div className="font-dm px-8 md:px-14 lg:px-20 pt-20 min-w-lg *:max-w-7xl *:mx-auto">
            <Header />
            <Outlet />
        </div>
    )
}