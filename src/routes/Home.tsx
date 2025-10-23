import type { FC } from 'react'
import { HashLink } from 'react-router-hash-link'
import { HeaderSpace } from '../components/Header'

export const Home: FC = () => {
  return (
    <>
      <section id="hero" className="relative overflow-clip h-[95dvh] min-h-fit flex flex-col">
        <div aria-label="Background Video" className="absolute top-0 z-0 min-w-full min-h-full h-[100%] w-auto">
          <img src="/DSC07777.JPG" className="h-full w-full object-cover" alt="hero-photo" />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]" />
        </div>
        <div className="relative z-10 *:mb-6 px-8 md:px-14 lg:px-20 *:max-w-7xl *:mx-auto mb-8 mt-auto">
          <HeaderSpace />
          <h1 className='text-h1 text-white'>
            We are fencers on a mission to make sports accessible for <b>everyone.</b>
          </h1>
          <div>
            <h2 className='md:text-3xl text-2xl text-gray-300 max-w-[56rem]'>
              Through livestream events hosted by the global fencing community, we help fundraise for sport charities around the world.
            </h2>
          </div>
          <div>
            <HashLink to="#apply" className="inline-block text-white text-xl bg-slate-700 rounded-md py-1.5 px-3">
              Host a Livestream
            </HashLink>
          </div>
        </div>
      </section>
      <section id="how-it-works" className="">
        The process<br />
        1. We find location to Host<br />
        2. We find charity supporting sports accessibility<br />
        3. We run a 12 hour livestream and raise money
      </section>
      <hr />
      <section id="about" className="">
        About section?
      </section>
      <hr />
      <section id="mailto-form" className="">
        CONTACT US HERE<br />
        insert mailto form here
      </section>
    </>
  )
}
