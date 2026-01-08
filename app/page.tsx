import type { Metadata } from "next";
import { LandingView } from "@/views/pages";

export const metadata: Metadata = {
    title: "Styleon - Make your LinkedIn posts impossible to scroll past",
    description:
        "Transform plain text into scroll-stopping LinkedIn content in seconds. Free text styling tool with AI-powered formatting.",
};

export default function Home() {
    return <LandingView />;
}
