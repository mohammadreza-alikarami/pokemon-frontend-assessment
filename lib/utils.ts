import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function getTypeColor(type: string): string {
  const typeColors: Record<string, string> = {
    normal: "bg-gray-400",
    fire: "bg-red-500",
    water: "bg-blue-500",
    grass: "bg-green-500",
    electric: "bg-yellow-400",
    ice: "bg-cyan-400",
    fighting: "bg-orange-700",
    poison: "bg-purple-600",
    ground: "bg-yellow-700",
    flying: "bg-indigo-400",
    psychic: "bg-pink-500",
    bug: "bg-lime-500",
    rock: "bg-stone-500",
    ghost: "bg-violet-700",
    dragon: "bg-indigo-700",
    dark: "bg-gray-800",
    steel: "bg-slate-400",
    fairy: "bg-pink-300",
  };

  return typeColors[type.toLowerCase()] || "bg-gray-300";
}


export const formatHeight = (d: number) => `${(d / 10).toFixed(1)} m`;
export const formatWeight = (h: number) => `${(h / 10).toFixed(1)} kg`;
export const formatId = (id: number) => `#${id?.toString().padStart(3, "0")}`;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
