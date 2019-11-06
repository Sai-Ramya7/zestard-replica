import React, { Component } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

class BlogEventTemplate extends Component {
  
    render() {
      const data = this.props.data
      const eventHead = this.props.data.allWordpressWpEvent.edges[0].node.title
      console.log('event', data)
      return (
        <Layout>
          <div id="page" className="site">
            <div id="content" className="site-content">
              <section>
                <div className="blog-header">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12 text-center">
                        <h1>{eventHead}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div id="primary" className="content-area blog-list">
                <main id="main" className="site-main">
                  <div className="container">
                    <div className="event-gallery">
                        <div className="grid" style={{position:`relative`}}>
                          {data.wordpressAcfEvent.acf.el_gallery.map(( node, index ) => (
                            <div className="grid-item" key={index}>
                                <Link to="">
                                {node.source_url !== null &&
                                  <img src={node.source_url} alt={index}/>
                                }
                                </Link>
                            </div>
                          ))}
                        </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
  
  }
  
  export default BlogEventTemplate
  
  export const pageQuery = graphql`
    query($id: Int!) {
        wordpressAcfEvent(wordpress_id: {eq: $id}) {
            acf {
                el_gallery {
                    source_url
                }
            }
        }
        allWordpressWpEvent(filter: {wordpress_id: {eq: $id}}) {
            edges {
                node {
                    id
                    title
                    featured_media {
                        source_url
                        wordpress_id
                    }
                }
            }
        }
    }
  `