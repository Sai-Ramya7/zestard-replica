import React, { Component } from "react"
import { Link, graphql } from "gatsby"


import Layout from "./../../components/layout"
import './../../components/career.scss'


class Career extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site career">
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
                    <section id="career-container">
                        <div className="open-position">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
                                        <h2 className="title">Open Position</h2>
                                        <h6>
                                        We help companies from all over the world reach their business goals.
                                        </h6>                                        
                                    </div>
                                </div>
                                <div className="job-open">
                                    <div className="row">
                                    {data.allWordpressWpCareer.edges.map(({ node }) => (
                                        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 col-12 ">
                                            <div className="card">
                                                <h3>{node.slug}</h3>
                                                <div className="row padding-bottom">
                                                    <div className="col-xl-7 col-lg-7 col-sm-12">
                                                        <h4>{node.title}</h4>
                                                        <span>No. of opening: 3</span>
                                                        <br/>
                                                        <span>Full time - India</span>
                                                    </div>
                                                    <div className="col-xl-5 col-lg-5 col-sm-12">
                                                        <Link to="/" className="btn btn-primary">
                                                            Apply Now
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                    </div>
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

export default Career

export const query = graphql`
    {
        wordpressPage(slug: {eq: "career"}) {
            acf {
              header_page_title
              header_sub_text
              header_section_title
              header_mascot {
                source_url
              }
            }
          }
          allWordpressWpCareer {
            edges {
              node {
                slug
                title
              }
            }
          }
    }
`