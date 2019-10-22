import React, { Component } from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
// import BlogSidebar from './../components/blog/blogsidebar'

class BlogPage extends Component {
  
  render() {
    const data = this.props.data
    console.log('edges', data.allWordpressPost.edges)
    console.log('data', data.allWordpressPost.edges[9].node.featured_media.author.name);
    return (
      <Layout>
        <div id="page" className="site">
          <div id="content" className="site-content">
            <section>
              <div className="blog-header">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h1>Latest Blog</h1>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div id="primary" className="content-area blog-list">
              <main id="main" className="site-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-8 blog-posts-wrap">
                    {data.allWordpressPost.edges.map(({ node }) => (
                      <div key="{node.id}">
                        <article id="post-{node.id}"
                        className="post-{node.id} post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks card">
                          <div className="row">
                            <div className="col-md-12 col-sm-12">
                              <div className="card-image">
                                {/* <Link to="/" className="post-thumbnail">
                                  {node.featured_media.source_url}
                                </Link> */}
                                <Link to="/" className="post-thumbnail">
                                {node.featured_media !== null &&
                                  <img src={node.featured_media.source_url} alt=""/>
                                }</Link>
                              </div>
                              <div className="section-desc">
                                <header className="entry-header">
                                  <h2 className="card-title entry-title">
                                    <Link to="">{node.title}</Link>
                                  </h2>
                                </header>
                                <div className="card-description"
                                dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                                <footer className="blog-section-footer">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                      <div className="author">
                                        By 
                                        <Link to="" className="vcard author">
                                          <strong className="fn">  Tiksha Dalal
                                          {/* {node.featured_media.author.name !== null &&
                                          <span>{node.featured_media.author.name}</span>}  */}
                                          </strong>
                                        </Link>, 
                                        <Link to="">
                                          <time> {node.date}</time>
                                        </Link>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                      <div className="read-more-link">
                                        <Link to="">Read More</Link>
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
                    {/* <div className="post-pagination">
                      <ul className="page-numbers">
                        <li>
                          <span>1</span>
                        </li>
                        <li>
                          <span>2</span>
                        </li>
                      </ul>
                    </div> */}
                    </div>
                    <div className="col-md-4 blog-sidebar-wrapper col-md-offset-0">
                      <div>
                      {/* <BlogSidebar /> */}
                      <aside id="secondary" className="widget-area">
                        <section id="categories-2" className="widget widget_categories">
                          <div className="card">
                            <h2 className="widget-title">Categories</h2>
                            <ul>
                              {data.allWordpressCategory.edges.map(({ node }) => (
                              <li className="cat-item cat-item-{node.id}">
                                <Link>{node.name}</Link>
                              </li>
                              ))}
                            </ul>
                          </div>
                        </section>
                        <section id="recent-posts-2" className="widget widget_recent_entries">
                          <div className="card">
                            <h2 className="widget-title">Recent Posts</h2>
                            <ul>
                            {data.allWordpressPost.edges.map(({ node }) => (
                              <li>
                                <Link to="">{node.title}</Link>
                              </li>
                            ))}
                            </ul>
                          </div>
                        </section>
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
export default BlogPage

export const query = graphql`
  {
    allWordpressPost {
      edges {
        node {
          id
          title
          slug
          date(fromNow: true)
          type
          excerpt
          featured_media {
            source_url
            author {
              name
            }
          }
        }
      }
    }
    allWordpressCategory {
      edges {
        node {
          name
          id
        }
      }
    }
  }
`