import React from "react";
import PropTypes from "prop-types";
import defaultImage from "./def-pic.jpg";
// console.log(defaultImage); - путь картинки

const Painting = ({ url, title, profileUrl, tag, price, quantity }) => (
  <div>
    <img src={url} alt={title} width="200" />
    <h2>{title}</h2>
    <p>
      Автор: <a href={profileUrl}>{tag}</a>
    </p>
    <p>Цена: {price} кредитов</p>
    <p>Доступность: {quantity < 10 ? "заканчивается" : "есть в наличии"}</p>
    <button type="button">Добавить в корзину</button>
  </div>
);

// url - не обязательный, просписали дефолт, остальные обязательные - дефолта нет
Painting.defaultProps = {
  url: defaultImage,
};

Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default Painting;
