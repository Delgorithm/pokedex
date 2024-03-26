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

	const handleDecrement = () => {
		if (pokemonIndex > 0) {
			setPokemonIndex(pokemonIndex - 1);
		}
	};

	const handleIncrement = () => {
		if (pokemonIndex < pokemonList.length - 1) {
			setPokemonIndex(pokemonIndex + 1);
		}
	};


	return (
		<>
			<PokemonCard pokemon={pokemonList[pokemonIndex]}/>
			<article>
				<button onClick={handleDecrement}>Précédent</button>
				<button onClick={handleIncrement}>Suivant</button>
			</article>
		</>
	);
}

export default App;