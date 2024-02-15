import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-sm navbar-light"
      >
        <div className="container p-2">
            <Link className="navbar-brand text-uppercase fw-bolder fs-2 text-white" to="home">start framework</Link>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    
                    <li className="nav-item">
                        <Link className="nav-link active mx-2 text-uppercase fw-bolder text-white" to="about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active mx-2 text-uppercase fw-bolder text-white" to="portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active mx-2 text-uppercase fw-bolder text-white" to="contact">Contact</Link>
                    </li>
                    
                </ul>   
            </div>
        </div>
      </nav>
      
    )
  }
}

