import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
// import Hero from "../components/Hero/hero";

const Innovation = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Innovation | Case Western Reserve University" />
        {/* <Hero>Innovation</Hero> */}
        <div className="wrapper">
          {posts.map(({ node }) => (
            <Story node={node} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Innovation;

export const pageQuery = graphql`
  query InnovationQuery {
    allContentfulStory(filter: { tags: { eq: "innovation" } }) {
      edges {
        node {
          title
          slug
          dailyLink
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
