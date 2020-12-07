import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import PostSection from "../components/post-section";

class RootIndex extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulStory.edges");
    const communityPosts = posts.filter(
      ({ node }) => node.tags[0] === "community"
    );
    const innovationPosts = posts.filter(
      ({ node }) => node.tags[0] === "innovation"
    );
    const researchPosts = posts.filter(
      ({ node }) => node.tags[0] === "research"
    );

    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title={title} />
          <Hero />
          <div className="wrapper">
            <PostSection headline="Community" posts={communityPosts} />
            <PostSection headline="Innovation" posts={innovationPosts} />
            <PostSection headline="Research" posts={researchPosts} />
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulStory(sort: { fields: [tags], order: DESC }) {
      edges {
        node {
          title
          slug
          tags
          heroImage {
            description
            fixed(width: 350, height: 250, resizingBehavior: FILL) {
              ...GatsbyContentfulFixed
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
