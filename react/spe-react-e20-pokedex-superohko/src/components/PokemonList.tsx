// je vais utiliser `useState` → Client component

'use client';

import { useState } from 'react';
import Link from 'next/link';

import PokemonCard from '@/components/PokemonCard';
import { Pokemon } from '@/@types/pokemon';

interface PokemonListProps {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: PokemonListProps) {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(12);

  // 1ère page 0 — 12
  // 2ème page 13 — 25
  // 3ème page 26 — 38

  const start = page * perPage;
  const end = start + perPage;

  const pokemonsFiltered = pokemons.slice(start, end);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
      {pokemonsFiltered.map((pokemon) => (
        <Link
          key={pokemon.pokedexId}
          href={`/pokemon/${pokemon.name.fr.toLowerCase()}`}
          className="flex"
        >
          <PokemonCard pokemon={pokemon} />
        </Link>
      ))}
    </section>
  );
}
