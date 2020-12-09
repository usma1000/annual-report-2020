import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import styles from "./story.module.css";

const Story = ({ node }) => {
  const fade = useSpring({ opacity: 1, from: { opacity: 0 } });
  const inLeft = useSpring({
    transform: "translateX(0)",
    from: { transform: "translateX(-50vh)" },
  });
  const [loaded, setLoaded] = useState(false);
  const growImg = useSpring({
    opacity: loaded ? 0.75 : 0.5,
    width: loaded ? "70vmax" : "50vmax",
    from: { width: "50vmax", opacity: 0.5 },
  });
  return (
    <div className={styles.container}>
      <animated.div style={(fade, inLeft)} className={styles.story}>
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
      <animated.div style={growImg} className={styles.img}>
        <Img
          alt={node.title}
          fluid={node.heroImage.fluid}
          onLoad={() => setLoaded(true)}
        />
      </animated.div>
    </div>
  );
};

export default Story;
