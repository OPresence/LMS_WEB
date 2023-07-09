import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/sign-up" element={<SignUp />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
