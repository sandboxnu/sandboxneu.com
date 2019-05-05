/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

var path = require("path")

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
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
