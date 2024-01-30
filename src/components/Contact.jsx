import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import contact from '../assets/rafiki.png'
function Contact() {
    useEffect(() => {
        AOS.init();
     }, []);
  return (
    <div>
        <div name="contact" className="min-h-screen " data-aos='zoom-in-up' data-aos-duration="3000">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-5xl md:text-6xl text-center font-bold text-[#ccd6f6] underline underline-offset-8 decoration-4 decoration-pink-600">Contact</h2>
                <p className="mt-6 text-xl font-bold text-center text-[#ccd6f6]">
          Ready to Craft Your Digital Legacy?
        </p>
        <p className="text-xl text-center text-[#ccd6f6]">
          Let's collaborate to bring your vision to life. Contact me today, and together we'll weave a web that resonates, inspires, and transforms.
        </p>
                <div className="flex justify-center flex-col-reverse md:flex-row items-center gap-4 my-10 px-10">

                    <form action="https://getform.io/f/a83e15cb-c283-468a-b1ce-cd06ec6139ec" className="w-full md:w-3/4 " method='post'>
                        <label htmlFor="name" className="block text-[#8892b0] text-xl mb-2">Name</label>
                        <input type="text" className="px-6 py-3 rounded w-full" placeholder='' />
                        <label htmlFor="email" className="block text-[#8892b0] text-xl mb-2">Email</label>
                        <input type="email" className="px-6 py-3 rounded w-full" placeholder='' />
                        <label htmlFor="message" className="block text-[#8892b0] text-xl mb-2">Message</label>
                        <textarea name="message" id="message" cols="30" rows="10" className="mb-4 px-6 py-3 rounded w-full" placeholder=''></textarea>
                        <button type="submit" className="bg-teal-600 w-full text-white px-6 py-3 rounded hover:bg-teal-700 ">Let's Talk</button>
                    </form>
              
                </div>
            </div>

        </div>
    </div>
  )
}

export default Contact