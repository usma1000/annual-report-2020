import React from "react";
import { Helmet } from "react-helmet";
import styles from "./pages.module.css";
import Layout from "../components/layout";

class President extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title="Letter from the Interim President | Advancing Together | Case Western Reserve University" />
          <div className="wrapper">
            <div class={styles.columns}>
              <h1 className={styles.presidentTitle}>
                Letter from the Interim President
              </h1>
              <div className={styles.scott}>
                <img
                  src="/public/scott-cowan.jpg"
                  alt="Interim President Scott Cowen"
                />
              </div>
              <p>
                The pandemic so dominated the last months of the 2019-2020
                academic year that it can be hard to remember how much we
                accomplished before it arrived.
              </p>
              <p>
                Our faculty helped discover a fossil of 3.8 million-year-old
                hu-man ancestor. They applied tech-nology to break longtime
                barriers to human connection. And they advanced care for aging
                adults across the country.
              </p>
              <p>
                As we look with hope toward widespread COVID-19 vaccina-tions in
                2021, this annual report reminds us of what we can do when
                public health restrictions no longer dominate daily life. But it
                also highlights the many ways this community demonstrat-ed
                creativity, commitment and exceptional compassion in the face of
                this crisis.
              </p>
              <p>
                From the rapid shift to remote learning to volunteer efforts for
                health care workers, the homeless and one another, our faculty,
                staff and students adapted, innovated, and always sought to
                help. Their ongoing gener-osity continued to inspire — and even
                more, made a meaningful difference during such difficult times.
              </p>
              <p>
                As you read the stories that follow, you will find consistent
                themes. No matter the obstacles, our people managed to overcome
                them. And, more often than not, that progress demanded that we
                draw on one another for ideas, strength and support.
              </p>
              <p>
                In short, we were Advancing Together this year — which is when
                we are always at our best.
              </p>
              <p>With great appreciation,</p>
              <p>
                Scott Cowen
                <br />
                <em>Interim President</em>
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default President;
