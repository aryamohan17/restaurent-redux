import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import '../Images/download (1).jpeg'
function Header() {
    return(
      <>
        <Navbar className="dark" variant='dark'>
          <div className='container-fluid'>
            <Navbar.Brand href="#home" className='d-flex align-items-center'>
              <img
                alt=""
                src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/restaurant-logo%2Crestaurant-icon-logo-free-design-template-e4e92c7d3b5631a777fce7a5d629a00a_screen.jpg?ts=1662468709"
                width="50"
                height="50"
                className="d-inline-block align-top me-2"
              />{' '}
              <span className='fs-4 fw-bolder '>All De Cafes</span>
            </Navbar.Brand>
          </div>
        </Navbar>
      </>
    )
}
export default Header