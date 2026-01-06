import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PostPolish - LinkedIn Text Formatter",
  description: "Transform your raw text into beautifully formatted LinkedIn posts. Paste, polish, publish.",
  keywords: ["LinkedIn", "text formatter", "social media", "content creator", "formatting"],
  authors: [{ name: "PostPolish" }],
  openGraph: {
    title: "PostPolish - LinkedIn Text Formatter",
    description: "Transform your raw text into beautifully formatted LinkedIn posts",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
