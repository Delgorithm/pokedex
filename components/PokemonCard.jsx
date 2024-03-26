import React from "react";

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

export default PokemonCard;
