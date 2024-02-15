import React, { Component } from 'react'
import img from '../../assets/images/avataaars.svg';


export default class Home extends Component {
  render() {
    return (
     <div className="shared-section">
        <div className='container d-flex justify-content-center align-items-center flex-column py-4 text-white'>

          <div className='w-25 mb-3'>
            <img src={img} /> 
          </div>

          <div>
              <h1 className='text-uppercase'>start framework</h1>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <div className="line-2 me-3"></div>
                 <i class="fa-solid fa-star"></i>
                <div className="line-2 ms-3"></div>
              </div>
              <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
          </div>

        </div>
     </div>

     
      
      
    
     
    )
  }
}
