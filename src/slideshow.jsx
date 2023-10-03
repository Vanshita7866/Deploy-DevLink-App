import React, { useState, useEffect } from "react";
const images = [
  "https://picsum.photos/id/102/4320/3240",
  "https://picsum.photos/id/10/4320/3240",
  "https://picsum.photos/id/17/4320/3240",
  "https://picsum.photos/id/107/4320/3240",
  "https://picsum.photos/id/104/4320/3240",
  "https://picsum.photos/id/19/4320/3240",
  "https://picsum.photos/id/167/4320/3240",
  "https://picsum.photos/id/56/4320/3240",
  "https://picsum.photos/id/34/4320/3240",
  "https://picsum.photos/id/77/4320/3240",
  "https://picsum.photos/id/44/4320/3240",
  "https://picsum.photos/id/27/4320/3240",
];

const Slideshow = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prevIndex) => prevIndex + n);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  const showSlides = (n) => {
    let i
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(slides.length);
    }

    for (i = 0; i < slides.length; i++) {
      (slides[i]).style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    (slides[slideIndex - 1]).style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  return (
    <div>
      <div className="slideshow-container">
        {images.map((image, index) => (
          <div className="mySlides fade" key={index}>
            <img src={image} style={{ height: "300px", width: "100%" }} />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          ❮
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          ❯
        </a>
      </div>
      <br />
      <div style={{ textAlign: "center" }}>
        {[1, 2, 3].map((index) => (
          <span
            key={index}
            className="dot"
            onClick={() => currentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
