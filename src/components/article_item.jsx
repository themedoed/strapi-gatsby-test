import * as React from "react";
import styled from "styled-components";

const ArticleItem = (props) => {
  const Article = styled.div`
    background-color: black;
    border-radius: 15px;
    transition: all .5s;
    &:hover{
      color: red;
    }
  `;

  const ArticleTitle = styled.div`
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
  `;

  const ArticleInfo = styled.div`
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
  `;

  const ArticleText = styled.div`
    max-width: 300px;
  `;

  const ArticleImg = styled.img`
    width: 300px;
    height: 100%;
    border-radius: 15px;
    border: 3px solid;
  `;

  return (
    <Article>
      <ArticleTitle>{props.title}</ArticleTitle>
      <ArticleInfo>
        <ArticleText>{props.text}</ArticleText>
        <ArticleImg src={props.img} alt="img" />
      </ArticleInfo>
    </Article>
  );
};

export default ArticleItem;
