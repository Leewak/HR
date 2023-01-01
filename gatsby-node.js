const path = require(`path`)
const postsTemplatePath = path.resolve("./src/templates/post.js")
const pagesTemplatePath = path.resolve("./src/templates/inner.js")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const posts_results = await graphql(`
    query {
      allPosts {
        nodes {
          id
          slug
          published
        }
      }
    }
  `)

  posts_results.data.allPosts.nodes.forEach(node => {
    if(node.slug != null) {
      if(node.published == true) {
        createPage({
          path: `/blog/`+node.slug,
          component: postsTemplatePath,
          context: {
            id: node.id
          },
        })
      }
    }
  })

  const pages_results = await graphql(`
    query {
      allPages {
        nodes {
          id
          slug
          status
          published
        }
      }
    }
  `)

  pages_results.data.allPages.nodes.forEach(node => {
    if(node.slug != null) {
      if(node.published == true) {
        if(node.status == 'active') {
          createPage({
            path: node.slug,
            component: pagesTemplatePath,
            context: {
              id: node.id
            },
          })
        }
      }
    }
  })

  createPage({
    path: `/blog`,
    component: path.resolve("./src/templates/blog.js"),
  })
}
