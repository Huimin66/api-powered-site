fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data);

function data(pokemonData) {
  const pokemon = pokemonData.results;
  pokemon.forEach(eachPokemon => {
    fetch(eachPokemon.url)
      .then(response => response.json())
      .then(pokemonDetails);

    function pokemonDetails(pokemonDetailsEach) {
      console.log(pokemonDetailsEach.name);
    }
  });
}
