import React from "react";
import { ButtonGroup, Button } from "reactstrap";
import "./gender.css";

export default function Gender({ gender, setGender }) {
    console.log({gender})
  return (
    <ButtonGroup className="radio__wrapper">
      <Button
        className={`${gender === "Male" ? "radio active" : "radio"}`}
        onClick={() => setGender("Male")}
      >
        Male
      </Button>
      <Button
        className={`${gender === "Female" ? "radio active" : "radio"}`}
        onClick={() => setGender("Female")}
      >
        Female
      </Button>
    </ButtonGroup>
  );
}
