import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  // console.log(count);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(count);
    let amount = parseInt(count);
    if(amount < 0){
      amount = 1;
    }
    if(amount > data.length - 1){
      amount = data.length - 1
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input type="number" name="amount" id="amount" value={count} onChange={(e) => {
          setCount(e.target.value);
        }} />
        <button className="btn">generate</button>
      </form>
      <article className="lorem-text">
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>
        })}
      </article>
    </section>
  );
}

export default App;
