import Hedder from './components/Hedder'
import Hero from './components/Hero'
import About from './components/About'
import './App.css'
import Skill from './components/Skill'
import { Projects } from './components/Projects'
import Contact from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  
  return (
    <div className='main' style={{width:'90vw',maxWidth:'1280px',display:'flex',flexDirection:'column',}}>
      <div className='hedderfixed'  style={{
    width:'100%',

  }}>

    <Hedder/>
    </div>
   
     <div id='home'  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Hero/>
    </div>
 
    <div  id='about'  style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'7rem'}}>
      <About/>
    </div>
    
     <div id='skill' style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',paddingBottom:'19rem'}}>
      <Skill/>
    </div>
    
     <div id='projects' style={{width:'100%',paddingTop:'3rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Projects/>
    </div>

     <div id='contact'  style={{width:'100%',paddingTop:'3rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Contact/>
    </div>
    
    <div  style={{width:'100%',paddingTop:'3rem',display:'flex',justifyContent:'center',alignItems:'center'}}>
      <Footer/>
    </div>
    </div>
    
    
  )
}

export default App
