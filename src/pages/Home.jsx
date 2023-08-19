import React, { useEffect, Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import Steps from "../components/Steps/Steps";
import Features from "../components/Feature-section/Features";
import Teams from "../components/Teams";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";
import Roadmap from "../assests/roadmap.jpeg";
import FAQ from "../components/FAQ";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <div style={{ marginBottom: "4rem" }}>
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
      <div
        style={{
          margin: "20px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3 className="sections__title" style={{ color: "#7f7f7f" }}>
          Journey of TFL trader <br /> You are in good hands
        </h3>
      </div>
      <br />
      <div style={{ width: "80%", margin: "0 auto", marginBottom: "10rem" }}>
        <img src={Roadmap} style={{ aspectRatio: "16/5" }} />
      </div>
      <br />
      <Steps />
      <br />
      <br />
      <Testimonials />
      <br />

      <Teams />
      <FAQ />
    </div>
  );
};

export default Home;
