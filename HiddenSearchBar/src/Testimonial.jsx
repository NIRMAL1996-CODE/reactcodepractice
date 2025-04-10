import { useState } from "react";
const Testimonails = () => {
  const [currentIndex, setCurrentIndex]= useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "I highly recommend this product to everyone!",
      author: "John Smith",
    },
    {
      quote: "This product has completely changed my life!",
      author: "Bob Johnson",
    },
  ];
   
  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
        // For example, if you want 5 % 3:
          // 5 ÷ 3 = 1.66... (Ignore decimal)
          // 1 * 3 = 3
          // 5 - 3 = 2 → So, 5 % 3 = 2.
      );
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">

    <div className="testimonials-quote">
      {testimonials[currentIndex].quote}
    </div>

    <div className="testimonials-author">
      - {testimonials[currentIndex].author}
    </div>

    <div className="testimonials-nav">
      <button onClick={handlePrevClick}>Prev</button>
      <button onClick={handleNextClick}>Next</button>
    </div>

  </div>
  )
}
export default Testimonails;