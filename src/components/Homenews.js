import React from "react";
import "../css/Homenews.css";

function Homenews() {
  return (
    <div>
      <div class="header">
        <h2>Know what happens....</h2>
      </div>
      <div class="row">
        <div class="leftcolumn">
          <div class="card">
            <h2>Road accidents on highways</h2>
            <h5>
              Road safety continues to be a major developmental issue, a public
              health concern and a leading cause of death and injury across the
              world. At least one out of 10 people killed on roads across the
              world is from India, according to the World Health Organization.
              The cost of road accidents is borne not only by the victims and
              their family, but by the economy as a whole in terms of untimely
              deaths, injuries, disabilities and loss of potential income. It is
              indeed a matter of great concern that despite the continuing
              efforts of the Government in this regard and our commitments for
              halving fatalities we have not been able to register significant
              progress on this front.
            </h5>
            {/* <div class="fakeimg" style="height:200px;"> */}
            <div class="fakeimg homenewsimage">
              <img
                className="homenewsimage"
                src="https://images.hindustantimes.com/auto/img/2021/06/18/600x338/PTI06_16_2021_000125B_1623984488449_1623984540848.jpg"
                alt="img1"
              />
            </div>
            <p>
              During the year 2021, a total number of 4,12,432 road accidents
              have been reported in the country, claiming 1,53,972 lives and
              causing injuries to 3,84,448 persons. Unfortunately, the worst
              affected age group in Road accidents is 18-45 years, which
              accounts for about 67 percent of total accidental deaths.
            </p>
          </div>
          <div class="card">
            <h2>Ministry of Road accidents</h2>
            <h5>
              Ministry of Road Transport and Highways has been taking multiple
              initiatives including those related to vehicular and road
              engineering as well as educational measures for raising awareness
              in the field of Road Safety. The Ministry has been implementing
              the Motor Vehicle (Amendment) Act 2019, the long due amendment was
              done almost after 30 years to meet the need of the changing
              transport system and environmental scenario. The Ministry has also
              been working on identifying Black Spots on National Highways and
              on short term and long-term rectification of these black spots,
              through its organisation like NHAI and NHIDCL. Moreover, the
              Ministry is also working to collect accidents data through
              Integrated Road Accidents (iRAD)/e-Detailed Accidents Report
              (e-DAR) projects to provide a real-time causative analysis of road
              accidents in line with the international practices
            </h5>
            {/* <div class="fakeimg" style="height:200px;"> */}
            <div class="fakeimg">
              <img
                className="homenewsimage"
                src="https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1654778312.jpg"
                alt="img2"
              />
            </div>
            <p>
              The data would help the policy makers to put in place focused
              initiatives to address the menace of rising road accidents and
              resultant fatalities. To cater to this need, this Ministry has
              been bringing out this annual publication titled “Road Accidents
              in India”. I hope the data and analysis contained in this Report
              will be helpful for all stakeholders towards reaching the common
              goal of road safety for one and all. I congratulate Secretary
              MoRT&H and his team of officers from Transport Research Wing for
              bringing out this valuable publication. I also place on record
              this Ministry's appreciation for the efforts made by the concerned
              officials of all the States/Union territories towards this. We
              will be happy to accept suggestions for further improvement of
              this publication.
            </p>
          </div>
        </div>
        <div class="rightcolumn">
          <div class="card">
            <h2>About Me</h2>
            {/* <div class="fakeimg" style="height:100px;"> */}

            <p>
              I am passionate about IoT development and I enjoy working with the
              MERN stack. With these skills, I can create innovative web
              applications that leverage the latest IoT technology. For example,
              I could build a web application that allows users to monitor and
              control IoT devices in their home, using my experience with the
              MERN stack to create a seamless user interface and handle the
              backend logic required to communicate with the devices. Overall,
              my expertise in IoT and the MERN stack makes me a valuable asset
              to companies and organizations looking to build cutting-edge web
              applications.
            </p>
          </div>
          <div class="card">
            <h3>Popular Post</h3>
            <div class="fakeimg">
              <img
                className="homenewsimage"
                src="https://w.ndtvimg.com/sites/13/2018/01/25053928/Europe_Accidents_550_jpg.jpg"
                alt="Logo"
              />
            </div>
            <div class="fakeimg">
              <img
                className="homenewsimage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ966-gKCc-P0aQc8M8iMp-WMeqMJeJ4Ekx2A&usqp=CAU"
                alt="Logo"
              />
            </div>
            <div class="fakeimg">
              <img
                className="homenewsimage"
                src="https://www.indiaspend.com/h-upload/2020/12/21/362788-road-safety1600.jpg"
                alt="Logo"
              />
            </div>
          </div>
          <div class="card">
            <h3>Follow Me</h3>
            <p>Harish_s_99</p>
            <p>s.harish2711@gmail.com</p>
          </div>
        </div>
      </div>
      <div class="footer">
        <h4>
          View Our <a>Terms and conditions</a>
        </h4>
      </div>
    </div>
  );
}

export default Homenews;
