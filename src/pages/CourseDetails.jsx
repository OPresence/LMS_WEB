import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { UserContext } from "../userContext";
import CourseDetailBanner from "../components/CourseDetailBanner";
import Accordion from "../components/Accordion";
import CourseInstructor from "../components/CourseInstructor";
import Review from "../components/Review";
import SidebarDetail from "../components/SidebarDetail";
import Loader from "../components/Loader/Loader";
import NotFound from "../components/NotFound";
import { getCoursesById } from "../components/Courses-section/helper";

export default function CourseDetails() {
  const { id } = useParams();
  const { courses = [] } = useContext(UserContext);
  const [course, setCourse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (courses.length) {
      const courseDetails = courses.filter((course) => course._id === id)[0];
      setCourse(courseDetails);
    } else {
      setIsLoading(true);
      getCoursesById(id)
        .then((res) => {
          if (res.status === 200) {
            setCourse(res.data.course);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          setIsLoading(false);
        });
    }
  }, [courses]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Loader show={isLoading} />
      <CourseDetailBanner course={course} />
      <div className="section section-padding">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-xl-7 col-lg-8">
              <div className="course-details-wrapper">
                <div className="course-overview">
                  <h3 className="title">Course Overview</h3>
                  <p>
                    World-class training and development programs developed by
                    top teachers. Build skills with courses, certificates, and
                    degrees online from world-class universities and companies.
                    from the National Research University Higher School of
                    Economics (HSE University) is the first fully online.
                  </p>
                </div>
                <div className="course-learn-list">
                  <h3 className="title">What you will learn</h3>
                  <ul>
                    <li>Become a UX designer.</li>
                    <li>Become a UX designer.</li>
                    <li>You will be able to add UX designer to your CV</li>
                    <li>You will be able to add UX designer to your CV</li>
                    <li>Build & test a full website design.</li>
                    <li>Build & test a full website design.</li>
                  </ul>
                </div>

                <div className="course-lessons">
                  <div className="lessons-top">
                    <h3 className="title">Course Content</h3>
                    <div className="lessons-time">
                      <span>10 Lessons</span>
                      <span>6h 40m</span>
                    </div>
                  </div>

                  <Accordion />
                </div>
                <CourseInstructor course={course} />
                <Review />
              </div>
            </div>
            <SidebarDetail course={course} />
          </div>
        </div>
      </div>
    </div>
  );
}
