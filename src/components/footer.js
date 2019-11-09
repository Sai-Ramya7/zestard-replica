import React from 'react'
import { useStaticQuery, Link } from "gatsby";

import { serviceUrl, headerItemsUrl, changeUrl } from './../util/common'

const Footer = () => {
    const data = useStaticQuery(graphql`
        query {
            allWordpressAcfOptions {
                nodes {
                  options {
                    copyright_text
                    contact_email
                    phone_number
                    social_media {
                      social_media_icon
                      social_media_link
                      social_media_name
                    }
                  }
                }
            }
            allWordpressMenusMenusItems {
                nodes {
                  name
                  items {
                    title
                    url
                    target
                    wordpress_id
                  }
                }
            }
        }
    `)
    
    const about = data.allWordpressMenusMenusItems.nodes[0].items;
    const services = data.allWordpressMenusMenusItems.nodes[4].items;
    const resources = data.allWordpressMenusMenusItems.nodes[3].items;
    const legal = data.allWordpressMenusMenusItems.nodes[1].items;
    const footerLast = data.allWordpressAcfOptions.nodes[0].options;

    return (
    <footer id="colophon" className="footer-bottom">
        <div className="container">
            <div className="row">
                <div id="nav-menu-2" 
                className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">About Zestard</h3>
                    <div className="menu-footer-about-container">
                        <ul id="menu-footer-about" className="menu">
                        {about.map((node, index) => (
                            <li id={`menu-item-${node.wordpress_id}`} key={index}
                            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${node.wordpress_id}`}>
                                <Link to={`/${headerItemsUrl(node.url)}`}>{node.title}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div id="nav-menu-3" 
                className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">Services</h3>
                    <div className="menu-services-container">
                        <ul id="menu-services" className="menu">
                        {services.map((node, index) => (
                            <li id={`menu-item-${node.wordpress_id}`} key={index}
                            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${node.wordpress_id}`}>
                                <Link to={`/${headerItemsUrl(node.url)}`}>{node.title}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div id="nav-menu-4" 
                    className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">Resources</h3>
                    <div className="menu-resources-container">
                        <ul id="menu-resources" className="menu">
                        {resources.map((node, index) => (
                            <li id={`menu-item-${node.wordpress_id}`} key={index}
                            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${node.wordpress_id}`}>
                                {/* <a href={`/${node.target === "" ? `${changeUrl(node.url)}` : node.url}`}
                                    target={node.target}> {node.title}
                                </a> */}
                                {node.target === "" ? 
                                <Link to={`${changeUrl(node.url)}`}>{node.title}</Link>
                                : 
                                <a href={node.url} target={node.target}>{node.title}</a>
                                }
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-3 col-6">
                    <div className="contact">
                        <h3>Contact US</h3>
                        <ul>
                            <li>
                                <div className="row">
                                    <div className="col-sm-1 col-xs-1 col-2 col-md-2">
                                    <i className="fa fa-envelope"></i>
                                    </div>
                                    <div className="col-sm-8 col-xs-8 col-8 col-md-8">
                                        <a href={`mailto:${footerLast.contact_email}`}>{footerLast.contact_email}</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-sm-1 col-xs-1 col-2 col-md-2">
                                    <i className="fa fa-phone-square"></i>
                                    </div>
                                    <div className="col-sm-8 col-xs-8 col-8 col-md-8">
                                        <a href={`tel:${footerLast.phone_number}`}>{footerLast.phone_number}</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="Social">
                        <h3>Let's Socialize</h3>
                        <ul>
                            {footerLast.social_media.map((node, index) => (
                            <li key={index}>
                                <a href={node.social_media_link} target="_blank">
                                    <i aria-hidden="true" className={node.social_media_icon}></i>
                                </a>
                            </li>
                            ))}
                            {/* <li>
                                <a href="skype:zestard.technologies" target="_blank">
                                    <i aria-hidden="true" className="fab fa-skype"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/zestardtech" target="_blank">
                                    <i aria-hidden="true" className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/zestard" target="_blank">
                                    <i aria-hidden="true" className="fab fa-linkedin-square"></i>
                                </a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row footer-btm-border">
                <div className="col-xs-6 col-6">
                    <div className="copyright">
                        <p dangerouslySetInnerHTML = {{__html:footerLast.copyright_text}} />
                    </div>
                </div>
                <div className="col-xs-6 col-6">
                    <div className="legal-menu">
                        <ul id="menu-legal" className="legal-links">
                        {legal.map((node, index) => (
                            <li id={`menu-item-${node.wordpress_id}`} key={index}
                            className={`menu-item menu-item-type-post_type menu-item-object-page menu-item-${node.wordpress_id}`}>
                                <Link to={`/${serviceUrl(node.url)}`}>{node.title}</Link>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer