import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// --- создание по 1-му елементу
// const link = React.createElement(
//   "a",
//   { href: "reactjs.org", target: "_blank" },
//   "ссылочка"
// );
// ReactDOM.render(link, document.getElementById("root"));

// --- создание через JSX
// const jsxLink = <a href="reactjs.org">ссылочка</a>;

// console.log(link);
// console.log(jsxLink);

// const painting = {
//   id: "id-1",
//   url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// console.log(template);
// ReactDOM.render(template, document.getElementById("root"));
