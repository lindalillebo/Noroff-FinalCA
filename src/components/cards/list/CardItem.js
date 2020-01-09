import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

export default function CardItem({ id, name, imageUrl }) {
  const history = useHistory();

  return (
    <div className="card-container__elem">
      <h3>{name}</h3>
      <img alt={name} src={imageUrl} />
      <button onClick={() => history.push(`/card/${id}`)}>View more</button>
    </div>
  );
}

CardItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string
};
