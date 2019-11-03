import * as React from "react";
import * as Page from "../components/styled/Page";
import Layout from "../layouts/Default";
import Title from "../components/typography/Title";
import Excerpt from "../components/typography/Excerpt";

import "./index.styl";

export default ({ data }) => {
  const featuredArticle = data.allStrapiArticle.edges[0].node;
  return (
    <Layout>
      <Page.Fullwidth className="jsm-homepage-cont">
        <Page.Center>
          <div className="home-featured">
            <div className="featured-title">
              <Title text={featuredArticle.title} highlight={false} />
              <Excerpt
                addClass="homepage-excerpt"
                text={featuredArticle.subtitle}
              />
            </div>
            <div className="featured-image">
              <img src={featuredArticle.cover_image_url} />
            </div>
          </div>
        </Page.Center>
      </Page.Fullwidth>
    </Layout>
  );
};

export const featuredArticleQuery = graphql`
  query featuredArticleQuery {
    allStrapiArticle(limit: 1) {
      edges {
        node {
          id
          title
          subtitle
          cover_image_url
        }
      }
    }
  }
`;
