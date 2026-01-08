import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: {
        template: "%s | Styleon",
        default: "Styleon - Make your LinkedIn posts impossible to scroll past",
    },
    description:
        "Transform plain text into scroll-stopping LinkedIn content in seconds. Free text styling tool with AI-powered formatting.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="font-sans antialiased">
                {children}
            </body>
        </html>
    );
}
