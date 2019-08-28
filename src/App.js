import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Tyson",
      animal: "Dog",
      breed: "Mut"
    }),
    React.createElement(Pet, {
      name: "Linus",
      animal: "Cat",
      breed: "Hymalayan"
    }),
    React.createElement(Pet, {
      name: "Mojo",
      animal: "Dog",
      breed: "Basset Hound"
    })
  ]);
};

render(React.createElement(App), document.getElementById("root"));
