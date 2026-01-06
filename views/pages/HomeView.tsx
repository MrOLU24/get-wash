"use client";

import { useState } from "react";
import { ModeSelector } from "@/components/ModeSelector";
import { QuickFormatView, FullPostView } from "@/components/views";
import { Button } from "@/components/ui";
import type { EditorMode } from "@/types";

const HomeView = () => {
    const [mode, setMode] = useState<EditorMode>("quick");

    return (
        <div className="container">
            <header className="flex justify-between items-center py-lg">
                <h1 className="heading-2">PostPolish</h1>
                <Button variant="secondary">Settings</Button>
            </header>

            <main className="py-xl">
                <div className="mb-xl">
                    <h2 className="heading-1 mb-sm">Format Your LinkedIn Post</h2>
                    <p className="text-body text-secondary">
                        Transform your text into eye-catching, professionally styled content.
                    </p>
                </div>

                <ModeSelector
                    selectedMode={mode}
                    onModeChange={setMode}
                    className="mb-xl"
                />

                {mode === "quick" ? <QuickFormatView /> : <FullPostView />}
            </main>
        </div>
    );
};

export default HomeView;
