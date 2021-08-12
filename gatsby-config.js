module.exports = {
  siteMetadata: {
    title: `Sandbox | Northeastern's Student-Led Software Consultancy`,
    description: `Sandbox aims to unleash the power of software for researchers and students.`,
    author: `Sandbox at Northeastern`,
    pages: [
      {
        name: "Home",
        route: "/",
      },
      {
        name: "About",
        route: "/about",
      },
      {
        name: "Apply",
        route: "/apply",
      },
      {
        name: "Clients",
        route: "/clients"
      },
      {
        name: "Team",
        route: "/team",
      },
      {
        name: "Oasis",
        route: "/oasis",
      },
    ],
    siteUrl: "https://sandboxneu.com",
    image: "/stairs-down.png", // For embeds
    keywords: [
      `sandbox`,
      `neu`,
      `nu`,
      `northeastern`,
      `university`,
      `software`,
    ], // SEO
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
        icon: `src/images/sandbox-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-150918548-1`,
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://sandboxnu.us3.list-manage.com/subscribe/post?u=3b3ae33f54203ab7a839ae529&amp;id=c2570dd048", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
