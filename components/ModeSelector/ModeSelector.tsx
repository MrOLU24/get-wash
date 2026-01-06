"use client";

import { cn } from "@/lib";
import type { EditorMode } from "@/types";

interface ModeSelectorProps {
    selectedMode: EditorMode;
    onModeChange: (mode: EditorMode) => void;
    className?: string;
}

const MODES: { id: EditorMode; title: string; description: string; icon: string }[] = [
    {
        id: "quick",
        title: "Quick Format",
        description: "Instantly style text with Unicode fonts. No AI needed.",
        icon: "⚡",
    },
    {
        id: "full",
        title: "Full Post",
        description: "AI-powered analysis for complete LinkedIn write-ups.",
        icon: "✨",
    },
];

const ModeSelector = ({ selectedMode, onModeChange, className }: ModeSelectorProps) => {
    return (
        <div className={cn("flex gap-md", className)}>
            {MODES.map((mode) => (
                <button
                    key={mode.id}
                    onClick={() => onModeChange(mode.id)}
                    className={cn("mode-card flex-1", selectedMode === mode.id && "active")}
                >
                    <div className="mode-card-icon">{mode.icon}</div>
                    <div className="mode-card-title">{mode.title}</div>
                    <div className="mode-card-description">{mode.description}</div>
                </button>
            ))}
        </div>
    );
};

export default ModeSelector;
