import React from 'react';
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
    
  console.log(data.file.childImageSharp.fixed);
  return (
    <div>
      <section>
        <div className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6 col-sm-6 col-xs-12 vector">
                {data.allWordpressPost.edges[0].node.featured_media !== null &&
                  <Img sizes={data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.sizes} />
                }
              </div>
              <div className="col-lg-7 col-md-6 col-sm-6 col-xs-12">
                <div className="page-detail">
                  <h5>{data.allWordpressPost.edges[0].node.title}</h5>
                  <h1 className="title">{data.allWordpressPost.edges[0].node.slug}</h1>
                  <h4 className="sub-title">{data.allWordpressPost.edges[0].node.title}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>Hello gatsby-image</h1>
      {data.allWordpressPost.edges[0].node.featured_media !== null &&
        <Img sizes={data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.sizes} />
      }
    </div>
  )
}
  
export const query = graphql`
query {
  file(relativePath: { eq: "zestard.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      # Makes it trivial to update as your page's design changes.
      fixed(width: 125, height: 125) {
        ...GatsbyImageSharpFixed
      }
    }
  }
  allWordpressPost {
    edges {
      node {
        id
        title
        slug
        featured_media {
          source_url
          localFile {
            childImageSharp {
              sizes {
                sizes
                aspectRatio
                base64
                originalImg
                originalName
                presentationHeight
                presentationWidth
                src
                srcSet
                srcSetWebp
                srcWebp
                tracedSVG
              }
            }
          }
        }
      }
    }
  }
}`