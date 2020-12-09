import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>关于登录的问题和答案</h3>
        <section className="info">
          {questions.map((question) => {
            // console.log(item);
            return <SingleQuestion key={question.id} {...question} />
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
