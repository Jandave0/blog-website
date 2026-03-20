import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import AboutImg from '../../assets/images/about-us.jpg';

const Header = () => {
  return (
    <header>
        {/* from https://react-bootstrap.netlify.app/docs/components/navbar/#text-and-non-nav-links */}
        <div className='container py-3' >
            <Navbar expand="lg" >
                <Navbar.Brand href="/" className='logo'>
                    <span>Babid </span>
                    Constructions
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto" >
                    <Nav.Link href="/"className='nav-link'>Home</Nav.Link>
                    <Nav.Link href="/about"className='nav-link'>About</Nav.Link>
                    <Nav.Link href="/services"className='nav-link'>Services</Nav.Link>
                    <Nav.Link href="/projects"className='nav-link'>Projects</Nav.Link>
                    <Nav.Link href="/blogs"className='nav-link'>Blogs</Nav.Link>
                    <Nav.Link href="/contact"className='nav-link'>Contact</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </header>
  )
}

export default Header