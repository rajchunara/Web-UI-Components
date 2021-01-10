import React from "react";
import { Route } from "react-router-dom";

//Components
import About from "../About";
import Shop from "../Shop";
import DefaultComponent from "../UI-Components/DefaultComponent";

const RouteComponents = () => {
  return (
    <>
      <Route path="/" exact component={DefaultComponent} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
    </>
  );
};

export default RouteComponents;
