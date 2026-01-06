export type TextStyle =
    | 'plain'
    | 'bold-sans'
    | 'bold-serif'
    | 'italic'
    | 'bold-italic'
    | 'strikethrough'
    | 'underline';

export type EditorMode = 'quick' | 'full';

export type StyleOption = {
    id: TextStyle;
    label: string;
    preview: string;
};

export type AIAnalysis = {
    headline: {
        text: string;
        startIndex: number;
        endIndex: number;
        suggestion: string;
    } | null;
    hooks: {
        text: string;
        startIndex: number;
        endIndex: number;
        strength: 'strong' | 'medium' | 'weak';
    }[];
    keywords: {
        word: string;
        type: 'power_word' | 'industry_term' | 'entity' | 'number';
        indices: number[];
        suggestedStyle: TextStyle;
    }[];
    lists: {
        startIndex: number;
        endIndex: number;
        items: string[];
    }[];
};

export type UserPreferences = {
    headlineStyle: 'bold-sans' | 'bold-serif';
    bulletEmoji: string;
    powerWordStyle: TextStyle;
    autoFormatOnPaste: boolean;
    theme: 'light' | 'dark' | 'system';
};

export type TooltipPosition = {
    x: number;
    y: number;
};
