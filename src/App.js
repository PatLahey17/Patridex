import './App.css';
import Pokedex from './Pokedex.js'
import PokedexEntry from './PokedexEntry.js'
import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation, useParams
} from "react-router-dom";

// function ModalSwitch() {
//   let location = useLocation();

//   // This piece of state is set when one of the
//   // gallery links is clicked. The `background` state
//   // is the location that we were at when one of
//   // the gallery links was clicked. If it's there,
//   // use it as the location for the <Switch> so
//   // we show the gallery in the background, behind
//   // the modal.
//   let background = location.state && location.state.background;

//   return (
//     <div>
//       <Switch location={background || location}>
//         <Route exact path="/" children={<Home />} />
//         <Route path="/gallery" children={<Gallery />} />
//         <Route path="/img/:id" children={<ImageView />} />
//       </Switch>

//       {/* Show the modal when a background page is set */}
//       {background && <Route path="/img/:id" children={<Modal />} />}
//     </div>
//   );
// }


function App() {
  return (
    <div className="App">
      <Pokedex/>
    </div>
  );
}

export default App;
