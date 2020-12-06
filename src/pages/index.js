import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import Hero from "../components/hero";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class RootIndex extends React.Component {
  render() {
    const title = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulStory.edges");

    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={title} />
          <Hero />
          <div className="wrapper">
            <h2 className="section-headline">Stories</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
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
