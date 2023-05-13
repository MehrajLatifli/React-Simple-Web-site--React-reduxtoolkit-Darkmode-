import "./App.css";
import "../src/Asserts/CSS/Backround.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import AuthLayout from "./Pages/Auth/AuthLayout";
import Login from "./Pages/Auth/Login";
import Page404 from "./Pages/Page404";
import PrivateRoute from "./Components/PrivateRoute";
import Profile from "./Pages/Profile";
import { useSelector } from "react-redux";
import DarkModeToggle from "./ReduxToolkit/DarkModeToggle";
function App() {
  const isDarkMode = useSelector((state) => state.darkMode);

  return (
    <div className="App">
      <div className={isDarkMode ? "dark" : "light"}>
      <Navbar />

        <DarkModeToggle />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              {" "}
              <Profile />
            </PrivateRoute>
          }
        />
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />}></Route>
        </Route>

          <Route path="*" element={<Page404 />} />
          
      </Routes>
    </div>
    </div>
  );
}

export default App;
