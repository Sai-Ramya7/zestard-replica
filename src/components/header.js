// Navbar Page Header

import React from "react";
import { useStaticQuery, Link } from "gatsby";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { removePre } from './../util/common'

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const handleOpen = (el) => {
    // setIsOpen(true);
    const target = el.currentTarget.getElementsByClassName('dropdown-menu')[0];
    const test = target.closest('.dropdown-menu');
    if(test !== null) {
      test.classList.add('show');
    }
  }
    
  const handleClose = (el) => {
    // setIsOpen(false);
    // console.log('leave', isOpen);
    const target = el.currentTarget.getElementsByClassName('dropdown-menu')[0];
    if(target !== null) {
      const test = target.closest('.dropdown-menu');
      if(test !== null) {
        test.classList.remove('show');
      }
    }
  }

  const data = useStaticQuery(graphql`
    {
      allWordpressAcfOptions {
        nodes {
          options {
            site_logo {
              source_url
            }
          }
        }
      }
      allWordpressMenusMenusItems(filter: {wordpress_id: {eq: 207}}) {
        nodes {
          name
          items {
            title
            url
            child_items {
              title
              url
              wordpress_id
              target
            }
          }
        }
      }
    }
  `)
  const logo = data.allWordpressAcfOptions.nodes[0].options.site_logo;
  const company = data.allWordpressMenusMenusItems.nodes[0].items[0];
  const services = data.allWordpressMenusMenusItems.nodes[0].items[1];
  const work = data.allWordpressMenusMenusItems.nodes[0].items[2];
  const blog = data.allWordpressMenusMenusItems.nodes[0].items[3];
  const contact = data.allWordpressMenusMenusItems.nodes[0].items[4];
  return(
    <header id="masthead" className="site-header">
      <Navbar bg="default" expand="lg" id="sectionsNav"
      className="navbar navbar-light navbar-color-on-scroll navbar-transparent fixed-top navbar-expand-lg">
        <div className="container">
          <Navbar.Brand>
            <Link to="/">
              {logo !== null &&
              <img src={logo.source_url}
              alt="zestard Logo" width="181px" height="48.08px"
                className="logo"
              />
              }
            </Link>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="primary-menu" className="navbar-nav ml-auto">
              <li className="nav-item menu-item">
              <NavDropdown title={company.title} id="basic-nav-dropdown"
              onMouseEnter = { (e) => handleOpen(e) }
              onMouseLeave = { (e) => handleClose(e) }
              >
                {company.child_items.map((node, index) => (
                  <NavDropdown.Item href={`/${removePre(node.url)}`} key={index}>
                    {node.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title={services.title} id="basic-nav-dropdown"
                onMouseEnter = { (e) => handleOpen(e) }
                onMouseLeave = { (e) => handleClose(e) }>
                  {services.child_items.map((node, index) => (
                    <NavDropdown.Item href={`/${removePre(node.url)}`} key={index}>
                      {node.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title={work.title} id="basic-nav-dropdown"
                onMouseEnter = { (e) => handleOpen(e) }
                onMouseLeave = { (e) => handleClose(e) }>
                  {work.child_items.map((node, index) => (
                    <NavDropdown.Item 
                    href={`${node.target === "" ? `/${removePre(node.url)}` : node.url}`}
                                    target={node.target} key={index}>
                      {node.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link href={`/${removePre(blog.url)}`}>
                  {blog.title}
                </Nav.Link>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link href={`/${removePre(contact.url)}`}>
                  {contact.title}
                </Nav.Link>
              </li>
            </ul>
          </div>
        </div>
      </Navbar>
    </header>
  )
}


export default Header
