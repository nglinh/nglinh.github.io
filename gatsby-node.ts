const path = require("path");

import { GatsbyNode, Reporter } from "gatsby";
import { PagesForBuildQuery } from "./graphql-types";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
  reporter,
}) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/blog-post.tsx`);

  const result = await graphql(`
    query PagesForBuild {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  (result.data as PagesForBuildQuery).allMarkdownRemark.edges.forEach(
    ({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    }
  );
};
