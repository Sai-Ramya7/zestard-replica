// Bottom part in single BlogPost page

import React from "react";
import { Link } from "gatsby";
import { dateFormate, removePre } from './../util/common'
import Img from "gatsby-image"

const BlogPostFooter = (props) => {
  const {
    allPost
  } = props;
  return (
    <div className="section related-posts bg-related-post">
      <div className="container">
        <div className="row">
          <h2 className="related-blog-title title text-center">
              You may also like
          </h2>
          <div className="row">
          {allPost.edges.map(({ node }) => (
            <div className="col-md-4 rel-bog-wrap" key={node.id}>
              <div className="card card-blog">
                <Link to={`/${removePre(node.link)}`} className="post-thumbnail">
                  {/* <img src={node.featured_media.source_url} alt="img" className="card-image" /> */}
                {node.featured_media !== null &&
                  <Img className="card-image" 
                  fluid={node.featured_media.localFile.childImageSharp.fluid} alt=""/>
                }</Link>
                <div className="content">
                  <h4 className="card-title">
                    <Link to={`/${removePre(node.link)}`}>{node.title}</Link>
                  </h4>
                  <div>
                    <span className="card-description" 
                      dangerouslySetInnerHTML={{ __html: node.excerpt }} 
                    />
                    <Link to={`/${removePre(node.link)}`} className="moretag">Read more...</Link>
                  </div>
                </div>
                <div className="footer-blog">
                  <div className="row">
                    <div className="col-md-6">
                      <Link to="#">
                        <img src="http://idroidsoftware.com/~idroidso/zestard/wp-content/uploads/2018/06/zestard-icon.png" 
                          alt="Zestard-icon"
                        />
                        <span>Zestard Tech.</span>
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <Link to="#" className="pull-right">
                        <i aria-hidden="true" className="fa fa-calendar-o"></i>
                        <span>{dateFormate(node.date)}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogPostFooter
