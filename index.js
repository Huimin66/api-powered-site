fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data);

function data(pokemonData) {
  const pokemon = pokemonData.results;
  const pokemonList = document.createElement('ul');
  document.body.append(pokemonList);

  pokemon.forEach(eachPokemon => {
    fetch(eachPokemon.url)
      .then(response => response.json())
      .then(pokemonDetails);

    function pokemonDetails(pokemonDetailsEach) {
      const pokemonAllData = pokemonDetailsEach;

      const pokemonCard = document.createElement('li');
      pokemonCard.className = 'pokemon-list';
      pokemonList.append(pokemonCard);
    }
  });
}

/// name

// height

// weight

//////////////  Content
