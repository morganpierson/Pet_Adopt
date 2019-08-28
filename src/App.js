const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement('h1', {}, name),
    React.createElement('h2', {}, animal),
    React.createElement('h2', {}, breed)
  ])
}

const App = () => {
  return React.createElement(
    "div",
    {},
    [
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
    ]
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"))