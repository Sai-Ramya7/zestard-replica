import React, { Component } from "react"
import { graphql } from "gatsby"


import Layout from "./../../components/layout"
// import './../../components/testimonials.scss'


class Testimonials extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site">
                <div id="content" className="site-content">
                    <section>
                        <div className="page-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 vector">
                                       {/* <img src="{acfData.header_mascot.source_url}" /> */}
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
                    <div className="container">
                        <div className="row grid testimonial-list"
                        >
                            {data.allWordpressWpTestimonials.edges.map(({ node }) => (
                                <div className="col-lg-4 col-md-6 col-sm-6 col-12 grid-item"
                                >
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
                    title
                    content
                }
            }
        }
    }
`



// https:postyoulike.com/zestard/wp-content/themes/zestard/images/testimonials/quote-icon.png