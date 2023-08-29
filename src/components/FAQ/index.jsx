import React, { useState } from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import "./styles.css";

export default function FAQ() {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <div className="section__header">
        <h2>
          Frequently asked <br /> questions
        </h2>
      </div>
      <br />
      <br />
      <Accordion flush open={open} toggle={toggle}>
        <div className="accordion_wrapper">
          <div style={{ width: "100%" }}>
            <AccordionItem>
              <AccordionHeader targetId="1">
                Will this training make me a good stock trader?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                You will be learning, interacting, raising questions, trading,
                and having fun along with a bunch of other driven and
                experienced stock traders. It’s a continuous learning process.
                So in other words you will be able to trade on your own.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                Can someone with no knowledge about stock market enroll for the
                program?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                Yes, you can! We start from the absolute basics and explain
                every concept in detail. The course is broken down into various
                modules which help you understand the concepts better.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                What do I need to start Trading?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <span>
                  Trading is done online. It has become very easy through online
                  platforms.
                </span>
                <br />
                <br />
                <br />
                <span>
                  All you need is a laptop or a PC, even a mobile phone with
                  good internet connectivity and a Demat account. We would
                  suggest brokers like Upstox and Alice Blue for the same. If
                  you don't have an account, you can open one by clicking here
                  (Link).
                </span>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                How will I be informed about the sessions?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                We will keep you updated on WhatsApp.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                Can I discontinue my Membership at any time?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                You can reschedule your training and start over with a different
                batch but the membership package is not refundable.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                If I ever miss a live session will i get the recording of the
                same?
              </AccordionHeader>
              <AccordionBody accordionId="6">
                No, we dont provide you with recordings of the sessions but in
                case you miss any session do inform your mentors about the same
                and we will schedule a revision session for you.
              </AccordionBody>
            </AccordionItem>
          </div>
          <div style={{ width: "100%" }}>
            <AccordionItem>
              <AccordionHeader targetId="7">
                Will I get Live market updates?
              </AccordionHeader>
              <AccordionBody accordionId="7">
                Yes, in the whatsapp community you will be provided with the
                time to time market updates.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="9">
                How can I connect with The Financial Ladder?
              </AccordionHeader>
              <AccordionBody accordionId="9">
                If you have any other queries you can whatsapp us on{" "}
                <strong>
                  <a href="tel:7276009009"> 7276009009</a> /
                  <a href="tel:8369901219"> 8369901219</a>
                </strong>{" "}
                and mail us at
                <strong>
                  {" "}
                  <a href="mailto:contact@thefinancialladder.com">
                    contact@thefinancialladder.com
                  </a>
                </strong>
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="8">
                Will I be kept updated with the changing strategies covered
                during <br />
                the program?
              </AccordionHeader>
              <AccordionBody accordionId="8">
                Yes, we do have sessions of the students who have already
                completed the program to keep them updated with the concepts
                taught to them during the program
              </AccordionBody>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
