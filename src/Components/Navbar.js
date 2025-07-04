import { Link } from 'react-router-dom';
import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light shadow-sm mx-3">
      <Link className="navbar-brand fw-bold text-primary" to="/">QuickyNews</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">🏠 Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="categoriesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              📚 Categories
            </Link>
            <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
              <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
              <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
              <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
              <li><Link className="dropdown-item" to="/health">Health</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">ℹ️ About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
