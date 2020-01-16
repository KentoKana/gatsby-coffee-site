const path = require(`path`)
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const postPageTemplate = path.resolve(`src/templates/PostPageTemplate.js`)
  return graphql(`
    {
      allMarkdownRemark(limit: 100) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postPageTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
