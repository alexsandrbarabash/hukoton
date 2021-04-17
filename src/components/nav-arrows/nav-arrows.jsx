import React from "react";
import "./nav-arrows.scss";
import { ArrowRight, ArrowLeft } from "react-bootstrap-icons";

const NavArrows = ({ onNext, onBack }) => {
  return (
    <div className="nav-arrows">
      <span className="left">
        <ArrowLeft onClick={onNext} />
      </span>

      <span>
        <ArrowRight onClick={onBack} />
      </span>
    </div>
  );
};

export default NavArrows;
