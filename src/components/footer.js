// import { Link } from "gatsby";
import Link from 'gatsby-link'
// import './footer.scss';

import React from 'react'

const Footer = () => (
    <footer id="colophon" className="footer-bottom">
        <div className="container">
            <div className="row">
                <div id="nav-menu-2" 
                className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">About Zestard</h3>
                    <div className="menu-footer-about-container">
                        <ul id="menu-footer-about" className="menu">
                            <li id="menu-item-1654"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1654">
                                <Link to="/company/culture">Culture</Link>
                            </li>
                            <li id="menu-item-1655"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1655">
                                <Link to="/company/career">Career</Link>
                            </li>
                            <li id="menu-item-1658"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1658">
                                <Link to="/company/testimonials">Testimonials</Link>
                            </li>
                            <li id="menu-item-1657"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1657">
                                <Link to="/company/partnership">Partnership</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="nav-menu-3" 
                className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">Services</h3>
                    <div className="menu-services-container">
                        <ul id="menu-services" className="menu">
                            <li id="menu-item-1659"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1659">
                                <Link to="/services/ecommerce-development">E-commerce Development</Link>
                            </li>
                            <li id="menu-item-1660"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1660">
                                <Link to="/services/cms-website-development">CMS Development</Link>
                            </li>
                            <li id="menu-item-1661"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1661">
                                <Link to="/services/javascript-framework">JS Frameworks</Link>
                            </li>
                            <li id="menu-item-2523"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2523">
                                <Link to="/services/digital-marketing">Digital Marketing</Link>
                            </li>
                            <li id="menu-item-1682"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1682">
                                <Link to="/services/hire-dedicated-developer">Hire Developers</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="nav-menu-4" 
                    className="col-lg-3 col-md-3  col-6 widget widget_nav_menu">
                    <h3 className="widget-title">Resources</h3>
                    <div className="menu-resources-container">
                        <ul id="menu-resources" className="menu">
                            <li id="menu-item-1677"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1677">
                                <Link to="company/testimonials">Happy Clients</Link>
                            </li>
                            <li id="menu-item-1676"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1676">
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li id="menu-item-1678"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1678">
                                <Link to="/portfolio/all-portfolio">Our Work</Link>
                            </li>
                            <li id="menu-item-1681"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1681">
                                <a href="https://www.zestardshop.com/"
                                target="_blank">Magento Extensions</a>
                            </li>
                            <li id="menu-item-1681"
                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1681">
                                <a href="https://apps.shopify.com/partners/zestard-technologies"
                                target="_blank">Shopify Apps</a>
                            </li>
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
                                        <a href="mailto:hr@zestard.com">info@zestard.com</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div className="col-sm-1 col-xs-1 col-2 col-md-2">
                                    <i className="fa fa-phone-square"></i>
                                    </div>
                                    <div className="col-sm-8 col-xs-8 col-8 col-md-8">
                                        <a href="tel:+91 79 40320305">+91 79 40320305</a>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                    <div className="Social">
                        <h3>Let's Socialize</h3>
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/zestard" target="_blank">
                                    <i aria-hidden="true" className="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
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
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="row footer-btm-border">
                <div className="col-xs-6 col-6">
                    <div className="copyright">
                        <p>© 2010-2019
                            <span> Zestard Technologies Pvt Ltd. </span>
                            All rights reserved.
                        </p>
                    </div>
                </div>
                <div className="col-xs-6 col-6">
                    <div className="legal-menu">
                        <ul id="menu-legal" className="legal-links">
                        <li id="menu-item-3064" 
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3064">
                            <Link to="/privacy-policy">Privacy Policy</Link>
                        </li>
                        <li id="menu-item-3063" 
                        className="menu-item menu-item-type-post_type menu-item-object-page menu-item-3063">
                            <Link to="/terms-of-use">Terms of use</Link>
                        </li> 
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer