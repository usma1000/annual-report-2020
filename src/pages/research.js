import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
import Hero from "../components/Hero/hero";
import ResearchSVG from "../components/Icons/ResearchSVG";
import Pattern from "../components/Patterns/Pattern";
import dots from "../components/Patterns/dotsbkg.svg";

const Research = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Research | Advancing Together | Case Western Reserve University" />
        <Hero icon={<ResearchSVG />}>Research</Hero>
        <Pattern pattern={dots}>
          {posts.map(({ node }) => (
            <Story node={node} />
          ))}
        </Pattern>
      </div>
    </Layout>
  );
};

export default Research;

export const pageQuery = graphql`
  query ResearchQuery {
    allContentfulStory(
      filter: { tags: { eq: "research" } }
      sort: { fields: order }
    ) {
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
              html
            }
          }
          quoteAuthor
          heroImage {
            fluid(maxWidth: 1440, background: "rgb:000000") {
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
