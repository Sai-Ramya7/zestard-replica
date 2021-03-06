// template for author Posts

import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import BlogSidebar from './../components/blogsidebar'
import { removePre, removeSpecialSymbols } from './../util/common'
import SEO from "../components/seo";

class AuthorPostsTemplate extends Component {
  
  render() {
    const data = this.props.data
    const authorName = data.allWordpressPost.edges[0].node.author.name
    return (
      <Layout>
      <SEO title={`${authorName}, Author`} />
        <div id="page" className="site">
          <div id="content" className="site-content">
          {/* author header */}
            <section>
              <div className="blog-header">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1>{authorName}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* author posts */}
            <div id="primary" className="content-area blog-list">
              <main id="main" className="site-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 blog-posts-wrap">
                    {data.allWordpressPost.edges.map(node => (
                      <div key={node.node.id}>
                        <article id="post-{node.id}"
                        className="post-{node.id} post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks card">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="card-image">
                                <Link to={`/${removePre(node.node.link)}`} className="post-thumbnail">
                                {node.node.featured_media !== null && node.node.featured_media.localFile !== null && node.node.featured_media.localFile.childImageSharp !== null &&
                                  <Img fluid={node.node.featured_media.localFile.childImageSharp.fluid} alt=""/>
                                }</Link>
                              </div>
                              <div className="section-desc">
                                <header className="entry-header">
                                  <h2 className="card-title entry-title">
                                    <Link to={`/${removePre(node.node.link)}`}>{`${removeSpecialSymbols(node.node.title)}`}</Link>
                                  </h2>
                                </header>
                                <div className="card-description"
                                dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />
                                <footer className="blog-section-footer">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                      <div className="author">
                                        <div>By 
                                        <Link to={`/${removePre(node.node.author.link)}`} className="vcard author">
                                          <strong className="fn">
                                          {node.node.author !== null &&
                                          <span>  {node.node.author.name}</span>
                                          } 
                                          </strong>
                                        </Link>, 
                                        <Link to={`/${removePre(node.node.link)}`}>
                                          <time> {node.node.date}</time>
                                        </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                      <div className="read-more-link">
                                        <Link to={`/${removePre(node.node.link)}`}>Read More</Link>
                                      </div>
                                    </div>
                                  </div>
                                </footer>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    ))}
                    </div>
                    <div className="col-md-4 blog-sidebar-wrapper col-md-offset-0">
                      <div>
                      {/* sidebar */}
                      <aside id="secondary" className="widget-area">
                        <BlogSidebar />
                      </aside>
                      </div>
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


export default AuthorPostsTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    allWordpressPost(filter: {author: {slug: {eq: $slug}}}) {
      edges {
        node {
          id
          title
          slug
          date(fromNow: true)
          excerpt
          link
          author {
            name
            slug
            link
          }
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
          categories {
            name
          }
        }
      }
    }
  }
`