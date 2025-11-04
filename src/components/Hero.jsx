import React from 'react'
 import  github from '../assets/github.svg'
 import lindin from '../assets/link.svg'
 import mail from '../assets/maile.svg'
 import "./Hero.css";
import arrow from '../assets/arrow-down-to-line.svg'
const Hero = () => {
  return (
    <div  style={{display:"flex",flexDirection:"column",alignItems:'center',padding:'3rem'}}>
      <div><h1 
      className='forh1'>Hi i'm Irfan Aslam</h1></div>
      <div><p className='forp' >MERN stack Developer & Problem Solver</p></div>
      <div><p className='for-desc'>i  creat robust web applications and  digitl experiences using modern technologies. passionate about clean code, user experience ,and building scalable  solutions</p></div>
      <div className="hero-buttons"> <a href="#contact"><button    className="btn-light">Get intuch</button></a> <a href="#projects"><button className="btn-dark">View my  work</button></a></div>
      <div className="hero-icons"><a href="https://github.com/UNPSTOP"><img className="icon" src={github} alt="git hub" /> </a> <a href="https://www.linkedin.com/in/irfan-khan-2b12332b1/"><img className="icon" src={lindin} alt="Lineding" /></a>  <a href="mailto:irfanaslamo700@gmail.com"><img  className="icon" src={mail} alt="email" /></a> </div>
      <div  className="arrow-box"><a href="#about"><img className='up-down' src={arrow} alt="arrow" /></a></div>
    </div>
  )
}

export default Hero
