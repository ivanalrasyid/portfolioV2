import React from "react";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import "./style.css";
import headerImage from "../../img/ivan-header.jpeg";
import webprofile from "../../img/webprofile.png";
import lazyflix from "../../img/lazyflix.png";
import payoll from "../../img/payoll.png";
import ivanAbout from "../../img/about1.jpeg";
// import icon
import { SiInstagram } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";

const Home = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const work = [
    {
      name: "Web Profie",
      link: "https://ivanalrasyid.github.io/Portfolio/",
      imageSrc: webprofile,
    },
    {
      name: "Lazy Flix",
      link: "https://miniproject-lazyflix-iob7.vercel.app/",
      imageSrc: lazyflix,
    },
    {
      name: "PayOll",
      link: "https://payoll.vercel.app/",
      imageSrc: payoll,
    },
  ];

  const handleContactClick = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="image-container">
            <img src={headerImage} alt="header image" />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
          <div className="name">
            <h2 className="first">Ivan</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
          <div className="name">
            <h2 className="last">Alrasyid</h2>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 0))}>
          <div className="position">
            <div></div>
            <h2 className="last">Front-End Developer</h2>
          </div>
        </Animator>
      </ScrollPage>

      {/* section 2 */}
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title">Portfolio</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <div className="portfolio-content">
            {work?.map((work, index) => {
              return (
                <a href={work?.link} target="_blank" key={work?.name}>
                  <div className="portfolio-card">
                    <div className="project-image">
                      <img src={work?.imageSrc} alt={work?.name} />
                    </div>
                    <div className="portfolio-title">
                      <h3>{work?.name}</h3>
                    </div>
                    <div className="count">{index}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </Animator>
      </ScrollPage>

      {/* Section 3 */}
      <ScrollPage page={3}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title about-me">About Me</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={4}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
          <div className="background-image-container">
            <img
              src={ivanAbout}
              alt="my picture"
              className="ivan-about"
              height="50"
            />
            <div className="black-background"></div>
          </div>
        </Animator>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 500))}>
          <div className="details">
            <h2 className="gretting">Hello</h2>
            <p className="bio">
              I collaborated with teams from various divisions such as BackEnd,
              Quality Engineers, UI/UX, Mobile Developers to design a website
              with a study case regarding Payment Point Online Banking (PPOB),
              which is a payment billing mechanism that works together with
              banks that are connected online in real time. so that data
              reconciliation occurs very quickly with very accurate data
              accuracy. For features on the admin Dashboard there are Manage
              Users, Manage Products, and Manage Transactions
            </p>
            <p className="bio">
              I am responsible for designing and creating user-friendly,
              responsive and interactive apps or websites. Improving the good
              experience for users when using the application or website has
              always been the goal of their work.
            </p>
          </div>
        </Animator>
      </ScrollPage>

      {/* Section 4 */}
      <ScrollPage page={5}>
        <Animator animation={ZoomInScrollOut}>
          <div className="section-title contact">Contact</div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={6}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            {/* insta link */}
            <Animator animation={MoveIn(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick(
                    "https://www.instagram.com/ivan_alrasyid/?hl=id"
                  )
                }
              >
                <SiInstagram color="white" className="contact-list-icon" />
                <p>Ivan_Alrasyid</p>
              </div>
            </Animator>

            {/* linkendin */}
            <Animator animation={MoveIn(1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick(
                    "https://www.linkedin.com/in/ivan-alrasyid-77b474212/"
                  )
                }
              >
                <TiSocialLinkedin color="white" className="contact-list-icon" />
                <p>Ivan Alrasyid</p>
              </div>
            </Animator>

            {/* github */}
            <Animator animation={MoveOut(-1000, 0)}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() =>
                  handleContactClick("https://github.com/ivanalrasyid")
                }
              >
                <FiGithub color="white" className="contact-list-icon" />
                <p>Ivan Alrasyid</p>
              </div>
            </Animator>
          </span>
        </div>
      </ScrollPage>

      <ScrollPage page={7}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span className="footer">Done</span>
          <br />
          <span className="footer">Thank You, for your Time</span>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default Home;
