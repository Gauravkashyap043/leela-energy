// components/ReviewsCarousel.js
import { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ReviewsCarousel = ({ reviews }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <div className="relative overflow-hidden py-12 px-4">
      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {reviews.map((review, index) => (
          <div key={index} className="w-full flex-shrink-0 p-4">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
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
        className="absolute left-0 top-1/2 -translate-y-1/2 p-2"
      >
        <FaChevronLeft className="text-2xl text-gray-600 hover:text-green-600" />
      </button>
      <button
        onClick={nextReview}
        className="absolute right-0 top-1/2 -translate-y-1/2 p-2"
      >
        <FaChevronRight className="text-2xl text-gray-600 hover:text-green-600" />
      </button>
    </div>
  );
};

export default ReviewsCarousel;
