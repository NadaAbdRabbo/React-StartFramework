import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div className="shared-section py-5">
        <div className="container text-white py-5">
          <div className="title text-center mb-5">
            <h2 className='fw-bolder fs-1'>ABOUT COMPONENT</h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line-2 me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-2 ms-3"></div>
            </div>
            
          </div>
          <div className="row px-5">
            <div className="col-md-6 ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6 ps-md-5">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
