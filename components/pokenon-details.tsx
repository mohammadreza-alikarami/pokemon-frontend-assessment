"use client";

import Image from "next/image";
import Link from "next/link";
import {Card, CardContent} from "@/components/ui/card";
import {
    formatHeight,
    formatId,
    formatWeight,
    getTypeColor,
} from "@/lib/pokemon-utils";
import {ArrowLeft, Info} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import SubHeader from "@/components/ui/sub-header";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import StatsChart from "@/components/pokemon/StatsChart";

interface PokemonDetailsProps {
    pokemon: any;
    species: any;
}

export default function PokemonDetails({
                                           pokemon,
                                           species,
                                       }: PokemonDetailsProps) {
    if (!pokemon) return null;
    const abilitiesForChart = pokemon?.abilities?.map((a: any) => ({
        name: a?.ability?.name,
        is_hidden: a?.is_hidden,
        description: species?.abilities?.find((b: any) => b.name === a?.ability?.name)?.description,
    }));

    return (
        <>
            <SubHeader name={pokemon.name} id={pokemon.id}/>
            <div className="max-w-2xl mx-auto">

                {/* Main Card */}
                <Card className="from-white via-blue-50/30 to-purple-50/30">
                    <CardContent className="p-4 space-y-8">
                        {/* Pokemon image */}
                        <div className="flex justify-center">
                            <Image
                                src={pokemon.sprites.other["official-artwork"].front_default}
                                alt={pokemon.name}
                                width={280}
                                height={280}
                                className="drop-shadow-lg w-40 h-40 sm:w-60 sm:h-60 object-contain"
                                priority
                            />
                        </div>

                        {/* Height + Weight */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 text-center gap-6 sm:gap-8">
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Height
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {formatHeight(pokemon.height)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    Weight
                                </p>
                                <p className="text-2xl font-bold text-gray-800">
                                    {formatWeight(pokemon.weight)}
                                </p>
                            </div>
                        </div>

                        {/* Types */}
                        <div className="flex flex-wrap justify-center gap-3">
                            {pokemon.types.map((t: any) => (
                                <span
                                    key={t.type.name}
                                    className={`px-4 py-1.5 rounded-full text-white text-sm font-medium shadow-sm ${getTypeColor(
                                        t.type.name
                                    )}`}
                                >
                {t.type.name}
              </span>
                            ))}
                        </div>
                        <Tabs defaultValue="details" className="mt-6">
                            <TabsList className="grid grid-cols-2 w-full">
                                <TabsTrigger value="details" className="gap-2">
                                    <Info className="h-4 w-4 text-gray-600"/> Details
                                </TabsTrigger>
                                <TabsTrigger value="chart" className="gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor">
                                        <path d="M3 3v18h18"/>
                                        <path d="M18 17V9"/>
                                        <path d="M13 17V5"/>
                                        <path d="M8 17v-3"/>
                                    </svg>
                                    Stats Chart
                                </TabsTrigger>
                            </TabsList>

                            {/* DETAILS TAB (your current simple list UI) */}
                            <TabsContent value="details" className="mt-4 p-4 sm:p-6">
                                {/* keep your existing Abilities list + Base Stats progress bars here */}
                                {/* Abilities */}
                                <div>
                                    <h2 className="text-lg font-bold">Abilities</h2>
                                    <ul className="space-y-2 mt-2">
                                        {pokemon?.abilities?.map((a: any, idx: number) => {
                                            const ability = species.abilities?.find(
                                                (ab: any) => ab.name === a.ability.name
                                            );
                                            return (
                                                <li key={idx} className="flex items-center gap-2 text-sm">
                                                    {/* Main ability badge */}
                                                    <Badge
                                                        variant={a.is_hidden ? "destructive" : "default"}
                                                        className="text-xs"
                                                    >
                                                        {a.ability.name}
                                                    </Badge>

                                                    {/* Hidden label badge */}
                                                    {a.is_hidden && (
                                                        <Badge variant="outline" className="text-xs">
                                                            Hidden
                                                        </Badge>
                                                    )}

                                                    {/* Ability description */}
                                                    {ability?.description && (
                                                        <p className="mt-1 text-gray-600">{ability.description}</p>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>

                                {/* Base Stats */}
                                <div>
                                    <h2 className="text-lg font-bold mb-3">Base Stats</h2>
                                    <ul className="space-y-3">
                                        {pokemon.stats.map((s: any, idx: number) => (
                                            <li key={idx}>
                                                <div className="font-medium text-gray-700 flex justify-between">
                                                    <span className="capitalize">{s.stat.name}</span>
                                                    <span className="font-bold text-gray-800">{s.base_stat}</span>
                                                </div>
                                                <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
                                                    <div
                                                        className="bg-black h-2 rounded-l-full"
                                                        style={{width: `${(s.base_stat / 255) * 100}%`}}
                                                    />
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </TabsContent>

                            {/* CHART TAB */}
                            <TabsContent value="chart" className="mt-4 p-4 sm:p-6">
                                <StatsChart pokemon={pokemon} abilities={abilitiesForChart}/>
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
