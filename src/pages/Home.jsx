import React, { useLayoutEffect, useRef } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import Steps from "../components/Steps/Steps";
import Features from "../components/Feature-section/Features";
import Teams from "../components/Teams";

import Roadmap from "../components/Roadmap";
import Testimonials from "../components/Testimonial/Testimonials";
import CourseContent from "../components/CourseContent";
import SocialContent from "../components/SocialContent";
import Newsletter from "../components/Newsletter/Newsletter";
import FAQ from "../components/FAQ";

import Img1 from "../assests/Animation 1.jpg";
import Img2 from "../assests/Animation 2.jpg";
import Img3 from "../assests/Animation 3.jpg";
import Img4 from "../assests/Animation 4.jpg";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 0.5,
          snap: 1 / (panels.length - 2),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  return (
    <div style={{ marginBottom: "4rem" }} ref={component}>
      <HeroSection />
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="sections__title" style={{ color: "#7f7f7f" }}>
          The Edge that defines us
        </h3>
      </div>
      <Features />
      <br />
      <section className="roadmap__wrapper" ref={slider}>
        <div className="sections__header">
          <h3 className="sections__title" style={{ color: "#7f7f7f" }}>
            Journey of TFL trader <br /> You are in good hands
          </h3>
        </div>
        <div className="image__animation">
          <div className="panel image__1">
            <img src={Img1} />
          </div>
          <div className="panel image__2">
            <img src={Img2} />
          </div>
          <div className="panel image__3">
            <img src={Img3} />
          </div>
          <div className="panel image__4">
            <img src={Img4} />
          </div>
        </div>
      </section>
      <br />
      <br />
      <CourseContent />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Steps />
      <br />
      <br />
      <SocialContent />
      <Testimonials />
      <br />

      <Teams />
      <FAQ />
    </div>
  );
};

export default Home;
