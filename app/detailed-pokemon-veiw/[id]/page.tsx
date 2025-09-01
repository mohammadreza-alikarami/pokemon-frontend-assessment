import PokemonDetails from "@/components/pokemon/pokenon-details";
import { getPokemonDetails } from "@/lib/api";

async function getPokemonData(id: string) {
    const [pokemonRes] = await Promise.all([
        getPokemonDetails(id),
    ]);
    return { pokemon: pokemonRes };
}

export default async function Page({ params }: { params: { id: string } }) {
    const { pokemon } = await getPokemonData(params.id);
    return <PokemonDetails pokemon={pokemon} />;
}
