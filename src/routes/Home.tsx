import { useEffect, useState, type FC } from 'react'
import { HashLink } from 'react-router-hash-link'
import { HeaderSpace } from '../components/Header'
import { cn } from '../utils/cn'

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
          <div className="absolute z-3 inset-0 bg-gradient-to-b from-[rgba(0,0,0,0.3)] to-[rgba(0,0,0,0.7)]" />
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
            <HashLink to="#apply" className="inline-block text-white text-xl bg-blue-600 rounded-md py-1.5 px-3">
              Host a Livestream
            </HashLink>
          </div>
        </div>
      </section>
      <section id="about" className="max-w-7xl mx-auto mt-16 mb-12 flex flex-row gap-8">
        <div className="text-xl">
          <h2 className='text-h2 mb-8'>
            Who we are.
          </h2>
          <p className='mb-4'>
            <b>Fencing Without Limits is a charity collective with the main mission of making sports accessible for everyone.</b>
          </p>
          <p className='mb-4'>
            We create charity livestreams featuring fencing clubs from around the globe to raise funds and bring awareness to barriers
            different aspiring athletes face in participating in sports.
          </p>
        </div>
        <div className="border-1 border-black w-512">INSERT GROUP PHOTO HERE</div>
      </section>
      <section id="how-it-works" className="max-w-7xl mx-auto mt-12 *:mb-12 text-2xl">
        <h2 className='text-h2'>
          Here's how a <b>FWL</b> event works.
        </h2>
        <div className="text-h3 *:text-gray-700">
          <div className="w-full"><b className=''>1.</b> We find amazing fencing clubs around the world, like you, to host.</div>
          <div className="w-full"><b className=''>2.</b> The host club chooses a charity of their choice to host, who supports our core mission of sports for all.</div>
          <div className="w-full"><b className=''>3.</b> Fencers participate in a 12-hour livestream to raise money and have fun!</div>
        </div>

      </section>
      <hr />
      <section id="mailto-form" className="">
        CONTACT US HERE<br />
        insert mailto form here
      </section>
    </>
  )
}
