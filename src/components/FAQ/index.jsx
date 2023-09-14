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
                Why should you choose this program?
              </AccordionHeader>
              <AccordionBody accordionId="1">
                Having trained over 800+ Independent Traders in this program, we
                are sure that the tools & techniques designed will help you
                emerge as a confident trader. Our hand-holding support and
                reliable strategies will give you an edge over the market.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                What will I learn from this program?
              </AccordionHeader>
              <AccordionBody accordionId="2">
                In this program, you will learn more about Financial Markets,
                Technical Analysis of Stocks, Trading Strategies, Options
                Strategy and Derivatives. You will also learn how to frame
                real-time trading strategies in the market. You will be a part
                of the WhatsApp/Telegram group where mentors will guide you
                throughout the program.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                I do not have a finance/commerce background. Can I take the
                course?
              </AccordionHeader>
              <AccordionBody accordionId="3">
                <span>
                  Yes, you can definitely join the course. The course content is
                  designed in such a manner that participants from any
                  educational background can understand it
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
                What is the Basic Qualification required to take this course?
              </AccordionHeader>
              <AccordionBody accordionId="4">
                The only basic qualification required is that participants
                should be able to read, write and understand Hindi, English and
                Basic Mathematics.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                Is this program recorded or live?
              </AccordionHeader>
              <AccordionBody accordionId="5">
                This program is 70 percent recorded sessions and 30 percent live
                sessions with mentors.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                What topics are typically covered in this course?
              </AccordionHeader>
              <AccordionBody accordionId="6">
                For the topics, you can go through our brochure on our website
                or click here.
              </AccordionBody>
            </AccordionItem>
          </div>
          <div style={{ width: "100%" }}>
            <AccordionItem>
              <AccordionHeader targetId="7">
                What is the duration of the program?
              </AccordionHeader>
              <AccordionBody accordionId="7">
                As this program is recorded, there is no duration of the
                program.
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              {/* <AccordionHeader targetId="9">
                Will I have lifetime access to the program materials?
              </AccordionHeader> */}
              {/* <AccordionBody accordionId="9">
              Yes, you'll get lifetime access to the program materials.
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
              </AccordionBody> */}
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="8">
                Will I have lifetime access to the program materials?
              </AccordionHeader>
              <AccordionBody accordionId="8">
                Yes, you'll get lifetime access to the program materials.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="9">
                Will I be able to trade after undertaking the course?
              </AccordionHeader>
              <AccordionBody accordionId="9">
                Yes, after completion of the course you will be able to trade
                yourself without depending on anyone and you will be fully aware
                of Risk associated with the trading instruments like Futures,
                Options, Commodities etc.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="10">
                Does this course provide any certifications or credentials?
              </AccordionHeader>
              <AccordionBody accordionId="10">
                Yes, this course provides certification of completion.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="11">
                Where can I call to know more details about this program?
              </AccordionHeader>
              <AccordionBody accordionId="11">
                You are free to call us or send a whatsapp message at this
                number +91 7276009009. We would be happy to help you further.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="12">
                Can I get any doubt clearing sessions from Mentors?
              </AccordionHeader>
              <AccordionBody accordionId="12">
                Yes, there will be weekly doubt solving sessions during the
                course from our mentors.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="13">
                Will I get live market updates?
              </AccordionHeader>
              <AccordionBody accordionId="13">
                Yes, you will be getting live market updates through our
                whatsapp community
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="14">
                Will I be kept updated with the changing strategies covered
                during the program?
              </AccordionHeader>
              <AccordionBody accordionId="14">
                Yes, definitely this is an ever evolving program which will be
                updated regularly with ever changing market conditions. So your
                learning journey does not get over once you are done going
                through the recordings once; keep checking the exclusive student
                portal for updates.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="15">
                Where will I get links for the live trading sessions and doubt
                solving sessions?
              </AccordionHeader>
              <AccordionBody accordionId="15">
                Yes, you heard it right! We will be having live trading sessions
                with mentors and other professional traders so as you get a
                practical exposure of the market. The links of these sessions
                will be updated on the exclusive student portal which has been
                given to you.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="16">
                Is this course suitable for beginners, or are they more geared
                toward experienced traders?
              </AccordionHeader>
              <AccordionBody accordionId="16">
                These programs are created in such a way that anyone from
                absolute beginner to an expert professional trader can learn and
                understand better.
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="17">
                What is the cost of this course, and are there any free options
                available?
              </AccordionHeader>
              <AccordionBody accordionId="17">
                Yes, we do have free webinars for everyone, to access them
                please join our free telegram community as all the updates
                regarding the same are posted there. Also please click here for
                the entire pricing details of the programs
              </AccordionBody>
            </AccordionItem>

            <AccordionItem>
              <AccordionHeader targetId="18">
                What is the cost of this course, and are there any free options
                available?
              </AccordionHeader>
              <AccordionBody accordionId="18">
                Yes, we do have free webinars for everyone, to access them
                please join our free telegram community as all the updates
                regarding the same are posted there. Also please click here for
                the entire pricing details of the programs
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="18">
                What is the cost of this course, and are there any free options
                available?
              </AccordionHeader>
              <AccordionBody accordionId="19">
                Yes, we do have free webinars for everyone, to access them
                please join our free telegram community as all the updates
                regarding the same are posted there. Also please click here for
                the entire pricing details of the programs
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="19">
                Will this program help me become a professional trader?
              </AccordionHeader>
              <AccordionBody accordionId="19">
                You will be learning, interacting, raising questions, trading,
                and having fun along with a bunch of other driven and
                experienced stock traders. It’s a continuous learning process.
                So in other words you will be able to trade on your own
              </AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="20">
                What do I need to start trading?
              </AccordionHeader>
              <AccordionBody accordionId="20">
                Trading is done online. It has become very easy through online
                platforms. All you need is a laptop or a PC, even a mobile phone
                with good internet connectivity and a Demat account. We would
                suggest brokers like Upstox, Alice Blue, Paytm Money, etc for
                the same. If you don't have an account, you can open one by
                clicking here (Link).
              </AccordionBody>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
