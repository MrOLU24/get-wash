"use client";

import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <span className="text-xl font-bold text-gray-900">Styleon</span>
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#features"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            Features
                        </Link>
                        <Link
                            href="#how-it-works"
                            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            How it works
                        </Link>
                    </div>

                    <Link
                        href="/app"
                        className="bg-gray-900 hover:bg-gray-800 text-white rounded-full px-5 py-2.5 text-sm font-medium transition-colors"
                    >
                        start for free
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
