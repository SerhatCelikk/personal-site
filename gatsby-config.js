module.exports = {
  siteMetadata: {
    siteUrl: 'https://jdc.dev',
    title: 'JDC Dev Site',
  },
  pathPrefix: '/blog',
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Jacob D. Castro',
        short_name: 'JDC Dev',
        start_url: '/',
        background_color: '#000',
        theme_color: '#353535',
        lang: 'en',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: './src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content/',
      },
      __key: 'content',
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        configFile: './robots-txt.config.js',
      },
    },
    // 'gatsby-plugin-css-modules-typings',
    'gatsby-transformer-typescript-css-modules',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-postcss',
  ],
};
