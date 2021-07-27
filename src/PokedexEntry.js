import React from "react";
import axios from 'axios'

function PokedexEntry () {
  //add functionality

  return (
    <div class="col s12 m7">
    <div class="card horizontal">
      <div class="card-image">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"/>
      </div>
      <div class="card-stacked">
        <div class="card-content">
        <h5 class="header">Ditto</h5>
          <p>Pokemon Description</p>
        </div>
      </div>
    </div>
    </div>   
  )
}
//fetch('https://pokeapi.co/api/v2/pokemon/')
//.then(response => response.json())
//.then(data => callBack(data))

//<img src ="pokemonArray.sprites.back_default" alt = "PokemonArray.name">
//


export default PokedexEntry