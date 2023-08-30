import React from "react";
import "./styles.css";

import Tick from "../../assests/tick.svg";

export default function CourseContent() {
  return (
    <section className="course__content__wrapper">
      <div className="section__header">
        <h2> Course Content</h2>
        {/* <p>People love what we do and we want to let your know</p> */}
      </div>
      <div className="divider__line"></div>
      <div className="course__item__wrapper">
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Process Analysis</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Process Analysis</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Process Analysis</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Task Management</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Task Management</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Task Management</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Time Tracking</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Time Tracking</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Time Tracking</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Performance Metrics</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Performance Metrics</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Performance Metrics</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Customizable Reports</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Customizable Reports</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Customizable Reports</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Email Integration</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Email Integration</p>
        </div>
        <div className="course__item">
          <div className="check__icon">
            <img src={Tick} />
          </div>
          <p>Email Integration</p>
        </div>
      </div>
    </section>
  );
}
