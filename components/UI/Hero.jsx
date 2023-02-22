// import React from "react";
// import SectionSubtitle from "./sectionSubtitle";
// import { Container, Row, Col } from "reactstrap";
// import Image from "next/image";
// import Link from "next/link";
// // import HeroImg from "../../public/images/hero.jpg";
// import classes from "../../styles/hero.module.css";
// const Hero = () => {
//   return;
//   <section className={`${classes.hero}`}>
//     <Container>
//       <Row>
//         <Col lg="6" md="6">
//           <div className="{`${classes.hero__content}}">
//             <SectionSubtitle subtitle="Hello" />
//             <h2 className="mt-3 mb-3">I&apos;m yuju an</h2>
//             <h5 className="mb-4">Frontend Developer</h5>
//             <p>
//               안유주, 개발자가 되기위해 next.js with tailwind css 를 사용하여
//               개인 포토폴리용 사이트를 직접 제작하게 되었다. 이 페이지는 개발자
//               안유주의 포토폴리용 개인 사이트 이다
//             </p>
//             <div>
//               <button className="primary__btn">
//                 <Link href="#">Hire Me</Link>
//               </button>
//               <button className="secondary__btn">
//                 <Link href="#">Download CV</Link>
//               </button>
//             </div>
//           </div>
//         </Col>
//         <Col lg="6" md="6"></Col>
//       </Row>
//     </Container>
//     <div>Hero</div>;
//   </section>;
// };

// export default Hero;

// =====>Here<====
import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import yujuImg from "../../public/images/yuju.jpeg";
import classes from "../../styles/Hero.module.css";

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
                안유주, 개발자가 되기위해 next.js with tailwind css 를 사용하여
                개인 포토폴리용 사이트를 직접 제작하게 되었다. 이 페이지는
                개발자 안유주의 포토폴리용 개인 사이트 이다!
              </p>
              {/* =====hero btn 2====== */}
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href="#">Hire me</Link>
                </button>

                <button className="secondary__btn">
                  <Link href="#">Download CV</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.yuju__img} text-end`}>
              <Image alt="yuju-image" src={yujuImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills 기술</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1 Year</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
