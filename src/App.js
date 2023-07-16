import { useContext, useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  redirect,
  Outlet,
} from "react-router-dom";
import { AuthContext } from "./authContext";
import "./app.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Logout from "./components/Logout/Logout";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import NotFound from "./components/NotFound";
import Cart from "./pages/Cart/Cart";
import Payment from "./components/Payment";
import Profile from "./components/Profile";
import Contact from "./components/Contact";
import About from "./pages/About";
import Confirmation from "./components/Confirmation";
import RefundPolicy from "./components/RefundPolicy";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndCondition from "./components/TermsAndCondition";

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
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />
            <Route element={<PrivateRoute />}>
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
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
    navigate("/");
  }

  return <Outlet />;
};

export default App;
