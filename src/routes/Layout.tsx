import { Outlet } from "react-router"
import { Header } from "../components/Header"

export const Layout = () => {
    return (
        <div className="font-dm min-w-lg">
            <Header />
            <Outlet />
        </div>
    )
}
