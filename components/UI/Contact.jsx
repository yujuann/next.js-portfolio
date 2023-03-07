import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "./../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact</h3>
            <p>
              개발자로서 필요한 인성을 갖추며 능동적 커뮤니케이션에 강하며
              적극적인 면을 가진 자세로
              <br /> 현재 신입 프런트 개발자로 저의 성장 가능성을 보고 이끌어줄
              회사를 찾고 있습니다.😃
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                  <x-uni-blogger-alt />
                </span>
                <p>서울시 관악구- 대한민국</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  {/* <i className="ri-mail-line"></i> */}
                  <i className="ri-mail-check-line"></i>
                </span>
                <p>xxxnewzu@gmail.com</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="https://xoxoankim-96.tistory.com/">
                <i className="ri-home-8-line"></i>
              </Link>
              <Link href="https://github.com/yujuann">
                <i className="ri-github-line"></i>
              </Link>
              <Link href="https://www.instagram.com/newwzu/">
                <i className="ri-instagram-line"></i>
              </Link>
            </div>
          </Col>

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
