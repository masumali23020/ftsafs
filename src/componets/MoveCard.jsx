import React from "react";
import tag from "../assets/tag.svg";
import { getImageUrl } from "../utlis/cine-utlitis";
import Rating from "./Rating";

const MoveCard = ({ movie }) => {
  const { cover, title, genre, price, id, rating } = movie || {};

  return (
    <figure
      className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      key={id}
    >
      <img
        className="w-full object-cover"
        src={getImageUrl(cover)}
        alt={title}
      />
      <figcaption className="pt-4">
        <h3 className="text-xl mb-1">{title}</h3>
        <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
        <div className="flex items-center space-x-1 mb-5">
          <Rating value={rating} />
        </div>
        <a
          className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={tag} alt="" />
          <span>${price} | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};

export default MoveCard;
