/* eslint-disable */
/* Llulls — product data + dog SVG illustrations.
   Each product has its own scene composition; dogs get drawn with simple shapes
   wearing the actual product. Coral / teal / navy / yellow brand palette only. */

const PRODUCTS = [
  {
    id: 'chaleco',
    name: "Jersey Malasaña",
    tagline: "Con mangas para días muy fríos.",
    blurb: "Relleno reciclado, repelente al agua, con cierre lateral. Pesa menos que una manzana.",
    price: 40,
    bg: '#FBE6E3',
    garmentColor: '#E85D5D',
    accentColor: '#F4C152',
    dog: 'corgi',
    photo: 'assets/chaleco.png',
  },
  {
    id: 'pajarita',
    name: "Camiseta Fuencarral",
    tagline: "Sin mangas porque hace frío pero no tanto.",
    blurb: "Cierre velcro sobre el collar, tela italiana. Para bodas, cumpleaños y cenas importantes.",
    price: 22,
    bg: '#E2EAF1',
    garmentColor: '#0F3B5E',
    accentColor: '#E85D5D',
    dog: 'dachshund',
  },
  {
    id: 'collar',
    name: "Collar Martingale",
    tagline: "Para los cuellos largos que no aguantan los collares clásicos.",
    blurb: "Doble anilla con tirante de seguridad. Tejido suave, no roza, no se sale.",
    price: 15,
    bg: '#DCF1F0',
    garmentColor: '#2BA9A9',
    accentColor: '#F4C152',
    dog: 'galgo-collar',
  },
  {
    id: 'correa',
    name: "Correa de 2 puntos",
    tagline: "Doble enganche para más control en los paseos largos.",
    blurb: "Sujeción en pecho y collar. Cuerda náutica trenzada, ajustable, asa acolchada.",
    price: 15,
    bg: '#FBEFD2',
    garmentColor: '#E85D5D',
    accentColor: '#0F3B5E',
    dog: 'beagle-leash',
  },
];

/* ---------- Dog SVG illustrations ----------
   Each dog is drawn with a flat illustrative style on a background color.
   The "garment" prop receives the product's main color so the same dog
   could in theory wear different items. */

function DogScene({ product, w = 360, h = 360 }) {
  const { dog, bg, garmentColor, accentColor } = product;
  return (
    <svg viewBox="0 0 360 360" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      <rect width="360" height="360" fill={bg} />
      {dog === 'labrador'  && <Labrador  garment={garmentColor} accent={accentColor} product={product} />}
      {dog === 'beagle'    && <Beagle    garment={garmentColor} accent={accentColor} product={product} />}
      {dog === 'corgi'     && <Corgi     garment={garmentColor} accent={accentColor} product={product} />}
      {dog === 'dachshund' && <Dachshund garment={garmentColor} accent={accentColor} product={product} />}
      {dog === 'galgo-collar' && <GalgoCollar garment={garmentColor} accent={accentColor} />}
      {dog === 'beagle-leash' && <BeagleLeash garment={garmentColor} accent={accentColor} />}
    </svg>
  );
}

/* ---------- Labrador wearing the yellow rain coat ---------- */
function Labrador({ garment, accent }) {
  const fur = '#C9A574';
  const furDark = '#A8895E';
  return (
    <g>
      {/* ground shadow */}
      <ellipse cx="180" cy="310" rx="120" ry="10" fill="rgba(15,59,94,0.08)" />
      {/* hind leg */}
      <rect x="232" y="240" width="26" height="70" rx="10" fill={fur} />
      {/* front legs */}
      <rect x="118" y="240" width="22" height="70" rx="9" fill={furDark} />
      <rect x="150" y="240" width="22" height="70" rx="9" fill={fur} />
      {/* body */}
      <ellipse cx="190" cy="220" rx="105" ry="60" fill={fur} />
      {/* raincoat covering body */}
      <path d="M 100 215 Q 100 168 190 162 Q 280 168 280 215 L 280 252 Q 240 268 190 268 Q 140 268 100 252 Z"
        fill={garment} />
      {/* coat stripe / reflector */}
      <rect x="100" y="232" width="180" height="6" fill={accent} opacity="0.85" />
      {/* hood */}
      <path d="M 92 145 Q 100 100 175 95 Q 240 100 248 145 L 240 175 Q 175 165 100 175 Z" fill={garment} />
      {/* head */}
      <ellipse cx="170" cy="155" rx="58" ry="48" fill={fur} />
      {/* ear */}
      <path d="M 122 130 Q 108 115 110 145 Q 115 165 130 160 Z" fill={furDark} />
      {/* snout */}
      <ellipse cx="135" cy="170" rx="28" ry="22" fill={fur} />
      {/* nose */}
      <ellipse cx="115" cy="168" rx="9" ry="7" fill="#1A1A1A" />
      {/* eye */}
      <circle cx="158" cy="148" r="4.5" fill="#1A1A1A" />
      <circle cx="159" cy="146.5" r="1.5" fill="#fff" />
      {/* mouth */}
      <path d="M 122 178 Q 130 184 138 180" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* tag on coat */}
      <circle cx="220" cy="200" r="9" fill={accent} />
      <text x="220" y="204" textAnchor="middle" fontSize="9" fontFamily="Georgia" fill="#0F3B5E">L</text>
    </g>
  );
}

/* ---------- Beagle wearing the teal striped sweater ---------- */
function Beagle({ garment, accent }) {
  const white = '#FAF6F0';
  const brown = '#8B5A2B';
  const black = '#1A1A1A';
  return (
    <g>
      <ellipse cx="180" cy="310" rx="120" ry="10" fill="rgba(15,59,94,0.08)" />
      {/* legs */}
      <rect x="120" y="245" width="22" height="65" rx="9" fill={white} />
      <rect x="152" y="245" width="22" height="65" rx="9" fill={brown} />
      <rect x="220" y="245" width="22" height="65" rx="9" fill={white} />
      <rect x="248" y="245" width="22" height="65" rx="9" fill={white} />
      {/* tail */}
      <path d="M 285 200 Q 312 180 308 160 L 295 165 Q 298 182 282 210 Z" fill={brown} />
      <rect x="298" y="158" width="14" height="10" fill={white} />
      {/* body (sweater) */}
      <path d="M 100 230 Q 100 175 195 168 Q 290 175 290 230 L 285 252 Q 240 263 195 263 Q 110 263 100 252 Z" fill={garment} />
      {/* sweater stripes */}
      <rect x="100" y="185" width="190" height="8" fill={accent} />
      <rect x="100" y="208" width="190" height="8" fill={accent} />
      <rect x="100" y="230" width="190" height="8" fill={accent} />
      {/* sweater neck */}
      <ellipse cx="195" cy="170" rx="42" ry="12" fill={accent} />
      {/* head */}
      <ellipse cx="170" cy="142" rx="56" ry="46" fill={white} />
      {/* brown patch on head */}
      <path d="M 130 110 Q 165 95 205 108 Q 215 130 200 145 Q 165 138 130 145 Z" fill={brown} />
      {/* ears (long, beagle) */}
      <path d="M 115 130 Q 95 145 100 195 Q 115 200 128 175 Q 130 152 125 132 Z" fill={brown} />
      <path d="M 218 122 Q 240 138 232 180 Q 220 188 210 165 Q 208 144 212 128 Z" fill={brown} />
      {/* snout */}
      <ellipse cx="138" cy="158" rx="26" ry="20" fill={white} />
      <ellipse cx="119" cy="155" rx="8" ry="6.5" fill={black} />
      {/* eye */}
      <circle cx="158" cy="138" r="4.5" fill={black} />
      <circle cx="159" cy="136.5" r="1.5" fill="#fff" />
      <path d="M 124 168 Q 134 174 142 170" stroke={black} strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ---------- Corgi wearing the coral puffer vest ---------- */
function Corgi({ garment, accent }) {
  const fur = '#E89A4C';
  const white = '#FAF6F0';
  const black = '#1A1A1A';
  return (
    <g>
      <ellipse cx="180" cy="310" rx="125" ry="10" fill="rgba(15,59,94,0.08)" />
      {/* short legs */}
      <rect x="120" y="270" width="20" height="40" rx="8" fill={white} />
      <rect x="148" y="270" width="20" height="40" rx="8" fill={fur} />
      <rect x="220" y="270" width="20" height="40" rx="8" fill={white} />
      <rect x="248" y="270" width="20" height="40" rx="8" fill={white} />
      {/* body — long, low corgi */}
      <ellipse cx="195" cy="240" rx="110" ry="42" fill={fur} />
      {/* white belly */}
      <ellipse cx="195" cy="258" rx="92" ry="20" fill={white} />
      {/* puffer vest with quilted segments */}
      <path d="M 110 232 Q 110 200 195 195 Q 280 200 282 232 L 278 258 Q 240 268 195 268 Q 130 268 110 258 Z" fill={garment} />
      {/* quilting lines */}
      <line x1="140" y1="200" x2="138" y2="262" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="175" y1="197" x2="174" y2="266" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="215" y1="197" x2="216" y2="266" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="250" y1="200" x2="252" y2="262" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="110" y1="218" x2="282" y2="218" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      <line x1="115" y1="240" x2="278" y2="240" stroke={accent} strokeWidth="1.5" opacity="0.6" />
      {/* zipper */}
      <line x1="195" y1="195" x2="195" y2="268" stroke={accent} strokeWidth="2.5" />
      {/* head */}
      <ellipse cx="170" cy="155" rx="55" ry="48" fill={fur} />
      {/* white snout/chest blaze */}
      <path d="M 152 160 Q 158 195 175 195 L 175 175 Q 165 170 162 160 Z" fill={white} />
      {/* ears (big, pointy) */}
      <path d="M 132 110 Q 122 80 140 90 Q 150 105 145 130 Z" fill={fur} />
      <path d="M 195 108 Q 210 80 218 95 Q 218 115 205 130 Z" fill={fur} />
      <path d="M 134 112 Q 130 95 142 100 Q 146 113 142 125 Z" fill={white} opacity="0.7" />
      {/* snout */}
      <ellipse cx="135" cy="170" rx="22" ry="18" fill={white} />
      <ellipse cx="121" cy="167" rx="7" ry="5.5" fill={black} />
      {/* eye */}
      <circle cx="158" cy="150" r="4.5" fill={black} />
      <circle cx="159" cy="148.5" r="1.5" fill="#fff" />
      <path d="M 126 178 Q 134 184 142 180" stroke={black} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* tongue */}
      <ellipse cx="138" cy="184" rx="4" ry="3" fill="#E85D5D" opacity="0.8" />
    </g>
  );
}

/* ---------- Dachshund wearing the navy bow tie ---------- */
function Dachshund({ garment, accent }) {
  const fur = '#7A4A22';
  const furLight = '#A0683A';
  const black = '#1A1A1A';
  return (
    <g>
      <ellipse cx="180" cy="310" rx="135" ry="10" fill="rgba(15,59,94,0.08)" />
      {/* very short legs */}
      <rect x="115" y="278" width="18" height="32" rx="7" fill={fur} />
      <rect x="142" y="278" width="18" height="32" rx="7" fill={fur} />
      <rect x="225" y="278" width="18" height="32" rx="7" fill={fur} />
      <rect x="252" y="278" width="18" height="32" rx="7" fill={fur} />
      {/* tail — long, curved up */}
      <path d="M 295 250 Q 330 220 320 195 L 308 198 Q 312 220 285 258 Z" fill={fur} />
      {/* body — very long, low */}
      <rect x="100" y="232" width="195" height="58" rx="28" fill={fur} />
      {/* lighter belly */}
      <rect x="115" y="262" width="170" height="26" rx="13" fill={furLight} />
      {/* head */}
      <ellipse cx="100" cy="218" rx="40" ry="38" fill={fur} />
      {/* long snout */}
      <ellipse cx="62" cy="232" rx="32" ry="16" fill={fur} />
      <ellipse cx="38" cy="232" rx="8" ry="6" fill={black} />
      {/* long ear */}
      <path d="M 88 200 Q 70 215 70 250 Q 85 255 100 235 Q 105 215 100 200 Z" fill={furLight} />
      {/* eye */}
      <circle cx="92" cy="215" r="4" fill={black} />
      <circle cx="93" cy="213.5" r="1.3" fill="#fff" />
      <path d="M 50 240 Q 60 246 70 242" stroke={black} strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* collar */}
      <rect x="115" y="232" width="22" height="14" fill={accent} />
      {/* THE BOW TIE — the actual product */}
      <g transform="translate(125, 240)">
        <path d="M -16 -10 L -16 10 L 0 0 Z" fill={garment} />
        <path d="M 16 -10 L 16 10 L 0 0 Z" fill={garment} />
        <rect x="-5" y="-7" width="10" height="14" rx="2" fill={garment} />
        <rect x="-4" y="-2" width="8" height="2" fill={accent} opacity="0.5" />
      </g>
    </g>
  );
}

/* ---------- Galgo wearing the martingale collar ---------- */
function GalgoCollar({ garment, accent }) {
  const fur = '#E8DCC8';
  const furDark = '#C9B68F';
  const black = '#1A1A1A';
  return (
    <g>
      <ellipse cx="180" cy="312" rx="125" ry="9" fill="rgba(15,59,94,0.08)" />
      {/* tail — long, curved */}
      <path d="M 290 230 Q 322 200 318 175 L 308 180 Q 308 200 280 250 Z" fill={fur} />
      {/* hind legs — long thin */}
      <rect x="238" y="240" width="14" height="78" rx="6" fill={fur} />
      <rect x="254" y="240" width="14" height="78" rx="6" fill={furDark} />
      {/* front legs — long thin */}
      <rect x="112" y="238" width="14" height="80" rx="6" fill={fur} />
      <rect x="128" y="238" width="14" height="80" rx="6" fill={furDark} />
      {/* body — slim deep chest galgo */}
      <path d="M 110 215 Q 110 188 145 178 Q 200 168 252 178 Q 278 186 282 218 Q 280 244 252 250 Q 200 256 150 250 Q 115 244 110 215 Z" fill={fur} />
      {/* belly tuck */}
      <path d="M 140 245 Q 200 252 240 245 Q 230 258 200 260 Q 165 258 140 245 Z" fill={furDark} opacity="0.5" />
      {/* long arched neck */}
      <path d="M 130 195 Q 115 165 105 130 Q 100 110 115 105 Q 130 115 138 145 Q 145 175 150 200 Z" fill={fur} />
      {/* THE MARTINGALE COLLAR — main feature */}
      <g transform="translate(0, 0)">
        {/* collar band around neck */}
        <path d="M 108 138 Q 112 132 130 130 Q 145 130 148 138 L 145 152 Q 132 154 116 152 Z" fill={garment} />
        {/* highlight stripe on collar */}
        <path d="M 110 142 Q 130 140 146 142" stroke={accent} strokeWidth="2" fill="none" />
        {/* small D-ring at top */}
        <circle cx="127" cy="128" r="4" fill="none" stroke={accent} strokeWidth="1.8" />
        {/* martingale chain loop — characteristic of this collar */}
        <path d="M 120 152 Q 125 165 132 168 Q 140 165 145 152" stroke={garment} strokeWidth="3" fill="none" />
        <circle cx="132" cy="170" r="3.5" fill={accent} />
      </g>
      {/* head — narrow galgo */}
      <ellipse cx="92" cy="100" rx="32" ry="22" fill={fur} transform="rotate(-15 92 100)" />
      {/* long narrow snout */}
      <ellipse cx="64" cy="108" rx="22" ry="11" fill={fur} transform="rotate(-12 64 108)" />
      <ellipse cx="46" cy="108" rx="6" ry="5" fill={black} />
      {/* folded back ear */}
      <path d="M 108 86 Q 124 78 124 100 Q 116 105 104 96 Z" fill={furDark} />
      {/* eye */}
      <circle cx="84" cy="98" r="3" fill={black} />
      <circle cx="85" cy="97" r="1" fill="#fff" />
      <path d="M 56 116 Q 64 120 72 116" stroke={black} strokeWidth="1.5" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ---------- Beagle wearing the 2-point harness + leash ---------- */
function BeagleLeash({ garment, accent }) {
  const white = '#FAF6F0';
  const brown = '#8B5A2B';
  const tan = '#C9924C';
  const black = '#1A1A1A';
  return (
    <g>
      <ellipse cx="180" cy="312" rx="120" ry="9" fill="rgba(15,59,94,0.08)" />
      {/* legs */}
      <rect x="125" y="248" width="20" height="65" rx="8" fill={white} />
      <rect x="155" y="248" width="20" height="65" rx="8" fill={brown} />
      <rect x="220" y="248" width="20" height="65" rx="8" fill={white} />
      <rect x="248" y="248" width="20" height="65" rx="8" fill={white} />
      {/* tail */}
      <path d="M 282 200 Q 308 180 304 158 L 292 162 Q 294 180 278 212 Z" fill={brown} />
      <rect x="295" y="156" width="13" height="10" fill={white} />
      {/* body */}
      <ellipse cx="190" cy="222" rx="98" ry="48" fill={white} />
      {/* brown patches on body */}
      <path d="M 130 200 Q 170 175 215 188 Q 220 215 200 230 Q 160 222 128 222 Z" fill={brown} />
      <ellipse cx="245" cy="225" rx="32" ry="22" fill={tan} />
      {/* HARNESS — main feature, Y-shape on chest */}
      {/* chest strap */}
      <ellipse cx="190" cy="235" rx="80" ry="14" fill="none" stroke={garment} strokeWidth="9" strokeLinecap="round" />
      <ellipse cx="190" cy="235" rx="80" ry="14" fill="none" stroke={accent} strokeWidth="2" />
      {/* neck strap */}
      <path d="M 158 192 Q 175 175 196 175 Q 215 178 220 195" stroke={garment} strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M 158 192 Q 175 175 196 175 Q 215 178 220 195" stroke={accent} strokeWidth="2" fill="none" />
      {/* Y-connector on chest */}
      <path d="M 188 195 L 184 230 M 192 195 L 196 230" stroke={garment} strokeWidth="6" strokeLinecap="round" />
      {/* D-ring on back (clip point 1) */}
      <circle cx="220" cy="200" r="7" fill={accent} stroke={garment} strokeWidth="2" />
      {/* D-ring on chest (clip point 2) */}
      <circle cx="190" cy="212" r="6" fill={accent} stroke={garment} strokeWidth="2" />
      {/* THE 2-POINT LEASH — connecting both clips */}
      <path d="M 220 200 Q 280 140 320 90" stroke={garment} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M 190 212 Q 250 150 320 90" stroke={garment} strokeWidth="4" fill="none" strokeLinecap="round" />
      {/* leash handle at top */}
      <ellipse cx="318" cy="78" rx="18" ry="14" fill="none" stroke={garment} strokeWidth="5" />
      {/* handle padding */}
      <ellipse cx="318" cy="78" rx="14" ry="9" fill={accent} opacity="0.4" />
      {/* head */}
      <ellipse cx="170" cy="148" rx="54" ry="44" fill={white} />
      {/* brown patch on head */}
      <path d="M 132 120 Q 165 105 200 118 Q 210 138 196 152 Q 165 145 132 150 Z" fill={brown} />
      {/* long ears */}
      <path d="M 118 138 Q 100 152 105 200 Q 120 205 130 180 Q 132 158 128 138 Z" fill={brown} />
      <path d="M 218 132 Q 238 146 230 188 Q 218 195 210 172 Q 208 152 212 135 Z" fill={brown} />
      {/* snout */}
      <ellipse cx="138" cy="162" rx="26" ry="19" fill={white} />
      <ellipse cx="120" cy="159" rx="8" ry="6" fill={black} />
      <circle cx="158" cy="143" r="4.5" fill={black} />
      <circle cx="159" cy="141.5" r="1.4" fill="#fff" />
      <path d="M 126 172 Q 134 178 142 174" stroke={black} strokeWidth="2" fill="none" strokeLinecap="round" />
    </g>
  );
}

/* ---------- Customer carousel — small rounded "polaroid" style portraits ---------- */
function CustomerPortrait({ idx, name, dogName, item, garment, bg, fur, kind }) {
  return (
    <svg viewBox="0 0 280 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
      <rect width="280" height="280" fill={bg} />
      {/* sun / moon decoration */}
      <circle cx={kind % 2 === 0 ? 230 : 50} cy="55" r="22" fill={garment} opacity="0.25" />
      {/* dog body */}
      <ellipse cx="140" cy="200" rx="85" ry="50" fill={fur} />
      {/* garment over body */}
      <path d="M 70 195 Q 70 158 140 153 Q 210 158 210 195 L 208 220 Q 175 232 140 232 Q 105 232 72 220 Z" fill={garment} />
      {/* head */}
      <ellipse cx="115" cy="135" rx="48" ry="42" fill={fur} />
      {/* ear */}
      <path d="M 78 115 Q 65 105 70 145 Q 82 150 92 138 Z" fill={fur} opacity="0.85" />
      {/* snout */}
      <ellipse cx="85" cy="148" rx="22" ry="17" fill={fur} />
      <ellipse cx="68" cy="146" rx="7" ry="5.5" fill="#1A1A1A" />
      <circle cx="105" cy="128" r="4" fill="#1A1A1A" />
      <circle cx="106" cy="126.5" r="1.3" fill="#fff" />
      <path d="M 74 158 Q 82 163 90 159" stroke="#1A1A1A" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

Object.assign(window, { PRODUCTS, DogScene, CustomerPortrait });
