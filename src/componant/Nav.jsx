import React from 'react'

const Nav = ({ setCategory }) => {

  return (
    <nav className="navbar navbar-expand-lg bg-light py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold text-danger" href="#">NewsAPI</a>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse text-center justify-content-center" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {["business", "entertainment", "general", "health", "science", "sports", "technology"].map((cat) => (
              <li className="nav-item" key={cat}>
                <a className="nav-link" onClick={() => setCategory(cat)} href="#">
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
