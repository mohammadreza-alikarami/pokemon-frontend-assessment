"use client";

import {useMemo, useState} from "react";
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip as RechartsTooltip,
    Legend,
} from "recharts";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card, CardContent} from "@/components/ui/card";
import {Info, Activity} from "lucide-react";
import {calculateAbilityEffect} from "@/lib/abilityEffects"; // provided in your repo

type StatKey =
    | "hp"
    | "attack"
    | "defense"
    | "special-attack"
    | "special-defense"
    | "speed";

const LABELS: Record<StatKey, string> = {
    hp: "Hp",
    attack: "Attack",
    defense: "Defense",
    "special-attack": "Special attack",
    "special-defense": "Special defense",
    speed: "Speed",
};

type AbilityMeta = { name: string; is_hidden?: boolean; description?: string };

interface StatsChartProps {
    // Full pokemon JSON from /pokemon/{id}
    pokemon: any;
    // Merged abilities (from pokemon.abilities + species ability descriptions)
    abilities: AbilityMeta[];
}

export default function StatsChart({pokemon, abilities}: StatsChartProps) {
    const [selected, setSelected] = useState<string>(
        abilities?.[0]?.name ?? pokemon?.abilities?.[0]?.ability?.name ?? ""
    );

    const baseStats = useMemo(() => {
        if (!pokemon?.stats) return [];
        return pokemon.stats.map((s: any) => {
            const key = s.stat.name as StatKey;
            return {
                key,
                label: LABELS[key],
                base: s.base_stat as number,
            };
        });
    }, [pokemon?.stats]);

    const chartData = useMemo(() => {
        // Fall back to base if calculateAbilityEffect doesn’t handle something
        return baseStats.map((s) => {
            let modified = s.base;
            try {
                const res = calculateAbilityEffect?.(selected, s.key, s.base);
                // expected shape: { value, description? } — use value if present
                if (res) modified = res.modified;
            } catch {
                modified = s.base;
            }
            const change = modified - s.base;
            const pct = s.base > 0 ? Math.round((change / s.base) * 100) : 0;
            return {
                label: s.label,
                base: s.base,
                modified,
                change,
                pct,
            };
        });
    }, [baseStats, selected]);

    const baseTotal = useMemo(
        () => baseStats.reduce((sum, s) => sum + s.base, 0),
        [baseStats]
    );
    const modifiedTotal = useMemo(
        () => chartData.reduce((sum, d) => sum + d.modified, 0),
        [chartData]
    );
    const net = modifiedTotal - baseTotal;

    const selectedMeta =
        abilities?.find((a) => a.name === selected) ?? abilities?.[0];

    return (
        // <Card className="bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 border-0">
        //     <CardContent>
        <>
            {/* Title */}
            <div className="flex items-center gap-2 mb-4">
                <Activity className="h-5 w-5 text-gray-700"/>
                <h3 className="text-xl font-semibold text-gray-800">
                    Base Stats vs Ability Effects
                </h3>
            </div>

            {/* Ability selector */}
            <div className="mb-2">
                <div className="flex items-center gap-2 mb-2">
                    <Info className="h-4 w-4 text-gray-600"/>
                    <span className="text-sm font-medium text-gray-700">
              Select Ability
            </span>
                </div>
                <div className="flex flex-wrap gap-2">
                    {abilities?.map((a) => {
                        const isSelected = selected === a.name;
                        return (
                            <Button
                                key={a.name}
                                size="sm"
                                variant={isSelected ? "default" : "outline"}
                                onClick={() => setSelected(a.name)}
                                className="text-xs"
                            >
                                {a.name}
                                {a.is_hidden && (
                                    <Badge variant="secondary" className="ml-2 text-[10px]">
                                        Hidden
                                    </Badge>
                                )}
                            </Button>
                        );
                    })}
                </div>
            </div>

            {/* Ability description */}
            {selectedMeta?.description && (
                <div className="mt-3 bg-white p-3 text-sm text-gray-600">
            <span className="font-medium text-gray-800 block mb-1">
              {selectedMeta.name}
            </span>
                    {selectedMeta.description}
                </div>
            )}

            {/* Chart */}
            <div className="mt-6 h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                        margin={{top: 8, right: 0, left: 0, bottom: 8}}
                        barCategoryGap="20%"
                    >
                        <CartesianGrid stroke="#E5E7EB"/>
                        <XAxis
                            dataKey="label"
                            tick={{fill: "#6B7280", fontSize: 12}}
                            axisLine={{stroke: "#E5E7EB"}}
                            tickLine={{stroke: "#E5E7EB"}}
                            angle={-45}            // rotate 45 degrees counterclockwise
                            textAnchor="end"       // align the text properly after rotation
                        />
                        <YAxis
                            tick={{fill: "#6B7280", fontSize: 12}}
                            axisLine={{stroke: "#E5E7EB"}}
                            tickLine={{stroke: "#E5E7EB"}}
                            domain={[0, (dataMax: number) => Math.max(150, dataMax + 20)]}
                        />
                        <Legend verticalAlign="bottom" height={70}
                                wrapperStyle={{position: 'relative', bottom: '-100px !important'}}/>
                        <RechartsTooltip content={<CustomTooltip ability={selectedMeta}/>}/>
                        <Bar
                            name="Base Stat"
                            dataKey="base"
                            fill="#3B82F6" // blue-500
                            radius={[4, 4, 0, 0]}
                        />
                        <Bar
                            name="Ability Modified"
                            dataKey="modified"
                            fill="#8B5CF6" // purple-500
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Totals */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-xl px-4 py-3 bg-blue-50 text-blue-800">
                    <div className="text-sm">Base Total</div>
                    <div className="text-2xl font-bold">{baseTotal}</div>
                </div>
                <div className="rounded-xl px-4 py-3 bg-purple-50 text-purple-800">
                    <div className="text-sm">Modified Total</div>
                    <div className="text-2xl font-bold">{modifiedTotal}</div>
                </div>
                <div className="rounded-xl px-4 py-3 bg-gray-50 text-gray-800">
                    <div className="text-sm">Net Change</div>
                    <div
                        className={`text-2xl font-bold ${
                            net >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {net >= 0 ? `+${net}` : net}
                    </div>
                </div>
            </div>

            {/* Note */}
            <p className="mt-4 text-xs text-gray-600">
                <span className="font-medium">Note:</span> Ability effects shown are
                theoretical maximums and may depend on battle conditions, status
                effects, weather, or other factors not represented in this chart.
                Hover over bars to see detailed stat information and ability effects.
            </p>
            {/*</CardContent>*/}
            {/*</Card>*/}
        </>
    );
}

function CustomTooltip({active, payload, label, ability}: any) {
    if (!active || !payload?.length) return null;
    const base = payload.find((p: any) => p.dataKey === "base")?.value ?? 0;
    const mod = payload.find((p: any) => p.dataKey === "modified")?.value ?? base;
    const change = mod - base;
    const pct = base ? Math.round((change / base) * 100) : 0;

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-3">
            <div className="font-semibold text-gray-800 mb-1">{label}</div>
            <div className="space-y-0.5 text-sm">
                <div className="flex items-center justify-between">
                    <span className="text-blue-600">Base:</span>
                    <span className="font-medium">{base}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-purple-600">Modified:</span>
                    <span className="font-medium">{mod}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Change:</span>
                    <span
                        className={`font-medium ${
                            change >= 0 ? "text-green-600" : "text-red-600"
                        }`}
                    >
            {change >= 0 ? `+${change}` : change} ({pct >= 0 ? `+${pct}` : pct}
                        %)
          </span>
                </div>
            </div>
            <div className="flex items-center gap-2 mb-2">
                <Info className="h-4 w-4 text-gray-600 mt-2"/>
            {ability?.description && (
                <div className="mt-2 text-xs text-gray-600">{ability.description}</div>
            )}
            </div>
        </div>
    );
}
