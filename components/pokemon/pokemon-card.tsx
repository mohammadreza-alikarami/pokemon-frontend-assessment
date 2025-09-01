'use client';

import {Card, CardContent} from '@/components/ui/card';
import {Skeleton} from '@/components/ui/skeleton';
import {formatPokemonName, getPokemonImageUrl, getTypeColor} from '@/lib/pokemon-utils';
import {Pokemon} from '@/types/pokemon';
import Image from 'next/image';
import {useEffect, useState} from 'react';
import Link from "next/link";
import {getPokemonDetails} from "@/lib/api";

interface PokemonCardProps {
    pokemon: Pokemon;
}

export function PokemonCard({pokemon}: PokemonCardProps) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);
    const [details, setDetails] = useState<Pokemon | null>(null);


    useEffect(() => {
        let mounted = true;
        (async () => {
            const data = await getPokemonDetails(pokemon.id);
            if (mounted) setDetails(data);
        })();
        return () => {
            mounted = false;
        };
    }, [pokemon.id]);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setImageError(true);
        setImageLoaded(true);
    };

    return (
        <Link href={`/detailed-pokemon-veiw/${pokemon.id}`}>
            <Card
                className="group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-6">
                    <div className="text-center">
                        {/* Pokemon ID */}
                        <div className="text-sm font-medium text-muted-foreground mb-2">
                            #{pokemon.id.toString().padStart(3, '0')}
                        </div>

                        {/* Pokemon Image */}
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            {!imageLoaded && (
                                <Skeleton className="absolute inset-0 rounded-full"/>
                            )}
                            <div
                                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full opacity-50 group-hover:opacity-80 transition-opacity duration-300"/>
                            {!imageError ? (
                                <Image
                                    src={getPokemonImageUrl(pokemon.id)}
                                    alt={formatPokemonName(pokemon.name)}
                                    fill
                                    loading="lazy"
                                    unoptimized
                                    className={`object-contain transition-all duration-300 ${
                                        imageLoaded ? 'opacity-100' : 'opacity-0'
                                    } group-hover:scale-110`}
                                    onLoad={handleImageLoad}
                                    onError={handleImageError}
                                />
                            ) : (
                                <div className="flex items-center justify-center h-full text-6xl">
                                    🎯
                                </div>
                            )}
                        </div>

                        {/* Pokemon Name */}
                        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                            {formatPokemonName(pokemon.name)}
                        </h3>

                        {/* Pokemon Types */}
                        <div className="flex justify-center flex-wrap gap-2 mb-3">
                            {details?.types?.map((t) => (
                                <span
                                    key={t.type.name}
                                    className={`px-2 py-0.5 rounded-full text-xs font-medium text-white transition-transform transform hover:scale-105 ${getTypeColor(
                                        t.type.name
                                    )}`}
                                >
                  {t.type.name}
                </span>
                            ))}
                        </div>

                        {/* Abilities Preview */}
                        <span className="text-sm font-medium text-gray-600">Abilities</span>
                        <div className="flex justify-center flex-wrap gap-2 mb-3">
                            {details?.abilities?.slice(0, 2).map((a) => (
                                <span
                                    key={a.ability.name}
                                    className="px-2 py-0.5 rounded-full border border-gray-300 text-xs text-gray-700 hover:border-blue-400 hover:text-blue-600"
                                >
                  {a.ability.name}
                </span>
                            ))}
                            {details?.abilities && details.abilities.length > 2 && (
                                <span className="px-2 py-0.5 rounded-md border border-gray-300 text-xs text-gray-700">
                  +{details.abilities.length - 2} more
                </span>
                            )}
                        </div>

                        {/* Base Stats (HP, ATK, DEF only in preview) */}
                        <div className="grid grid-cols-3 gap-2 text-xs text-gray-600">
                            <div>
                                <span className="font-semibold">HP:</span>{' '}
                                {details?.stats?.find((s) => s.stat.name === 'hp')?.base_stat}
                            </div>
                            <div>
                                <span className="font-semibold">ATK:</span>{' '}
                                {details?.stats?.find((s) => s.stat.name === 'attack')?.base_stat}
                            </div>
                            <div>
                                <span className="font-semibold">DEF:</span>{' '}
                                {details?.stats?.find((s) => s.stat.name === 'defense')?.base_stat}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}