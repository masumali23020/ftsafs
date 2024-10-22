import React from "react";
import star from "../assets/star.svg";
const Rating = ({ value }) => {
  const stars = Array(value).fill(star);
  return (
    <>
      {stars.map((star, ind) => (
        <img key={ind} src={star} height="14" alt="star" />
      ))}
    </>
  );
};

export default Rating;
