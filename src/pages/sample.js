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
                  <Img fixed={data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fixed} />
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
      <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
      {data.allWordpressPost.edges[0].node.featured_media !== null &&
        <Img fixed={data.allWordpressPost.edges[0].node.featured_media.localFile.childImageSharp.fixed} />
      }
      </div>
      <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
      {data.allWordpressPost.edges[1].node.featured_media !== null &&
        <Img fixed={data.allWordpressPost.edges[1].node.featured_media.localFile.childImageSharp.fixed} />
      }
      </div>
      <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
      {data.allWordpressPost.edges[2].node.featured_media !== null &&
        <Img fixed={data.allWordpressPost.edges[2].node.featured_media.localFile.childImageSharp.fixed} />
      }
      </div>
      <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
      {data.allWordpressPost.edges[3].node.featured_media !== null &&
        <Img fixed={data.allWordpressPost.edges[3].node.featured_media.localFile.childImageSharp.fixed} />
      }
      </div>
      <div data-sal="slide-up"
  data-sal-delay="300"
  data-sal-easing="ease">
      {data.allWordpressPost.edges[5].node.featured_media !== null &&
        <Img fixed={data.allWordpressPost.edges[5].node.featured_media.localFile.childImageSharp.fixed} />
      }
      </div>
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
              fixed {
                base64
                tracedSVG
                aspectRatio
                width
                height
                src
                srcSet
                srcWebp
                srcSetWebp
                originalName
              }
            }
          }
        }
      }
    }
  }
}`