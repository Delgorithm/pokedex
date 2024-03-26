import React from "react";
import PropTypes from 'prop-types';

const PokemonCard = ({ pokemon }) => {
	return (
		<figure>
			{pokemon.imgSrc ? (
					<img
						src={pokemon.imgSrc}
						alt={`Picture of a Pokemon named ${pokemon.name}`}
					/>
				) : (
					<p>???</p>
				)
			}
            <figcaption>{pokemon.name}</figcaption>
		</figure>
	);
};

PokemonCard.propTypes = {
	pokemon: PropTypes.shape({
		name: PropTypes.string.isRequired,
		imgSrc: PropTypes.string.isRequired,
	}).isRequired,
}

export default PokemonCard;
