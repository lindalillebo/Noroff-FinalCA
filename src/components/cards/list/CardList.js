import React, { useState, useEffect } from "react";
import fetchMock from "fetch-mock";
import { BASE_URL } from "../../../constants/API";
import mockCards from "../../../constants/cards";
import CardItem from "./CardItem";
import Search from "./Search";

export default function CardList() {

    const [cards, setCards] = useState([]);
    const [filteredCards, setFilteredCards] = useState([]);

    useEffect(() => {
        fetchMock.mock(BASE_URL, { cards: mockCards });

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
        <>
            <Search handleSearch={filterCards} />
                {filteredCards.map(c => {
                    const { id, name, image } = c;
                        return (
                            <CardItem key={id} id={id} name={name} image={image} />
                        );
                    })}
        </>
    );
}