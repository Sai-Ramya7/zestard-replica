// BlogPage sidebar

import React from "react";
import { useStaticQuery, Link, graphql } from "gatsby";

import { postsUrl, headerItemsUrl, removePre } from './../util/common'

const BlogSidebar =   () => {
  const data = useStaticQuery(graphql`
    query {
      allWordpressPost(limit: 5, sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            title
            slug
            link
          }
        }
      }
      allWordpressCategory(filter: {count: {gt: 0}}) {
        edges {
          node {
            name
            slug
            id
            link
            count
            parent_element {
              name
              slug
              parent_element {
                name
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div>
    {/* categories */}
      <section id="categories-2" className="widget widget_categories">
        <div className="card">
          <h2 className="widget-title">Categories</h2>
          <ul>
            {data.allWordpressCategory.edges.map(({ node }) => (
            <li className="cat-item cat-item-{node.id}" key={node.id}>
            <Link to={`/${removePre(node.link)}`}>{node.name}</Link>
            </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Recent Posts */}
      <section id="recent-posts-2" className="widget widget_recent_entries">
        <div className="card">
          <h2 className="widget-title">Recent Posts</h2>
          <ul>
            {data.allWordpressPost.edges.map(({ node }) => (
              <li key={node.id}>
              <Link to={`/${headerItemsUrl(node.link)}`}>{node.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default BlogSidebar



{/* {node.parent_element !== null && node.parent_element.parent_element !==null &&
              <Link to={`/${params5(node.link)}`}>{node.name}</Link>
            }
            {node.parent_element !== null ?
              <Link to={`/${params4(node.link)}`}>{node.name}</Link>
              :
              <Link to={`/${postsUrl(node.link)}`}>{node.name}</Link>
            } */}