import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
import Hero from "../components/Hero/hero";

const Research = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Research | Advancing Together | Case Western Reserve University" />
        <Hero>Research</Hero>
        <div className="wrapper">
          {posts.map(({ node }) => (
            <Story node={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Research;

export const pageQuery = graphql`
  query ResearchQuery {
    allContentfulStory(filter: { tags: { eq: "research" } }) {
      edges {
        node {
          title
          slug
          videoLink
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
            fluid(maxWidth: 2000, background: "rgb:000000") {
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
