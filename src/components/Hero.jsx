// Hero Section Component
import { useState } from 'react'

export default function Hero({ onViewProjects }) {
  const [isButtonHovered, setIsButtonHovered] = useState(false)

  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">GrayDinosaur893</span></h1>
        <h2 className="hero-subtitle">a lazy CS student</h2>
        <p className="hero-description">
          I create not so beautiful, not very functional websites and applications that put forward my idead. 
          Never Passionate about clean code, user experience, and modern design principles, I do what i like.
        </p>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">0+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">0+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">MY Satisfaction</span>
          </div>
        </div>
        <button 
          className="view-projects-btn"
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
          onClick={onViewProjects}
        >
          <span className="btn-text">View My Projects</span>
          <span className="btn-arrow">→</span>
        </button>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="hero-floating-elements">
        <div className="floating-element floating-1">React</div>
        <div className="floating-element floating-2">CSS</div>
        <div className="floating-element floating-3">JavaScript</div>
        <div className="floating-element floating-4">UI/UX</div>
      </div>
    </div>
  )
}