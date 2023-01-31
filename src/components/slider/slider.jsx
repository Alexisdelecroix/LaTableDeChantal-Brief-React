import { useState } from "react";
import "./sliderStyle.css";
import BtnSlider from "./BtnSlider";




export default function Slider() {

    const data = [
            {
                id: 1,
                image: `https://cdn.pixabay.com/photo/2021/02/08/07/39/chef-5993951_1280.jpg`,
                alt: "Photo du chef"
            },

            {
                id: 2,
                image: `https://cdn.pixabay.com/photo/2019/09/12/15/21/resort-4471852_1280.jpg`,
                alt: "Photo du restaurant"
            },

            {
                id: 3,
                image: `https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478_1280.jpg`,
                alt: "Photo du restaurant"
            }
    ]

const [slideIndex, setSlideIndex] = useState(1);
const [Mavariable, setMaVariable] = useState(false);


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

return (
    <div className="container-slider">
        {data.map((slide) => {
            return (
                <div key={slide.id} className={slideIndex === slide.id ? "slide active-anim" : "slide"} >
                    <img src={slide.image} alt={slide.alt} />
                    </div>
            );
        })}
    <BtnSlider moveSlide={nextSlide} direction={"next"} />
    <BtnSlider moveSlide={prevSlide} direction={"prev"} />
    </div>
)




}