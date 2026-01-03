import type { FC } from "react"


export const Footer: FC = () => {
    return (
        <section id="contact" className="font-dm min-w-lg text-gray-900 bg-slate-300 px-8 md:px-20 pt-20 pb-12">
            <div className="max-w-7xl mx-auto w-full flex flex-row justify-end gap-8">
                <div className="flex gap-2 text-xl *:hover:text-blue-900 *:hover:underline *:h-fit">
                    <a href="https://www.instagram.com/fencingwithoutlimits">Instagram</a>
                    •
                    <a href="https://www.youtube.com/@FencingWithoutLimits">YouTube</a>
                </div>
            </div>
        </section>
    )
}