import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import WorkCard from '../Layout/WorkCard'

function Work() {
  useEffect(() => {
    AOS.init();
 }, []);
  return (
    <div className='w-full min-h-screen  py-20' data-aos='zoom-in-up'>
       <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-5xl md:text-6xl  font-bold  text-[#ccd6f6] underline underline-offset-8 decoration-4 decoration-pink-600 text-center  mb-6">Projects</h2>
        
        <div className="">
            <WorkCard/>


        </div>
       </div>
    </div>
  )
}

export default Work