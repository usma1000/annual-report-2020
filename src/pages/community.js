import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
import Hero from "../components/Hero/hero";

const Community = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Community | Case Western Reserve University" />
        <Hero>Community</Hero>
        <div className="wrapper pattern1">
          {posts.map(({ node }) => (
            <Story key={node.slug} node={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Community;

export const pageQuery = graphql`
  query CommunityQuery {
    allContentfulStory(filter: { tags: { eq: "community" } }) {
      edges {
        node {
          title
          slug
          videoLink
          dailyLink
          pullquote {
            childMarkdownRemark {
              html
            }
          }
          stats {
            childMarkdownRemark {
              htmlAst
            }
          }
          quoteAuthor
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
    }
  }
`;
