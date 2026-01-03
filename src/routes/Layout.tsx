import { useScroll } from "motion/react"
import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { useRef } from "react"

export const Layout = () => {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollY } = useScroll({ container: ref })
    return (
        <div ref={ref} className="font-dm min-w-lg h-dvh overflow-auto">
            <Header scrollY={scrollY}/>
            <Outlet />
            <Footer />
        </div>
    )
}
