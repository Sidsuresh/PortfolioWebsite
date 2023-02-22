import React, { useEffect, useState } from "react";
import Arrows from "./Arrows";
import Dots from "./Dots";
import SliderContent from "./SliderContent";
import Projects from "../../Assets/Data/ProjList";
import "./Slider.css";

const len = Projects.length - 1;

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len);
    }, 5000);
    return clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <div className="slider-content">
        <SliderContent activeIndex={activeIndex} sliderImage={Projects} />
        <Arrows
          prevSlide={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
          nextSlide={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        />
        <Dots
          Dots
          activeIndex={activeIndex}
          sliderImage={Projects}
          onclick={(activeIndex) => setActiveIndex(activeIndex)}
        />
      </div>
    </div>
  );
};

export default Slider;
