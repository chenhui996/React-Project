import React, { useState } from "react";

const Tour = (props) => {
  const { id, image, info, name, price, removeTour } = props;
  const [readMore, setReadMore] = useState(false);

  return (
    <li className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? "缩起" : "展开"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => {
          removeTour(id)
        }}>
          不感兴趣
        </button>
      </footer>
    </li>
  );
};

export default Tour;
