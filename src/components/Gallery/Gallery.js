import React from "react";
import styles from "./Gallery.module.css";
// import { v4 as uuidv4 } from "uuid";
// const i = uuidv4();
// console.log("id: ", i);  //уникальный id

const Gallery = ({ array }) => {
  console.log("array: ", array);
  return (
    <ul className={styles.gallery}>
      {array.map((el) => (
        // <li key={uuidv4()}> // исп. если нет id
        <li key={el.id}>
          <img src={el.url} alt={el.alt} />
        </li>
      ))}
    </ul>
  );
};

export default Gallery;
