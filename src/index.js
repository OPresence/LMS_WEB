import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const AuthContext = React.createContext(null);

ReactDOM.render(
  <React.StrictMode>
    {/* <AuthContext.Provider> */}
      <App />
    {/* </AuthContext.Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
