import React from 'react'
import { graphql } from 'gatsby'

// import Layout from './../components/layout'

class BlogList extends React.Component {
  render() {
    // console.log(this.props);
    // const { data } = this.props
    // const siteTitle = data.site.siteMetadata.title
    // const posts = data.allWordpressPost.edges
    // const { currentPage, numPages } = this.props.pageContext
    // const isFirst = currentPage === 1
    // const isLast = currentPage === numPages
    // const prevPage = currentPage - 1 === 1 ? '/' : (currentPage - 1).toString()
    // const nextPage = (currentPage + 1).toString()

    return (
      <h1>asdasd</h1>
      // <Layout>
      //   {posts.map(({ node }) => {
      //     return (
      //       <div key={node.id}>
      //         <h3
      //           // style={{
      //           //   marginBottom: rhythm(1 / 4),
      //           // }}
      //         >
      //           <Link style={{ boxShadow: 'none' }} to={node.slug}>
      //             {title}
      //           </Link>
      //         </h3>
      //         <small>{node.date}</small>
      //         <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      //       </div>
      //     )
      //   })}
      //   <ul
      //     style={{
      //       display: 'flex',
      //       flexWrap: 'wrap',
      //       justifyContent: 'space-between',
      //       alignItems: 'center',
      //       listStyle: 'none',
      //       padding: 0,
      //     }}
      //   >
      //     {!isFirst && (
      //       <Link to={prevPage} rel="prev">
      //         ← Previous Page
      //       </Link>
      //     )}
      //     {Array.from({ length: numPages }, (_, i) => (
      //       <li
      //         key={`pagination-number${i + 1}`}
      //         style={{
      //           margin: 0,
      //         }}
      //       >
      //         <Link
      //           to={`/${i === 0 ? '' : i + 1}`}
      //           style={{
      //             padding: rhythm(1 / 4),
      //             textDecoration: 'none',
      //             color: i + 1 === currentPage ? '#ffffff' : '',
      //             background: i + 1 === currentPage ? '#007acc' : '',
      //           }}
      //         >
      //           {i + 1}
      //         </Link>
      //       </li>
      //     ))}
      //     {!isLast && (
      //       <Link to={nextPage} rel="next">
      //         Next Page →
      //       </Link>
      //     )}
      //   </ul>
      // </Layout>
    )
  }
}

export default BlogList

// export const pageQuery = graphql`
//   query($limit: Int!, $skip:Int! ) {
//     allWordpressPost(
//       limit: $limit
//       skip: $skip
//     ) {
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
//   }
// `