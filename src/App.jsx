// Portfolio Website
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stars from './components/Stars'
import heroImage from './images/hero.jpg'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  // Apply background image to the entire body
  useEffect(() => {
    document.body.style.backgroundImage = `url(${heroImage})`
    document.body.style.backgroundSize = 'cover'
    document.body.style.backgroundPosition = 'center'
    document.body.style.backgroundRepeat = 'no-repeat'
    document.body.style.backgroundAttachment = 'fixed'
    document.body.style.height = '100vh'
    document.body.style.overflowX = 'hidden'
    
    // Cleanup function to reset styles when component unmounts
    return () => {
      document.body.style.backgroundImage = ''
      document.body.style.backgroundSize = ''
      document.body.style.backgroundPosition = ''
      document.body.style.backgroundRepeat = ''
      document.body.style.backgroundAttachment = ''
      document.body.style.height = ''
      document.body.style.overflowX = ''
    }
  }, [])

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const handleViewProjects = () => {
    setCurrentPage('projects')
  }

  return (
    <div className="App">
      {/* Twinkling Stars Background */}
      <Stars />
      
      {/* Navigation */}
      <Navbar 
        currentPage={currentPage} 
        onPageChange={handlePageChange} 
      />
      
      {/* Page Content */}
      {currentPage === 'home' && <Hero onViewProjects={handleViewProjects} />}
      {currentPage === 'projects' && <Projects />}
      {currentPage === 'about' && (
        <div className="page-content">
          <h2>About Me</h2>
          <p>This is the about page content.</p>
        </div>
      )}
      {currentPage === 'contact' && (
        <div className="page-content">
          <h2>Contact Me</h2>
          <p>This is the contact page content.</p>
        </div>
      )}
    </div>
  )
}

export default App
