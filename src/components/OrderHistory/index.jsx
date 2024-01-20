import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import Loader from "../Loader/Loader";
import getEnrolledCourses from "./helper";
import "./orderHistory.css";

const dateFormatter = (date) => {
  function join(date, options, separator) {
    function format(option) {
      let formatter = new Intl.DateTimeFormat("en", option);
      return formatter.format(date);
    }
    return options.map(format).join(separator);
  }

  let options = [{ day: "numeric" }, { month: "short" }, { year: "numeric" }];
  let joined = join(new Date(date), options, "-");
  return joined;
};

export default function OrderHistory() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getEnrolledCourses()
      .then((res) => {
        if (res.status == 200) {
          setIsLoading(false);
          setEnrolledCourses(res.data.courses);
        }
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="order__history">
      <div className="title">Purchase history </div>
      <Loader show={isLoading} />
      <Container>
        <div className="mt-5">
          <div class="row">
            <div class="col-md-12">
              <div class="table-wrap">
                <table class="table table-responsive-xl">
                  <thead>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Course</th>
                      <th>Date</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {React.Children.toArray(
                      enrolledCourses.map((course) => {
                        return (
                          <tr>
                            <td>
                              <i class="ri-shopping-cart-2-line"></i>
                            </td>
                            <td>
                              <Link to={`/courses/${course?.[0]?._id}`}>
                                {course?.[0]?.title}
                              </Link>
                            </td>
                            <td>{dateFormatter(course.date)}</td>
                            <td>&#8377; {course?.[0]?.price}</td>
                          </tr>
                        );
                      }),
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
