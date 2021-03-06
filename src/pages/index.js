// Home Page

import React, { Component } from "react"
import { Link, graphql } from "gatsby"
// import BackgroundImage from 'gatsby-background-image-es5'

// import {Navbar, Nav, NavItem} from 'react-bootstrap'
import Img from "gatsby-image"
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './../assets/scss/index.scss'

import SEO from "./../components/seo"
import Layout from "../components/layout"
import { removePre } from './../util/common'

class Index extends Component {

  constructor(props) {
    super(props);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
  }

  handleMouseEnter = (event) => {
    // console.log('fun', event.currentTarget.parentNode.id);
    const tab = document.getElementsByClassName('nav-item')
    for(var i=0; i< tab.length; i++) {
      tab[i].classList.remove('active');
    }
    const ele = event.currentTarget.parentNode;
    const current = ele.dataset.rbEventKey;
    ele.classList.add('active');
    const pane = document.getElementsByClassName('tab-pane')
    for(var i=0; i< pane.length; i++) {
      pane[i].classList.remove('show', 'active');
    }
    document.getElementById('uncontrolled-tab-example-tabpane-'+current).classList.add('show', 'active');
  }

    render() {
      const data = this.props.data
      const datatabs = data.wordPressAcfTechnologyTabs.technology_tabs_repeater
      const acfData = data.wordpressPage.acf;
      const ser = data.wordPressAcfHomeServicesBlock;
      const project = data.wordPressAcfHomePortfolioSection;
      const industry = data.allWordpressAcfOptions.nodes[0].options;
      const clients = data.wordPressAcfHomeClients;
      const blog = data.wordPressAcfHomeBlogBlock;
      return (
        <Layout>
        <SEO title="Offshore Website Design & Development Company" />
          <div id="page" className="site page-home">
            <div id="content" className="site-content">
            {/* page header */}
              <section>
                <div className="page-home-header">
                  <div className="hero-bkg-animated">
                    <div className="container">
                      <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 vector">
                          {/* <img src={acfData.header_mascot.source_url} alt=""
                          className="home-avatar"/> */}
                          {acfData.header_mascot !== null && acfData.header_mascot.localFile !== null && acfData.header_mascot.localFile.childImageSharp !== null &&
                            <Img className="home-avatar"
                             fixed={acfData.header_mascot.localFile.childImageSharp.fixed} />
                          }
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                          <div className="page-detail">
                            {/* <h5>{acfData.header_section_title}</h5> */}
                            <h1 className="title"
                             dangerouslySetInnerHTML = {{ __html: acfData.header_page_title }} />
                            <h4 className="sub-title"
                            dangerouslySetInnerHTML = {{ __html: acfData.header_sub_text }} />
                            {/* <h1 className="title">{acfData.header_page_title}</h1> */}
                            {/* <h4 className="sub-title">{acfData.header_sub_text}</h4> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* Technology Tabs section */}
              <section>
                <div className="services">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-10 col-md-12 text-center">
                        <Tabs defaultActiveKey={datatabs[0].tt_tab_title} id="uncontrolled-tab-example" className="nav-tabs">
                          {datatabs.map(( node, index ) => ( 
                            <Tab eventKey={node.tt_tab_title} className="nav-link" 
                            key={index} title={<p className={`item-${index+1}`}
                            onMouseEnter = { (e) => this.handleMouseEnter(e) }
                            >
                              <img alt="" src={node.tt_title_icon.source_url} width="30" />
                              {/* {node.tt_title_icon.localFile !== null &&
                                <Img fluid={node.tt_title_icon.localFile.childImageSharp.fluid} />
                              } */}
                              <span>{node.tt_tab_title}</span></p>}>
                              <div className="tab-pane" id={`tab_${index+1}`}>
                                <h2 className="title text-center">{node.tt_tab_title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: node.tt_tab_description }} />
                                <div className="row">
                                  <div className="col-sm-12 col-12 text-center">
                                    <Link to={`/${removePre(node.tt_tab_link)}`} className="btn btn-primary learn-more">Learn More</Link>
                                  </div>
                                </div>
                              </div>
                            </Tab>
                          ))}
                        </Tabs>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* what we do */}
              <section>
                <div className="what-we-do">
                  <div className="container">
                    <div className="row">
                      <div className="service-head col-lg-12">
                        <h2 className="title text-center">{ser.home_service_heading}</h2>
                      </div>
                      <div className="service-content">
                        <div className="row row-eq-height">
                        {data.wordPressAcfHomeServicesBlock.home_services.map(( node, index ) => ( 
                          <div className="col-lg-6 col-md-6 col-sm-12 hm-service-card" key={index}>
                            <div className="content-col card">
                              <div className="row service-head">
                                <div className="col-md-3 col-sm-3 col-3 text-xs-center service-img">
                                  <img src={node.home_service_icon.source_url} alt=""/>
                                  {/* <Img fluid={node.home_service_icon.localFile.childImageSharp.fluid} /> */}
                                </div>
                                <div className="col-md-9 col-sm-9 col-12 text-xs-center p-xs-0">
                                  <div className="title">{node.home_service_name}</div>
                                  <p>{node.home_service_description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* project */}
              <section>
                <div className="view-casestudy">
                  <div className="container">
                    <div className="row home-portfolio-sec">
                    <div className="col-md-4 col-lg-3 col-sm-12 tablet">
                      <div className="project-detail">
                      <div dangerouslySetInnerHTML={{ __html: project.home_description_ps }}/>
                        <div className="view-projects-btn mb-md-4">
                          <a className="btn btn-primary" href={project.home_link_ps}
                          rel="noopener noreferrer" target="_blank">View Project</a>
                        </div>
                      </div>
                    </div>
                      <div className="col-md-8 col-lg-9 col-sm-12 tablet">
                        <div className="product-img">
                          {/* <img src={project.home_featured_image_ps.source_url} alt=""/> */}
                          <Img fluid = {project.home_featured_image_ps.localFile.childImageSharp.fluid}  />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* partnership and trusted */}
              <section>
                <div className="industry">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="trusted_wrapper m-xs-0  mt-xs-5 mt-sm-5">
                          <h5>{industry.pt_right_sec_title}</h5>
                          <h2><b>{industry.pt_right_sec_sub_title}</b></h2>
                          <h6>{industry.pt_right_sec_description}</h6>
                          <div className="trutesd-grp">
                            <div className="row">
                            {data.allWordpressAcfOptions.nodes[0].options.pt_right_stats.map((options, index) => (
                              <div className="col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
                                <h2>{options.pt_right_stats_label}</h2>
                                <h6>{options.pt_right_stats_description}</h6>
                              </div>
                            ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-5 col-lg-5 col-sm-12 tablet">
                        <div className="mt-sm-5">
                          <h2>{industry.pt_left_sec_sub_title}</h2>
                          <div id="testimonial-video">
                            <a href="https://www.youtube.com/watch?v=a6ml5b2j04M">
                                {/* <img src={industry.pt_left_sec_thumbnail.source_url} alt=""/> */}
                              {industry.pt_left_sec_thumbnail !== null &&
                                <Img fluid={industry.pt_left_sec_thumbnail.localFile.childImageSharp.fluid} />
                              }
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              {/* clents section */}
              <section>
                <div className="clients">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="clients-wrapper m-xs-0 m-sm-0 mb-sm-4 text-center">
                          <h2 className="title">{clients.ch_title}</h2>
                          <div className="row m-0 ">
                          {data.wordPressAcfHomeClients.ch_clients_logos.map(( node, index ) => ( 
                            <div className="col-md-2  mb-md-4 px-xs-2 pb-xs-4 col-12 client-logo mobile"
                            key={index}>
                              <img src={node.source_url} alt="" />
                              {/* <Img fixed={node.localFile.childImageSharp.fixed} /> */}
                            </div>
                          ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>             
              </section>
            </div>
            {/* Blog Posts */}
            <div className="home-blogs">
              <div className="container">
                <div className="col-sm-12 text-center">
                  <h2 className="title">{blog.hm_blog_heading}</h2>
                </div>
                <div className="row hm-blog-wrap ">
                {data.allWordpressPost.edges.map(({ node }) => (
                  <div className="col-lg-3 col-md-6 col-sm-6 blog-wraper"
                  key={node.wordpress_id}>
                    <Link to={`/${removePre(node.link)}`} className="card-img">
                      <div className="card-img" style={{ 
                        backgroundImage: `url(${node.featured_media.source_url})` }}
                        >
                      </div>
                      {/* <BackgroundImage
                        Tag="div"
                        className="card-img"
                        fluid={node.featured_media.localFile.childImageSharp.fluid} >
                      </BackgroundImage> */}
                      <p className="card-content">{node.title}</p>
                    </Link>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </Layout>
      )
    }

}
export default Index


export const query = graphql`
{  
  wordpressPage(wordpress_id: {eq: 2}) {
    title
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
        localFile {
          childImageSharp {
            fixed {
              base64
              tracedSVG
              aspectRatio
              width
              height
              src
              srcSet
              srcWebp
              srcSetWebp
              originalName
            }
          }
        }
      }
    }
  }
  wordPressAcfTechnologyTabs {
    id
    technology_tabs_repeater {
      tt_tab_title
      tt_tab_link
      tt_tab_description
      tt_title_icon {
        source_url
        localFile {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
  wordPressAcfHomeServicesBlock {
    home_service_heading
    home_services {
      home_service_name
      home_service_description
      home_service_icon {
        source_url
        localFile {
          childImageSharp {
            fluid {
              base64
              tracedSVG
              aspectRatio
              src
              srcSet
              srcWebp
              srcSetWebp
              sizes
              originalImg
              originalName
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  }
  wordPressAcfHomePortfolioSection {
    home_featured_image_ps {
      source_url
      localFile {
        childImageSharp {
          fluid {
            base64
            tracedSVG
            aspectRatio
            src
            srcSet
            srcWebp
            srcSetWebp
            sizes
            originalImg
            originalName
            presentationWidth
            presentationHeight
          }
        }
      }
    }
    home_description_ps
    home_link_ps
  }
  allWordpressAcfOptions {
    nodes {
      options {
        pt_right_sec_title
        pt_right_sec_sub_title
        pt_right_sec_description
        pt_right_stats {
          pt_right_stats_description
          pt_right_stats_label
        }
        pt_left_sec_sub_title
        pt_left_sec_thumbnail {
          source_url
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
  wordPressAcfHomeClients {
    ch_title
    ch_clients_logos {
      source_url
      localFile {
        childImageSharp {
          fixed {
            base64
            tracedSVG
            aspectRatio
            width
            height
            src
            srcSet
            srcWebp
            srcSetWebp
            originalName
          }
        }
      }
    }
  }
  wordPressAcfHomeBlogBlock {
    hm_blog_heading
  }
  allWordpressPost(limit: 4) {
    edges {
      node {
        title
        slug
        wordpress_id
        link
        featured_media {
          source_url
          localFile {
            childImageSharp {
              fluid {
                base64
                tracedSVG
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    }
  }
}
`
