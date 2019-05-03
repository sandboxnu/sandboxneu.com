module.exports = {
  siteMetadata: {
    title: `Sandbox NEU`,
    description: `Sandbox is a club at Northeastern University that creates custom software applications for researchers.`,
    author: `Sandbox Northeastern University`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sandbox`,
        short_name: `Sandbox`,
        start_url: `/`,
        background_color: `#2A426B`,
        theme_color: `#2A426B`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-amplitude-analytics`,
      options: {
        // Specify the API key for your Amplitude Project (required)
        apiKey: "b03da34a4b82cd670be2217a0d5e0938",
        // Prevents loading Amplitude and logging events if visitors have "Do Not Track" enabled (optional)
        respectDNT: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
