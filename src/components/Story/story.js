import React from "react";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import styles from "./story.module.css";
import { useInView } from "react-intersection-observer";

const Story = ({ node }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fade = useSpring({ opacity: inView ? 0.8 : 0, from: { opacity: 0 } });
  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.story}>
        <h1 className={styles.title}>{node.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: node.body.childMarkdownRemark.html,
          }}
        />
        {node.pullquote && (
          <blockquote>
            <div
              className={styles.quote}
              dangerouslySetInnerHTML={{
                __html: node.pullquote.childMarkdownRemark.html,
              }}
            />
            <cite>{node.quoteAuthor && node.quoteAuthor}</cite>
          </blockquote>
        )}
        {node.dailyLink && (
          <a
            href={node.dailyLink}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More in The Daily
          </a>
        )}
      </div>
      <animated.div style={fade} className={styles.img}>
        <Img alt={node.title} fluid={node.heroImage.fluid} />
      </animated.div>
      {node.stats && (
        <animated.div
          style={fade}
          className={styles.stats}
          dangerouslySetInnerHTML={{
            __html: node.stats.childMarkdownRemark.html,
          }}
        />
      )}
    </div>
  );
};

export default Story;
