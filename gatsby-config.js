module.exports = {
  siteMetadata: {
    title: `Planthome`,
    description: `Get the best Plants on PlantHome`,
    twitterUsername: `@yinkakun`,
    url: 'https://planthomehq.netlify.app',
    twitterCardImage: '/twitter-card-image.png',
    openGraphImage: '/open-graph-image.png',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-svgr',
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./graphql-types.ts`,
        documentPaths: [
          './src/**/!(*.d).{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require('tailwindcss'),
          require('./tailwind.config.js'),
        ],
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `oeonqpaw`,
        dataset: `planthome`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'PT Sans',
              variants: ['400', '700'],
            },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
