"use client";

import { cn } from "@/lib";

interface DraftingBoxProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    minHeight?: string;
    onSelectionChange?: (selection: { start: number; end: number; text: string } | null) => void;
}

const DraftingBox = ({
    value,
    onChange,
    placeholder = "Paste or type your text here...",
    className,
    minHeight = "300px",
    onSelectionChange,
}: DraftingBoxProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(e.target.value);
    };

    const handleSelect = (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const textarea = e.target as HTMLTextAreaElement;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        if (start !== end && onSelectionChange) {
            onSelectionChange({
                start,
                end,
                text: value.substring(start, end),
            });
        } else if (onSelectionChange) {
            onSelectionChange(null);
        }
    };

    return (
        <textarea
            value={value}
            onChange={handleChange}
            onSelect={handleSelect}
            onBlur={() => onSelectionChange?.(null)}
            placeholder={placeholder}
            className={cn("editor-box", className)}
            style={{ minHeight }}
        />
    );
};

export default DraftingBox;
