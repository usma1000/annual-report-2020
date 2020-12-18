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
          <Hero mesh>
            Advancing
            <br />
            Together
          </Hero>
          <div className="wrapper">
            <PostSection
              icon={<InnovationSVG />}
              headline="Innovation"
              url="/innovation"
              linkText="Read More"
            >
              Our faculty, staff and students know how to navigate change; in
              fact, they excel at it. In labs and classrooms—on campus and
              wherever remote learning and work take them—they work together to
              develop creative solutions to today’s pressing problems and
              tomorrow’s potential challenges.
            </PostSection>
            <PostSection
              icon={<ResearchSVG />}
              headline="Research"
              url="/research"
              linkText="Read More"
            >
              At Case Western Reserve, we aren’t scared of the unknown. We see
              it as an opportunity—to understand, discover, find solutions and
              even break new ground. By tackling tough questions with colleagues
              across the campus, city, state and beyond, our faculty, staff and
              students truly think beyond the possible.
            </PostSection>
            <PostSection
              icon={<CommunitySVG />}
              headline="Community"
              url="/community"
              linkText="Read More"
            >
              In a time marked by separation, our faculty, staff and students
              joined together—often from a distance—to show their commitment to
              community, at Case Western Reserve, in Cleveland and beyond. Their
              efforts, whether to support frontline health care workers or
              address racial injustice, exemplify the true power of partnership.
            </PostSection>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RootIndex;
