// define elements
const searchInput = document.querySelector("#pokemon-input");
const searchButton = document.querySelector(".button-search");
const pokemonContainer = document.querySelector(".pokemon-container");

const url = "https://pokeapi.co/api/v2/pokemon/";

// colors
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#d6b3ff",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  ice: "#e0f5ff",
  ghost: "#ffffff",
};

// first generation pokemon
const pokeCount = 151;

const initPokemon = async () => {
  for (i = 1; i <= pokeCount; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  let tempUrl = url + id;
  let res = await fetch(tempUrl);
  let data = await res.json();
  createPokemonBox(data);
};

// parse
const createPokemonBox = (pokemon) => {
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  // or if statetment
  const id = pokemon.id.toString().padStart(3, "0");
  const weight = pokemon.weight;
  const type = pokemon.types[0].type.name;
  const color = colors[type];

  const pokemonElement = document.createElement("div");
  pokemonElement.classList.add("pokemon-box");

  pokemonElement.style.backgroundColor = `${color + "6d"}`;

  pokemonElement.innerHTML = `
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png"
      alt="${name} image"
    />
    <h4 class="pokemon-name">${name}</h4>
    <p class="pokemon-id">#${id}</p>
    <p class="pokemon-weight">${weight} KG</p>
    <p class="pokemon-type">${type}</p>
  `;

  pokemonContainer.appendChild(pokemonElement);
};

initPokemon();

searchInput.addEventListener("input", function (e) {
  const pokemonNames = document.querySelectorAll(".pokemon-name");
  const searchWord = searchInput.value.toLowerCase();

  pokemonNames.forEach((element) => {
    // show the elemeents
    element.parentElement.style.display = "block";
    if (!element.innerHTML.toLowerCase().includes(searchWord)) {
      element.parentElement.style.display = "none";
    }
  });
});
