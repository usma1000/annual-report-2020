import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";

import heroStyles from "../components/hero.module.css";
import blogStyles from "./blog-post.module.css";

class StoryTemplate extends React.Component {
  render() {
    const post = get(this.props, "data.contentfulStory");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={`${post.title} | ${siteTitle}`} />
          <div className={blogStyles.container}>
            <div className={blogStyles.story}>
              <h1 className={blogStyles.title}>{post.title}</h1>
              <h2 className={blogStyles.subtitle}>{post.subtitle}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: post.body.childMarkdownRemark.html,
                }}
              />
            </div>
            <div className={blogStyles.img}>
              <Img
                className={heroStyles.heroImage}
                alt={post.title}
                fluid={post.heroImage.fluid}
              />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default StoryTemplate;

export const pageQuery = graphql`
  query StoryBySlug($slug: String!) {
    contentfulStory(slug: { eq: $slug }) {
      title
      subtitle
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
