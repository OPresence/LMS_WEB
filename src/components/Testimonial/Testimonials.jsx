import React, { useEffect, useRef } from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import useElementOnScreen from "./useElementOnScreen";

const Testimonials = () => {
  // const [leftColRef, isVisible] = useElementOnScreen({
  //   root: null,
  //   rootMargin: "0px",
  //   threshold: 1.0,
  // });

  const leftColRef = useRef();
  const rightColRef = useRef();

  // console.log({ isVisible });

  const handleLeftIntersect = (args) => {
    const { isIntersecting } = args[0];
    if (isIntersecting) {
      leftColRef.current.children[0].style.opacity = "0.4";
    }
  };

  const handleRightIntersect = (args) => {
    const { isIntersecting } = args[0];
    if (isIntersecting) {
      rightColRef.current.children[2].style.opacity = "0.4";
    }
  };

  useEffect(() => {
    if (leftColRef?.current) {
      let observer;

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      observer = new IntersectionObserver(handleLeftIntersect, options);
      observer.observe(leftColRef.current);
    }
    if (rightColRef?.current) {
      let observer;

      let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.4,
      };

      observer = new IntersectionObserver(handleRightIntersect, options);
      observer.observe(rightColRef.current);
    }
  }, []);

  return (
    <section className="testimonial__wrapper ">
      <div className="section__header">
        <h2>Testimonials</h2>
        <p>People love what we do and we want to let your know</p>
      </div>
      <br />
      <div className="testimonial__container">
        <div className="left__col">
          <div className="video__wrapper"></div>
          <p className="desc">
            At Lando, we are committed to providing excellent services to our
            customers and clients and to help them achieve the best outcomes. We
            believe that we can make a positive impact on our community,
            industry and the world. Our Lando team is dedicated to providing the
            best possible service and support, and we are always looking for
            ways to improve and innovate.
          </p>
        </div>
        <div className="testimonial__review__wrapper">
          <div className="left__col" ref={leftColRef}>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
          </div>
          <div className="right__col" ref={rightColRef}>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
            <div className="testimonial__card">
              <p className="testimonial__review">
                At Lando, we are committed to providing excellent services to
                our customers and clients and to help them achieve the best
                outcomes.We believe that we can make a positive impact on our
                community, industry and the world. We believe that we can make.{" "}
              </p>
              <div className="ratings">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="testimonial__author">
                <div className="author__img">
                  <img src="" />
                </div>

                <div className="author__info">
                  <div className="author__name">Matthew Low</div>
                  <div className="role">Tech Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
