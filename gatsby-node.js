const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postPageTemplate = path.resolve(`src/templates/PostPageTemplate.js`)
  const postListPageTemplate = path.resolve(
    `src/templates/PostListPageTemplate.js`
  )
  return graphql(`
    {
      allMarkdownRemark(limit: 100) {
        nodes {
          frontmatter {
            path
            postType
          }
        }
      }
      allPagesJson {
        edges {
          node {
            path
            postType
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.nodes.forEach(({ frontmatter }) => {
      createPage({
        path: frontmatter.path,
        component: postPageTemplate,
        context: {
          postType: frontmatter.postType,
        }, // additional data can be passed via context
      })
    })
    res.data.allPagesJson.edges.forEach(({ node }) => {
      createPage({
        path: node.path,
        component: postListPageTemplate,
        context: { postType: node.postType }, // additional data can be passed via context
      })
    })
  })
}
