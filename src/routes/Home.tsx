import { useEffect, useState, type FC } from 'react'
// import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { HashLink } from 'react-router-hash-link'
import { HeaderSpace } from '../components/Header'
import { cn } from '../utils/cn'

import { HostingForm } from '../components/HostingForm'

export const Home: FC = () => {
  const images = ['hero-western.jpeg', 'DSC07777.JPG', 'hero-london.jpeg']

  const [curImageIdx, setCurImageIdx] = useState(0)
  const [fade, setFade] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
        setCurImageIdx((prev) => (prev + 1) % images.length);
      }, 1000); // Duration of fade transition
    }, 7000); // Interval of image change cycle

    return () => clearInterval(interval);
  }, [images.length])

  return (
    <>
      <section id="hero" className="relative overflow-clip h-[95dvh] min-h-fit flex flex-col">
        <div aria-label="background" className="absolute top-0 z-0 min-w-full min-h-full h-[100%] w-auto">
          <img
            src={images[curImageIdx]}
            className={cn("h-full w-full object-cover absolute", fade ? 'fade-out' : 'fade-in')}
            alt="current-hero-photo"
            style={{ transition: fade ? 'opacity 1s ease' : 'opacity 0s ease' }}
          />
          <img
            src={images[(curImageIdx + 1) % images.length]}
            className={cn("h-full w-full object-cover", fade ? 'fade-in' : 'fade-out')}
            alt="next-hero-photo"
            style={{ transition: fade ? 'opacity 0s ease' : 'opacity 1s ease' }}
          />
          <div className="absolute z-3 inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.9)]" />
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
            <HashLink smooth to="#mailto-form" className="inline-block text-white text-xl bg-blue-600 rounded-md py-1.5 px-3">
              Apply to Host a Livestream
            </HashLink>
          </div>
        </div>
      </section>
      <section id="about" className="px-8 md:px-14 lg:px-20 bg-slate-800">
        {/* <div className="h-9 flex justify-center items-end bg-slate-800">
          <ChevronDownIcon className="h-8 fill-white"/>
        </div> */}
        <div className="max-w-7xl mx-auto py-16 flex flex-row gap-8">
          <div className="text-xl">
            <h2 className='text-h2 text-white mb-8'>
              Who we are.
            </h2>
            <p className='mb-4 text-blue-200'>
              <b>Fencing Without Limits is a charity collective with the main mission of making sports accessible for everyone.</b>
            </p>
            <p className='mb-4 text-blue-300'>
              We pursue our mission by producing charity livestreams featuring fencing clubs from around the globe,
              raising funds and bringing awareness to barriers
              different athletes face in participating in sports.
            </p>
          </div>
          <div className="border-1 border-black w-512">INSERT GROUP PHOTO HERE</div>
        </div>
      </section>
      <section id="how-it-works" className="px-8 md:px-14 lg:px-20 my-16">
        <div className="max-w-7xl mx-auto *:mb-12 text-2xl">
          <h2 className='text-h2'>
            Here's how a <b>FWL</b> event works.
          </h2>
          <div className="text-h3 *:text-slate-800 *:mb-12 *:flex *:flex-row *:gap-12 *:items-center *:justify-between">
            <div>
              <div className="text-center"><b>1.</b> We find amazing fencing clubs around the world, like you, to host.</div>
              <img src="fwlpartnershipcropped.gif" alt="FWL partnership animation" className="object-cover scale-95"/>
            </div>
            <div>
              <div className='px-16'>
                <div className="relative">
                  <img src="cpslogo.png" className="absolute top-[22%] left-[33%] w-[40%] z-2"/>
                  <img src="magnifyingglass.gif" alt="FWL charity finding animation" className="scale-175"/>
                </div>
              </div>
              <div className="text-center"><b>2.</b> The host club chooses a charity who aligns with our core mission of sports for all.</div>
            </div>
            <div>
              <div className="text-center"><b>3.</b> Fencers participate in a 12-hour livestream to raise money and have fun!</div>
              <div className='px-16 py-12'>
                <img src="fencinglive.gif" className='scale-175'/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="mailto-form" className="px-8 md:px-14 lg:px-20 bg-slate-800">
        <div className="max-w-7xl mx-auto *:mb-12 text-2xl py-16">
          <div className='text-white text-center'>
            <h1 className="text-h1 mb-8">
              Interested in <b className="text-blue-200">Hosting?</b>
            </h1>
            <p className="text-blue-300">Shoot us an email with your club, your charity of choice, your prefered hosting dates, and any other concerns.</p>
          </div>
          <HostingForm />
        </div>
      </section>
    </>
  )
}
