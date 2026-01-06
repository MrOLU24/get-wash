import type { TextStyle, StyleOption } from "@/types";

const BOLD_SANS_UPPER = '\u{1D5D4}\u{1D5D5}\u{1D5D6}\u{1D5D7}\u{1D5D8}\u{1D5D9}\u{1D5DA}\u{1D5DB}\u{1D5DC}\u{1D5DD}\u{1D5DE}\u{1D5DF}\u{1D5E0}\u{1D5E1}\u{1D5E2}\u{1D5E3}\u{1D5E4}\u{1D5E5}\u{1D5E6}\u{1D5E7}\u{1D5E8}\u{1D5E9}\u{1D5EA}\u{1D5EB}\u{1D5EC}\u{1D5ED}';
const BOLD_SANS_LOWER = '\u{1D5EE}\u{1D5EF}\u{1D5F0}\u{1D5F1}\u{1D5F2}\u{1D5F3}\u{1D5F4}\u{1D5F5}\u{1D5F6}\u{1D5F7}\u{1D5F8}\u{1D5F9}\u{1D5FA}\u{1D5FB}\u{1D5FC}\u{1D5FD}\u{1D5FE}\u{1D5FF}\u{1D600}\u{1D601}\u{1D602}\u{1D603}\u{1D604}\u{1D605}\u{1D606}\u{1D607}';
const BOLD_SANS_DIGITS = '\u{1D7EC}\u{1D7ED}\u{1D7EE}\u{1D7EF}\u{1D7F0}\u{1D7F1}\u{1D7F2}\u{1D7F3}\u{1D7F4}\u{1D7F5}';

const BOLD_SERIF_UPPER = '\u{1D400}\u{1D401}\u{1D402}\u{1D403}\u{1D404}\u{1D405}\u{1D406}\u{1D407}\u{1D408}\u{1D409}\u{1D40A}\u{1D40B}\u{1D40C}\u{1D40D}\u{1D40E}\u{1D40F}\u{1D410}\u{1D411}\u{1D412}\u{1D413}\u{1D414}\u{1D415}\u{1D416}\u{1D417}\u{1D418}\u{1D419}';
const BOLD_SERIF_LOWER = '\u{1D41A}\u{1D41B}\u{1D41C}\u{1D41D}\u{1D41E}\u{1D41F}\u{1D420}\u{1D421}\u{1D422}\u{1D423}\u{1D424}\u{1D425}\u{1D426}\u{1D427}\u{1D428}\u{1D429}\u{1D42A}\u{1D42B}\u{1D42C}\u{1D42D}\u{1D42E}\u{1D42F}\u{1D430}\u{1D431}\u{1D432}\u{1D433}';
const BOLD_SERIF_DIGITS = '\u{1D7CE}\u{1D7CF}\u{1D7D0}\u{1D7D1}\u{1D7D2}\u{1D7D3}\u{1D7D4}\u{1D7D5}\u{1D7D6}\u{1D7D7}';

const ITALIC_UPPER = '\u{1D608}\u{1D609}\u{1D60A}\u{1D60B}\u{1D60C}\u{1D60D}\u{1D60E}\u{1D60F}\u{1D610}\u{1D611}\u{1D612}\u{1D613}\u{1D614}\u{1D615}\u{1D616}\u{1D617}\u{1D618}\u{1D619}\u{1D61A}\u{1D61B}\u{1D61C}\u{1D61D}\u{1D61E}\u{1D61F}\u{1D620}\u{1D621}';
const ITALIC_LOWER = '\u{1D622}\u{1D623}\u{1D624}\u{1D625}\u{1D626}\u{1D627}\u{1D628}\u{1D629}\u{1D62A}\u{1D62B}\u{1D62C}\u{1D62D}\u{1D62E}\u{1D62F}\u{1D630}\u{1D631}\u{1D632}\u{1D633}\u{1D634}\u{1D635}\u{1D636}\u{1D637}\u{1D638}\u{1D639}\u{1D63A}\u{1D63B}';

const BOLD_ITALIC_UPPER = '\u{1D63C}\u{1D63D}\u{1D63E}\u{1D63F}\u{1D640}\u{1D641}\u{1D642}\u{1D643}\u{1D644}\u{1D645}\u{1D646}\u{1D647}\u{1D648}\u{1D649}\u{1D64A}\u{1D64B}\u{1D64C}\u{1D64D}\u{1D64E}\u{1D64F}\u{1D650}\u{1D651}\u{1D652}\u{1D653}\u{1D654}\u{1D655}';
const BOLD_ITALIC_LOWER = '\u{1D656}\u{1D657}\u{1D658}\u{1D659}\u{1D65A}\u{1D65B}\u{1D65C}\u{1D65D}\u{1D65E}\u{1D65F}\u{1D660}\u{1D661}\u{1D662}\u{1D663}\u{1D664}\u{1D665}\u{1D666}\u{1D667}\u{1D668}\u{1D669}\u{1D66A}\u{1D66B}\u{1D66C}\u{1D66D}\u{1D66E}\u{1D66F}';

const ASCII_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const ASCII_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ASCII_DIGITS = '0123456789';

function createCharMap(targetUpper: string, targetLower: string, targetDigits?: string): Map<string, string> {
    const map = new Map<string, string>();

    const upperChars = [...targetUpper];
    const lowerChars = [...targetLower];

    for (let i = 0; i < 26; i++) {
        map.set(ASCII_UPPER[i], upperChars[i]);
        map.set(ASCII_LOWER[i], lowerChars[i]);
    }

    if (targetDigits) {
        const digitChars = [...targetDigits];
        for (let i = 0; i < 10; i++) {
            map.set(ASCII_DIGITS[i], digitChars[i]);
        }
    }

    return map;
}

const boldSansMap = createCharMap(BOLD_SANS_UPPER, BOLD_SANS_LOWER, BOLD_SANS_DIGITS);
const boldSerifMap = createCharMap(BOLD_SERIF_UPPER, BOLD_SERIF_LOWER, BOLD_SERIF_DIGITS);
const italicMap = createCharMap(ITALIC_UPPER, ITALIC_LOWER);
const boldItalicMap = createCharMap(BOLD_ITALIC_UPPER, BOLD_ITALIC_LOWER);

function transform(text: string, charMap: Map<string, string>): string {
    return [...text].map(char => charMap.get(char) || char).join('');
}

export function toBoldSans(text: string): string {
    return transform(text, boldSansMap);
}

export function toBoldSerif(text: string): string {
    return transform(text, boldSerifMap);
}

export function toItalic(text: string): string {
    return transform(text, italicMap);
}

export function toBoldItalic(text: string): string {
    return transform(text, boldItalicMap);
}

export function toStrikethrough(text: string): string {
    return [...text].map(char => char + '\u0336').join('');
}

export function toUnderline(text: string): string {
    return [...text].map(char => char + '\u0332').join('');
}

const reverseBoldSansMap = new Map<string, string>();
const reverseBoldSerifMap = new Map<string, string>();
const reverseItalicMap = new Map<string, string>();
const reverseBoldItalicMap = new Map<string, string>();

boldSansMap.forEach((v, k) => reverseBoldSansMap.set(v, k));
boldSerifMap.forEach((v, k) => reverseBoldSerifMap.set(v, k));
italicMap.forEach((v, k) => reverseItalicMap.set(v, k));
boldItalicMap.forEach((v, k) => reverseBoldItalicMap.set(v, k));

export function toPlain(text: string): string {
    let result = text.replace(/[\u0336\u0332]/g, '');

    result = [...result].map(char => {
        return reverseBoldSansMap.get(char)
            || reverseBoldSerifMap.get(char)
            || reverseItalicMap.get(char)
            || reverseBoldItalicMap.get(char)
            || char;
    }).join('');

    return result;
}

export function hasStyledText(text: string): boolean {
    if (/[\u0336\u0332]/.test(text)) return true;
    const mathCharsRegex = /[\u{1D400}-\u{1D7FF}]/u;
    return mathCharsRegex.test(text);
}

export function applyStyle(text: string, style: TextStyle): string {
    const plainText = toPlain(text);

    switch (style) {
        case 'bold-sans':
            return toBoldSans(plainText);
        case 'bold-serif':
            return toBoldSerif(plainText);
        case 'italic':
            return toItalic(plainText);
        case 'bold-italic':
            return toBoldItalic(plainText);
        case 'strikethrough':
            return toStrikethrough(plainText);
        case 'underline':
            return toUnderline(plainText);
        case 'plain':
        default:
            return plainText;
    }
}

export const STYLE_OPTIONS: StyleOption[] = [
    { id: 'plain', label: 'Plain', preview: 'Aa' },
    { id: 'bold-sans', label: 'Bold Sans', preview: '\u{1D5D4}\u{1D5EE}' },
    { id: 'bold-serif', label: 'Bold Serif', preview: '\u{1D400}\u{1D41A}' },
    { id: 'italic', label: 'Italic', preview: '\u{1D608}\u{1D622}' },
    { id: 'bold-italic', label: 'Bold Italic', preview: '\u{1D63C}\u{1D656}' },
    { id: 'strikethrough', label: 'Strikethrough', preview: 'A\u0336a\u0336' },
    { id: 'underline', label: 'Underline', preview: 'A\u0332a\u0332' },
];
