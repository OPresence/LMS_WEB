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
                How does this work?
              </AccordionHeader>
              <AccordionBody accordionId="1"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="2">
                What are the benefits?
              </AccordionHeader>
              <AccordionBody accordionId="2"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="3">
                Is it difficult to use?
              </AccordionHeader>
              <AccordionBody accordionId="3"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="4">
                Can I have custom pricing?
              </AccordionHeader>
              <AccordionBody accordionId="4"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="5">
                Is there trial version available?
              </AccordionHeader>
              <AccordionBody accordionId="5"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="6">
                Where do I sign up?
              </AccordionHeader>
              <AccordionBody accordionId="6"></AccordionBody>
            </AccordionItem>
          </div>
          <div style={{ width: "100%" }}>
            <AccordionItem>
              <AccordionHeader targetId="7">
                How does this work?
              </AccordionHeader>
              <AccordionBody accordionId="7"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="8">
                What are the benefits?
              </AccordionHeader>
              <AccordionBody accordionId="8"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="9">
                Is it difficult to use?
              </AccordionHeader>
              <AccordionBody accordionId="9"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="10">
                Can I have custom pricing?
              </AccordionHeader>
              <AccordionBody accordionId="10"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="11">
                Is there trial version available?
              </AccordionHeader>
              <AccordionBody accordionId="11"></AccordionBody>
            </AccordionItem>
            <AccordionItem>
              <AccordionHeader targetId="12">
                Where do I sign up?
              </AccordionHeader>
              <AccordionBody accordionId="12"></AccordionBody>
            </AccordionItem>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
