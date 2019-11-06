import React, { Component } from "react";
import { useStaticQuery, Link, graphql } from "gatsby";


const RecentPosts = () => {
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
        }
    `)
  
    return (
        <div>
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

export default RecentPosts
