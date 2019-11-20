import React from 'react';
import { graphql } from "gatsby"

import Layout from "./../components/layout"
import Img from "gatsby-image"

export default ({ data }) => {
    
    console.log(data.file.childImageSharp.fixed);
    return (
        <div>
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