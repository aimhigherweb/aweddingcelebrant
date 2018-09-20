module.exports = {
  siteMetadata: {
    title: 'Janne Martin - Wedding Celebrant',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        icon: 'src/images/logo.png' // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-copy-linked-files",
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          include: './src/images/'
      }
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}