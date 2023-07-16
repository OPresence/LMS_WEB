import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./platformFeatures.css";

const FeatureData = [
  {
    title: "WORLD-CLASS FACULTY",
    desc: "Learn from the accomplished teachers with an in-depth understanding of the subject.",
    icon: "fa-solid fa-chalkboard-user",
  },
  {
    title: "QUIZ & ASSIGNMENTS",
    desc: "Practice chapter-wise Quizzes & solve Assignments to learn and revise concepts.",
    icon: "fa-solid fa-list-check",
  },
  {
    title: "CUTTING EDGE CURRICULUM",
    desc: "Educate yourself with the top-notch study material designed by the EXPERTS.",
    icon: "fa-solid fa-book",
  },
  {
    title: "TRUSTED CONTENT",
    desc: "Learn from the comprehensive & interactive course content.",
    icon: "fa-solid fa-medal",
  },
  {
    title: "LEARN ANYTIME ANYWHERE",
    desc: "Learn at your own pace through our easy to navigate Android & iOS App.",
    icon: "fa-solid fa-earth-americas",
  },
  {
    title: "ALERT & NOTIFICATION",
    desc: "Stay up to date & get notified every time the course content is updated.",
    icon: "fa-solid fa-bell",
  },
  {
    title: "STUDENT DISCUSSION FORUM",
    desc: "Get access to 24*7 Live Discussion group with batchmates & faculties.",
    icon: "fa-solid fa-comments",
  },
  {
    title: "AFFORDABLE FEE STRUCTURE",
    desc: "Learn from the best in the industry with an affordable payment plan.",
    icon: "fa-solid fa-scale-balanced",
  },
];

const PlatformFeatures = () => {
  return (
    <section className="platform__features__section">
      <Container>
        <div className="wrapper">
          {FeatureData.map((item, index) => (
            <div className="card" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i className={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                {/* <p>{item.desc}</p> */}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PlatformFeatures;
