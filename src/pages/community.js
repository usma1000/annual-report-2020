import React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Story from "../components/Story/story";
import Hero from "../components/Hero/hero";
import CommunitySVG from "../components/Icons/CommunitySVG.js";

const Community = (props) => {
  const posts = props.data.allContentfulStory.edges;
  return (
    <Layout location={props.location}>
      <div>
        <Helmet title="Community | Advancing Together | Case Western Reserve University" />
        <Hero icon={<CommunitySVG />}>Community</Hero>
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
    allContentfulStory(
      filter: { tags: { eq: "community" } }
      sort: { fields: order }
    ) {
      edges {
        node {
          title
          slug
          photoCredit
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
