import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "./../../components/layout"
import PageHeader from './../../components/page-header';

class Culture extends Component {
  
    render() {
      const data = this.props.data
      console.log(data)
      const acfData = data.wordpressPage.acf;
      return (
        <Layout>
            <div id="page" className="site-header">
                <div id="content" className="site-content">
                    <PageHeader
                        headerMascot = {acfData.header_mascot.source_url}
                        headerSubText = {acfData.header_sub_text}
                        headerSectionTitle={acfData.header_section_title}
                        headerPageTitle={acfData.header_page_title}
                    />
                    <div className="container">
                      <div className="row">
                      {data.allWordpressWpEvent.edges.map(({ node }) => (
                        <div className="col-lg-4 col-md-6 col-sm-6 culture-box-wrap" key={node.id}>
                          <div className="events-wrapper card shadow-sm rounded">
                            <div className="gallery-image" style={{backgroundImage:`url(${node.featured_media.source_url})`}}>
                              <div className="view-more">
                                <Link to={`/blog/event/${node.slug}/`}>View All</Link>
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
        featured_media {
          source_url
          wordpress_id
        }
      }
    }
  }
}
`