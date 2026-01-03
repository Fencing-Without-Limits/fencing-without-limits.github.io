import { Link } from 'react-router'
import { HashLink } from 'react-router-hash-link'
import {
  useMotionValueEvent,
  MotionValue,
  motion,
} from "motion/react"
import type { Variants } from "motion/react"
import { useState, useRef } from "react"

import fwlLogo from '/FWL Logo Black.png'

export const Header = ({ scrollY }: { scrollY: MotionValue<number> }) => {
    const [hidden, setHidden] = useState(false)
    const [hover, setHover] = useState(false)
    const lastYRef = useRef(0)

    useMotionValueEvent(scrollY, "change", (y: number) => {
        const difference = y - lastYRef.current
        if (Math.abs(difference) > 180) {
            setHidden(difference > 0)
            lastYRef.current = y
        }
    })

    return (
        <div
            onFocusCapture={hidden ? () => setHidden(false) : undefined}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
            className={'fixed z-[999] top-0 w-full min-w-lg pt-8 px-8 md:px-14 lg:px-20 '}
        >
            <motion.div
                animate={
                    !hover
                    ?
                    hidden ? "hidden" : "visible"
                    :
                    hidden ? "peeking" : "visible"
                }
                initial="visible"
                variants={
                    {
                        visible: { y: "0%" },
                        hidden: { y: "-130%" },
                        peeking: { y: "0%", cursor: "pointer" },
                    } as Variants
                }
                transition={{
                    duration: 0.2,
                    ease: [0.4, 0, 0.2, 1],
                }}
                className="max-w-7xl mx-auto flex justify-between
                rounded-full backdrop-blur-sm bg-gradient-to-r from-[rgba(190,219,255,0.6)] via-[rgba(202,213,226,0.4)] to-[rgba(202,213,226,0.4)] pl-4 py-1"
            >
                <Link to="/" className='w-22 -ml-2 justify-center h-auto'>
                    <img src={fwlLogo} className="w-14 mx-3 hover:drop-shadow-[0_0_6px_rgba(255,255,255,1)]" alt="FWL logo" />
                </Link>
                <nav className="w-full flex justify-end items-center
                text-black text-xl/tight tracking-tight max-md:text-lg
                gap-3 rounded-2xl p-2 px-4 pointer-events-auto">
                    {/* TODO add dedicated pages instead of linking to homepage sections */}
                    <HashLink
                        smooth
                        to="#about"
                        className="hover:font-semibold max-md:hidden"
                    >
                        About Us
                    </HashLink>
                    <div className="h-[80%] w-[1px] bg-black max-md:hidden" />
                    <a
                        target="_blank"
                        href="https://www.youtube.com/@FencingWithoutLimits/videos"
                        className="hover:font-semibold"
                    >
                        Past Events
                    </a>
                    <div className="h-[80%] w-[1px] bg-black" />
                    <HashLink
                        smooth
                        to="#mailto-form"
                        className="hover:font-semibold"
                    >
                        Apply to Host
                    </HashLink>
                </nav>
            </motion.div>
        </div>
    )
}

export const HeaderSpace = () => {
    return (
        <div className="h-[102px]" />
    )
}