// Simple Data-fetching
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { createResource } from 'utils';
import {PokemonInfoFallback} from 'pokemon';

import {fetchPokemon, PokemonDataView, PokemonErrorBoundary} from '../pokemon'

const pokemonResource = createResource(fetchPokemon('pikachu'))

function PokemonInfo() {
  const pokemon = pokemonResource.read();
  return (
    <div>
      <div className="pokemon-info__img-wrapper">
        <img src={pokemon.image} alt={pokemon.name} />
      </div>
      <PokemonDataView pokemon={pokemon} />
    </div>
  )
}

function App() {
  return (
    <div className="pokemon-info-app">
      <div className="pokemon-info">
      <PokemonErrorBoundary>
        <React.Suspense fallback={<PokemonInfoFallback name="Pikachu" />}>
          <PokemonInfo />
        </React.Suspense>
        </PokemonErrorBoundary>
      </div>
    </div>
  )
}

export default App
