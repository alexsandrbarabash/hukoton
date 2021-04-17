import React from "react";
import RoutingContainer from "./containers/routing-container";
import "./assets/fonts/fonts-import.scss";
import "./common/style/day.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavbarContainer from "./containers/navbar-container/navbar-container";

const App = () => {
  return (
    <div>
      <NavbarContainer />
      <RoutingContainer />
    </div>
  );
};

export default App;
