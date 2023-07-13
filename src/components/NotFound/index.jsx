import React from "react";
import { Link } from "react-router-dom";
import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.centered}>
      <div className={Style.notfound}>
        <div className={Style.notfound}>
          <div className={Style.notfound404}>
            <h1>Oops!</h1>
            <h2>404 - Looks like you knocked on the wrong door! !</h2>
          </div>
          <Link to="/">Go TO Homepage</Link>
        </div>
      </div>
    </div>
  );
}
