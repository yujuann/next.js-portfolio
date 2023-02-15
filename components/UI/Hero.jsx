import React from "react";
import SectionSubtitle from "./sectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
// import HeroImg from "../../public/images/hero.jpg";
import classes from "../../styles/hero.module.css";
const Hero = () => {
  return;
  <section className={`${classes.hero}`}>
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="{`${classes.hero__content}}">
            <SectionSubtitle subtitle="Hello" />
          </div>
        </Col>
        <Col lg="6" md="6"></Col>
      </Row>
    </Container>
    <div>Hero</div>;
  </section>;
};

export default Hero;
