import React from "react";
import PropTypes from "prop-types";

export default function DetailList({ about, rarity, color }) {
    return (
        <ul>
            <li>
                <p><b>About:</b> {about}</p>
            </li>
            <li>
                <p><b>Rarity:</b> {rarity}</p>
            </li>
            <li>
                <p><b>Color:</b> {color}</p>
            </li>
        </ul>
    )
}

DetailList.propTypes = {
    about: PropTypes.string.isRequired,
    rarity: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};