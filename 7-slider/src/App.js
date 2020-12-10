import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import data from "./data";
import Slider from "./slider";
function App() {
  const [sliders, setSliders] = useState(data);
  const [index, setIndex] = useState(0);
  // console.log(sliders);
  useEffect(() => {
    if (index < 0) {
      setIndex(sliders.length - 1);
    }
    if (index > sliders.length - 1) {
      setIndex(0);
    }
  }, [index, sliders]);
  useEffect(() => {
    let sliderTime = setInterval(() => {
      setIndex(index + 1);
    }, 4000);
    return () => {
      clearInterval(sliderTime);
    };
  }, [index]);
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        {sliders.map((slider, sliderIndex) => {
          let position = "nextSlide";
          if (sliderIndex === index) {
            position = "activeSlide";
          }
          if (
            sliderIndex === index - 1 ||
            (index === 0 && sliderIndex === sliders.length - 1)
          ) {
            position = "lastSlide";
          }
          return <Slider key={slider.id} {...slider} position={position} />;
        })}
        <button
          className="prev"
          onClick={() => {
            setIndex(index - 1);
          }}
        >
          <FiChevronLeft />
        </button>
        <button
          className="next"
          onClick={() => {
            setIndex(index + 1);
          }}
        >
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
