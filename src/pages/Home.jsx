import React, { useEffect, Fragment } from "react";
import HeroSection from "../components/Hero-Section/HeroSection";
import CompanySection from "../components/Company-section/Company";

import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses-section/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import PlatformFeatures from "../components/PlatformFeatures";

import Testimonials from "../components/Testimonial/Testimonials";

import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])

  return (
    <Fragment>
      <HeroSection />
      <AboutUs />
      <ChooseUs />
      <Features />
      {/* <FreeCourse /> */}
      <Courses />
      {/* <CompanySection /> */}
      <PlatformFeatures />
      <Testimonials />
      {/* <Newsletter /> */}
    </Fragment>
  );
};

export default Home;
