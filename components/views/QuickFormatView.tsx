"use client";

import { useState } from "react";
import { CharacterCounter, DraftingBox, StyleGrid } from "@/components/Editor";

const QuickFormatView = () => {
    const [inputText, setInputText] = useState("");
    const [copyFeedback, setCopyFeedback] = useState("");

    const handleCopy = async (text: string) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopyFeedback("Copied!");
            setTimeout(() => setCopyFeedback(""), 2000);
        } catch {
            setCopyFeedback("Failed to copy");
        }
    };

    return (
        <div className="flex flex-col gap-lg">
            <div>
                <DraftingBox
                    value={inputText}
                    onChange={setInputText}
                    placeholder="Type or paste text to format..."
                    minHeight="150px"
                />
                <div className="flex justify-between items-center mt-sm">
                    <CharacterCounter current={inputText.length} />
                    {copyFeedback && (
                        <span className="text-small text-success">
                            {copyFeedback}
                        </span>
                    )}
                </div>
            </div>

            {inputText && (
                <div>
                    <h3 className="heading-3 mb-md">Choose a Style</h3>
                    <StyleGrid inputText={inputText} onCopy={handleCopy} />
                </div>
            )}
        </div>
    );
};

export default QuickFormatView;
