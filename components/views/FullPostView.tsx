"use client";

import { useState } from "react";
import { CharacterCounter, DraftingBox } from "@/components/Editor";
import { LinkedInPreview } from "@/components/Preview";
import Button from "@/components/ui/Button";

const FullPostView = () => {
    const [inputText, setInputText] = useState("");

    return (
        <div className="editor-layout">
            <div className="flex flex-col gap-md">
                <DraftingBox
                    value={inputText}
                    onChange={setInputText}
                    placeholder="Paste your full LinkedIn post here for AI-powered formatting..."
                    minHeight="400px"
                />
                <div className="flex justify-between items-center">
                    <CharacterCounter current={inputText.length} />
                    <Button variant="accent" size="lg" className="sparkle">
                        ✨ Auto-Style
                    </Button>
                </div>
            </div>

            <div>
                <h3 className="heading-3 mb-md">Preview</h3>
                <LinkedInPreview content={inputText} />
            </div>
        </div>
    );
};

export default FullPostView;
