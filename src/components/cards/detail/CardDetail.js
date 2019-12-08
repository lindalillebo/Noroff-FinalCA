import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../constants/API";
import { useParams } from "react-router";
import "./CardDetail.scss";

export default function CardDetail() {
  const [detail, setDetail] = useState({
    name: "",
    imageUrl: "",
    text: "",
    rarity: "",
    colors: ""
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => {
        let result = json.cards.filter(card => {
          return card.id === id;
        });
        console.log(result);
        if (result.length > 0) {
          setDetail(result[0]);
        }
      })
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="detail-container">
      <div className="detail-container__image">
        <img alt={detail.name} src={detail.imageUrl} />
      </div>
      <div className="detail-container__items">
        <h2>{detail.name}</h2>
        <p>
          <b>About:</b> {detail.text}
        </p>
        <p>
          <b>Rarity:</b> {detail.rarity}
        </p>
        <p>
          <b>Colors:</b> {detail.colors}
        </p>
      </div>
    </div>
  );
}
