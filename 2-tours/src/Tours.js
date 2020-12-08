import React from "react";
import Tour from "./Tour";
const Tours = (props) => {
  const { tours, removeTour } = props;
  // console.log(tours);

  return (
    <section>
      <div className="title">
        <h2>旅游地点列表</h2>
        <div className="underline"></div>
      </div>
      <ul>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </ul>
    </section>
  );
};

export default Tours;
