// =====>Here<====
import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import yujuImg from "../../public/images/happy.jpeg";
import classes from "./../../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;M Yuju An 안유주</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
                안녕하세요. Hello <br /> 반갑습니다 저는 안유주입니다.
                <br />
                한때 문화재단 한 사원으로 일하다가 디지털 노마드 직업 중 프론트
                개발자 직업에 매료되어 선택하게 되었습니다. 현재 스터디를
                운영하며 같이 학습하며 프론트엔드 개발에 공부하고 있습니다. 이
                페이지는 next.js with tailwind css 를 사용하여 개인 포토폴리용
                사이트를 제작하였습니다.
                <br />
              </p>
              {/* =====hero btn 2====== */}
              <div className="mt-5">
                <button className="secondary__btn">
                  <Link href="https://linen-ginger-754.notion.site/9c930682b75e41d4bfb9e61dc7880f27">
                    Hire Me
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link href="https://github.com/yujuann">Contact Me</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="yuju-image" src={yujuImg} width="340" height="370" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
