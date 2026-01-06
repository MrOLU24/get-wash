"use client";

import { useState } from "react";
import { cn } from "@/lib";

interface LinkedInPreviewProps {
    content: string;
    className?: string;
}

const LINKEDIN_CUTOFF = 140;

const LinkedInPreview = ({ content, className }: LinkedInPreviewProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const needsTruncation = content.length > LINKEDIN_CUTOFF;
    const displayContent = isExpanded || !needsTruncation
        ? content
        : content.slice(0, LINKEDIN_CUTOFF);

    return (
        <div className={cn("linkedin-preview", className)}>
            <div className="linkedin-preview-header">
                <div className="linkedin-avatar" />
                <div>
                    <div className="linkedin-name">Your Name</div>
                    <div className="linkedin-headline">Your headline Β· Just now</div>
                </div>
            </div>
            <div className="linkedin-preview-content">
                {displayContent}
                {needsTruncation && !isExpanded && (
                    <>
                        {"... "}
                        <button
                            onClick={() => setIsExpanded(true)}
                            className="linkedin-see-more"
                        >
                            see more
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LinkedInPreview;
