/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const applyTemplate = path.resolve(`src/templates/apply.js`)
  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/apply/" } }) {
        edges {
          node {
            frontmatter {
              role
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    const roles = result.data.allMarkdownRemark.edges.map(
      ({ node }) => node.frontmatter.role
    )
    roles.sort()
    createPage({
      path: "/apply/",
      component: applyTemplate,
      context: { role: roles[0], roles: roles },
    })
    return roles.forEach(role => {
      createPage({
        path: `/apply/${role}/`,
        component: applyTemplate,
        context: { role: role, roles: roles },
      })
    })
  })
}

/* explicitly tell Gatsby about the closeDate field
 (this allows closeDate to be null in every node) */
exports.sourceNodes = ({ actions, schema }) => {
  const { createTypes } = actions
  createTypes(`
    type MarkdownRemarkFrontmatter {
      closeDate: String
    }

    type MarkdownRemark implements Node {
      frontmatter: MarkdownRemarkFrontmatter
    }
  `)
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  /* the following code fixes a bug with amplitude-js
     failing to build */
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /amplitude-js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
  actions.setWebpackConfig({
    resolve: {
      alias: {
        components: path.resolve(__dirname, "src/components/"),
        content: path.resolve(__dirname, "src/content/"),
        images: path.resolve(__dirname, "src/images/"),
        pages: path.resolve(__dirname, "src/pages/"),
        styles: path.resolve(__dirname, "src/styles/"),
        utils: path.resolve(__dirname, "src/utils/"),
        ["@colors"]: path.resolve(__dirname, "src/styles/colors"),
      },
    },
  })
}
