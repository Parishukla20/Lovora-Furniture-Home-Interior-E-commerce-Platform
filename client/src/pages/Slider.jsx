import { useState, useEffect } from "react";

import img3 from "../assets/images/WhatsApp Image 2025-03-01 at 6.49.38 PM.jpeg";
import img2 from "../assets/images/thumb-1920-602300.jpg";
import img1 from "../assets/images/Desktop-Floor-Pictures.jpg";

const Slider = () => {
    const slides = [img1, img2, img3, img1];

    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex((prev) => prev + 1);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (slideIndex === 3) {
            setTimeout(() => {
                setSlideIndex(0);
            }, 500);
        }
    }, [slideIndex]);

    const nextSlide = () => {
        setSlideIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="s-box">
            <div id="slider">
                <div
                    className="slides"
                    style={{
                        transform: `translateX(-${slideIndex * 100}%)`,
                        transition: slideIndex === 0 ? "none" : "transform 0.5s ease-in-out",
                    }}
                >
                    {slides.map((slide, index) => (
                        <img
                            key={index}
                            src={slide}
                            alt={`slide-${index}`}
                            className="slide"
                        />
                    ))}
                </div>

                <button className="prev" onClick={prevSlide}>
                    &#10094;
                </button>

                <button className="next" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </div>
    );
};

export default Slider;