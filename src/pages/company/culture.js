// Culture Page

import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';
import { removePre } from './../../util/common'

class Culture extends Component {
  
    render() {
      const data = this.props.data
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site-header">
                <div id="content" className="site-content">
                    {/* page header */}
                    <PageHeader
                        headerMascot = {acfData.header_mascot}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    {/* events */}
                    <div className="container">
                      <div className="row">
                      {data.allWordpressWpEvent.edges.map(({ node }) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 culture-box-wrap" key={node.id}>
                          <div className="events-wrapper card shadow-sm rounded">
                            <div className="gallery-image" 
                            style={{backgroundImage:`url(${node.featured_media.localFile.childImageSharp.fluid.src})`}}>
                              <div className="view-more">
                                <Link to={`/${removePre(node.link)}/`}>View All</Link>
                              </div>
                            </div>
                            <div className="card-body event-title">
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
export default Culture

export const query = graphql`
{
  wordpressPage(wordpress_id: {eq: 169}) {
    acf {
      header_page_title
      header_sub_text
      header_section_title
      header_mascot {
        source_url
      }
    }
  }
  allWordpressWpEvent {
    edges {
      node {
        id
        title
        slug
        link
        featured_media {
          source_url
          wordpress_id
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