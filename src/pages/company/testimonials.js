// Testimonials Page

import React, { Component } from "react"
import { graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';

class Testimonials extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site">
                <div id="content" className="site-content">
                    {/* Page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {/* testimonials */}
                    <div className="container">
                        <div className="row grid testimonial-list"
                        >
                            {data.allWordpressWpTestimonials.edges.map(({ node }) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item"
                                key={node.id}>
                                    <div className="testimonial-wrapper card">
                                        <div className="speaks">
                                            <i className="coma">
                                                <img className="img-responsive" alt="coma"
                                                src="https://postyoulike.com/zestard/wp-content/themes/zestard/images/testimonials/quote-icon.png" />
                                            </i>
                                            <div dangerouslySetInnerHTML={{ __html: node.content }} />
                                        </div>
                                        <div className="client-name card-footer">
                                            <h3>{node.title}</h3>
                                        </div>
                                    </div>
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

export default Testimonials

export const query = graphql`
    {
        wordpressPage(slug: {eq: "testimonials"}) {
            acf {
              header_page_title
              header_sub_text
              header_section_title
                header_mascot {
                    source_url
                }
            }
        }
        allWordpressWpTestimonials {
            edges {
                node {
                    id
                    title
                    content
                }
            }
        }
    }
`



// https:postyoulike.com/zestard/wp-content/themes/zestard/images/testimonials/quote-icon.png