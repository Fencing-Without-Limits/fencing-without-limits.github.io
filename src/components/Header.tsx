import { Link } from 'react-router'
import { cn } from '../utils/cn'
import fwlLogo from '/FWL Logo Black.png'

export const Header = ({ className }: { className?: string }) => {
    return (
        <div className={cn('fixed z-[999] top-12 left-0 right-0 px-8 md:px-14 lg:px-20', className)}>
            <div className="max-w-7xl mx-auto flex justify-between rounded-3xl backdrop-blur-sm bg-[rgba(255,255,255,0.3)] pl-4 py-1">
                <Link to="/" className='w-14 h-auto rounded-2xl'>
                    <img src={fwlLogo} className="hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]" alt="FWL logo" />
                </Link>
                <nav className="w-full flex justify-end items-center text-black text-xl gap-3 rounded-2xl p-2 px-4 pointer-events-auto">
                    <Link
                        to="/about-us"
                        className="max-md:hidden "
                    >
                        About Us
                    </Link>
                    <div className="h-[80%] w-[1px] bg-black" />
                    <Link
                        to="/past-events"
                        className="max-md:hidden "
                    >
                        Past Events
                    </Link>
                    <div className="h-[80%] w-[1px] bg-black" />
                    <Link
                        to="/apply"
                        className="max-md:hidden "
                    >
                        Apply to Host
                    </Link>
                </nav>
            </div>
        </div>
    )
}

export const HeaderSpace = () => {
    return (
        <div className="h-[102px]" />
    )
}