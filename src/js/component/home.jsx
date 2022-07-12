import React from "react";
import { useState } from "react";

//create your first component

//create your first component
const Home = () => {
  const [color, setColor] = useState("");
  console.log(color);
  return (
    <div className="text-center">
      <div className="Baston"></div>
      <div className="traffic-light">
        <div
          className={color === "red" ? "light red glow" : "light red"}
          onClick={() => setColor(color ==="" ? "red" : "")}
        ></div>
        <div
          className={color === "yellow" ? "light yellow glow" : "light yellow"}
          onClick={() => setColor(color ==="" ? "yellow" : "")}
        ></div>
        <div
          className={color === "green" ? "light green glow" : "light green"}
          onClick={() => setColor(color ==="" ? "green" : "")}
        ></div>
      </div>
    </div>
  );
};

export default Home;
