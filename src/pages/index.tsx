import * as React from "react";
import * as Page from "../components/styled/Page";
import Layout from "../layouts/Default";
import Title from "../components/typography/Title";
import Excerpt from "../components/typography/Excerpt";
import { formatDate, buildAuthorUri } from "../utils";

import "./index.styl";

export default ({ data }) => {
  const featuredArticle = data.allStrapiArticle.edges[0].node;

  return (
    <Layout>
      <Page.Hero bgImage={featuredArticle.cover_image_url}>
        <Page.Center>
          <div className="home-featured">
            <div className="featured-title">
              <div className="featured-meta">
                <span className="featured-date">
                  {formatDate(featuredArticle.publish_date, "DD MMM YYYY")}
                  &nbsp;
                </span>
                /&nbsp;
                <a
                  href={buildAuthorUri(
                    featuredArticle.author.id,
                    featuredArticle.author.full_name
                  )}
                  className="featured-author"
                >
                  {featuredArticle.author.full_name}
                </a>
              </div>
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
      </Page.Hero>
    </Layout>
  );
};

export const featuredArticleQuery = graphql`
  query featuredArticleQuery {
    allStrapiArticle(limit: 1, skip: 40) {
      edges {
        node {
          id
          title
          subtitle
          cover_image_url
          publish_date
          author {
            id
            full_name
          }
        }
      }
    }
  }
`;
