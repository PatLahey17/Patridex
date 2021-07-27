
function getPokemonData (callBack) {
  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then(response => response.json())
  .then(data => callBack(data))
}

export default getPokemonData