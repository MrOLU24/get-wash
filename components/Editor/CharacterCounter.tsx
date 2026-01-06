"use client";

import { cn } from "@/lib";

interface CharacterCounterProps {
    current: number;
    max?: number;
    className?: string;
}

const CharacterCounter = ({ current, max = 3000, className }: CharacterCounterProps) => {
    const getStatus = () => {
        if (current > max) return "critical";
        if (current > max - 200) return "critical";
        if (current > max - 500) return "warning";
        return "normal";
    };

    const status = getStatus();

    return (
        <div
            className={cn(
                "char-counter",
                status,
                className
            )}
        >
            <span>{current.toLocaleString()}</span>
            <span>/</span>
            <span>{max.toLocaleString()}</span>
        </div>
    );
};

export default CharacterCounter;
