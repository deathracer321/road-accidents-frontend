import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Homeabout from "./components/Homeabout";
import Homeaccidents from "./components/Homeaccidents";
import Homecontact from "./components/Homecontact";
import Homenews from "./components/Homenews";
import { useState, createContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./App.css";

export const UserLoggedInContext = createContext();

function App() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);

  // const userNotAuthorized = (
  //   <button id="redirect-button">
  //     <Link to="/Login">Login to view Dashboard</Link>
  //   </button>
  // );

  return (
    <UserLoggedInContext.Provider value={setUserLoggedIn}>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route
            path="/Homepage/about"
            element={
              isUserLoggedIn ? (
                <div>
                  <Navbar />
                  <Homeabout />
                </div>
              ) : (
                <button id="redirect-button">
                  <Link to="/Login">Login to view Dashboard</Link>
                </button>
              )
            }
          />
          <Route
            path="/Homepage/contact"
            element={
              isUserLoggedIn ? (
                <div>
                  <Navbar />
                  <Homecontact />
                </div>
              ) : (
                <button id="redirect-button">
                  <Link to="/Login">Login to view Dashboard</Link>
                </button>
              )
            }
          />
          <Route
            path="/Homepage/news"
            element={
              isUserLoggedIn ? (
                <div>
                  <Navbar />
                  <Homenews />
                </div>
              ) : (
                <button id="redirect-button">
                  <Link to="/Login">Login to view Dashboard</Link>
                </button>
              )
            }
          />
          <Route
            path="/Homepage/accidents"
            element={
              isUserLoggedIn ? (
                <div>
                  <Navbar />
                  <Homeaccidents />
                </div>
              ) : (
                <button id="redirect-button">
                  <Link to="/Login">Login to view Dashboard</Link>
                </button>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </UserLoggedInContext.Provider>
  );
}

export default App;
