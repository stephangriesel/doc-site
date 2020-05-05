module.exports = {
  siteMetadata: {
    title: `Stephan's Documentation Site`,
    siteUrl: `https://doc.stephangriesel.com`,
    description: `Site with documentation for self reference`,
    author: 'Stephan Griesel',
    twitterUsername: `@stevegriesel`,
    image: '/me.jpg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images'
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
  ],
}
