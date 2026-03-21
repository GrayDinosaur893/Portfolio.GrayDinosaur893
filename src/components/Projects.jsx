// Projects Component
import { useState } from 'react'
import projectsData from '../data/projects.json'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  // Get unique categories for filtering
  const categories = ['All', ...new Set(projectsData.map(project => project.category))]

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter)

  return (
    <div className="projects-section">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <p className="projects-subtitle">Here are some of my recent works</p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              {/* Placeholder for project image */}
              <div className="project-overlay">
                <div className="project-actions">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="action-btn live-btn">
                    Live Demo
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-btn code-btn">
                    View Code
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}