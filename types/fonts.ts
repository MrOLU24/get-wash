export type FontStyleType =
    | "bold"
    | "italic"
    | "boldItalic"
    | "script"
    | "gothic"
    | "doubleStruck"
    | "monospace"
    | "circled"
    | "squared"
    | "fullwidth";

export interface FontStyle {
    id: FontStyleType;
    name: string;
    preview: string;
}
