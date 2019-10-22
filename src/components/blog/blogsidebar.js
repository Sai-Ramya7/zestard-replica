import React, { Component } from "react"
import { graphql } from "gatsby"


import './blog.scss'
// import Layout from "../layout";
// import Layout from "./../../components/layout"


class BlogSidebar extends Component {
  render() {
    // const data = this.props.data
    // console.log('sidebar', data);
    return (
     
      <aside id="secondary" className="widget-area">
        {/* <section id="categories-2" className="widget widget_categories">
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
        </section> */}
        {/* <section id="recent-posts-2" className="widget widget_recent_entries">
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
        </section> */}
      </aside>
      
    )
  }
}

export default BlogSidebar;

// export const pageQuery = graphql`
//   query {
//     allWordpressPost {
//       edges {
//         node {
//           id
//           title
//           slug
//           date(fromNow: true)
//           type
//           excerpt
//           featured_media {
//             source_url
//             author {
//               name
//             }
//           }
//         }
//       }
//     }
//     allWordpressCategory {
//       edges {
//         node {
//           name
//           id
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
// {
//   allWordpressPost {
//     edges {
//       node {
//         id
//         title
//         slug
//         date(fromNow: true)
//         type
//         excerpt
//         featured_media {
//           source_url
//           author {
//             name
//           }
//         }
//       }
//     }
//   }
  
// }
// `
