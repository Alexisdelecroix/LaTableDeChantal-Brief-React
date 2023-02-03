import { useState, useEffect, useRef } from "react";
import "./sliderStyle.css";
import BtnSlider from "./BtnSlider";
import data from "./SliderData";

export default function Slider() {
  
  const [slideIndex, setSlideIndex] = useState(1);
  const [Mavariable, setMaVariable] = useState(false);
  
  const length = data.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    if (Mavariable === false) {
      setMaVariable(true);
      if (slideIndex !== data.length) {
        setSlideIndex(slideIndex + 1);
      } else if (slideIndex === data.length) {
        setSlideIndex(1);
      }
      setTimeout(() => {
        setMaVariable(false);
      }, 1000);
    }
  };

  // const nextSlidee = () => {
  //     if (slideIndex !== data.length) {
  //       setSlideIndex(slideIndex + 1);
  //     } else if (slideIndex === data.length) {
  //       setSlideIndex(1);
  //     }
  //   }
  

  const prevSlide = () => {
    if (Mavariable === false) {
      setMaVariable(true);
      if (slideIndex !== 1) {
        setSlideIndex(slideIndex - 1);
      } else if (slideIndex === 1) {
        setSlideIndex(data.length);
      }
      setTimeout(() => {
        setMaVariable(false);
      }, 1000);
    }
  };


  useEffect(() => {
        const auto = () => {
          setSlideIndex((current) => (current === length - 1 ? 0 : current + 1));
        };
        timeout.current = setInterval(nextSlide, 2000);
        return function () {
          if (timeout.current) {
            clearTimeout(timeout.current);
          } 
        };
  })
 
  return (
    <div className="container-slider">
      {data.map((slide) => {
        return (
          <div
            key={slide.id}
            className={slideIndex === slide.id ? "slide active-anim" : "slide"}
          >
            <img src={slide.image} alt={slide.alt} />
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
  );
}
