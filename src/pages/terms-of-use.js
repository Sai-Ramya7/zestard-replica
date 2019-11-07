import React, { Component } from "react"
import { graphql } from "gatsby"


import Layout from "./../components/layout"
// import './../components/terms.scss'
// import { node } from "prop-types";


class TermsOfUse extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site">
                <div id="content" className="site-content">
                {data.allWordpressPage.edges.map(({ node }, index) => (
                    <div key={index}>
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
                                            <h5> </h5>
                                            <h1 className="title">{acfData.header_page_title}</h1>
                                            <h4 className="sub-title"> </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="container">
                        <div id="primary" className="content-area">
                            <main id="main" className="site-main">
                                <article id="post-{node.wordpress_id}" className="post-{node.wordpress_id} page type-page status-publish hentry">
                                    <div className="entry-content"
                                    dangerouslySetInnerHTML={{ __html: node.content }} />
                                </article>
                            </main>
                        </div>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </Layout>
      )
    }
}

export default TermsOfUse

export const query = graphql`
    {
        wordpressPage(slug: {eq: "terms-of-use"}) {
            acf {
              header_page_title
                header_mascot {
                    source_url
                }
            }
        }
        allWordpressPage(filter: {slug: {eq: "terms-of-use"}}) {
            edges {
                node {
                    id
                    title
                    content
                    wordpress_id
                }
            }
          }
    }
`