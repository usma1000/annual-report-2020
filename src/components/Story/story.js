import React from "react";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import styles from "./story.module.css";
import { useInView } from "react-intersection-observer";

const Story = ({ node }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fade = useSpring({ opacity: inView ? 1 : 0, from: { opacity: 0 } });
  const inLeft = useSpring({
    transform: "translateX(0)",
    from: { transform: "translateX(-50vh)" },
  });
  return (
    <div className={styles.container}>
      <animated.div ref={ref} style={inLeft} className={styles.story}>
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
      </animated.div>
      <animated.div style={fade} className={styles.img}>
        <Img alt={node.title} fluid={node.heroImage.fluid} />
      </animated.div>
    </div>
  );
};

export default Story;
