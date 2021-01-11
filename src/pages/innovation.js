import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
import Hero from "../components/Hero/hero";
import InnovationSVG from "../components/Icons/InnovationSVG.js";
import Pattern from "../components/Patterns/Pattern";
import squares from "../components/Patterns/squaresbkg.svg";

const Innovation = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Innovation | Advancing Together | Case Western Reserve University" />
        <Hero icon={<InnovationSVG />}>Innovation</Hero>
        <Pattern pattern={squares}>
          {posts.map(({ node }) => (
            <Story node={node} />
          ))}
        </Pattern>
      </div>
    </Layout>
  );
};

export default Innovation;

export const pageQuery = graphql`
  query InnovationQuery {
    allContentfulStory(
      filter: { tags: { eq: "innovation" } }
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
