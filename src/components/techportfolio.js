import React from "react"
import { graphql, StaticQuery } from "gatsby"

function renderItems(file) {
  return (
    <div className="row">
      {file.map((node, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6" key={index}>
              <h3 className="project-title">{node.node.title}</h3>
              {node.node.featured_media !== null &&
                  <img src={node.node.featured_media.source_url} alt="img" />
              }
          </div>
      ))}
    </div>
  );
}
  

function TechPortfolio(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allWordpressWpPortfolio {
            edges {
              node {
                title
                wordpress_id
                slug
                featured_media {
                  source_url
                }
              }
            }
          }
        }
      `}
      render={({ allWordpressWpPortfolio }) =>
      renderItems(allWordpressWpPortfolio.edges.filter(
          node => (node.node.wordpress_id === props.item1 || node.node.wordpress_id === props.item2)
          ))
      }
    />
  );
}

  export default React.memo(TechPortfolio);


