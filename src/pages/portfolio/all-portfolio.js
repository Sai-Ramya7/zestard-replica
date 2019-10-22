import React, { Component } from "react"
import { Link, graphql } from "gatsby"


import Layout from "./../../components/layout"
import './../../components/portfolio.scss'


class Portfolio extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site portfolio-page">
                <div id="content" className="site-content">
                    <section>
                        <div className="page-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 vector">
                                        {acfData.header_mascot !== null &&
                                        <img src={acfData.header_mascot.source_url} alt=""/>
                                        }
                                    </div>
                                    <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                                        <div className="page-detail">
                                            <h5>{acfData.header_section_title}</h5>
                                            <h1 className="title">{acfData.header_page_title}</h1>
                                            <h4 className="sub-title">{acfData.header_sub_text}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="portfolio-contaner">
                        <div className="all-portfolio">
                            <div className="container">
                                <div className="row portfolio-list">
                                {data.allWordpressWpPortfolio.edges.map(({ node }) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                                        <div className="project">
                                            <Link className="project-img">
                                            {node.featured_media !== null &&
                                            <img src={node.featured_media.source_url} alt=""/>
                                            }
                                                <div className="img-hover-color"></div>
                                            </Link>
                                            <div className="project-title">
                                                <h5><em>{node.title}</em></h5>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    )
  }

}
export default Portfolio

export const query = graphql`
{
    wordpressPage(slug: {eq: "work"}) {
        acf {
            header_page_title
            header_sub_text
            header_section_title
            header_mascot {
                source_url
            }
        }
    }
    allWordpressWpPortfolio {
        edges {
            node {
            slug
            title
                featured_media {
                    source_url
                }
            }
        }
    }
}
`