const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            name
          }
        }
      }
    }
  `)

  const templatePath = path.resolve(`./src/templates/post-template.jsx`)

  result.data.allMdx.nodes.forEach(node => {
    createPage({
      path: node.frontmatter.name,
      component: templatePath,
      context: {
        name: node.frontmatter.name,
      },
    })
  })
}
