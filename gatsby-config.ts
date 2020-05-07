export default {
  siteMetadata: {
    title: `Your Name - Blog`,
    author: `Your Name`,
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        documentPaths: [
          "./src/**/*.{ts,tsx}",
          "./.cache/fragments/*.js",
          "./node_modules/gatsby-*/**/*.js",
          "./gatsby-node.ts",
        ],
      },
    },
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-images",
          "gatsby-remark-prismjs",
        ],
      },
    },
  ],
};