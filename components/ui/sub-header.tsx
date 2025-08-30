"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { formatId } from "@/lib/pokemon-utils";

interface SubHeaderProps {
    name: string;
    id: number;
}

export default function SubHeader({ name, id }: SubHeaderProps) {
    return (
        <div className="w-full flex items-center justify-center mx-auto md:ml-52 md:justify-start mb-6 sm:px-0 py-3 top-[3.5rem] bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 gap-3">
            {/* Back button */}
            <Link
                href="/"
                className="flex items-center gap-1 hover:text-blue-800 text-sm font-medium"
            >
                <ArrowLeft className="h-4 w-4" />
                Back
            </Link>

            {/* Pokémon name */}
            <h1 className="text-lg sm:text-xl font-bold flex items-center text-center">
                <span className="text-yellow-500">⚡</span>
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-3xl font-bold">
          {name}
        </span>
            </h1>

            {/* Pokémon ID */}
            <span className="text-lg font-normal text-muted-foreground">
        {formatId(id)}
      </span>
        </div>
    );
}
