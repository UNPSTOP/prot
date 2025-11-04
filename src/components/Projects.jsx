import React from 'react'
import github from '../assets/github.svg'
// external-link.svg
import share from '../assets/external-link.svg'
import gym from '../assets/pexels-anush-1229356.jpg'
import './Projets.css'
export const Projects = () => {
    const arr = [{
        src: gym,
        titel: "Gym Management Website",
        about: "A full-featured Gym Management Web App built with MARN Stack, offering secure login, memberships, and online payments via Razorpay.",
        lang: ["React", "Node.js", " Express.js", "MongoDB", " Razorpay", " CSS", "Vercel/Render"],
        srccode:"https://github.com/UNPSTOP/MY-GYM",
        srclivedemo:'https://my-gym-beryl.vercel.app/',

        // lang:[]
    }
]
    return (
        <div  >
            <div >
                <h1>Featured Projects</h1>
                <p>Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '3rem' }}>
                {
                    arr.map((item, index) => {
                        return <div key={index} className='project'>
                            <div className='imgmain' ><img className='gymimg' src={gym} alt="" /></div>
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
                            <div className='buttondiv'><a href={item.srccode}><button className='buttonto'><img style={{width:'20px'}} src={github} alt="" /> code</button></a> <a href={item.srclivedemo}><button className='buttonto'> <img style={{width:'20px'}} src={share} alt="" /> Live Demo</button></a></div>

                            </div>
                            
                        </div>
                    })
                }
            </div>
        </div>
    )
}
