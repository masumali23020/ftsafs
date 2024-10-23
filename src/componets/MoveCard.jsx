import React, { useContext, useState } from "react";
import tag from "../assets/tag.svg";
import { MovieContext } from "../context";
import { getImageUrl } from "../utlis/cine-utlitis";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

const MoveCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cardData, setCartData } = useContext(MovieContext);

  const { cover, title, genre, price, id, rating } = movie || {};

  const handelModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handelMoveSelected = (movei) => {
    setSelectedMovie(movei);
    setShowModal(true);
  };

  const handelAddToCard = ( event,movie) => {
    event.stopPropagation();
    const found = cardData.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cardData, ,]);
      setCartData([...cardData, movie]);
      setShowModal(false)
    } else {
      <Error movie={movie} />;
    }
    // console.log(movie)
  };
 
 

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          Singlemovie={selectedMovie}
          onClose={handelModalClose}
          onCardHanel={handelAddToCard}
        />
      )}
      <figure
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
        key={id}
      >
        <a onClick={() => handelMoveSelected(movie)}>
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
              onClick={(event) => handelAddToCard( event,movie)}
            >
              <img src={tag} alt="" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MoveCard;
