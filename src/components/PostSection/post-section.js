import React from "react";
import ArticlePreview from "../ArticlePreview/article-preview";
import Icon from "../Icons/Icon";
import styles from "./post-section.module.css";
import { useSpring, animated } from "react-spring";

const PostSection = ({ headline, posts, icon }) => {
  // NEED TO ADD VisibilitySensor from "react-visibility-sensor"
  // https://markoskon.com/scroll-reveal-animations-with-react-spring/
  const fadeDown = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: {
      opacity: 0,
      transform: "translateY(-50px)",
    },
  });
  return (
    <div>
      <animated.h2 style={fadeDown} className={styles.headline}>
        {headline}
      </animated.h2>
      <Icon icon={icon} alt={headline} />
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
