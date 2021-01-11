import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/Hero/hero";
import Layout from "../components/layout";
import PostSection from "../components/PostSection/post-section";
import CommunitySVG from "../components/Icons/CommunitySVG.js";
import ResearchSVG from "../components/Icons/ResearchSVG";
import InnovationSVG from "../components/Icons/InnovationSVG.js";

class RootIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title="Advancing Together | Case Western Reserve University" />
          <Hero home>
            Advancing
            <br />
            Together
          </Hero>
          <div className="wrapper">
            <PostSection
              icon={<ResearchSVG />}
              headline="Research"
              url="/research"
              linkText="Explore Our Research"
            >
              At Case Western Reserve, we aren’t afraid of the unknown. We see
              it as an opportunity—to understand, discover, find answers or even
              break new ground. By tackling tough questions, our community truly
              thinks beyond the possible.
            </PostSection>
            <PostSection
              icon={<InnovationSVG />}
              headline="Innovation"
              url="/innovation"
              linkText="See Our Innovative Approaches"
            >
              Our faculty, staff and students know how to navigate change; in
              fact, they excel at it. In labs and classrooms—on campus and
              around the world—they work together to address to today’s pressing
              problems and tomorrow’s potential challenges.
            </PostSection>
            <PostSection
              icon={<CommunitySVG />}
              headline="Community"
              url="/community"
              linkText="Learn About Our Community"
            >
              In a time requiring separation, our faculty, staff and students
              joined together as a community—even if often from a distance.
              Their efforts, whether supporting frontline health care workers or
              addressing racial injustice, exemplify our shared strengths and
              ongoing engagement.
            </PostSection>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
