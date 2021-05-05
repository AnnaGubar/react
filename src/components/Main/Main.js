import React from "react";
import Gallery from "./sections/Gallery/Gallery";
// import db from "../../db/db.json";

function Main({ props, a, b, children }) {  //получение пропсов из App.js
  // console.log("a", a);
  // console.log("b", b);
  // console.log("children", children);
  // console.log(children.props);
  // console.log(children.props.children);

  const { aaa, bbb, ccc } = props; // что бы не props.one - 19строка
  return (
    <main>
      <h1>The section MAIN begins here</h1>
      {a}
      {b}
      {children} {/* First Second Third <Gallery/> */}
      <h2>This is the list of fruits.</h2>
      <ul>
        <li>{aaa}</li>
        <li>{bbb}</li>
        <li>{ccc}</li>
      </ul>
      <h2>Here are the same pictures but backward</h2>
      <Gallery /> {/* компонент функции отрисовки картинок */}
    </main>
  );
}
console.dir(Main);

export default Main;

Main.defaultProps = {  //если пропcы не переданы через App.js
  a: "A",
  b: "Boooooooooooooo",
};
