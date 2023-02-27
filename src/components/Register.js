import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import db from "../firebase";
import uuid from "react-uuid";
import "../css/Login.css";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function writeUserData(userId, password, email) {
    await setDoc(doc(db, "usersfromfrontend", `${userId}`), {
      email: email,
      password: password,
    });
  }
  const onRegisterHandler = (e) => {
    e.preventDefault();

    setEmail(e.target.email.value);
    setPassword(e.target.password.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      writeUserData(uuid(), password, email);
      alert("Thanks for signing up");
      navigate("/login");
    }
    return () => {};
  }, [email, password]);

  return (
    <div className="login">
      <div className="form">
        <form onSubmit={onRegisterHandler}>
          <span>Register</span>

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

          <button type="submit">Register</button>
          <br />
          <br />
          <button id="alternativeOption-register">
            <Link to="/Login">Already a User? Login</Link>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
