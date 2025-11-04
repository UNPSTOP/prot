import React from 'react'
import './Skill.css'

const Skill = () => {
  return (
    <div className="skill-container">
      <div className="skill-header">
        <h1>Skills & Technologies</h1>
        <p>Here are the technologies and tools I work with to bring ideas to life.</p>
      </div>

      <div className="skill-section">
        <div className="skill-box">
          <h4>Frontend</h4>
          <div className="skill-content">
            <div className="skill-row">
              <span className='sedo'>HTML</span>
              <span className='sedo'>CSS</span>
              <span className='sedo'>JavaScript</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>React.js</span>
              <span className='sedo'>Grid</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>Tailwind CSS</span>
            </div>
          </div>
        </div>

        <div className="skill-box">
          <div><h4>Backend</h4></div>
          <div className="skill-content">
            <div className="skill-row">
              <span className='sedo'>Node.js</span>
              <span className='sedo'>Express.js</span>
              <span className='sedo'>MongoDb</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>REST API</span>
              <span className='sedo'>JWT Authentication</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>Razorpay (Payment)</span>
              <span className='sedo'>WebSockets</span>
            </div>
          </div>
        </div>

        <div className="skill-box">
          <div><h4>Tools & DevOps</h4></div>
          <div className="skill-content">
            <div className="skill-row">
              <span className='sedo'>Git</span>
              <span className='sedo'>GitHub</span>
              <span className='sedo'>Postman</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>Render</span>
              <span className='sedo'>Vercel</span>
              <span className='sedo'>VS Code</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>Netlify</span>
              <span className='sedo'>AWS (basic)</span>
            </div>
          </div>
        </div>

        <div className="skill-box">
          <div><h4>Design & Others</h4></div>
          <div className="skill-content">
            <div className="skill-row">
              <span className='sedo'>Figma</span>
              <span className='sedo'>UI/UX Design</span>
              <span className='sedo'>Responsive Design</span>
            </div>
            <div className="skill-row">
              <span className='sedo'>Accessibility</span>
              <span className='sedo'>Performance Optimization</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
