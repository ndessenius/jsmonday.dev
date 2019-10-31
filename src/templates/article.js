import * as React from "react";
import { graphql } from "gatsby";
import "../styles/prism/dark.css";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html: markdownContent } = markdownRemark;

  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1> {frontmatter.title} </h1>
        <h2> {frontmatter.date} </h2>
        <h2> {frontmatter.author} </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: markdownContent }}
        />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
      }
    }
  }
`;
