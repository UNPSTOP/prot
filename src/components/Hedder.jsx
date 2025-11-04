import React from "react"
import menu from '../assets/menu.svg'
import './Headder.css'
import { useState } from "react"
const Hedder = () => {
  const[istrue, settrue] = useState(false)
  function hendler(){
    settrue(istrue?false:true)
  }
  return (
    <div className="main">
      <div style={{ fontWeight: "bolder", display:'flex',justifyContent:'center',alignItems:'center' }}>Irfan Aslam</div>
      <div className="forleptop"  ><ul style={{  display: 'flex', gap: '2rem', fontWeight: "600" }}>
        <li><a href="#home">home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">contact</a></li></ul>

      </div>
      <div className="formobile">
        <img style={{paddingTop:'2px'}} src={menu} alt="" onClick={hendler} />
        {
          istrue ? <div  style={{zIndex:'1',textAlign:'left'}}><ul className="nav-menu" >
              <li><a href="#home">home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">contact</a></li></ul>
            </div> : ""
        }
      </div>

    </div>
  )
}

export default Hedder
