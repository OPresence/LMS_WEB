import React from "react";

export default function Review() {
  return (
    <div className="course-review">
      <h3 className="title">Review</h3>

      <div className="review-rating">
        <div className="rating-box">
          <span className="count">5.0</span>
          <div className="rating-star">
            <div className="rating-active" style={{ width: "100%" }}></div>
          </div>
          <p>Total 2 Ratings</p>
        </div>
        <div className="rating-percentage">
          <div className="single-rating-percentage">
            <span className="label">5 Stars</span>
            <div className="rating-line">
              <div className="line-bar" style={{ width: "90%" }}></div>
            </div>
            <span className="label">90%</span>
          </div>

          <div className="single-rating-percentage">
            <span className="label">4 Stars</span>
            <div className="rating-line">
              <div className="line-bar" style={{ width: "40%" }}></div>
            </div>
            <span className="label">40%</span>
          </div>

          <div className="single-rating-percentage">
            <span className="label">3 Stars</span>
            <div className="rating-line">
              <div className="line-bar" style={{ width: "20%" }}></div>
            </div>
            <span className="label">20%</span>
          </div>

          <div className="single-rating-percentage">
            <span className="label">2 Stars</span>
            <div className="rating-line">
              <div className="line-bar" style={{ width: "0%" }}></div>
            </div>
            <span className="label">15%</span>
          </div>

          <div className="single-rating-percentage">
            <span className="label">1 Stars</span>
            <div className="rating-line">
              <div className="line-bar" style={{ width: "0%" }}></div>
            </div>
            <span className="label">10%</span>
          </div>
        </div>
      </div>
      <div className="review-items">
        <ul>
          <li>
            <div className="single-review">
              <div className="review-author">
                <img src="assets/images/author-4.jpg" alt="Author" />
              </div>
              <div className="review-content">
                <div className="review-top">
                  <h4 className="name">David Gea</h4>
                  <div className="rating-star">
                    <div
                      className="rating-active"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                  <span className="date">5 Months Ago</span>
                </div>
                <p>
                  World-class training and development programs developed by top
                  teachers. Build skills with courses, certificates, and degrees
                  online from world-class.
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="single-review">
              <div className="review-author">
                <img src="assets/images/author-3.jpg" alt="Author" />
              </div>
              <div className="review-content">
                <div className="review-top">
                  <h4 className="name">Andrew paker</h4>
                  <div className="rating-star">
                    <div
                      className="rating-active"
                      style={{ width: "60%" }}
                    ></div>
                  </div>
                  <span className="date">4 Months Ago</span>
                </div>
                <p>
                  World-class training and development programs developed by top
                  teachers. Build skills with courses, certificates, and degrees
                  online from world-class.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
