import React from "react";

const NavBar = ({ pokemonList, setPokemonIndex }) => {

	const handleClick = (index) => {
		setPokemonIndex(index)
		if (index === 3) {
			alert('pika pikachu !!!');
		}
	}

	return (
		<>
			{pokemonList.map((pokemon, index) => {
				return (
					<button onClick={() => handleClick(index)} key={pokemon.name}>
						{pokemon.name}
					</button>
				);
			})}
		</>
	);
};

export default NavBar;