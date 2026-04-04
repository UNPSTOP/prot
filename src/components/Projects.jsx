import React from 'react'
import github from '../assets/github.svg'
// external-link.svg
import share from '../assets/external-link.svg'
import gym from '../assets/pexels-anush-1229356.jpg'
import Library from '../assets/Library.png'
import AI_kitchen from '../assets/Screenshot 2026-04-04 155054.png'
import './Projets.css'
export const Projects = () => {
    const arr = [
        {
        src1: gym,
        titel: "Gym Management Website",
        about: "A full-featured Gym Management Web App built with MARN Stack, offering secure login, memberships, and online payments via Razorpay.",
        lang: ["React", "Node.js", " Express.js", "MongoDB", " Razorpay", " CSS", "Vercel/Render"],
        srccode:"https://github.com/UNPSTOP/MY-GYM",
        srclivedemo:'https://my-gym-beryl.vercel.app/',
    },
        {
        src1: Library,
        titel: "Library Management System",
        about: "This project is a full-stack Library Management System designed to manage library operations digitally. The system provides secure user authentication, subscription plan management, and library seat booking functionality.Users can register and log in to the platform, choose suitable plans, and book available seats based on real-time availability. The system ensures smooth and secure handling of user data and bookings.",
        lang: ["React","Node.js","Express.js","MongoDB","JWT","Razorpay","CSS","Vercel/Render"],
        srccode:"https://github.com/khursid321/Library",
        srclivedemo:'https://library-three-mocha.vercel.app/',
    },
    {
        src1: AI_kitchen,
        titel: "AI_Kitchen_Equpiment",
        about: "Developed a modern and responsive business website focused on product showcasing. The platform provides an elegant UI, optimized performance, and seamless navigation to enhance user engagement and help businesses present their offerings professionally online.",
        lang: [
  "React",
  "CSS",
  "Vercel/Render"
],
        srccode:"#",
        srclivedemo:'https://ai-kitcken.vercel.app/',
    },
]
    return (
        <div  >
            <div >
                <h1>Featured Projects</h1>
                <p>Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', paddingTop: '3rem' }}>
                {
                    arr.map((item, index) => {
                        return <div key={index} className='project'>
                            <div className='imgmain' ><img  className='gymimg' src={index==0 ?gym :Library} alt= "" /></div>
                            <div >
                                <div style={{ textAlign: 'left', paddingLeft: '2rem' }}>
                                    <h2>{item.titel}</h2>
                                    <p>{item.about}</p>
                                    {/* Tech Stack: React, Node.js, Express.js, MongoDB, Razorpay, JWT, CSS, Vercel/Render */}
                                    {item.lang.map((item, index) => (
                                        <span key={index} className="tech-pill">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            <div className='buttondiv' style={{marginBottom:'2rem'}}><a href={item.srccode}><button className='buttonto'><img style={{width:'20px'}} src={github} alt="" /> code</button></a> <a href={item.srclivedemo}><button className='buttonto'> <img style={{width:'20px'}} src={share} alt="" /> Live Demo</button></a></div>

                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
}
