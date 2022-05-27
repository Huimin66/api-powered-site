fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data);

function data(pokemonData) {
  const pokemon = pokemonData.results;
  const mainContainer = document.querySelector('[data-js="main"]');
  const pokemonList = document.createElement('ul');
  pokemonList.setAttribute('role', 'list');
  pokemonList.className = 'pokemon-list';
  mainContainer.append(pokemonList);

  pokemon.forEach(eachPokemon => {
    fetch(eachPokemon.url)
      .then(response => response.json())
      .then(pokemonDetails);

    function pokemonDetails(pokemonDetailsEach) {
      const pokemonAllData = pokemonDetailsEach;

      const pokemonCard = document.createElement('li');

      pokemonCard.innerHTML = `
     <img src="${pokemonDetailsEach.sprites.front_default}" />
     <dl>
      <h2> ${pokemonDetailsEach.name}</h2>
       <dt>Height</dt>
      <dd>${pokemonDetailsEach.height}</dd>
      <dt>Weight</dt>
      <dd>${pokemonDetailsEach.weight}</dd>
      </dl>
      `;

      pokemonCard.className = 'pokemon-list__item ';
      pokemonList.append(pokemonCard);
    }
  });
}

//////////////  Content
