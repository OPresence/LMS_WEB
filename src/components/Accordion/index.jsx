import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

export default function index(props) {
  const [open, setOpen] = useState(1);
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div className="course-accordion accordion" id="accordionCourse">
      <Accordion flush open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader targetId="1" className="accordion-item">
            Introduction
          </AccordionHeader>
          <AccordionBody accordionId="1" className="accordion-body">
            <div>
              <ul className="lessons-list">
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> Greetings and
                    Introductions <span>5:00</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> 5 Business English
                    Phrasal Verbs <span>3:17</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-question-circle"></i> Quizz 1 : How to
                    start?
                  </a>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="2" className="accordion-item">
            Analysis
          </AccordionHeader>
          <AccordionBody accordionId="2" className="accordion-body">
            <div className="accordion-body">
              <ul className="lessons-list">
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> Greetings and
                    Introductions <span>5:00</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> 5 Business English
                    Phrasal Verbs <span>3:17</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-question-circle"></i> Quizz 1 : How to
                    start?
                  </a>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader targetId="3" className="accordion-item">
            Practical
          </AccordionHeader>
          <AccordionBody accordionId="3" className="accordion-body">
            <div className="accordion-body">
              <ul className="lessons-list">
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> Greetings and
                    Introductions <span>5:00</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-play-circle"></i> 5 Business English
                    Phrasal Verbs <span>3:17</span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <i className="fa fa-question-circle"></i> Quizz 1 : How to
                    start?
                  </a>
                </li>
              </ul>
            </div>
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

// export default function index() {
//   return (
//     <details className="course-accordion accordion" id="accordionCourse">

//       <summary className="accordion-item">
//         <button
//           className="collapsed"
//           data-bs-toggle="collapse"
//           data-bs-target="#collapseTwo"
//         >
//           Analysis
//         </button>
//         <div
//           id="collapseTwo"
//           className="accordion-collapse collapse"
//           data-bs-parent="#accordionCourse"
//         >
//           <div className="accordion-body">
//             <ul className="lessons-list">
//               <li>
//                 <a href="">
//                   <i className="fa fa-play-circle"></i> Greetings and
//                   Introductions <span>5:00</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <i className="fa fa-play-circle"></i> 5 Business English
//                   Phrasal Verbs <span>3:17</span>
//                 </a>
//               </li>
//               <li>
//                 <a href="">
//                   <i className="fa fa-question-circle"></i> Quizz 1 : How to
//                   start?
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </summary>

//       <summary className="accordion-item">
//         <button
//           className="collapsed"
//           data-bs-toggle="collapse"
//           data-bs-target="#collapseThree"
//         >
//           Practical
//         </button>

//       </summary>
//     </details>
//   );
// }
