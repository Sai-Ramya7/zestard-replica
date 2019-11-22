// Template for single blog post page

import React, { Component } from "react"
import { Link, graphql } from "gatsby"
import PropTypes from "prop-types"
import Layout from "./../components/layout"
import BlogPostFooter from './../components/blogpostfooter';
import { dateFormate, removeSpecialSymbols } from './../util/common'
import SEO from "../components/seo";

class PostTemplate extends Component {
  render() {
    const data = this.props.data
    const post = this.props.data.wordpressPost
    return (
      <Layout>
      <SEO title={post.title} />
        <div id="page" className="site">
            <div id="content" className="single-post-detail site-content">
                <div id="primary" className="content-area ">
                    <main id="main" className="site-main blog-post blog-post-wrapper">
                        <div className="container">
                            <div className="row">
                            {/* sticky sidebar with social icons */}
                                <div className="col-md-2 sticky">
                                    <div className="blog-social" id="sidebar">
                                        <h3>Share</h3>
                                        <ul>
                                            <li>
                                                <Link to="/https://www.facebook.com/zestard"  target="_blank">
                                                    <i aria-hidden="true" className="fab fa-facebook-square"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/https://twitter.com/zestardtech"  target="_blank">
                                                    <i aria-hidden="true" className="fab fa-twitter"></i>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/https://www.linkedin.com/company/zestard"  target="_blank">
                                                    <i aria-hidden="true" className="fab fa-linkedin-square"></i>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                {/* post details */}
                                <div className="single-post-wrap col-md-10 col-lg-8">
                                    <section>
                                        <div className="blog-header">
                                            <h1 className="hestia-title">{`${removeSpecialSymbols(post.title)}`}</h1>
                                            <div className="authormeta">
                                                <div className="author_avatar">
                                                    {post.author.avatar_urls.wordpress_24 !== null &&
                                                    <img src={post.author.avatar_urls.wordpress_24.source_url} alt={post.author.name}/>
                                                    }
                                                </div>
                                                <div className="author-details">
                                                    <h4 className="author-name">{post.author.name}</h4>
                                                    <span className="date">{dateFormate(post.date)}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <article id="post-2588" 
                                    className="post-2588 post type-post status-publish format-standard has-post-thumbnail hentry category-design category-tips-and-tricks">
                                        <div className="row">
                                            <div className="col-md-12 col-sm-12">
                                                <div className="single-blog-desc">
                                                    <div className="content-description"
                                                      dangerouslySetInnerHTML={{ __html: post.content }}  
                                                    />
                                                    {post.author.description !== "" &&
                                                        <div>
                                                        <hr />
                                                        <div className="authorbio">
                                                            <div className="authorbio-top row">
                                                                <div className="author-image col-md-2">
                                                                {post.author.avatar_urls.wordpress_24 !== null &&
                                                                <img src={post.author.avatar_urls.wordpress_24.source_url} alt={post.author.name}/>
                                                                }
                                                                </div>
                                                                <div className="title">
                                                                    <h3>About {post.author.name}</h3>
                                                                </div>
                                                            </div>
                                                            <p dangerouslySetInnerHTML={{ __html: post.author.description }} />
                                                        </div>
                                                    </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            {/* related posts */}
                            <BlogPostFooter 
                                allPost = {data.allWordpressPost}/>
                        </div>
                    </main>
                </div>
            </div>
        </div>
      </Layout>
    )
  }
}

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default PostTemplate

export const pageQuery = graphql`
  query($id: String!, $cat: String! ) {
    wordpressPost(id: { eq: $id }) {
        title
        date(locale: "")
        content
        author {
          name
          description
          avatar_urls {
            wordpress_24 {
              source_url
            }
          }
        }
        categories {
            slug
        }
    }
    allWordpressPost(limit: 3, filter: {categories: {elemMatch: {slug: {eq: $cat}}}, id: {ne: $id}}) {
        edges {
            node {
                id
                title
                wordpress_id
                date(formatString: "l")
                slug
                excerpt
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
            }
        }
    }
  }
`


















// "engines": {
//     "node": "13.0.1",
//     "yarn": "1.19.1"
//   }