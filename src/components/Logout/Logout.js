import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logout from "./helper";
import { UserContext } from "../../userContext";
import { removeFromLocalStorage } from "../../utils";

export default function Logout() {
  const { setIsLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout()
      .then((res) => {
        removeFromLocalStorage("authToken");
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch(() => console.error("Failed to logout"));
  }, []);

  return <></>;
}
