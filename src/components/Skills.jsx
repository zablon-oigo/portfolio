import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'
import aws from '../assets/aws.png'
import python from '../assets/python.png'
import css from '../assets/css.png'
import html from '../assets/html.png'
import js from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import django from '../assets/django.png'
import docker from '../assets/docker.png'
import react from '../assets/react.png'
import postgres from '../assets/postgres.png'
import computer from '../assets/computer.png'
import git from '../assets/git.png'

function Skills() {
    useEffect(() => {
        AOS.init();
     }, []);

    const images = [
        {
            id: 1,
            title: 'AWS',
            src: aws,
        },
        {
            id: 2,
            title: 'Python',
            src: python,
        },
        {
            id: 3,
            title: 'CSS',
            src: css,
        },
        {
            id: 4,
            title: 'HTML',
            src: html,
        },
        {
            id: 5,
            title: 'JavaScript',
            src: js,
        },
        {
            id: 6,
            title: 'Tailwind',
            src: tailwind,
        },
        {
            id: 7,
            title: 'Django',
            src: django,
        },
        {
            id: 8,
            title: 'Docker',
            src: docker,
        },
        {
            id: 9,
            title: 'React',
            src: react,
        },
        {
            id: 10,
            title: 'PostgresSQL',
            src: postgres,
        },
        {
            id: 11,
            title: 'Computer Networking',
            src: computer,
        },
        {
            id: 12,
            title: 'Git',
            src: git,
        }

    ]
  return (
    <div className='w-full min-h-[90vh] ' data-aos="zoom-in-up">
        <div  className="max-w-4xl mx-auto py-20">
            <h2 className="md:text-6xl text-4xl text-center  font-bold text-[#ccd6f6] mb-10 underline decoration-4 underline-offset-8 decoration-pink-600 ">Skills</h2>
            <p className="text-xl font-light text-[#ccd6f6] text-center mt-4 mb-10">These are the technologies I have worked with</p>
            <div className="grid md:grid-cols-3 grid-cols-2  gap-4 place-content-center">
                {images.map(({id, title, src}) => (
                                    <div className="bg-[#112240] p-4 rounded shadow-[0_0_10px_0_rgba(0,0,0,0.2)] mb-4 hover:scale-110 hover:-translate-y-2 duration-500" key={id}>
                                   <div className="">
                                   <img src={src} alt="" className="mx-auto mb-2 object-center object-cover h-[40px] w-[40px] rounded shadow-[0_0_10px_0_rgba(0,0,0,0.2)]" />
                                   </div>
                                    <div className="">
                                        <h2 className="text-xl text-white text-center font-light">{title}</h2>
                                    </div>
                                </div>
                    
                ))}


            </div>
        </div>
    </div>
  )
}

export default Skills