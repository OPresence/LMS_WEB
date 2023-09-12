import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
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
import FAQ from "../components/FAQ";
import Modal from "../components/Modal";

import Img1 from "../assests/animation-1.jpg";
import Img2 from "../assests/animation-2.jpg";
import Img3 from "../assests/animation-3.jpg";
import Img4 from "../assests/animation-4.jpg";

import WhatsApp from "../assests/images/whatsapp.png";
import Instagram from "../assests/images/instagram.png";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const component = useRef();
  const slider = useRef();
  const [showModal, setShowModal] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
        },
      });
    }, component);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setTimeout(() => {
      setShowModal(true);
    }, 5000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div style={{ marginBottom: "4rem" }} ref={component}>
      {showModal && <Modal />}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "100px", 
          zIndex: 10000,
        }}
      >
        <a href="https://wa.me/message/YBGRXVQQN6RMH1" target="_blank" rel="noopener noreferrer">
          <img
            src={WhatsApp}
            alt="Whatsapp"
            style={{ width: "64px", height: "64px" }}
          />
        </a>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "30px",
          zIndex: 10000,
        }}
      >
        <a href="https://www.instagram.com/thefinancialladder/" target="_blank" rel="noopener noreferrer">
          <img
            src={Instagram}
            alt="Instagram"
            style={{ width: "64px", height: "64px" }}
          />
        </a>
      </div>
      <HeroSection />
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3
          className="sections__title"
          style={{ color: "#7f7f7f", textTransform: "uppercase " ,marginTop: '60px' }}
        >
          {/* The Edge that defines us */}
        </h3>
      </div>
      <Features />
      <br />
      <section className="roadmap__wrapper" ref={slider}>
        <div className="sections__header">
          <h3
            className="sections__title"
            style={{ color: "#7f7f7f", textTransform: "uppercase " }}
          >
            You are in good hands
          </h3>
        </div>
        <div className="image__animation">
          <div className="panel image__1">
            <img src={Img1}/>
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
      {/* <div
        style={{ width: "64px", height: "64px", position: "sticky", right: 0 }}
      >
        <div style={{ width: "64px", height: "64px" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" />
        </div>
      </div> */}
      <br />
      <br />
      <CourseContent />
      <br />
      <br />
      <br />
      <br />
      <Steps />
      <br />
      <br />
      <Testimonials />
      <SocialContent />
      <br />
      <Teams />
      <FAQ />
    </div>
  );
};

export default Home;
