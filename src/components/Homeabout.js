import React from "react";
import "../css/Homeabout.css";
import pic1 from "../images/pic1.jpg";
import pic2 from "../images/pic2.jpg";
import pic3 from "../images/pic3.jpg";

function Homeabout() {
  return (
    <div>
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>I am from Bits-Pilani and this is my final-year project </p>
        <p>
          The system will be using GPS technology to track the location of the
          vehicle and, in the event of an accident, sends an alert message with
          the live location to emergency services and the police station using
          GSM technology. It also incorporates ultrasonic sensors and pressure
          sensors to detect the severity of the accident. If the pressure
          exceeds a certain range, indicating a major accident, the system will
          send an emergency alert to the appropriate services. All these
          combines with a full stack app and in this website under the accidents
          tab you see the results of the accident
        </p>
      </div>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={pic1} alt={"logo"} class="flipcardimage" />
          </div>
          <div class="flip-card-back">
            <h1>Harish S</h1>
            <p>Senior Software Engineer</p>
            <p>I love developing Web applications</p>
            <p>I also develope IOT products</p>
          </div>
        </div>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={pic2} alt={"logo"} class="flipcardimage" />
          </div>
          <div class="flip-card-back">
            <h1>Hari krishna sharma S</h1>
            <p>Senior Software Engineer</p>
            <p>I love developing Web applications</p>
            <p>I also develope IOT products</p>
          </div>
        </div>
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={pic3} alt={"logo"} class="flipcardimage" />
          </div>
          <div class="flip-card-back">
            <h1>Hari Krishna</h1>
            <p>Senior Software Engineer</p>
            <p>I love developing Web applications</p>
            <p>I also develope IOT products</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeabout;
