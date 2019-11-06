import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";


const BlogSidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(limit: 5, sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
      allWordpressCategory(filter: {count: {gt: 0}}) {
        edges {
          node {
            name
            slug
            id
          }
        }
      }
    }
  `)

  return (
    <div>
      <section id="categories-2" className="widget widget_categories">
        <div className="card">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {data.allWordpressCategory.edges.map(({ node }) => (
            <li className="cat-item cat-item-{node.id}" key={node.id}>
            <Link to={`/blog/category/${node.slug}`}>{node.name}</Link>
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
              <li key={node.id}>
              <Link to={`/blog/${node.slug}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlogSidebar
