//import getPokemonData from './getPokemonData.js'
import PokedexEntry from './PokedexEntry.js'
import React, { useEffect, useState } from 'react'

function Pokedex () {

  let pokemonTemp = [];  
  const [pokemonListArray, setPokemonListArray] = useState([]);
  const [speciesListArray, setSpeciesListArray] = useState([]);
  const [caughtThemAll, setCaughtThemAll] = useState(true)
  
  useEffect(() => {
    let promisesArray = [];
    let speciesPromiseArray = [];
      fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
        .then(response => response.json())
        .then(data => {
          data.results.forEach(pokemon => {
            const promise = fetch(pokemon.url)
                .then(response => response.json())
                .then(data => {
                  return data
                });
             const speciesPromise = fetch("https://pokeapi.co/api/v2/pokemon-species/132")
                .then(response => response.json())
                .then(species => {
                  return species
                })
             promisesArray.push(promise)
             speciesPromiseArray.push(speciesPromise)
           })
           Promise.all(speciesPromiseArray)
            .then(results => {
              setSpeciesListArray(results);
              //console.log("SpeciesListArray: ", speciesListArray);
          })
           Promise.all(promisesArray)
            .then(results => {
              setPokemonListArray(results)        
              })
            })
           // promise.all bundles the promise array to set the PokemonListArray after ALL the fetches have been made, turning the bundle of async promises into something that can work synchronously
  }, [])
// second argument of empty array above. This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run. 

  //useEffect((pokemonListArray) => console.log("List",pokemonListArray), [pokemonListArray])

  
  //line above (10) sets state, pokemonArray starts as empty array, then 
  // gets set by the setPokemonArray (callback of the fetch in useEffect)
// {pokemonArray} for accessing the pokemon array in html
// pokemonArray for access the pokemon array in JS

  const temp = pokemonListArray.map((pokemon, index) => {
    //console.log(pokemon);
    console.log(speciesListArray[index])
    let flavorPath = "speciesListArray[index].flavor_text_entries[0].flavor_text";

    return (<div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src={pokemon.sprites.front_shiny}/>
        {/* asdf */}
      </div>
      <div className="card-stacked">
        <div className="card-content">
        <h5 className="header">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
          <p>{flavorPath}</p>
        </div>
      </div>
    </div>
    </div> );
  })


  return (
    <div className="Pokedex-Tile">
      {temp}

    </div>
  );
}



export default Pokedex