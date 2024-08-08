"use client";
import { TypeAnimation } from "react-type-animation";

const SubHeadlineHomePage = () => {
  const typeAnimationStyle = {
    fontSize: "1.75em",
    display: "inline-block",
    // Default size
    "@media (max-width: 768px)": {
      fontSize: "1.25em", // Smaller screens
    },
  };
  return (
    <TypeAnimation
      sequence={[
        "Frontend Developer",
        1000,
        "FullStack Developer",
        1000,
        "NLP Enthusiast",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={typeAnimationStyle}
      repeat={Infinity}
    />
  );
};

export default SubHeadlineHomePage;
