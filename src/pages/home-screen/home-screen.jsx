import React from "react";
import gradient from "../../assets/images/Gradient.svg";
import saly from "../../assets/images/Saly-13.svg";
import "./home-screen.scss";

const HomeScreen = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="row pt-5">
          <div className="col-7 text">
            <h1>
              We help <span>organize</span> your edication process.
            </h1>
            <p>
              <span>DALY</span> is a school grade management service with
              homework, study group statistics, and a schedule for teachers and
              students.
            </p>
          </div>
          <div className="col-5">
            <div className="home-img">
              <img src={gradient} alt="" className="gradient-img" />
              <img src={saly} alt="" className="saly-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
