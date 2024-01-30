import React from 'react';
import afya from '../assets/afya.png';
import { FaGithub } from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi2';
import blog from '../assets/blog.png';
import task from '../assets/task.png';
import sunny from '../assets/sunny.png';
import vote from '../assets/vote.png';
import snap from '../assets/snap.png';
import elimu from '../assets/elimu.png';
import news from '../assets/news.png';
import nav from '../assets/nav.png';
import easybank from '../assets/easybank.png';
import bowl from '../assets/bowl.png';
import ticket from '../assets/ticket.png';
import clean from '../assets/clean.png';
import cafe from '../assets/cafe.png';

const images=[
    {
        id:1,
        title:'React Js Application',
        name:'Afya Clinic',
        image:afya,
        github:'https://github.com/zablon-oigo/clinic',
        demo:'https://mellow-selkie-e79d8c.netlify.app/'
    },
    
    {
        id:2,
        title:'Django Web Application',
        name:'Blog',
        image:blog,
        github:'https://github.com/zablon-oigo/blog',
        demo:'https://blog-app-lpq3.onrender.com/'
    },
    {
        id:3,
        title:"Django Web Application",
        name:'Task Manager',
        image:task,
        github:'https://github.com/zablon-oigo/task_manager',
        demo:'https://task-app-manager-jhp7.onrender.com/'
    },
    {
        id:4,
        title:'React Js Application',
        name:'Coffee Shop',
        image:cafe,
        github:'https://github.com/zablon-oigo/cafe',
        demo:'https://cafe-zeta-tan.vercel.app/'

    },
    {
        id:5,
        title:'Django Web Application',
        name:'Vote System',
        image:vote,
        github:'https://github.com/zablon-oigo/polls_app',
        demo:'https://polls-app-pwta.onrender.com/'
    },
    {
        id:6,
        title:'React Js Application',
        name:'Cleaning Services',
        image:clean,
        github:'https://github.com/zablon-oigo/cleaning_services',
        demo:'https://cleaning-services-six.vercel.app/'
  
    },
    {
        id:7,
        title:'React Js Application',
        name:'Elimu',
        image:elimu,
        github:'https://github.com/zablon-oigo/Elimu',
        demo:'https://peppy-cheesecake-fbef6c.netlify.app/'
    },
    {
        id:8,
        title:'Rect Js Application',
        name:'News',
        image:news,
        github:'https://github.com/zablon-oigo/news_homepage',
        demo:'https://animated-hotteok-80dc85.netlify.app/'
    },
    {
        id:9,
        title:'React Js Application',
        name:'Landing Page',
        image:nav,
        github:'https://github.com/zablon-oigo/landing_page',
        demo:'https://main--mellow-khapse-de7918.netlify.app/'
    },
    {
        id:10,
        title:'React Js Application',
        name:'Easy Bank Landing Page',
        image:easybank,
        github:'https://github.com/zablon-oigo/easy_bank_landing_page',
        demo:'https://ephemeral-dusk-7510f3.netlify.app/'
    },
    {
        id:11,
        title:'React Js Application',
        name:'Bountiful Landing Page',
        image:bowl,
        github:'https://github.com/zablon-oigo/bites',
        demo:'https://gleeful-muffin-a75a4e.netlify.app/'
    },
    {
        id:12,
        title:'React Js Application',
        name:'Sunny Langing Page',
        image:sunny,
        github:'https://github.com/zablon-oigo/sunnysideLandingPage',
        demo:'https://super-cocada-24ff5b.netlify.app/'
  
  
    },
    {
        id:13,
        title:'Django Web Application',
        name:'Ecommerce App',
        image:snap,
        github:'https://github.com/zablon-oigo/snap_oasis',
        demo:'https://snap-oasis.onrender.com/'

    },
    {
        id:14,
        title:'Django Web Application',
        name:'Ticket Application',
        image:ticket,
        github:'https://github.com/zablon-oigo/ticket_app',
        demo:'https://ticket-esd2.onrender.com/'

    }


]


const backgroundImageStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

function WorkCard() {
  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
      {images.map((img) => (
        <div
          key={img.id}
          style={{
            ...backgroundImageStyle,
            backgroundImage: `url(${img.image})`,
          }}
          className="w-full h-[300px] mb-10 group hover:scale-105 duration-700 shadow-[0_0_10px_0_rgba(0,0,0,0.2)]"
        >
          <div className="opacity-0 group-hover:opacity-100">
            {img.title && (
              <div className="flex justify-center items-center bg-gradient-to-r from-teal-500 to-cyan-500 w-full h-[300px]">
                <div className="text-center my-4">
                  <h1 className="text-2xl text-white font-semibold">{img.title}</h1>
                  <h2 className="text-xl text-white">{img.name}</h2>
                  <div className="pt-8 flex items-center justify-center gap-4">
                    <a
                      href={img.github}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:bg-teal-500 duration-300 hover:text-white hover:scale-105 px-4 py-3 rounded inline-flex items-center gap-1 bg-white"
                    >
                      Code <FaGithub className="text-3xl " />
                    </a>
                    <a
                      href={img.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-3 rounded inline-flex items-center gap-1 bg-white hover:bg-teal-500 duration-300 hover:text-white hover:scale-105"
                    >
                      Demo <HiArrowRight className="text-3xl" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


export default WorkCard;
