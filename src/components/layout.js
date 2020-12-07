import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./Navigation/navigation";
import Footer from "./Footer/footer";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    );
  }
}

export default Template;
