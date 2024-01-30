import { useState } from "react"
import { FaGithub } from "react-icons/fa";
import { HiOutlineBars4 } from "react-icons/hi2";
import { LiaTimesSolid } from "react-icons/lia";
import { BsLinkedin } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { Link } from 'react-scroll';
import cv from '../assets/cv.png'
export default function Navbar() {
    const[menu, setMenu]=useState(false)
    const toggleMenu=()=>{
        
        setMenu(!menu)
    }
    const closeMenu=()=>{
        setMenu(false)
    }
  return (
    <>
    <div className="relative w-full    text-gray-300 bg-[#0a192f]">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-4">
            <div className="">
                        <Link to={'/'} spy={true} smooth={true} duration={500}>
                        <h1 className="text-3xl font-bold text-[#ccd6f6] cursor-pointer">Zablon.</h1>
                        </Link>
                    </div>
                    <button className="md:hidden" onClick={toggleMenu}>
                    {menu?<LiaTimesSolid size={30} className=""/>:<HiOutlineBars4 size={30} />}
                    </button>
                    <div className="hidden md:flex  items-center justify-between gap-8">
                        <ul className="flex items-center gap-8 font-light text-xl text-[#ccd6f6]">
                            <li><Link to={'home'} spy={true} smooth={true} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Home</Link></li>
                            <li><Link to={'about'} spy={true} smooth={true} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">About</Link></li>
                            <li><Link to={'skills'} spy={true} smooth={true} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Skills</Link></li>
                            <li><Link to={'projects'} spy={true} smooth={true} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Projects</Link></li>
                            <li><Link to={'contact'} spy={true} smooth={true} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Contact</Link></li>
                        </ul>
                        <div className="group">
                            <a href="" className=" inline-flex items-center px-6 py-3 rounded bg-white group-hover:bg-pink-600  duration-300" target="_blank">
                                <span className="mr-2 text-gray-800 group-hover:text-white font-medium">Resume</span> <img src={cv} alt="" className="h-[22px] w-[22px]"/>
                            </a>
                        </div>
                        </div>

            </div>
            <section className={`absolute md:hidden left-0 top-[60px] w-full h-screen bg-black z-10 flex flex-col  items-center ease-in duration-700 ${menu ? 'left-0' : 'left-[-100%]'}`}>
            <div className="my-16  space-y-8 flex flex-col items-start justify-center font-light text-4xl text-[#ccd6f6]">
                            <Link to={'home'} spy={true} smooth={true} onClick={closeMenu} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Home</Link>
                            <Link to={'about'} spy={true} smooth={true} onClick={closeMenu} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">About</Link>
                            <Link to={'skills'} spy={true} smooth={true} onClick={closeMenu} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Skills</Link>
                            <Link to={'projects'} spy={true} smooth={true} onClick={closeMenu} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Projects</Link>
                            <Link to={'contact'} spy={true} smooth={true} onClick={closeMenu} duration={500} className="duration-300 hover:translate-x-1 hover:text-pink-600 cursor-pointer">Contact</Link>
                        </div>
                        <div className="group">
                        <a href="" className="inline-flex items-center px-6 py-3 rounded bg-white transition duration-300 ease-in group-hover:bg-pink-600" target="_blank">
                            <span className="mr-2 text-gray-800 group-hover:text-white font-medium">Resume</span>
                            <img src={cv} alt="" className="h-[20px] w-[20px]"/>
                        </a>
                    </div>

            </section>

            <div className="md:block fixed hidden top-[300px]  left-0 ">
                <div className="w-[160px] h-[60px]  flex flex-col items-center justify-center gap-1">
                    <a href="https://github.com/zablon-oigo" target="_blank" className="inline-flex w-full items-center  justify-center ml-[-190px] hover:ml-[2px] duration-700 ease-in space-x-2"><span className="text-xl">Github </span><FaGithub className="text-4xl text-white bg-[#333333] px-2 py-1 rounded  "/></a> 
                    <a href="https://www.linkedin.com/in/zablon-oigo-ba4268234/" target="_blank" className="inline-flex w-full items-center  justify-center ml-[-200px] hover:ml-[2px] duration-700 ease-in space-x-2"><span className="text-xl">LinkedIn </span><BsLinkedin className="text-4xl text-text-white  bg-[#3061AF] px-2 py-1 rounded  "/></a> 
                    <a href="mailto:zablonoigo51@gmail.com" target="_blank" className="inline-flex w-full items-center  justify-center ml-[-180px] hover:ml-[2px] duration-700 ease-in space-x-2"><span className="text-xl">Email </span><TfiEmail className="text-4xl text-white bg-[#6fc2d0] px-2 py-1 rounded  "/></a> 
                    <a href="tel:+254715206073" target="_blank" className="inline-flex w-full items-center  justify-center ml-[-200px] hover:ml-[2px] duration-700 ease-in space-x-2"><span className="text-xl">Contact </span><IoMdCall  className="text-4xl text-white bg-[#565656] px-2 py-1 rounded  "/></a> 
                </div>
            </div>
    </div>
    </>
  )
}
