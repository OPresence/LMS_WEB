import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./styles.css";
// import Img1 from "../../assests/Animation 1.jpg";
// import Img2 from "../../assests/Animation 2.jpg";
// import Img3 from "../../assests/Animation 3.jpg";
// import Img4 from "../../assests/Animation 4.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function Roadmap() {
  const component = useRef();
  const slider = useRef();

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         pin: true,
  //         scrub: 1,
  //         snap: 1 / (panels.length - 2),
  //         end: () => "+=" + slider.current.offsetWidth,
  //       },
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // }, []);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      let pauseRatio = 0.1;
      let tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true,
        },
      });
      panels.forEach((panel, i) => {
        if (i) {
          tl.to(
            panels,
            {
              xPercent: -100 * i,
            },
            (i - 1) * 0.5 + pauseRatio * i,
          );
        }
      });
      tl.to({}, { duration: pauseRatio });
    }, component);
    return () => ctx.revert();
  });

  return (
    <section className="roadmap__wrapper" ref={component}>
      <div className="sections__header">
        <h3 className="sections__title" style={{ color: "#7f7f7f" }}>
          Journey of TFL trader <br /> You are in good hands
        </h3>
      </div>
      <div className="image__animation" ref={slider}>
        <div className="panel image__1">
          <img src={Img1} />
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
      {/* <div className="last"></div> */}
    </section>
  );
}
