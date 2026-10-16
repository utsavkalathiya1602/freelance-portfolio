import type { ConceptBrand } from "@/types/project";

type IllustrationProps = {
  brand: ConceptBrand;
  className?: string;
};

/**
 * Static, code-drawn illustrations used inside concept mockups.
 * They stand in for photography and are always presented as illustrative.
 */
export function ConceptIllustration({ brand, className = "" }: IllustrationProps) {
  const { tones, ink, surface, background } = brand.palette;
  const [t0, t1, t2] = tones;

  const common = {
    viewBox: "0 0 400 300",
    className: `block h-full w-full ${className}`,
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": true,
    focusable: false,
  } as const;

  switch (brand.illustration) {
    case "interior":
      return (
        <svg {...common}>
          <rect width="400" height="300" fill={t0} />
          <rect y="222" width="400" height="78" fill={t2} />
          <path d="M150 210 V95 a50 50 0 0 1 100 0 V210 Z" fill={surface} opacity="0.85" />
          <path d="M200 45 V210 M150 130 H250" stroke={t0} strokeWidth="4" />
          <ellipse cx="205" cy="262" rx="150" ry="22" fill={background} opacity="0.6" />
          <rect x="95" y="182" width="210" height="52" rx="18" fill={t1} />
          <rect x="110" y="160" width="180" height="40" rx="16" fill={t1} opacity="0.85" />
          <rect x="102" y="232" width="8" height="16" fill={ink} />
          <rect x="290" y="232" width="8" height="16" fill={ink} />
          <path d="M335 95 V235" stroke={ink} strokeWidth="3" />
          <path d="M315 95 h40 l-10 -28 h-20 Z" fill={surface} />
          <rect x="322" y="232" width="26" height="6" rx="3" fill={ink} />
          <path d="M55 235 c0 -40 -20 -60 -5 -95 c10 25 10 50 5 95 Z" fill={t1} />
          <path d="M55 235 c0 -35 20 -55 10 -85 c-15 25 -15 50 -10 85 Z" fill={ink} opacity="0.35" />
          <rect x="40" y="228" width="30" height="20" rx="4" fill={surface} />
        </svg>
      );
    case "renovation":
      return (
        <svg {...common}>
          <rect width="400" height="300" fill={background} />
          <rect y="236" width="400" height="64" fill={t2} />
          {[30, 115, 200, 285].map((x) => (
            <rect key={x} x={x} y="40" width="78" height="62" rx="4" fill={t0} stroke={surface} strokeWidth="3" />
          ))}
          <rect x="30" y="128" width="333" height="8" fill={ink} />
          <rect x="30" y="136" width="333" height="22" fill={surface} />
          {[30, 115, 200, 285].map((x) => (
            <rect key={x} x={x} y="158" width="78" height="78" rx="4" fill={t1} stroke={surface} strokeWidth="3" />
          ))}
          {[69, 154, 239, 324].map((x) => (
            <rect key={x} x={x - 14} y="172" width="28" height="4" rx="2" fill={surface} />
          ))}
          <path d="M245 0 V20 M325 0 V20" stroke={ink} strokeWidth="2" />
          <path d="M232 20 h26 l-5 14 h-16 Z M312 20 h26 l-5 14 h-16 Z" fill={ink} />
          <rect x="60" y="104" width="44" height="22" rx="3" fill={surface} />
          <circle cx="150" cy="116" r="9" fill={t2} />
        </svg>
      );
    case "home-services":
      return (
        <svg {...common}>
          <rect width="400" height="300" fill={t0} />
          <circle cx="320" cy="70" r="34" fill={surface} opacity="0.7" />
          <rect y="238" width="400" height="62" fill={t1} />
          <path d="M90 238 V140 L190 70 L290 140 V238 Z" fill={surface} />
          <path d="M75 148 L190 62 L305 148" stroke={ink} strokeWidth="10" strokeLinejoin="round" fill="none" />
          <rect x="170" y="170" width="40" height="68" rx="4" fill={ink} />
          <rect x="112" y="160" width="40" height="34" rx="3" fill={t2} />
          <rect x="228" y="160" width="40" height="34" rx="3" fill={t2} />
          <rect x="248" y="88" width="20" height="40" fill={ink} />
          <rect x="300" y="196" width="78" height="30" rx="15" fill={ink} />
          <circle cx="318" cy="211" r="7" fill={t1} />
          <rect x="331" y="207" width="36" height="8" rx="4" fill={surface} />
          <rect x="22" y="196" width="56" height="30" rx="15" fill={surface} />
          <rect x="34" y="207" width="32" height="8" rx="4" fill={t1} />
        </svg>
      );
    case "landscaping":
      return (
        <svg {...common}>
          <rect width="400" height="300" fill={background} />
          <path d="M0 170 C80 120 160 140 230 150 C300 160 350 120 400 130 V300 H0 Z" fill={t0} />
          <path d="M0 210 C90 180 180 200 260 195 C330 190 370 175 400 180 V300 H0 Z" fill={t1} />
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
            <rect key={i} x={170 + i * 32} y="235" width="28" height="65" fill={t2} opacity={0.9 - i * 0.05} />
          ))}
          <path d="M60 210 V150" stroke={ink} strokeWidth="6" />
          <circle cx="60" cy="130" r="38" fill={t1} />
          <circle cx="85" cy="150" r="24" fill={ink} opacity="0.3" />
          <path d="M330 175 V125" stroke={ink} strokeWidth="5" />
          <circle cx="330" cy="108" r="28" fill={t1} />
          <ellipse cx="120" cy="250" rx="40" ry="14" fill={ink} opacity="0.25" />
          <circle cx="110" cy="240" r="14" fill={t0} />
          <circle cx="132" cy="242" r="11" fill={t0} />
        </svg>
      );
    case "courtyard":
      return (
        <svg {...common}>
          <rect width="400" height="300" fill={t0} />
          <rect y="232" width="400" height="68" fill={background} />
          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <path key={i} d={`M${i * 40} 232 l20 34 l20 -34`} stroke={t1} strokeWidth="2" fill="none" opacity="0.6" />
          ))}
          {[30, 150, 270].map((x) => (
            <path key={x} d={`M${x} 232 V110 a50 50 0 0 1 100 0 V232 Z`} fill={t1} />
          ))}
          {[42, 162, 282].map((x) => (
            <path key={x} d={`M${x} 232 V116 a38 38 0 0 1 76 0 V232 Z`} fill={surface} opacity="0.75" />
          ))}
          <rect x="182" y="200" width="36" height="32" rx="4" fill={ink} />
          <path d="M200 200 V160" stroke={ink} strokeWidth="4" />
          <circle cx="200" cy="150" r="24" fill={t2} />
          <circle cx="184" cy="160" r="14" fill={t2} />
          <circle cx="217" cy="160" r="14" fill={t2} />
          <rect x="62" y="196" width="36" height="12" rx="6" fill={t2} />
          <rect x="302" y="196" width="36" height="12" rx="6" fill={t2} />
        </svg>
      );
  }
}
