// Portfolio Navbar Component
export default function Navbar({ currentPage, onPageChange }) {
  return (
   <div className="navcontainer">
     <nav>
      <h1>My Portfolio</h1>
    </nav>
    <ul className="navlinks">
      <li>
        <a 
          href="#home" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('home');
          }}
          className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}
        >
          <span className="link-text">Home</span>
          {currentPage === 'home' && <div className="light-scatter"></div>}
        </a>
      </li>
      <li>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('projects');
          }}
          className={`nav-link ${currentPage === 'projects' ? 'active' : ''}`}
        >
          <span className="link-text">Projects</span>
          {currentPage === 'projects' && <div className="light-scatter"></div>}
        </a>
      </li>
      <li>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('about');
          }}
          className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}
        >
          <span className="link-text">About</span>
          {currentPage === 'about' && <div className="light-scatter"></div>}
        </a>
      </li>
      <li>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('contact');
          }}
          className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}
        >
          <span className="link-text">Contact</span>
          {currentPage === 'contact' && <div className="light-scatter"></div>}
        </a>
      </li>
    </ul>
   </div> 
   
  )
}