// components/ReviewsCarousel.js
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone reviews for infinite effect
  const clonedReviews = [...reviews, ...reviews, ...reviews];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextReview = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev + slidesPerView;
      if (newIndex >= reviews.length) return 0;
      return newIndex;
    });
  };

  const prevReview = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - slidesPerView;
      if (newIndex < 0) return reviews.length - slidesPerView;
      return newIndex;
    });
  };

  // Reset position for infinite effect
  useEffect(() => {
    if (currentIndex >= reviews.length || currentIndex < 0) {
      setIsTransitioning(false);
      const timeout = setTimeout(() => {
        setCurrentIndex((prev) => {
          if (prev >= reviews.length) return 0;
          if (prev < 0) return reviews.length - slidesPerView;
          return prev;
        });
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, reviews.length, slidesPerView]);

  return (
    <div className="relative overflow-hidden py-12 px-4">
      <div
        className={`flex ${
          isTransitioning ? "transition-transform duration-300 ease-in-out" : ""
        }`}
        style={{
          transform: `translateX(-${(currentIndex * 100) / slidesPerView}%)`,
        }}
      >
        {clonedReviews.map((review, index) => (
          <div
            key={index}
            className={`
              flex-shrink-0 p-4
              w-full
              md:w-1/2
              lg:w-1/3
            `}
          >
            <div className="bg-white p-8 rounded-lg shadow-lg text-center h-full">
              <FaQuoteLeft className="text-green-600 text-3xl mx-auto mb-4" />
              <p className="text-gray-600 mb-4">{review.text}</p>
              <h4 className="font-semibold">{review.name}</h4>
              <p className="text-gray-500">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevReview}
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <FaChevronLeft className="text-2xl text-gray-600 hover:text-green-600" />
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100"
      >
        <FaChevronRight className="text-2xl text-gray-600 hover:text-green-600" />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
