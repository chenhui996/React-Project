import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // console.log(people);
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  function checkNumber(number) {
    if (number > people.length - 1) {
      number = 0;
      return number;
    }
    if (number < 0) {
      number = people.length - 1;
      return number;
    }
    return number;
  }

  function nextPeople() {
    setIndex(checkNumber(index + 1));
  }
  function prvePeople() {
    setIndex(checkNumber(index - 1));
  }
  function changePeople() {
    setIndex(checkNumber(Math.floor(Math.random() * 4)));
  }
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prvePeople}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPeople}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={changePeople}>
        随机换一个评论
      </button>
    </article>
  );
};

export default Review;
