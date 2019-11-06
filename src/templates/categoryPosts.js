import React, { Component } from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import BlogSidebar from './../components/blogsidebar'

class CategoryPostsTemplate extends Component {
  
  render() {
    const data = this.props.data
    console.log('Cat', data.allWordpressPost.edges)
    const cate = data.allWordpressPost.edges[0].node.categories
    const path = this.props.location.pathname
    const parameters = path.split('/');
    const len = parameters.length
    const catName = parameters[len-1]
    console.log('this.props.location.pathname', path);
    console.log('cate', cate)
    return (
      <Layout>
        <div id="page" className="site">
          <div id="content" className="site-content">
            <section>
              <div className="blog-header">
                <div className="container">
                  <div className="row">
                      {data.allWordpressPost.edges[0].node.categories.map((node, index) => (
                        <div className="col-md-12 text-center" key={index}>
                          {node.slug === catName &&
                            <h1>{node.name}</h1>
                          }
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </section>
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
                                {/* <Link to="/" className="post-thumbnail">
                                  {node.featured_media.source_url}
                                </Link> */}
                                <Link to={`/blog/${node.node.slug}`} className="post-thumbnail">
                                {node.node.featured_media !== null &&
                                  <img src={node.node.featured_media.source_url} alt=""/>
                                }</Link>
                              </div>
                              <div className="section-desc">
                                <header className="entry-header">
                                  <h2 className="card-title entry-title">
                                    <Link to={`/blog/${node.node.slug}`}>{node.node.title}</Link>
                                  </h2>
                                </header>
                                <div className="card-description"
                                dangerouslySetInnerHTML={{ __html: node.node.excerpt }} />
                                <footer className="blog-section-footer">
                                  <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                      <div className="author">
                                        <div>By 
                                        <Link to={`/author/${node.node.author.slug}`} className="vcard author">
                                          <strong className="fn">
                                          {node.node.author !== null &&
                                          <span>  {node.node.author.name}</span>
                                          } 
                                          </strong>
                                        </Link>, 
                                        <Link to={`/blog/${node.node.slug}`}>
                                          <time> {node.node.date}</time>
                                        </Link>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                      <div className="read-more-link">
                                        <Link to={`/blog/${node.node.slug}`}>Read More</Link>
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
                      {/* <BlogSidebar /> */}
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

export default CategoryPostsTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
      edges {
        node {
          id
          title
          slug
          date(fromNow: true)
          excerpt
          author {
            name
            slug
          }
          featured_media {
            source_url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`