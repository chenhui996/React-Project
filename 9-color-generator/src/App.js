import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const initColor = "#c70025";
  const [color, setColor] = useState(initColor);
  const [error, setError] = useState(false);
  const [list, setList] = useState((new Values(initColor)).all(10));

  const handleSubmit = (e) => {
    setError(false);
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      // console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder={initColor}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            生成
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          // console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
