import React from 'react'
import mail from  '../assets/maile.svg'
import github  from '../assets/github.svg'
import linkdin from '../assets/link.svg'
export const Footer = () => {
  return (
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%',borderTop:'1px solid black'}}>
      <div>
        <p style={{fontSize:'10px'}}>Made With Irfan Aslam</p>
        <p style={{fontSize:'10px'}}>© 2025 All rights reserved.</p>
      </div>
      <div style={{display:"flex",gap:'1rem'}}>
        <a href="https://github.com/UNPSTOP"><img style={{cursor:'pointer'}} src={github} alt="" /></a>
        <a href="https://www.linkedin.com/in/irfan-khan-2b12332b1/"><img style={{cursor:'pointer'}} src={linkdin} alt="" /></a>
        <a href="mailto:irfanaslamo700@gmail.com"><img style={{cursor:'pointer'}} src={mail} alt="" /></a></div>
    </div>
  )
}
