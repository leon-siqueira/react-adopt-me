import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      species: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Dorohedoro ",
      species: "Lizard",
      breed: "Caiman",
    }),
    React.createElement(Pet, {
      name: "Gatimon",
      species: "Cat",
      breed: "Turtleshell",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
