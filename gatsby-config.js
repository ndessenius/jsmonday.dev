module.exports = {
  siteMetadata: {
    title: `JSMonday`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/`
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "https://api.jsmonday.dev",
        contentTypes: [
          "article",
          "author",
          "event",
          "language",
          "patron",
          "snippet",
          "tag"
        ],
        queryLimit: 1000
      }
    },
    {
      resolve: `gatsby-plugin-stylus-resources`,
      options: {
        resources: [
          `./src/styles/main.styl`,
          `./src/styles/vars.styl`,
          `./src/styles/mixin.styl`
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/content`,
        ignore: [`**/\.*`]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JSMonday`,
        short_name: `jsmonday`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        showCaptions: true,
        backgroundColor: "#000",
        withWebp: true,
        loading: "lazy",
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        name: "articles",
        path: `${__dirname}/content/articles`,
        commonmark: true,
        footnotes: true,
        pedantic: true,
        gfm: true,
        plugins: []
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {
                sh: "bash",
                hs: "haskell",
                js: "javascript",
                ts: "typescript"
              },
              showLineNumbers: true,
              noInlineHighlight: false
            }
          }
        ]
      }
    }
  ]
};
