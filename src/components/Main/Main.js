import React from "react";
// import db from "../../db/db.json";

// console.log(db);

function Main({ db: { one, two, three } }) {
  // const { one, two, three } = db;
  return (
    <main>
      <h1>Please, try not to fail again...</h1>
      <h2>Main</h2>
      <ul>
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ul>
    </main>
  );
}

export default Main;
