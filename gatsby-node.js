/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")
const slash = require(`slash`)

exports.createPages = async ({ graphql, actions }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    {
      allWordpressPost(sort: {order: DESC, fields: date}) {
        edges {
          node {
            id
            slug
            status
            date
            excerpt
            categories {
              slug
              name
            }
          }
        }
      }
      allWordpressCategory {
        edges {
          node {
            name
            slug
            id
            parent_element {
              name
              slug
              parent_element {
                name
                slug
              }
            }
          }
        }
      }
      allWordpressWpUsers {
        edges {
          node {
            name
            slug
          }
        }
      }  
      allWordpressWpEvent {
        edges {
          node {
            title
            slug
            id
            wordpress_id
            featured_media {
              source_url
            }
          }
        }
      }
      allWordpressPage {
        edges {
          node {
            slug
            title
            path
            wordpress_id
          }
        }
      }
    }
  `)

  const { allWordpressPost, allWordpressCategory, 
          allWordpressWpUsers, allWordpressWpEvent,
          allWordpressPage} = result.data

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  const CategoryPostsTemplate = path.resolve(`./src/templates/categoryPosts.js`)
  const AuthorPostsTemplate = path.resolve(`./src/templates/authorPosts.js`)
  const BlogEventTemplate = path.resolve(`./src/templates/blogEvent.js`)
  const ServiceTemplate = path.resolve(`./src/templates/services.js`)
  const postTemplate = path.resolve(`./src/templates/blogpost.js`)
  const BlogPosts = path.resolve(`./src/templates/blog.js`)
  // We want to create a detailed page for each
  // post node. We'll just use the WordPress Slug for the slug.
  // The Post ID is prefixed with 'POST_'

  // Creating pages for Services

  allWordpressPage.edges.forEach(edge => {
    createPage({
      path: `${edge.node.path}`,
      component: slash(ServiceTemplate),
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })

  // Creating pages for blog posts

  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}/`,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        cat: edge.node.categories[0].slug
      },
    })
  })

  // creating pages for Category posts

  allWordpressCategory.edges.forEach(edge => {
    if (edge.node.parent_element !== null) {
      if (edge.node.parent_element.parent_element !== null) {
        createPage({
          path: `/blog/category/${edge.node.parent_element.parent_element.slug}/${edge.node.parent_element.slug}/${edge.node.slug}/`,
          component: slash(CategoryPostsTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      } else {
        createPage({
          path: `/blog/category/${edge.node.parent_element.slug}/${edge.node.slug}/`,
          component: slash(CategoryPostsTemplate),
          context: {
            slug: edge.node.slug,
          },
        })
      }
    } else {
      createPage({
        path: `/blog/category/${edge.node.slug}/`,
        component: slash(CategoryPostsTemplate),
        context: {
          slug: edge.node.slug,
        },
      })
    }

  })

  // Creating pages for Author posts

  allWordpressWpUsers.edges.forEach(edge => {
    createPage({
      path: `/author/${edge.node.slug}/`,
      component: slash(AuthorPostsTemplate),
      context: {
        slug: edge.node.slug,
      },
    })
  })

  // creating pages for blog events

  allWordpressWpEvent.edges.forEach(edge => {
    createPage({
      path: `/blog/event/${edge.node.slug}/`,
      component: slash(BlogEventTemplate),
      context: {
        id: edge.node.wordpress_id,
      },
    })
  })
  
  // Pagination for blog posts page

  const posts = allWordpressPost.edges
  const postsPerPage = 10
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: slash(BlogPosts),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1
      }
    });
  });


}

