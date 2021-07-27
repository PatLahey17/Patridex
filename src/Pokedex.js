//import getPokemonData from './getPokemonData.js'
import PokedexEntry from './PokedexEntry.js'
import React, { useEffect, useState } from 'react'

function Pokedex () {

  let pokemonArray = [];

  const [pokemonListArray, setPokemonListArray] = useState(() => {
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(response => response.json())
        .then(data => {
          data.results.forEach(pokemon => {
            fetch(pokemon.url)
               .then(response => response.json())
               .then(data => {
                 //console.log(data.name)
                 pokemonArray.push(data);
             });
           })
          })
    

        //methods of a class
        //setPokemonListArry() {
        // UNKNOWN STUFF
        //}
        
       //fetch 151 pokemon names
       //arrayOfNames
      //fetch pokemonObjectOfname
       //arrayOfCompletePokemonObjects

  })
  //console.log(pokemonArray)
  

  
  //line above (10) sets state, pokemonArray starts as empty array, then 
  // gets set by the setPokemonArray (callback of the fetch in useEffect)
// {pokemonArray} for accessing the pokemon array in html
// pokemonArray for access the pokemon array in JS





  const temp = pokemonArray.map((pokemon) => {
    return (<div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"}/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h5 class="header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
          <p>Pokemon Description</p>
        </div>
      </div>
    </div>
    </div> );
  })

  return (
    <div className="Pokedex-Tile">
      <h3>Hello World</h3>

    </div>
  );
}


export default Pokedex