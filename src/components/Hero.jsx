import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { HiArrowRight } from 'react-icons/hi2'
import { Link } from 'react-scroll'

function Hero() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <>
    <div name="home" className="min-h-screen  md:py-32 py-10   " data-aos='zoom-in-up' data-aos-duration="3000">
        <div className="max-w-4xl md:mx-auto mx-4 md:px-4 py-20 flex flex-col justify-center md:items-start items-center md:justify-start h-full">
            <p className="text-pink-600">Hello, My name is</p>
            <h1 className="text-4xl text-center md:text-start sm:text-7xl font-bold text-[#ccd6f6]">Zablon Oigo</h1>
            <h2 className="text-4xl text-center md:text-start sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
            <p className="text-[#8892b0] text-center md:text-start py-4 max-w-[700px]">
            With  passion for pixels and  fluency in code, I craft web experiences that transcend the ordinary. I'm driven by the thrill of transforming ideas into immersive digital realms that captivate, engage, and inspire.
            Let's embark on a journey together to forge your unique digital presence. Are you ready to create something extraordinary?
        </p>
             <div className="flex justify-center md:justify-start">
              <Link to={'contact'} spy={true} smooth={true} duration={500} className='inline-flex text-white group border-2 px-6 py-3 my-2  items-center duration-300 hover:bg-pink-600 hover:border-pink-600 scroll-m-40'>
                View Work  <HiArrowRight className='ml-3 group-hover:rotate-90 duration-300'/> </Link>
             </div>
        </div>
    </div>
    </>
  )
}

export default Hero