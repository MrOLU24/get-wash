"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  SparklesIcon,
  PaletteIcon,
  PencilIcon,
  LightbulbIcon,
  BoldIcon,
  TypeIcon,
} from "@/components/icons";

const FloatingIcon = ({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) => (
  <motion.div
    className={`absolute hidden lg:flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-xl border border-gray-100 ${className}`}
    style={{
      boxShadow:
        "0 8px 32px -4px rgba(0, 0, 0, 0.12), 0 4px 16px -2px rgba(0, 0, 0, 0.08)",
    }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {children}
  </motion.div>
);

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcon className="top-32 left-[10%]" delay={0.2}>
        <SparklesIcon width={28} height={28} className="text-amber-500" />
      </FloatingIcon>
      <FloatingIcon className="top-48 right-[12%]" delay={0.3}>
        <PaletteIcon width={28} height={28} className="text-primary-600" />
      </FloatingIcon>
      <FloatingIcon className="top-72 left-[5%]" delay={0.4}>
        <PencilIcon width={28} height={28} className="text-blue-500" />
      </FloatingIcon>
      <FloatingIcon className="bottom-[40%] right-[8%]" delay={0.5}>
        <LightbulbIcon width={28} height={28} className="text-yellow-500" />
      </FloatingIcon>
      <FloatingIcon className="top-56 left-[18%]" delay={0.35}>
        <BoldIcon width={28} height={28} className="text-emerald-500" />
      </FloatingIcon>
      <FloatingIcon className="bottom-[50%] right-[15%]" delay={0.45}>
        <TypeIcon width={28} height={28} className="text-rose-500" />
      </FloatingIcon>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          The ultimate{" "}
          <span className="inline-flex items-baseline">
            <span>Linked</span>
            <span className="inline-flex items-center justify-center bg-[#0A66C2] text-white rounded-[4px] px-1.5 py-0.5 text-[0.85em] font-bold ml-0.5">
              in
            </span>
          </span>{" "}
          text
          <br />
          styling & formatting tool
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Make your posts impossible to scroll past with bold, italic, and stylish Unicode fonts.
          <br className="hidden md:block" />
          Create scroll-stopping content in seconds, not hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <Link
            href="/app"
            className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg px-8 py-4 text-base font-medium shadow-xl hover:shadow-2xl transition-all"
          >
            Try now for free
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
          <span className="text-sm text-gray-500 flex items-center gap-1.5">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            No signup required
          </span>
        </motion.div>

        <motion.div
          className="mt-16 lg:mt-20 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mx-auto max-w-4xl">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-md px-4 py-1 text-xs text-gray-500 border border-gray-200">
                  styleon.app/app
                </div>
              </div>
            </div>

            {/* App Preview */}
            <div className="p-6 lg:p-8 bg-gray-50">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Left - Input */}
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    Enter your text
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-500 text-sm border border-gray-100">
                    Type or paste your LinkedIn post here...
                  </div>
                  <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                    <span className="px-3 py-1.5 bg-[#0A66C2] text-white rounded-full text-xs font-medium">
                      Bold
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Italic
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Script
                    </span>
                    <span className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                      Gothic
                    </span>
                  </div>
                </div>

                {/* Right - Output */}
                <div className="bg-white rounded-xl p-5 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">
                      Result
                    </span>
                    <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                      Ready to copy
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 text-gray-900 text-sm border border-gray-100">
                    𝗬𝗼𝘂𝗿 𝘀𝘁𝘆𝗹𝗲𝗱 𝘁𝗲𝘅𝘁 𝗮𝗽𝗽𝗲𝗮𝗿𝘀 𝗵𝗲𝗿𝗲...
                  </div>
                  <button className="mt-4 w-full bg-[#0A66C2] hover:bg-[#004182] text-white rounded-lg py-2.5 text-sm font-medium transition-colors">
                    Copy to Clipboard
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative gradient blur */}
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-gradient-to-t from-white to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
