import PokemonDetails from "@/components/pokenon-details";

async function getPokemonData(id: string) {
    const [pokemonRes, speciesRes] = await Promise.all([
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => res.json()),
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then((res) => res.json()),
    ]);
    return { pokemon: pokemonRes, species: speciesRes };
}

export default async function Page({ params }: { params: { id: string } }) {
    const { pokemon, species } = await getPokemonData(params.id);
    console.log('pokemon: ', pokemon);
    console.log('species: ', species);
    return <PokemonDetails pokemon={pokemon} species={species} />;
}
