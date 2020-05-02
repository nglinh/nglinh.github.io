import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";

import { BlogPostByPathQuery } from "../../graphql-types";

// import '../css/blog-post.css'; // make it pretty!

export default function Template({ data }: { data: BlogPostByPathQuery }) {
  const { markdownRemark: post } = data; // data.markdownRemark holds your post data
  return (
    <div className="blog-post-container">
      <Helmet title={`Nglinh's blog - ${post.frontmatter.title}`} />
      <div className="blog-post">
        <h1>{post.frontmatter.title}</h1>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
