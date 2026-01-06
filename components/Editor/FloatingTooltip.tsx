"use client";

import { cn } from "@/lib";
import type { TextStyle } from "@/types";

interface FloatingTooltipProps {
    position: { x: number; y: number };
    onStyleSelect: (style: TextStyle) => void;
    onClose: () => void;
    className?: string;
}

const TOOLTIP_STYLES: { id: TextStyle; label: string; icon: string }[] = [
    { id: "bold-sans", label: "Bold Sans", icon: "B" },
    { id: "bold-serif", label: "Bold Serif", icon: "𝐁" },
    { id: "italic", label: "Italic", icon: "π˜π˜" },
    { id: "strikethrough", label: "Strike", icon: "S̶" },
    { id: "plain", label: "Plain", icon: "Aa" },
];

const FloatingTooltip = ({
    position,
    onStyleSelect,
    onClose,
    className,
}: FloatingTooltipProps) => {
    const handleStyleClick = (style: TextStyle) => {
        onStyleSelect(style);
        onClose();
    };

    return (
        <div
            className={cn("floating-tooltip", className)}
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: "translateX(-50%)",
            }}
        >
            {TOOLTIP_STYLES.map((style) => (
                <button
                    key={style.id}
                    onClick={() => handleStyleClick(style.id)}
                    className="tooltip-btn"
                    title={style.label}
                >
                    {style.icon}
                </button>
            ))}
        </div>
    );
};

export default FloatingTooltip;
