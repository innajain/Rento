"use client";
import React, { useState, useRef, useEffect, ReactNode } from 'react';
import './customCarousel.css';

interface CustomCarouselProps {
  children: ReactNode[];
  carouselClassName?: string;
  innerClassName?: string;
  itemClassName?: string;
  arrowClassName?: string;
  dotClassName?: string;
  activeDotClassName?: string;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  children,
  carouselClassName,
  innerClassName,
  itemClassName,
  arrowClassName,
  dotClassName,
  activeDotClassName,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex < children.length - 1 ? prevIndex + 1 : 0));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : children.length - 1));
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
    <div className={`carousel ${carouselClassName}`}>
      <div className={`carousel-inner ${innerClassName}`} ref={slideRef}>
        {React.Children.map(children, (child, index) => (
          <div className={`carousel-item ${itemClassName}`} key={index}>
            {child}
          </div>
        ))}
      </div>
      <button className={`carousel-arrow left-arrow ${arrowClassName}`} onClick={prevSlide}>
        &#8249;
      </button>
      <button className={`carousel-arrow right-arrow ${arrowClassName}`} onClick={nextSlide}>
        &#8250;
      </button>
      <div className="carousel-dots">
        {children.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${index === currentIndex ? activeDotClassName : dotClassName}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
