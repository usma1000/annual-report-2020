import React from "react";
import ArticlePreview from "./article-preview";

const PostSection = ({ headline, posts }) => {
  return (
    <div>
      <h2 className="section-headline">{headline}</h2>
      <ul className="article-list">
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PostSection;
