import React, { useEffect, Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

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
      {/* <Roadmap /> */}
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
