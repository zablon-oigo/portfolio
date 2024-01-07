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
        Hi there! I'm a seasoned web developer with a focus on Django, React, AWS, Docker, Computer Networking, and PostgreSQL. My passion lies in crafting innovative web solutions that seamlessly blend cutting-edge technology with user-centric design.
    </p>
    <p className="mt-6 text-[#ccd6f6] font-light text-xl space-y-6">
        <p className="">
        🚀 <span className="text-xl font-semibold">Django & Python Enthusiast:</span> With a wealth of experience in Python and Django, I thrive on architecting robust and scalable backends for web applications. My expertise extends from crafting elegant APIs to integrating complex business logic.
        </p>

        <p className="">
        💡 <span className="text-xl font-semibold">React Frontend Maven:</span> As a proficient React developer, I specialize in building intuitive and responsive user interfaces. I'm adept at creating seamless user experiences that captivate and engage visitors.<br/>
        </p>

        <p className="">
        ☁️ <span className="text-xl font-semibold">Cloud Enthusiast:</span> Navigating the cloud is second nature to me. I leverage AWS services to deploy, scale, and secure applications efficiently. From EC2 to S3, I ensure that your applications run smoothly in the cloud.
        </p>

        <p className="">
        🐳 <span className="text-xl font-semibold">Docker Enabler:</span> I streamline development workflows using Docker, ensuring consistency across different environments. Containerization is a key part of my toolkit for scalable and portable applications.
        </p>

        <p className="">
        🌐 <span className="text-xl font-semibold">Networking Guru:</span>With a strong background in computer networking, I understand the intricacies of creating robust and secure network architectures. Whether it's setting up VPCs on AWS or optimizing network performance, I've got it covered.
        </p>

        <p className="">
        🐘 <span className="text-xl font-semibold">PostgreSQL Specialist:</span>  I'm well-versed in database design and administration, with a particular focus on PostgreSQL. I design efficient database schemas that ensure data integrity and optimal performance.
        </p>

        <p className="">
        🤝 <span className="text-xl font-semibold">Collaboration Advocate:</span> I believe in effective communication and collaboration. I enjoy working in dynamic teams and am always open to exchanging ideas to drive project success.
        </p>

        <p className="">
        📈 <span className="text-xl font-semibold">Continuous Learner:</span> In the ever-evolving landscape of web development, I stay ahead by constantly learning and adapting to new technologies. Keeping up with industry trends ensures that your projects benefit from the latest advancements.
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