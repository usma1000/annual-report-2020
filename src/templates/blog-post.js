import React, { useState } from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { useSpring, animated } from "react-spring";
import Img from "gatsby-image";
import Layout from "../components/layout";
import blogStyles from "./blog-post.module.css";

const StoryTemplate = (props) => {
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
  const post = props.data.contentfulStory;
  const titleChars = [...post.tags[0]];

  return (
    <Layout location={props.location}>
      <Helmet title={`${post.title} | Case Western Reserve University`} />
      <div className={blogStyles.container}>
        <animated.div style={(fade, inLeft)} className={blogStyles.story}>
          <div className={blogStyles.category}>
            {titleChars.map((char) => {
              return <span key={char.id}>{char}</span>;
            })}
          </div>
          <h1 className={blogStyles.title}>{post.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: post.body.childMarkdownRemark.html,
            }}
          />
        </animated.div>
        <animated.div style={growImg} className={blogStyles.img}>
          <Img
            alt={post.title}
            fluid={post.heroImage.fluid}
            onLoad={() => setLoaded(true)}
          />
        </animated.div>
      </div>
    </Layout>
  );
};

export default StoryTemplate;

export const pageQuery = graphql`
  query StoryBySlug($slug: String!) {
    contentfulStory(slug: { eq: $slug }) {
      title
      tags
      heroImage {
        fluid(maxWidth: 500, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
