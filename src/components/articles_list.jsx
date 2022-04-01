import * as React from "react";
import styled from "styled-components";
import ArticleItem from "./article_item";

const ArticlesList = (props) => {
  const ArticleImg = styled.img`
    height: 200px;
  `;

  return (
    <div>
      <ArticleImg src={props.img} />
      {props.text} <br/>
    </div>
  );
};

export default ArticlesList;
