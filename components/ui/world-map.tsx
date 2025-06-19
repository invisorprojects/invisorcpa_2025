'use client';

import { useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import DottedMap from 'dotted-map';

interface Dot {
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
}

interface WorldMapProps {
    dots?: Dot[];
    lineColor?: string;
}

export default function WorldMap({
    dots = [],
    lineColor = '#0ea5e9',
}: WorldMapProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [tooltip, setTooltip] = useState<{
        xPct: number;
        yPct: number;
        label: string;
    } | null>(null);

    // 1) Create the map ONCE
    const map = useMemo(
        () => new DottedMap({ height: 100, grid: 'diagonal' }),
        []
    );

    // 2) Memoize the SVG background
    const svgMap = useMemo(() => {
        return map.getSVG({
            radius: 0.22,
            color: '#00000040',
            shape: 'circle',
            backgroundColor: 'white',
        });
    }, [map]);

    // 3) Project lat/lng and build paths just ONCE
    const projected = useMemo(
        () =>
            dots.map((d) => {
                const projectPoint = (lat: number, lng: number) => ({
                    x: (lng + 180) * (800 / 360),
                    y: (90 - lat) * (400 / 180),
                });

                const start = projectPoint(d.start.lat, d.start.lng);
                const end = projectPoint(d.end.lat, d.end.lng);
                const midX = (start.x + end.x) / 2;
                const midY = Math.min(start.y, end.y) - 50;
                const path = `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;

                return {
                    start,
                    end,
                    startLabel: d.start.label,
                    endLabel: d.end.label,
                    path,
                };
            }),
        [dots]
    );

    // Quick helper to show tooltip immediately
    const showTooltip = (x: number, y: number, label?: string) => {
        if (!label) return;
        setTooltip({
            xPct: (x / 800) * 100,
            yPct: (y / 400) * 100,
            label,
        });
    };

    return (
        <div className="relative aspect-[2/1] w-full rounded-lg bg-white">
            {/* map background only renders once */}
            <img
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="pointer-events-none absolute inset-0 h-full w-full select-none"
                alt="world map"
                draggable={false}
            />

            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="pointer-events-none absolute inset-0 h-full w-full select-none"
            >
                <defs>
                    <linearGradient
                        id="path-gradient"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                    >
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop
                            offset="5%"
                            stopColor={lineColor}
                            stopOpacity="1"
                        />
                        <stop
                            offset="95%"
                            stopColor={lineColor}
                            stopOpacity="1"
                        />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {projected.map((p, i) => (
                    <g key={i}>
                        {/* animated path */}
                        <motion.path
                            d={p.path}
                            fill="none"
                            stroke="url(#path-gradient)"
                            strokeWidth="1"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{
                                duration: 1,
                                delay: 0.5 * i,
                                ease: 'easeOut',
                            }}
                        />

                        {/* start dot */}
                        <g
                            className="pointer-events-auto cursor-pointer"
                            onMouseEnter={() =>
                                showTooltip(p.start.x, p.start.y, p.startLabel)
                            }
                            onMouseLeave={() => setTooltip(null)}
                        >
                            <circle
                                cx={p.start.x}
                                cy={p.start.y}
                                r="2"
                                fill={lineColor}
                            />
                            <circle
                                cx={p.start.x}
                                cy={p.start.y}
                                r="2"
                                fill={lineColor}
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="r"
                                    from="2"
                                    to="8"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>

                        {/* end dot */}
                        <g
                            className="pointer-events-auto cursor-pointer"
                            onMouseEnter={() =>
                                showTooltip(p.end.x, p.end.y, p.endLabel)
                            }
                            onMouseLeave={() => setTooltip(null)}
                        >
                            <circle
                                cx={p.end.x}
                                cy={p.end.y}
                                r="2"
                                fill={lineColor}
                            />
                            <circle
                                cx={p.end.x}
                                cy={p.end.y}
                                r="2"
                                fill={lineColor}
                                opacity="0.5"
                            >
                                <animate
                                    attributeName="r"
                                    from="2"
                                    to="8"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                />
                                <animate
                                    attributeName="opacity"
                                    from="0.5"
                                    to="0"
                                    dur="1.5s"
                                    repeatCount="indefinite"
                                />
                            </circle>
                        </g>
                    </g>
                ))}
            </svg>

            {/* Only the tooltip re-renders on hover */}
            {tooltip && (
                <div
                    className="pointer-events-none absolute z-10 rounded bg-white px-3 py-1 text-sm font-medium whitespace-nowrap shadow-md"
                    style={{
                        left: `${tooltip.xPct}%`,
                        top: `${tooltip.yPct}%`,
                        transform: 'translate(-50%, -110%)',
                    }}
                >
                    {tooltip.label}
                </div>
            )}
        </div>
    );
}
