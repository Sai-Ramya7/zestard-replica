// Portfolio Page

import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';
import { removeSpecialSymbols } from './../../util/common'
class Portfolio extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site portfolio-page">
                <div id="content" className="site-content">
                    {/* page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {/* all Portfolio */}
                    <section id="portfolio-contaner">
                        <div className="all-portfolio">
                            <div className="container">
                                <div className="row portfolio-list">
                                {data.allWordpressWpPortfolio.edges.map(({ node }, index) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 col-12" key={index}>
                                        <div className="project">
                                            <a className="project-img" href="#">
                                            {node.featured_media !== null &&
                                            <img src={node.featured_media.source_url} alt=""/>
                                            }
                                                <div className="img-hover-color"></div>
                                            </a>
                                            <div className="project-title">
                                                <h5><em>{`${removeSpecialSymbols(node.title)}`}</em></h5>
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