import React, { useState } from "react";
import { ReactDOM } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [brillar, setBrillar] = useState(glow);

  let state = (brillar) => {
    brillar
      ? glow
      : "";
  };

  return (
    <div className="text-center">
      <div className="Baston"></div>
      <div className="traffic-light">
        <div className="light red" onClick={setBrillar(true)}></div>
        <div className="light yellow ${state}" onClick={() => {state()}}></div>
        <div className="light green ${state}" onClick={() => {state()}}></div>
      </div>
    </div>
  );
};

export default Home;