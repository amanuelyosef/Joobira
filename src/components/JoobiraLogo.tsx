import React from 'react';

interface JoobiraLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'light' | 'dark';
}

/**
 * Custom SVG Emblem for Joobira Construction
 * Clearly displays a soaring Eagle ("Joobira" in Afaan Oromoo) with spread wings,
 * fierce head & golden hooked beak fused with a dynamic Hydro Water Drop.
 */
export const JoobiraLogo: React.FC<JoobiraLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'light',
}) => {
  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  const isLight = theme === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
      <div className={`relative ${dimensions} flex-shrink-0`}>
        <svg
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
          role="img"
          aria-label="Joobira Construction — Eagle & Water Drop Logo"
        >
          <defs>
            {/* Hydro Water Drop Gradient */}
            <linearGradient id="hydroDrop" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="55%" stopColor="#0284C7" />
              <stop offset="100%" stopColor="#0369A1" />
            </linearGradient>

            {/* Deep Navy Eagle Body Gradient */}
            <linearGradient id="eagleNavy" x1="12" y1="24" x2="116" y2="96" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#0A192F" />
              <stop offset="100%" stopColor="#1E3A5F" />
            </linearGradient>

            {/* Industrial Gold Eagle Beak & Wing Crest */}
            <linearGradient id="eagleGold" x1="20" y1="20" x2="105" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FBBF24" />
              <stop offset="55%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#D97706" />
            </linearGradient>
          </defs>

          {/* Outer Clean Crest Circle */}
          <circle
            cx="64"
            cy="64"
            r="60"
            fill="#F0F9FF"
            stroke="#0284C7"
            strokeWidth="3"
          />

          {/* 1. PROMINENT WATER DROP (Center-Top to Bottom) */}
          <path
            d="M64 12C64 12 102 54 102 81C102 102.5 85 118 64 118C43 118 26 102.5 26 81C26 54 64 12 64 12Z"
            fill="url(#hydroDrop)"
          />

          {/* Water Gloss & Wave Reflection inside Drop */}
          <path
            d="M40 86C46 98 56 105 68 106C53 108 38 99 35 84C34 79 36 73 39 68C38 74 38 81 40 86Z"
            fill="#FFFFFF"
            fillOpacity="0.45"
          />

          {/* 2. UNMISTAKABLE SOARING EAGLE ("JOOBIRA") OVER THE WATER DROP */}
          {/* White Halo Outline behind Eagle so it pops vividly against the Blue Water Drop */}
          <path
            d="M8 44 C22 44, 36 50, 48 58 C51 44, 58 34, 68 34 C75 34, 81 38, 84 44 L92 46 C90 51, 85 53, 81 52 L77 58 C90 50, 106 44, 120 44 C113 54, 104 60, 94 63 C103 64, 111 62, 116 58 C108 69, 97 74, 86 75 C93 77, 100 76, 106 73 C97 82, 85 85, 74 84 L64 98 L54 84 C43 85, 31 82, 22 73 C28 76, 35 77, 42 75 C31 74, 20 69, 12 58 C17 62, 25 64, 34 63 C24 60, 15 54, 8 44 Z"
            fill="#FFFFFF"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinejoin="round"
          />

          {/* Main Soaring Eagle Silhouette — Spread Feathered Wings + Tail + Fierce Head */}
          <path
            d="M8 44
               C23 45, 37 51, 49 60
               C51 45, 58 35, 68 35
               C74 35, 79 38, 82 43
               L75 49
               L76 59
               C89 51, 105 45, 120 44
               C113 53, 103 59, 92 62
               C102 63, 110 61, 115 58
               C107 68, 95 73, 83 74
               C91 76, 99 75, 105 72
               C96 81, 83 84, 72 82
               L64 96
               L56 82
               C45 84, 32 81, 23 72
               C29 75, 37 76, 45 74
               C33 73, 21 68, 13 58
               C18 61, 26 63, 36 62
               C25 59, 15 53, 8 44 Z"
            fill="url(#eagleNavy)"
          />

          {/* Sharp Hooked Golden Eagle Beak (Facing Right) */}
          <path
            d="M80 41 L94 45 C92 51, 86 53, 81 51 L78 54 L76 47 Z"
            fill="url(#eagleGold)"
          />

          {/* Fierce White Eagle Eye & Brow Line */}
          <path
            d="M71 42 L77 44 L73 46 Z"
            fill="#FFFFFF"
          />

          {/* Golden Wing Shoulder Accent Streaks (Dual-License Gold) */}
          <path
            d="M22 52 C33 55, 43 60, 52 67 C42 64, 31 60, 22 52 Z"
            fill="url(#eagleGold)"
          />
          <path
            d="M106 52 C95 55, 85 60, 76 67 C86 64, 97 60, 106 52 Z"
            fill="url(#eagleGold)"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-2">
            <span
              className={`font-display font-extrabold tracking-tight text-lg sm:text-xl leading-none ${
                isLight ? 'text-[#0A192F]' : 'text-white'
              }`}
            >
              JOOBIRA
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-[#F59E0B] text-[#0A192F] tracking-wider shadow-xs">
              GC + WWC
            </span>
          </div>
          <span
            className={`text-[10px] sm:text-[11px] font-bold tracking-[0.12em] uppercase mt-1 leading-none ${
              isLight ? 'text-[#0284C7]' : 'text-[#38BDF8]'
            }`}
          >
            CONSTRUCTION &amp; WATER WORKS
          </span>
        </div>
      )}
    </div>
  );
};
