import React from "react";
import { Spinner } from "reactstrap";
import "./loader.css";

export default function Loader({ show = false }) {
  return (
    <>
      {show ? (
        <div class="loader">
          <Spinner>Loading...</Spinner>
        </div>
      ) : null}
    </>
  );
}
