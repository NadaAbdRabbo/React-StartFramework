import React, { Component } from 'react'
import img1 from '../../assets/images/poert1.png';
import img2 from '../../assets/images/port2.png';
import img3 from '../../assets/images/port3.png';


export default class Portfolio extends Component {
  render() {
    return (
      <div className="container py-5">
        <div className="title text-center mb-5">
          <h2 className='fw-bolder fs-1'>PORTFOLIO COMPONENT</h2>
          <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line-1 me-3"></div>
              <i class="fa-solid fa-star"></i>
              <div className="line-1 ms-3"></div>
          </div>
          
        </div>
        
        <div className="row gy-5 py-5">


          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src={img1} className='w-100' />
                </div>
                
              </div>
            </div>
          </div>



          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <figure class="modal-body">
                  <img src={img1} className='w-100 rounded-3'/>
                </figure>
                <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            

          </div>





          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <figure>
               <img src={img2} className='w-100 rounded-3'/>
              </figure>
              <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <figure>
               <img src={img3} className='w-100 rounded-3'/>
              </figure>
              <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <figure>
                  <img src={img1} className='w-100 rounded-3'/>
                </figure>
                <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            

          </div>

          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <figure>
               <img src={img2} className='w-100 rounded-3'/>
              </figure>
              <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            
          </div>
          <div className="col-md-4">
            <div className="portfolio-item position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <figure>
               <img src={img3} className='w-100 rounded-3'/>
              </figure>
              <div className="portfolio-item-layer rounded-3">
                  <i className='fab fa-plus text-white fs-1'></i>
                </div>
            </div>
            
          </div>
          
          


          
        </div>
      </div>
    )
  }
}
