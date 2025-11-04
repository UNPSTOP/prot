import React from 'react'
import frontend from '../assets/chevrons-left-right.svg'
import backend from '../assets/database.svg'
import fullstacke from '../assets/globe.svg'
import team from '../assets/users.svg'
import './About.css'

const About = () => {
  return (
    <div >
      <div className='about-container' ><h1>About Me</h1> <p style={{maxWidth:'36rem'}}>I’m Irfan Aslam, a passionate MERN Stack Developer dedicated to creating modern, responsive, and user-friendly web applications. I enjoy transforming ideas into functional, real-world digital solutions that make a difference.</p></div>
      <div className="about-section" >
        <div className="about-text">
            <h3 style={{fontWeight:'500'}}>My journey</h3>
          <p className="myjunery">
I’m a passionate Full Stack Developer skilled in React.js, Node.js, Express, and MongoDB.
</p>

<p  className="myjunery">
While pursuing my BCA at Rabindranath Tagore University, Bhopal, I built several real-world projects 
and explored both frontend and backend development.
</p>

<p className="myjunery">
I’ve solved over 345 DSA problems on LeetCode and GeeksforGeeks, improving my logic and problem-solving skills.
</p>
        </div>

        <div className='grid-two'>
        <div style={{border:'1px solid  black' ,borderRadius:'1rem',padding:'2rem',backgroundColor:"white"}} > 
            <img style={{width:'2rem'}} src={frontend} alt="" />
            <p>Frontend Development</p>
            <p style={{maxWidth:'13.5rem'}}>Expert in React.js, JavaScript, and modern UI frameworks
Skilled in building responsive and dynamic interfaces using React, Tailwind CSS, and advanced DOM manipulation.</p>
        </div>
        <div style={{border:'1px solid  black' ,borderRadius:'1rem',padding:'2rem',backgroundColor:'white'}}>
            <img style={{width:'2rem'}} src={backend} alt="" />
            <p>Backend Development</p>
            <p>Proficient in Node.js and Express.js
Experienced in creating RESTful APIs, authentication, and real-time features using MongoDB and Firebase integration.</p>
        </div>
        <div style={{border:'1px solid  black' ,borderRadius:'1rem',padding:'2rem',backgroundColor:'white'}}>
            <img style={{width:'2rem'}} src={fullstacke} alt="" />
            <p>Full-Stack Solutions</p>
            <p>End-to-end MERN application development & deployment
Capable of building complete web apps with React (frontend), Node & Express (backend), MongoDB (database), and deploying on Render, Vercel, or Netlify.</p>
        </div>
        <div style={{border:'1px solid  black' ,borderRadius:'1rem',padding:'2rem',backgroundColor:'white'}}>
            <img style={{width:'2rem'}} src={team} alt="" />
            <p>Team Collaboration</p>
            <p>Strong communication and project management skills</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
