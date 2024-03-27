import React from "react";

const NavBar = ({ pokemonList, setPokemonIndex }) => {

	const handleClick = (index) => {
		setPokemonIndex(index)
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
