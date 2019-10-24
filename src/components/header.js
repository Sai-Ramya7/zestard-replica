import { Link } from "gatsby";
// import './header.scss'
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
                <NavDropdown.Item href="/company/aboutus">About Us</NavDropdown.Item>
                <NavDropdown.Item href="/company/culture">Culture</NavDropdown.Item>
                <NavDropdown.Item href="/company/career">Career</NavDropdown.Item>
                <NavDropdown.Item href="/company/testimonials">Testimonials</NavDropdown.Item>
                <NavDropdown.Item href="/company/partnership">Partnership</NavDropdown.Item>
              </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title="SERVICES" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/services/ecommerce-development">E-commerce Development</NavDropdown.Item>
                  <NavDropdown.Item href="/services/cms-website-development">CMS Website Development</NavDropdown.Item>
                  <NavDropdown.Item href="/services/javascript-framework">JS Frameworks</NavDropdown.Item>
                  <NavDropdown.Item href="/services/digital-marketing">Digital Marketing</NavDropdown.Item>
                  <NavDropdown.Item href="/services/hire-dedicated-developer">Hire Developer</NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title="WORK" id="basic-nav-dropdown">
                  <NavDropdown.Item href="/portfolio/all-portfolio">Portfolio</NavDropdown.Item>
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
                <Nav.Link href="/blog">
                  BLOG
                </Nav.Link>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link href="/contact-us">
                  CONTACT
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
