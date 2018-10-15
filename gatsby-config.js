module.exports = {
  siteMetadata: {
    title: 'Janne Martin | Wedding Celebrant',
    description: '',
    siteUrl: 'https://aweddingcelebrant.com.au'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: '/',
        icon: './src/images/logo.png' // This path is relative to the root of the site.
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
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      },
    },
  ],
}