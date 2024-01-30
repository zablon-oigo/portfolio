import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

function About() {
  useEffect(() => {
    AOS.init();
 }, []);

  return (
    <div className='w-full min-h-[80vh] ' data-aos="zoom-in-up" data-aos-duration="3000">
 
     <div className="max-w-4xl md:mx-auto mx-4 ">
     <div className="w-full">
    <h2 className="text-5xl md:text-6xl text-center font-bold inline text-[#ccd6f6] border-b-4 border-pink-600 mb-6">About Me</h2>
    <p className="text-xl text-[#ccd6f6] mt-6 font-light">
        Hi there! I'm a seasoned web developer with expertise in Django, React, AWS, Docker, Computer Networking, and PostgreSQL. My passion is crafting innovative web solutions that blend cutting-edge technology with user-centric design.
    </p>
    <p className="mt-6 text-[#ccd6f6] font-light text-xl space-y-6">
        <p className="">
            🚀 <span className="text-xl font-semibold">Python & Django:</span> Architecting robust and scalable backends, crafting elegant APIs, and integrating complex business logic.
        </p>

        <p className="">
            💡 <span className="text-xl font-semibold">React Frontend:</span> Specializing in intuitive and responsive user interfaces for captivating user experiences.
        </p>

        <p className="">
            ☁️ <span className="text-xl font-semibold">Cloud:</span> Leveraging AWS services for efficient deployment, scaling, and securing of applications.
        </p>

        <p className="">
            🐳 <span className="text-xl font-semibold">Docker:</span> Streamlining development workflows for consistency across different environments.
        </p>

        <p className="">
            🌐 <span className="text-xl font-semibold">Networking:</span> Creating robust and secure network architectures, including setting up VPCs on AWS.
        </p>

        <p className="">
            🐘 <span className="text-xl font-semibold">PostgreSQL:</span> Database design and administration, with a focus on PostgreSQL.
        </p>

        <p className="">
            🤝 <span className="text-xl font-semibold">Collaboration:</span> Advocating for effective communication and teamwork in dynamic environments.
        </p>

        <p className="">
            📈 <span className="text-xl font-semibold">Continuous Learner:</span> Staying ahead in web development by constantly learning and adapting to new technologies.
        </p>
    </p>
</div>


            {/*
                    <div className=" w-full">
        <h2 className="text-5xl md:text-6xl text-center font-bold inline text-[#ccd6f6] border-b-4 border-pink-600 mb-6 ">About me</h2>
        <p className="text-xl text-[#ccd6f6] mt-6 font-light">
            I'm a dedicated Django developer with a passion for crafting web solutions that combine elegance with functionality.
            <p >
            With years of experience in Python and Django, I excel at building robust, scalable web applications.<br/> My expertise spans from backend development to creating intuitive user interfaces.
            </p>
            <p >
            I thrive on tackling complex challenges and turning them into efficient, user-friendly solutions.<br/> I stay up-to-date with the latest trends in web development and am committed to delivering high-quality, maintainable code. Let's collaborate to bring your web project to life with Django's power and flexibility.
            </p>
            </p>


        </div> 
            
            */}
        </div>
  
     
    </div>
  )
}

export default About