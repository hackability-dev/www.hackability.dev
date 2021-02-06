module.exports = {
  siteMetadata: {
    title: `hackability.dev`,
    description: `La community di sviluppatori per creare Space Hackability!`,
    author: `@hackability`,
    siteUrl: "https://www.hackability.dev",
    image: "/cover.jpg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
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
        name: `events`,
        path: `${__dirname}/events`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hackability.dev`,
        short_name: `hackability.dev`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#52851E`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  mapping: {
    "Mdx.frontmatter.guests": `GuestsYaml`,
  },
}
