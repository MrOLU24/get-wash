"use client";

import { Navbar, Hero } from "@/components/landing";

const LandingView = () => {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
        </main>
    );
};

export default LandingView;
