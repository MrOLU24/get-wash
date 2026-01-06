"use client";

import { cn } from "@/lib";
import { STYLE_OPTIONS, applyStyle } from "@/lib/formatters";
import type { TextStyle } from "@/types";

interface StyleGridProps {
    inputText: string;
    onCopy: (text: string) => void;
    className?: string;
}

const StyleGrid = ({ inputText, onCopy, className }: StyleGridProps) => {
    const handleCopyStyle = (style: TextStyle) => {
        const styledText = applyStyle(inputText, style);
        onCopy(styledText);
    };

    return (
        <div className={cn("style-grid", className)}>
            {STYLE_OPTIONS.map((option) => (
                <button
                    key={option.id}
                    onClick={() => handleCopyStyle(option.id)}
                    className="style-option"
                >
                    <div className="style-option-preview">
                        {applyStyle(inputText.slice(0, 20) || "Sample Text", option.id)}
                        {inputText.length > 20 ? "..." : ""}
                    </div>
                    <div className="style-option-label">{option.label}</div>
                </button>
            ))}
        </div>
    );
};

export default StyleGrid;
