import React from "react";
import styles from "./Gallery.module.css";
import db from "../../../../db/gallery.json";

const Gallery = () => {
  return (
    <>
      <ul className={styles.gallery}>
        {db.map((el) => (
          <li key={el.id}>
            <img src={el.url} alt={el.alt} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Gallery;
