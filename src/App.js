import { useContext, useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
  redirect,
  Outlet,
} from "react-router-dom";
import { AuthContext } from "./authContext";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import Enrollments from "./pages/Enrollments/Enrollments";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    if (typeof window == "undefined") {
      return false;
    }
    if (localStorage.getItem("authToken")) {
      return true;
    }
    return false;
  });

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Router>
          <Header />
          <main className="main-container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/sign-up" element={<SignUp />}></Route>
              <Route element={<PrivateRoute />}>
                <Route path="/my-courses" element={<Enrollments />}></Route>
                <Route path="/logout" element={<Logout />}></Route>
              </Route>
            </Routes>
          </main>
      </Router>
    </AuthContext.Provider>
  );
}

const PrivateRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const ref = useRef(false);

  useEffect(() => {
    const path = localStorage.getItem("path");
    if (path && !ref?.current) {
      navigate(path);
      ref.current = true;
    } else if (ref?.current) {
      localStorage.setItem("path", location.pathname);
    }
  }, [location.pathname]);

  if (!isLoggedIn) {
    redirect("/");
  }

  return <Outlet />;
};

export default App;
