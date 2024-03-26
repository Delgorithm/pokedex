import { useState } from "react";
import PokemonCard from "../components/PokemonCard";
import "./App.css";

const pokemonList = [
	{
		name: "bulbasaur",
		imgSrc:
		  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
	  },
	  {
		name: "charmander",
		imgSrc:
		  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
	  },
	  {
		name: "squirtle",
		imgSrc:
		  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
	  },
	  {
		name: "pikachu",
		imgSrc:
		  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
	  },
	  {
		name: "mew",
	  },
	];

function App() {
	const [pokemonIndex, setPokemonIndex] = useState(0);

	let hasPrev = pokemonIndex > 0;
	let hasNext = pokemonIndex < pokemonList.length - 1;

	const handleDecrement = () => {
		if (hasPrev) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	const handleIncrement = () => {
		if (hasNext) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};


	return (
		<>
			<PokemonCard pokemon={pokemonList[pokemonIndex]}/>
			<article>
				<button onClick={handleDecrement} disabled={!hasPrev}>Précédent</button>
				<button onClick={handleIncrement} disabled={!hasNext}>Suivant</button>
			</article>
		</>
	);
}

export default App;