import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import logout from "./helper";
import { AuthContext } from "../../authContext";
import { removeFromLocalStorage } from "../../utils";

export default function Logout() {
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("logout");
  useEffect(() => {
    logout()
      .then((res) => {
          removeFromLocalStorage('authToken')
        setIsLoggedIn(false);
        navigate("/");
      })
      .catch(() => console.error("Failed to logout"));
  }, []);

  return <></>;
}
