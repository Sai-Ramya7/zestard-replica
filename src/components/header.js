import { Link } from "gatsby";
import './header.scss'
// import PropTypes from "prop-types"
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => (
  // <Link to="/">
    <header id="masthead" className="site-header">
      <Navbar bg="default" expand="lg" id="sectionsNav"
      className="navbar navbar-light navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg">
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              <img src="https://149359943.v2.pressablecdn.com/wp-content/uploads/2019/09/zestard.png"
              alt="zestard Logo" width="181px" height="48.08px"
                className="logo"
              />
            </Link>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="primary-menu" className="navbar-nav ml-auto">
              <li className="nav-item menu-item">
              <NavDropdown title="COMPANY" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">About US</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Culture</NavDropdown.Item>
                <NavDropdown.Item><Link to="/company/career">Career</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to="/company/testimonials">Testimonials</Link></NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/company/partnership">Partnership</Link>
                </NavDropdown.Item>
              </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">E-commerce Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">CMS Website Development</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">JS Frameworks</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Digital Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hire Developer</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title="WORK" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/portfolio/all-portfolio">Portfolio</Link></NavDropdown.Item>
                  <NavDropdown.Item target="_blank"
                  href="https://www.zestardshop.com/">
                    Magento Extensions
                  </NavDropdown.Item>
                  <NavDropdown.Item target="_blank"
                  href="https://apps.shopify.com/partners/zestard-technologies">
                   Shopify Apps
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link>
                  <Link className="active" to="/blog">
                    BLOG
                  </Link>
                </Nav.Link>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link>
                  <Link className="active" to="/contact">
                    CONTACT
                  </Link>
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav.Link>
          <Link to="/blog">BLOG</Link>
        </Nav.Link> */}
      </Navbar>
    </header>
  // </Link>     
)


export default Header
