import * as React from "react";
import styled from "styled-components";
import { StaticQuery, graphql, useStaticQuery } from "gatsby";
import WebFont from "webfontloader";
import ArticleItem from "../components/article_item";

// markup
const IndexPage = () => {
  const { allStrapiArticles } = useStaticQuery(graphql`
    query MyQuery {
      allStrapiArticles {
        nodes {
          Name
          RichText
          Image {
            localFile {
              url
            }
          }
        }
      }
    }
  `);

  WebFont.load({
    google: {
      families: ["Exo 2"],
    },
  });

  const Page = styled.div`
    font-family: "Exo 2";
    color: orange;
    font-weight: 400;
    font-size: 25px;
    line-height: 35px;
    max-width: 1336px;
    padding: 0 20px;
    margin: 0 auto;
    box-sizing: border-box;
  `;

  const ArticleItemWrapper = styled.div`
    margin-bottom: 40px;
  `;

  return (
    <Page>
      {allStrapiArticles.nodes.map((article) => (
        <ArticleItemWrapper>
          <ArticleItem
            title={article.Name}
            text={article.RichText}
            img={article.Image.localFile.url}
          />
        </ArticleItemWrapper>
      ))}
    </Page>
  );
};

export default IndexPage;
