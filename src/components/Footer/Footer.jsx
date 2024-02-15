import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <>
        <div className="detalis text-white">
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-4 text-center">
                    <h3 className='text-uppercase'>location</h3>
                    <p>2215 John Daniel Drive</p>
                    <p>Clark, MO 65243</p>
                </div>
                <div className="col-md-4 text-center">
                    <h3 className='text-uppercase'>around the web</h3>
                    <div className="social-icons d-flex justify-content-center align-items-center">
                        <div className="icon">
                            <i className="fa-brands fa-facebook fs-6 mx-2"></i>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-twitter fs-6 mx-2"></i>
                        </div>
                        <div className="icon">
                            <i className="fa-brands fa-linkedin-in fs-6 mx-2"></i>
                        </div>
                        <div className="icon">
                            <i class="fa-solid fa-globe fs-6 mx-2"></i>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <h3 className='text-uppercase'>about freelancer</h3>
                    <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                
                </div>
            </div>
        </div>
        </div>
         
      <div className='copyright text-center text-white p-3'>
            <p>Copyright © Your Website 2021</p>
        </div>
        </>
     
      
    )
  }
}
