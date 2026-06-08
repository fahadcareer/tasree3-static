import React from 'react';

/**
 * Reusable Logo component for Tasree3.
 * Renders a highly-optimized, scalable vector SVG wordmark of "TASREE3"
 * using the futuristic geometric typography (with the "A" as a caret/chevron "Λ").
 * 
 * Props:
 * - className: CSS classes applied to the root svg element (e.g., text-slate-900, hover:opacity-80, etc.)
 * - height: Height of the logo in pixels (default: '28')
 * - monochrome: If true, renders the entire logo (including the "3") in the parent's text color.
 *               If false, renders "TASREE" in the inherited text color and "3" in brand-emerald.
 */
export default function Logo({ className = '', height = '28', monochrome = false }) {
  return (
    <svg
      viewBox="0 0 570 100"
      height={height}
      className={`inline-block select-none align-middle ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="11"
      strokeLinecap="butt"
      strokeLinejoin="miter"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Tasree3 Logo"
    >
      {/* 
        TASREE Part 
        Letters are positioned sequentially with a spacing of 20px:
        T: 15-75 (width 60)
        A (Λ): 95-155 (width 60)
        S: 175-235 (width 60)
        R: 255-315 (width 60)
        E: 335-395 (width 60)
        E: 415-475 (width 60)
      */}
      <path
        d="M 15 15 H 75 M 45 15 V 85 M 95 85 L 125 15 L 155 85 M 235 15 H 175 V 50 H 235 V 85 H 175 M 255 85 V 15 H 295 C 315 15 315 50 295 50 H 255 M 285 50 L 315 85 M 395 15 H 335 V 85 H 395 M 335 50 H 380 M 475 15 H 415 V 85 H 475 M 415 50 H 460"
      />
      {/* 
        3 Part
        Starts at 495, extends to 555 (width 60)
      */}
      <path
        className={monochrome ? '' : 'text-brand-emerald'}
        d="M 495 15 H 535 C 555 15 555 48 535 48 H 515 H 535 C 555 48 555 85 535 85 H 495"
      />
    </svg>
  );
}
