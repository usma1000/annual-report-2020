import React from "react";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import styles from "./story.module.css";
import { useInView } from "react-intersection-observer";

const Story = ({ node }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fade = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-10vw)",
  });
  return (
    <div className={styles.container}>
      <div className={styles.story}>
        <h2 className={styles.title}>{node.title}</h2>
        <div className={styles.imgMobile}>
          <Img alt={node.title} fluid={node.heroImage.fluid} />
          {node.photoCredit && (
            <div className={styles.credit}>{node.photoCredit}</div>
          )}
        </div>
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
        {node.stats && (
          <div
            className={styles.stats}
            dangerouslySetInnerHTML={{
              __html: node.stats.childMarkdownRemark.html,
            }}
          />
        )}

        {node.videoLink && (
          <a
            href={node.videoLink}
            className={styles.button}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch Their Work
          </a>
        )}
      </div>
      <animated.div style={fade} ref={ref} className={styles.img}>
        <Img alt={node.title} fluid={node.heroImage.fluid} />
        {node.photoCredit && (
          <div className={styles.credit}>{node.photoCredit}</div>
        )}
      </animated.div>
    </div>
  );
};

export default Story;
