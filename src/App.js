import { useContext, useState, useRef, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate,
  Outlet,
} from "react-router-dom";
import { UserContext } from "./userContext";

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
import OrderHistory from "./components/OrderHistory";

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

  const [courses, setCourses] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    const isExist = localStorage.getItem("items");
    if (!!isExist) {
      return JSON.parse(localStorage.getItem("items"));
    }
    return [];
  });

  const handleCartItems = (items) => {
    localStorage.setItem("items", JSON.stringify(items));
    setCartItems(items);
  };

  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        cartItems,
        courses,
        setIsLoggedIn,
        setCourses,
        setCartItems: handleCartItems,
      }}
    >
      <Router>
        <Header />
        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route
              path="/terms-and-condition"
              element={<TermsAndCondition />}
            />
            <Route path="/not-found" element={<NotFound />} />
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/confirmation" element={<Confirmation />} />
              <Route path="/order-history" element={<OrderHistory />} />
              <Route path="/logout" element={<Logout />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

const PrivateRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(UserContext);
  const ref = useRef(false);

  if (!isLoggedIn) {
    // not logged in so redirect to login page with the return url
    return <Navigate to="/login" state={{ from: history.location }} />;
  }

  // useEffect(() => {
  //   const path = localStorage.getItem("path");
  //   if (path && !ref?.current) {
  //     navigate(path);
  //     ref.current = true;
  //   } else if (ref?.current) {
  //     localStorage.setItem("path", location.pathname);
  //   }
  // }, [location.pathname]);

  // if (!isLoggedIn) {
  //   console.log({ isLoggedIn });
  //   navigate("/");
  //   return;
  // }

  return <Outlet />;
};

export default App;
