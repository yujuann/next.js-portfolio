import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

// import img01 from "../..//public/images/yuju.jpeg";
// import img02 from "../..//public/images/yuju.jpeg";

// import img03 from "../..//public/images/yuju.jpeg";

import classes from "./../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="8" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m Front-End</h3>
            <h3 className="mb-4">리더 개발자 안유주</h3>
            <p>
              성장하는 커뮤니케이션 리더형 휴먼 | 안녕하세요! 프론트엔드 개발자
              안유주입니다. 현재 기술 스터디를 운영하고 있으며,기간은 1월 초부터
              시작해 총 6명과 개발자로 거듭나기 위해 기술 공부를 하면서 프런트
              개발에 열심히 공부하고 있습니다.부트캠프에 다양한 프로젝트와
              인턴십 과정에서 2가지 프로젝트를 진행하였고, 이를 통해 웹 개발
              업무 프로세스에 전반적인 이해력을 습득하였습니다. 개발하면서 제가
              느낀 좋은 정보기술 서비스는 사용자의 입장에서 쓰기 편한 서비스라
              생각하고, 늘 사용자의 관점을 고안하며 개발하고 있습니다. 이런 저의
              성장 가능성을 믿고 이끌어줄 회사를 찾고 있습니다.
            </p>

            <div className=" d-flex align-items-center gap-5">
              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  문제해결에 적극적
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  커뮤니케이션 가능
                </h6>
              </div>

              <div>
                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  크레이티브한 아이디어
                </h6>

                <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-checkbox-circle-line"></i>
                  </span>
                  가독성
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="secondary__btn">
                <Link href="#portfolio">My Portfolio</Link>
              </button>

              <button className="secondary__btn">
                <Link href="#contact">Gmail </Link>
              </button>
            </div>
          </Col>

          {/* <Col lg="6">
            
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default About;
