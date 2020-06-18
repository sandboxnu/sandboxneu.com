/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions
  const applyTemplate = path.resolve(`src/templates/role.js`)
  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/apply/" } }) {
        edges {
          node {
            fields {
              slug
            }
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
    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: applyTemplate,
        context: {
          role: node.frontmatter.role,
          roles: roles,
        },
      })
    })
  })
}

const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
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
        ["@global"]: path.resolve(__dirname, "src/styles/GlobalStyle"),
      },
    },
  })
}
