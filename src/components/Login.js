import React, { useState, useEffect, createContext, useContext } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";
import "../css/Login.css";
import { UserLoggedInContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataRetrieved, setDataRetrieved] = useState([]);
  const navigate = useNavigate();
  const setUserLoggedIn = useContext(UserLoggedInContext);

  const dataRetriever = async (userId) => {
    const querySnapshot = await getDocs(collection(db, "usersfromfrontend"));
    var tempAllFetchedData = [];
    querySnapshot.forEach((doc) => {
      tempAllFetchedData.push(doc.data());
    });
    setDataRetrieved(tempAllFetchedData);
  };

  //this below use effect is for fetching the data on initial load
  useEffect(() => {
    dataRetriever();
    return () => {};
  }, []);

  const onLoginHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
    console.log(dataRetrieved);
  };

  // this below use effect is for checking the credentials
  //this below use effect will run only when there is change in setState()
  useEffect(() => {
    dataRetrieved.map((eachUser) => {
      if (eachUser.email === email && eachUser.password === password) {
        alert("Logged in successfully");
        setUserLoggedIn(true);
        navigate("/homepage");
      }
    });
  }, [password, email]);

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={onLoginHandler}>
          <span>Login</span>
          <input
            type="email"
            name="email"
            placeholder="Enter email id / username"
            className="form-control inp_text"
            id="email"
          />

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            className="form-control"
          />

          <button type="submit">Login</button>
          <br />
          <br />

          <button className="alternativeOption">
            <Link to="/register">New user? - Register</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
