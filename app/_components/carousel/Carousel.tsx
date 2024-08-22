"use client";
import React, { useState, useRef, useEffect, ReactNode, CSSProperties } from 'react';
import './customCarousel.css';

interface CustomCarouselProps {
  children: ReactNode[] | any[];
  carouselStyle?: CSSProperties;
  innerStyle?: CSSProperties;
  itemStyle?: CSSProperties;
  arrowStyle?: CSSProperties;
  dotStyle?: CSSProperties;
  activeDotStyle?: CSSProperties;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  carouselStyle,
  innerStyle,
  itemStyle,
  arrowStyle,
  dotStyle,
  activeDotStyle,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(children.length - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (slideRef.current) {
      slideRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel" style={carouselStyle}>
      <div className="carousel-inner" style={innerStyle} ref={slideRef}>
        {React.Children.map(children, (child, index) => (
          <div className="carousel-item" style={itemStyle} key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className="carousel-arrow left-arrow" style={arrowStyle} onClick={prevSlide}>
        &#8249;
      </button>
      <button className="carousel-arrow right-arrow" style={arrowStyle} onClick={nextSlide}>
        &#8250;
      </button>
      <div className="carousel-dots">
        {children?.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
            style={index === currentIndex ? activeDotStyle : dotStyle}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
