import React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";

import styles from "./article-preview.module.css";

export default ({ article }) => (
  <div className={styles.preview}>
    <Img alt="" fixed={article.heroImage.fixed} />
    <h3 className={styles.previewTitle}>
      <Link to={`/story/${article.slug}`}>
        {article.title} {article.subtitle}
      </Link>
    </h3>
    <p
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
  </div>
);
