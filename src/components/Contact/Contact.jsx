import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="title text-center">
          <h2 className='fs-1 fw-bolder'>CONATCT SECTION</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line-1 me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-1 ms-3"></div>
          </div>
        </div>
        <div className="form py-5 w-50 mx-auto">
          
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-top-0 border-end-0 border-start-0" id="floatingInput" placeholder='userName'/>
              <label for="floatingInput">userName</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-top-0 border-end-0 border-start-0" id="floatingInput" placeholder='userAge'/>
              <label for="floatingInput">userAge</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-top-0 border-end-0 border-start-0" id="floatingInput" placeholder='userEmail'/>
              <label for="floatingInput">userEmail</label>
            </div>
            <div className="form-floating mb-3">
              <input type="text" className="form-control border-top-0 border-end-0 border-start-0" id="floatingInput" placeholder='userPassword'/>
              <label for="floatingInput">userPassword</label>
            </div>
            
          <button className='btn btn-message text-white'>Send Message</button>
        </div>
      </div>
    )
  }
}
