import React from "react";
import { Helmet } from "react-helmet";
import styles from "./pages.module.css";
import Layout from "../components/layout";

class President extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <div>
          <Helmet title="Letter from the Interim President | Case Western Reserve University" />
          <div className="wrapper">
            <div class={styles.columns}>
              <h1 className={styles.presidentTitle}>
                Letter from the Interim President
              </h1>
              <div className={styles.scott}>
                <img
                  src="/scott-cowan.jpg"
                  alt="interim president scott cowan"
                />
              </div>
              <p>
                Content will go here. Content will go here. Content will go
                here. Content will go here. Content will go here. Content will
                go here.
              </p>
              <p>
                Content will go here. Content will go here. Content will go
                here. Content will go here. Content will go here. Content will
                go here.
              </p>
              <p>
                Content will go here. Content will go here. Content will go
                here. Content will go here. Content will go here. Content will
                go here.
              </p>
              <p>
                Content will go here. Content will go here. Content will go
                here. Content will go here. Content will go here. Content will
                go here.
              </p>
              <p>
                Content will go here. Content will go here. Content will go
                here. Content will go here. Content will go here. Content will
                go here.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default President;
