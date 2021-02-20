import React from "react";
import Logo from "./components/Logo";
import PaintingList from "./components/PaintingList";
import Panel from "./components/Panel";
import paintings from "./paintings.json";

// const numbers = [1, 2, 3, 4, 5];

// const colors = ['red', 'green', 'black', 'white'];

const App = () => {
  return (
    <div>
      <Panel title="Последние новости">
        <p>ПРИВЕТ!!!!</p>
      </Panel>

      <Panel>
        <p>Привет привет привет</p>
        <p>Привет привет привет</p>
      </Panel>

      <Logo text="Главный компонент - контейнер приложения" />
      <PaintingList paintings={paintings} />

      {/* {[<div>1</div>, <div>2</div>, <div>3</div>, <div>4</div>, <div>5</div>]} */}

      {/* --- то же самое что и  */}

      {/* <ul>
        {numbers.map((number) => (
          <li>{number}</li>
        ))}
    </ul> */}

      {/* --- если нет id */}

      {/* <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
    </ul> */}

      {/* <ul>
        {paintings.map((painting) => (
          <li key={painting.id}>
            <Painting
              url={painting.url}
              title={painting.title}
              price={painting.price}
              profileUrl={painting.author.url}
              tag={painting.author.tag}
              quantity={painting.quantity}
            />
          </li>
        ))}
      </ul> */}

      {/* <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
      /> */}
      {/* <Painting
        url="https://cdn.pixabay.com/photo/2017/09/04/22/40/flowers-2715804_1280.jpg"
        title="Flowers. Tulip nature art abstract"
        price={600}
        profileUrl="https://pixabay.com/users/ractapopulous-24766/"
        tag="ractapopulous"
        quantity={paintings[2].quantity}
      /> */}
    </div>
  );
};
export default App;
