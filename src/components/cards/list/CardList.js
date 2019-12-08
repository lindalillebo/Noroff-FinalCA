import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/API";
import CardItem from "./CardItem";
import Search from "./Search";
import "./List.scss";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        setCards(json.cards);
        setFilteredCards(json.cards);
      })
      .catch(error => console.error(error));
  }, []);

  const filterCards = function(e) {
    const searchValue = e.target.value.toLowerCase();

    const filteredArray = cards.filter(function(card) {
      const lowerCaseName = card.name.toLowerCase();

      if (lowerCaseName.startsWith(searchValue)) {
        return true;
      }
      return false;
    });

    setFilteredCards(filteredArray);
  };

  return (
    <div className="cardList-container">
      <Search handleSearch={filterCards} />
      <div className="card-container">
        {filteredCards.map(c => {
          const { id, name, imageUrl } = c;
          return <CardItem key={id} id={id} name={name} imageUrl={imageUrl} />;
        })}
      </div>
    </div>
  );
}
