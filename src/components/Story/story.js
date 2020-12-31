import React from "react";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import styles from "./story.module.css";
import { useInView } from "react-intersection-observer";
import rehypeReact from "rehype-react";
import Stats from "../Stats/stats";

const Story = ({ node }) => {
  const renderAst = new rehypeReact({
    createElement: React.createElement,
    components: { counter: Stats },
  }).Compiler;

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const fade = useSpring({ opacity: inView ? 1 : 0, from: { opacity: 0 } });
  return (
    <div className={styles.container}>
      <div ref={ref} className={styles.story}>
        <h1 className={styles.title}>{node.title}</h1>
        <div className={styles.imgMobile}>
          <Img alt={node.title} fluid={node.heroImage.fluid} />
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
          <div className={styles.stats}>
            {renderAst(node.stats.childMarkdownRemark.htmlAst)}
          </div>
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
    </div>
  );
};

export default Story;
