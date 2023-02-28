import React from "react";
import "../css/Homecontact.css";

function Homecontact() {
  return (
    <div class="container">
      <div class="content">
        <div class="left-side">
          <div class="address details">
            <i class="fas fa-map-marker-alt"></i>
            <div class="topic">Address</div>
            <div class="text-one">ABC, 123 street</div>
            <div class="text-two">Chennai 600000</div>
          </div>
          <div class="phone details">
            <i class="fas fa-phone-alt"></i>
            <div class="topic">Phone</div>
            <div class="text-one">+91 9990909090</div>
            <div class="text-two">+91 0909090909</div>
          </div>
          <div class="email details">
            <i class="fas fa-envelope"></i>
            <div class="topic">Email</div>
            <div class="text-one">s.harish2711@gmail.com</div>
            <div class="text-two">s.2harish2711@gmail.com</div>
          </div>
        </div>
        <div class="right-side">
          <div class="topic-text">Send us a message</div>
          <p>
            Incase of developement issue in this application, please contact us
          </p>
          <form>
            <div class="input-box">
              <input type="text" placeholder="Enter username" />
            </div>
            <div class="input-box message-box">
              <input type="text" placeholder="Enter username" />
            </div>
            <div class="button">
              <input type="button" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Homecontact;
