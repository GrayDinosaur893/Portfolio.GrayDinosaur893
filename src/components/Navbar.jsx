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
          className={currentPage === 'home' ? 'active' : ''}
        >
          Home
        </a>
      </li>
      <li>
        <a 
          href="#projects" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('projects');
          }}
          className={currentPage === 'projects' ? 'active' : ''}
        >
          Projects
        </a>
      </li>
      <li>
        <a 
          href="#about" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('about');
          }}
          className={currentPage === 'about' ? 'active' : ''}
        >
          About
        </a>
      </li>
      <li>
        <a 
          href="#contact" 
          onClick={(e) => {
            e.preventDefault();
            onPageChange('contact');
          }}
          className={currentPage === 'contact' ? 'active' : ''}
        >
          Contact
        </a>
      </li>
    </ul>
   </div> 
   
  )
}
