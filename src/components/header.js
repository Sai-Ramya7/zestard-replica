import { useStaticQuery, Link } from "gatsby";

import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { serviceUrl, headerItemsUrl } from './../util/common'

const Header = () => {

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
            }
          }
        }
      }
    }
  `)
  const logo = data.allWordpressAcfOptions.nodes[0].options.site_logo.source_url;
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
              <img src={logo}
              alt="zestard Logo" width="181px" height="48.08px"
                className="logo"
              />
            </Link>
          </Navbar.Brand>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul id="primary-menu" className="navbar-nav ml-auto">
              <li className="nav-item menu-item">
              <NavDropdown title={company.title} id="basic-nav-dropdown">
                {company.child_items.map((node, index) => (
                  <NavDropdown.Item href={`/${headerItemsUrl(node.url)}`} key={index}>
                    {node.title}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title={services.title} id="basic-nav-dropdown">
                  {services.child_items.map((node, index) => (
                    <NavDropdown.Item href={`/${headerItemsUrl(node.url)}`} key={index}>
                      {node.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <NavDropdown title={work.title} id="basic-nav-dropdown">
                  {work.child_items.map((node, index) => (
                    <NavDropdown.Item href={`/${headerItemsUrl(node.url)}`} key={index}>
                      {node.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link href={`/${serviceUrl(blog.url)}`}>
                  {blog.title}
                </Nav.Link>
              </li>
              <li className="nav-item menu-item">
                <Nav.Link href={`/${serviceUrl(contact.url)}`}>
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
