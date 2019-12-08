import React from "react";
import PropTypes from "prop-types";
import DetailList from "./DetailList";

export default function CardDetail({ details }) {
    const { image, name, about, rarity, color } = details;

    return (
        <div>
            <div className="detail-image">
                <img alt={name} src={image} />
            </div>
            <div>
                <h2>{name}</h2>
                <DetailList about={about} rarity={rarity} color={color} />
            </div>
        </div>
    );
}

CardDetail.propTypes = {
    details: PropTypes.object.isRequired
}; 