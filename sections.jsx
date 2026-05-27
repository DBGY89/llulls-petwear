/* eslint-disable */
const { useState, useEffect, useRef, useMemo } = React;

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
}

/* ============================================================
   Llulls — page components
   ============================================================ */

const SIZES = ['S', 'M', 'L'];

/* ---------- Tiny lucide-style stroke icons inline ---------- */
const Icon = {
  bag: (p = {}) =>
  <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 7h12l-1.2 12.2a2 2 0 0 1-2 1.8H9.2a2 2 0 0 1-2-1.8Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" />
    </svg>,

  search: (p = {}) =>
  <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
    </svg>,

  arrow: (p = {}) =>
  <svg width={p.size || 16} height={p.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m13 6 6 6-6 6" />
    </svg>,

  chev: (p = {}) =>
  <svg width={p.size || 20} height={p.size || 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={p.dir === 'left' ? "m15 6-6 6 6 6" : "m9 6 6 6-6 6"} />
    </svg>,

  x: (p = {}) =>
  <svg width={p.size || 18} height={p.size || 18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>,

  check: (p = {}) =>
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6 9 17l-5-5" />
    </svg>,

  plus: (p = {}) =>
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14" /><path d="M5 12h14" />
    </svg>,

  minus: (p = {}) =>
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
    </svg>,

  star: (p = {}) =>
  <svg width={p.size || 14} height={p.size || 14} viewBox="0 0 24 24" fill="#0F3B5E" stroke="none">
      <path d="m12 2 2.9 6.9 7.5.6-5.7 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3-5.7-4.9 7.5-.6Z" />
    </svg>

};

/* ---------- Llulls logo lockup (image) ---------- */
function LlullsLogo({ size = 36 }) {
  return (
    <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
      <img src={window.__resources?.logoImg || "assets/Logo.png"} alt="" style={{ width: size, height: size, display: 'block' }} />
      <span style={{
        fontFamily: 'Georgia, serif',
        fontSize: 22,
        color: 'var(--llulls-navy)',
        letterSpacing: '-0.01em'
      }}>Llulls</span>
    </a>);

}

/* ---------- Top announcement bar ---------- */
function AnnouncementBar() {
  const isMobile = useIsMobile();
  return (
    <div style={{
      background: 'var(--llulls-navy)',
      color: '#fff',
      padding: isMobile ? '10px 20px' : '10px 32px',
      textAlign: 'center',
      fontSize: isMobile ? 12 : 13,
      letterSpacing: '0.02em'
    }}>
      Envío gratis a partir de 60€ — devoluciones gratis durante 30 días.{' '}
      <a href="#" style={{ color: 'var(--llulls-yellow)', textDecoration: 'underline', fontWeight: 500, marginLeft: 6 }}>
        Ver condiciones <span style={{ display: 'inline-block', verticalAlign: '-2px' }}>→</span>
      </a>
    </div>);

}

/* ---------- Sticky nav with centered bouncing logo ---------- */
function TopNav({ cartCount, onOpenCart }) {
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);
  const items = [
  { id: 'tienda', label: 'Tienda' },
  { id: 'tallas', label: 'Guía de tallas' },
  { id: 'comunidad', label: 'Comunidad' },
  { id: 'historia', label: 'Nuestra historia' }];

  return (
    <nav style={{ zIndex: 50 }}>
      {/* Top white band for logo + cart (not sticky) */}
      <div style={{
        background: '#fff',
        padding: isMobile ? '16px 20px' : '24px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative'
      }}>
        <div style={{
          width: isMobile ? 52 : 72, height: isMobile ? 52 : 72,
          animation: 'llulls-bounce 2s ease-in-out infinite'
        }}>
          <img src={window.__resources?.logoImg || "assets/Logo.png"} alt="Llulls" style={{ width: isMobile ? 52 : 72, height: isMobile ? 52 : 72, display: 'block' }} />
        </div>

        {/* Cart in top right */}
        <div style={{
          position: 'absolute',
          right: isMobile ? 20 : 40,
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--llulls-navy)'
        }}>
          <button onClick={onOpenCart} style={{ ...iconBtn, position: 'relative' }} aria-label="Cart">
            <Icon.bag size={22} />
            {cartCount > 0 &&
            <span style={{
              position: 'absolute', top: -4, right: -6,
              minWidth: 18, height: 18, padding: '0 5px',
              borderRadius: 100, background: 'var(--llulls-coral)',
              color: '#fff', fontSize: 10, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'Helvetica Neue, sans-serif'
            }}>{cartCount}</span>
            }
          </button>
        </div>
      </div>

      <style>{`
        @keyframes llulls-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </nav>);

}
const iconBtn = {
  background: 'transparent', border: 'none', cursor: 'pointer',
  color: 'inherit', padding: 4, display: 'flex', alignItems: 'center'
};

/* ---------- Hero ---------- */
function Hero() {
  const isMobile = useIsMobile();
  return (
    <section style={{
      padding: isMobile ? '12px 20px 48px' : '72px 40px 96px',
      background: '#fff',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.05fr 0.95fr', gap: 80, alignItems: 'center', zIndex: 1 }}>
        <div>

          {/* Polaroid — mobile only */}
          {isMobile && (
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
              <div style={{
                position: 'relative',
                width: 280,
                background: '#fff',
                padding: '12px 12px 28px',
                transform: 'rotate(2deg)',
                boxShadow: '0 8px 32px rgba(15,17,23,0.13)',
              }}>
                <img
                  src="assets/chaleco.png"
                  alt="Llull"
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    objectFit: 'cover',
                    objectPosition: 'center 15%',
                    display: 'block',
                  }}
                />
                <div style={{ marginTop: 10, textAlign: 'center' }}>
                  <div style={{
                    fontFamily: 'Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: 17,
                    color: 'var(--llulls-navy)',
                  }}>Llull, el jefe.</div>
                  <div style={{
                    marginTop: 4,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--color-gray-500)',
                  }}>Madrid, 2022</div>
                </div>
                {/* Sticker */}
                <div style={{
                  position: 'absolute',
                  bottom: 12,
                  right: -6,
                  background: '#F4C152',
                  color: 'var(--llulls-navy)',
                  fontSize: 11,
                  fontWeight: 700,
                  borderRadius: 100,
                  padding: '6px 10px',
                  transform: 'rotate(-8deg)',
                  whiteSpace: 'nowrap',
                }}>★ El original</div>
              </div>
            </div>
          )}

          <h1 style={{
            fontFamily: 'Georgia, serif', fontWeight: 400,
            fontSize: isMobile ? 'clamp(32px, 8vw, 42px)' : 'clamp(44px, 5.4vw, 76px)',
            letterSpacing: '-0.015em',
            color: 'var(--llulls-navy)',
            textWrap: 'pretty', lineHeight: typeof TWEAK_DEFAULTS !== 'undefined' && TWEAK_DEFAULTS.heroLineHeight || 1.1
          }}>
            Marca diseñada para galgos. Inspirada por <span style={{ color: '#e85d5d' }}>Llull.</span>
          </h1>

          <div style={{ marginTop: isMobile ? 16 : 36, display: 'flex', gap: 12, alignItems: 'center' }}>
            <a href="#tienda" style={{
              background: 'var(--llulls-navy)', color: '#fff',
              padding: '15px 28px', borderRadius: 4,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              fontSize: 12, fontWeight: 500, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 10,
              ...(isMobile ? { width: '100%', justifyContent: 'center' } : {})
            }}>
              Ver la colección <Icon.arrow size={14} />
            </a>
          </div>
        </div>

        {/* Right column: featured product card — hidden on mobile */}
        {!isMobile && (
          <div style={{ position: 'relative' }}>
            <HeroProductCard product={PRODUCTS[0]} />
          </div>
        )}
      </div>
    </section>);

}

function Stat({ n, l }) {
  return (
    <div>
      <div style={{ fontFamily: 'Georgia, serif', fontSize: 26, color: 'var(--llulls-navy)', lineHeight: 1 }}>{n}</div>
      <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4, letterSpacing: '0.02em' }}>{l}</div>
    </div>);

}

function HeroProductCard({ product }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 8,
      border: '0.5px solid rgba(15,59,94,0.12)',
      boxShadow: '0 20px 48px rgba(15,17,23,0.10)',
      overflow: 'hidden',
      position: 'relative',
      transform: 'rotate(1.2deg)'
    }}>
      <div style={{ aspectRatio: '1 / 1', background: product.bg, overflow: 'hidden' }}>
        {product.photo ?
        <img src={product.photo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
        <DogScene product={product} />
        }
      </div>
      <div style={{ padding: '20px 22px 22px', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 6 }}>Más vendido</div>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: 'var(--llulls-navy)', fontWeight: 400 }}>{product.name}</h3>
          <div style={{ fontSize: 13, color: 'var(--color-gray-500)', marginTop: 4 }}>{product.tagline}</div>
        </div>
        <div style={{ fontFamily: 'Georgia, serif', fontSize: 24, color: 'var(--llulls-navy)' }}>{product.price}€</div>
      </div>
    </div>);

}

/* ---------- Marquee — what they wear ---------- */
function Marquee() {
  const isMobile = useIsMobile();
  const items = ['Algodón orgánico', '· Hecho en Madrid', '· ¿Hay algo más impactante que ver a un galgo corriendo?', '· ¿Tu también te quedaste sin sofá?', '· ¿Tu también te quedaste sin sofá?', '· Ediciones limitadas'];
  return (
    <div style={{
      background: 'var(--llulls-navy)',
      color: 'var(--llulls-yellow)',
      padding: '18px 0',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }}>
      <div style={{
        display: 'flex', gap: 36, whiteSpace: 'nowrap',
        animation: 'llulls-marquee 25s linear infinite',
        fontFamily: 'Georgia, serif', fontSize: isMobile ? 17 : 22, fontStyle: 'italic'
      }}>
        {[...items, ...items, ...items].map((t, i) =>
        <span key={i} style={{ paddingRight: 10 }}>{t}</span>
        )}
      </div>
      <style>{`
        @keyframes llulls-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
      `}</style>
    </div>);

}

/* ---------- Product grid ---------- */
function ProductGrid({ onAddToCart, onViewProduct }) {
  const isMobile = useIsMobile();
  const armario = PRODUCTS.filter((p) => p.id === 'chaleco' || p.id === 'pajarita');
  const complementos = PRODUCTS.filter((p) => p.id === 'collar' || p.id === 'correa');

  const groupHeader = (label) =>
  <div style={{
    fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase',
    letterSpacing: '0.14em', fontWeight: 500, marginBottom: 24
  }}>{label}</div>;


  const grid = (items) =>
  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? 20 : 32 }}>
      {items.map((p, i) =>
    <ProductCard key={p.id} product={p} index={i} onAddToCart={onAddToCart} onViewProduct={onViewProduct} />
    )}
    </div>;


  return (
    <section id="tienda" style={{ padding: isMobile ? '56px 20px 48px' : '120px 40px 80px', background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: isMobile ? 40 : 72, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 500, marginBottom: 14 }}>La colección</div>
            <h2 style={{
              fontFamily: 'Georgia, serif', fontWeight: 400,
              fontSize: 'clamp(36px, 4vw, 52px)',
              color: 'var(--llulls-navy)', letterSpacing: '-0.01em',
              maxWidth: 720, lineHeight: 1.05
            }}>
              Los básicos del armario de un <em style={{ fontStyle: 'italic', color: 'var(--llulls-coral)' }}>galgo.</em>
            </h2>
          </div>
        </div>

        {/* Group 1 — El armario */}
        {groupHeader('El armario')}
        {grid(armario)}

        {/* Group 2 — Los complementos */}
        <div style={{ marginTop: isMobile ? 48 : 72 }}>
          {groupHeader('Los complementos')}
          {grid(complementos)}
        </div>
      </div>
    </section>);

}

function ProductCard({ product, index, onAddToCart, onViewProduct }) {
  const isMobile = useIsMobile();
  const [size, setSize] = useState('M');
  const [hover, setHover] = useState(false);
  const [added, setAdded] = useState(false);
  const [showSizes, setShowSizes] = useState(false);
  const tableRef = React.useRef(null);

  const isAccessory = product.id === 'collar' || product.id === 'correa';
  const linkLabel = product.id === 'correa' ?
  '¿Qué talla de correa es mi perro?' :
  isAccessory ?
  '¿Qué talla de collar es mi perro?' :
  '¿Qué talla de ropa es mi perro?';
  const ropaRows = [
  { size: 'S', pecho: '70 - 75 cm', espalda: '65 - 70 cm' },
  { size: 'M', pecho: '76 - 81 cm', espalda: '71 - 76 cm' },
  { size: 'L', pecho: '82 - 86 cm', espalda: '77 - 84 cm' }];

  const accRows = [
  { size: 'S', cuello: '28 - 32 cm' },
  { size: 'M', cuello: '33 - 38 cm' },
  { size: 'L', cuello: '39 - 45 cm' }];


  const handleAdd = () => {
    onAddToCart({ ...product, size });
    setAdded(true);
    setTimeout(() => setAdded(false), 1400);
  };

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => onViewProduct(product)}
      style={{
        background: '#fff',
        borderRadius: 8,
        border: '0.5px solid rgba(15,59,94,0.10)',
        overflow: 'hidden',
        transition: 'box-shadow 220ms cubic-bezier(0.22,1,0.36,1), transform 220ms',
        boxShadow: hover ? '0 16px 40px rgba(15,17,23,0.10)' : '0 1px 2px rgba(15,17,23,0.04)',
        transform: hover ? 'translateY(-2px)' : 'none',
        cursor: 'pointer'
      }}>
      
      {/* Image area */}
      <div style={{
        position: 'relative',
        aspectRatio: '4 / 3',
        background: product.bg,
        overflow: 'hidden'
      }}>
        {product.photo ?
        <img src={product.photo} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
        <DogScene product={product} />
        }
      </div>

      {/* Body */}
      <div style={{ padding: isMobile ? '18px 16px 18px' : '24px 26px 26px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16 }}>
          <h3 style={{ fontFamily: 'Georgia, serif', fontSize: isMobile ? 22 : 26, color: 'var(--llulls-navy)', fontWeight: 400, letterSpacing: '-0.005em' }}>
            {product.name}
          </h3>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: 'var(--llulls-navy)' }}>
            {product.price}€
          </div>
        </div>
        <p style={{ marginTop: 8, fontSize: 14, color: 'var(--color-gray-500)' }}>{product.tagline}</p>

        {/* Sizes + add */}
        <div style={{ marginTop: 22, display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {SIZES.map((s) =>
            <button
              key={s}
              onClick={(e) => {e.stopPropagation();setSize(s);}}
              style={{
                width: isMobile ? 40 : 44, height: isMobile ? 40 : 44, borderRadius: 4,
                border: size === s ? '1.5px solid var(--llulls-navy)' : '0.5px solid rgba(15,59,94,0.22)',
                background: size === s ? 'var(--llulls-navy)' : '#fff',
                color: size === s ? '#fff' : 'var(--llulls-navy)',
                cursor: 'pointer', fontWeight: 500, fontSize: 13,
                transition: 'all 160ms',
                letterSpacing: '0.05em'
              }}>
              {s}</button>
            )}
          </div>

          <button
            onClick={(e) => {e.stopPropagation();handleAdd();}}
            style={{
              marginLeft: 'auto',
              padding: isMobile ? '11px 12px' : '13px 22px',
              background: added ? 'var(--llulls-teal)' : 'var(--llulls-coral)',
              color: '#fff', border: 'none', borderRadius: 4,
              fontSize: 12, fontWeight: 500, textTransform: 'uppercase',
              letterSpacing: '0.1em', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'background 200ms'
            }}>
            
            {added ? <><Icon.check size={14} /> Añadido</> : <>Añadir · {product.price}€</>}
          </button>
        </div>

        {/* Sizing chart toggle link */}
        <button
          onClick={(e) => {e.stopPropagation();setShowSizes((s) => !s);}}
          style={{
            marginTop: 16, background: 'transparent', border: 'none',
            padding: 0, cursor: 'pointer', fontFamily: 'inherit',
            color: 'var(--llulls-navy)', opacity: 0.55,
            fontSize: 12.5, display: 'inline-flex', alignItems: 'center', gap: 4,
            transition: 'opacity 160ms'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = 0.85}
          onMouseLeave={(e) => e.currentTarget.style.opacity = 0.55}>
          
          {linkLabel}
          <span style={{
            display: 'inline-block',
            transition: 'transform 280ms cubic-bezier(0.22,1,0.36,1)',
            transform: showSizes ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>↓</span>
        </button>

        {/* Collapsible sizing table */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: 'grid',
            gridTemplateRows: showSizes ? '1fr' : '0fr',
            transition: 'grid-template-rows 320ms cubic-bezier(0.22,1,0.36,1), margin-top 320ms',
            marginTop: showSizes ? 12 : 0
          }}>
          
          <div style={{ overflow: 'hidden' }}>
            <div style={{
              background: 'var(--color-cream)',
              borderRadius: 6,
              padding: '14px 16px',
              opacity: showSizes ? 1 : 0,
              transition: 'opacity 280ms 60ms'
            }}>
              {isAccessory ?
              <>
                  <div style={{
                  display: 'grid', gridTemplateColumns: '50px 1fr', gap: 12,
                  paddingBottom: 8, borderBottom: '0.5px solid rgba(15,59,94,0.08)',
                  fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: 'var(--color-gray-500)', fontWeight: 500
                }}>
                    <span>Talla</span><span>Perímetro del cuello</span>
                  </div>
                  {accRows.map((r) =>
                <div key={r.size} style={{
                  display: 'grid', gridTemplateColumns: '50px 1fr', gap: 12,
                  padding: '8px 0', alignItems: 'center',
                  fontSize: 13, color: 'var(--llulls-navy)',
                  borderBottom: '0.5px dashed rgba(15,59,94,0.06)'
                }}>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: 16 }}>{r.size}</span>
                      <span>{r.cuello}</span>
                    </div>
                )}
                </> :

              <>
                  <div style={{
                  display: 'grid', gridTemplateColumns: '50px 1fr 1fr', gap: 12,
                  paddingBottom: 8, borderBottom: '0.5px solid rgba(15,59,94,0.08)',
                  fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: 'var(--color-gray-500)', fontWeight: 500
                }}>
                    <span>Talla</span><span>Pecho</span><span>Espalda</span>
                  </div>
                  {ropaRows.map((r) =>
                <div key={r.size} style={{
                  display: 'grid', gridTemplateColumns: '50px 1fr 1fr', gap: 12,
                  padding: '8px 0', alignItems: 'center',
                  fontSize: 13, color: 'var(--llulls-navy)',
                  borderBottom: '0.5px dashed rgba(15,59,94,0.06)'
                }}>
                      <span style={{ fontFamily: 'Georgia, serif', fontSize: 16 }}>{r.size}</span>
                      <span>{r.pecho}</span>
                      <span>{r.espalda}</span>
                    </div>
                )}
                </>
              }
            </div>
          </div>
        </div>

      </div>
    </article>);

}

/* ---------- Sizing band ---------- */
function SizingBand() {
  const isMobile = useIsMobile();
  const rows = [
  { size: 'S', pecho: '70 - 75 cm', espalda: '65 - 70 cm', color: '#2BA9A9' },
  { size: 'M', pecho: '76 - 81 cm', espalda: '71 - 76 cm', color: '#E89A4C' },
  { size: 'L', pecho: '82 - 86 cm', espalda: '77 - 84 cm', color: '#0F3B5E' }];

  return (
    <section id="tallas" style={{ padding: isMobile ? '48px 20px' : '120px 40px', background: '#fff', borderTop: '0.5px solid rgba(15,59,94,0.08)', borderBottom: '0.5px solid rgba(15,59,94,0.08)' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '0.9fr 1.1fr', gap: isMobile ? 40 : 80, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 500, marginBottom: 16 }}>Guía de tallas</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 3.4vw, 44px)', color: 'var(--llulls-navy)', fontWeight: 400, lineHeight: 1.1 }}>
            ¿Cómo sé la talla<br />de ropa de mi perro?
          </h2>
          <p style={{ marginTop: 20, fontSize: 16, lineHeight: 1.65, color: 'var(--color-gray-700)' }}>
            Mide desde el collar hasta la base de la cola y luego
            mide la circunferencia de la parte más ancha del pecho.
          </p>
        </div>

        {/* Sizing card */}
        <div style={{ background: 'var(--color-cream)', borderRadius: 8, border: '0.5px solid rgba(15,59,94,0.12)', overflow: 'hidden' }}>
          <div style={{ padding: '18px 24px', borderBottom: '0.5px solid rgba(15,59,94,0.10)', display: 'grid', gridTemplateColumns: '70px 1fr 1fr', gap: 16, fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-gray-500)', fontWeight: 500 }}>
            <span>Talla</span><span>Pecho</span><span>Espalda</span>
          </div>
          {rows.map((r) =>
          <div key={r.size} style={{ padding: '18px 24px', borderBottom: '0.5px solid rgba(15,59,94,0.06)', display: 'grid', gridTemplateColumns: '70px 1fr 1fr', gap: 16, alignItems: 'center', fontSize: 14, color: 'var(--llulls-navy)' }}>
              <span style={{ fontFamily: 'Georgia, serif', fontSize: 22, fontWeight: 500, color: r.color }}>{r.size}</span>
              <span>{r.pecho}</span>
              <span>{r.espalda}</span>
            </div>
          )}
        </div>
      </div>
    </section>);

}

/* ---------- Customer carousel — dog photos ---------- */
const CUSTOMERS = [
{ dog: 'Lola', item: 'El Pescador', bg: '#FBEFD2', garment: '#F4C152', fur: '#C9A574', city: 'Bilbao', stars: 5 },
{ dog: 'Bretzel', item: 'El Chaleco', bg: '#FBE6E3', garment: '#E85D5D', fur: '#E89A4C', city: 'Madrid', stars: 5, photo: window.__resources?.bretzelImg || 'assets/Bretzel.png' },
{ dog: 'Ramón', item: 'El Chaleco', bg: '#FBE6E3', garment: '#E85D5D', fur: '#E89A4C', city: 'Madrid', stars: 5 },
{ dog: 'Fideo', item: 'La Pajarita', bg: '#E2EAF1', garment: '#0F3B5E', fur: '#7A4A22', city: 'Barcelona', stars: 4 },
{ dog: 'Nube', item: 'El Marinero', bg: '#FBEFD2', garment: '#2BA9A9', fur: '#FAF6F0', city: 'San Sebastián', stars: 5 },
{ dog: 'Pancho', item: 'El Pescador', bg: '#E2EAF1', garment: '#F4C152', fur: '#8B5A2B', city: 'Zaragoza', stars: 5 },
{ dog: 'Coco', item: 'El Chaleco', bg: '#DCF1F0', garment: '#E85D5D', fur: '#FAF6F0', city: 'Sevilla', stars: 5 },
{ dog: 'Bruno', item: 'La Pajarita', bg: '#FBE6E3', garment: '#0F3B5E', fur: '#1A1A1A', city: 'Málaga', stars: 5 }];


const QUOTES = [
"Lola se quitaba todos los chubasqueros que le ponía. Este se lo deja toda la mañana.",
"Le queda como hecho a medida. Y no suelta pelo por dentro.",
"Pedí la M, le va perfecta. Llegó en 24h.",
"Para la boda de mi hermano. Todos preguntaban dónde la había comprado.",
"Me lo recomendó mi veterinaria. Ya he comprado dos.",
"El pelaje no se enreda con las costuras. Por fin.",
"Es coral pero queda bien con todo. Hasta con barro.",
"Mi perro detesta la ropa. Esta no se la quita."];


function Carousel() {
  const isMobile = useIsMobile();
  return (
    <section id="comunidad" style={{ padding: isMobile ? '56px 0 48px' : '120px 0 100px', background: 'var(--llulls-navy)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* deco */}
      <div aria-hidden style={{ position: 'absolute', top: 60, right: -80, width: 280, height: 280, borderRadius: '50%', background: 'var(--llulls-teal)', opacity: 0.85 }} />
      <div aria-hidden style={{ position: 'absolute', bottom: -100, left: -60, width: 220, height: 220, borderRadius: '50%', background: 'var(--llulls-coral)', opacity: 1 }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px', position: 'relative' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, color: 'var(--llulls-yellow)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 500, marginBottom: 16 }}>EL CLUB DE LLULL — @SOYLLULL</div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: isMobile ? 28 : 'clamp(36px, 4.2vw, 56px)', fontWeight: 400, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.01em', maxWidth: 720 }}>
            En este club <em style={{ fontStyle: 'italic', color: 'var(--llulls-coral)' }}>saben de fashion.</em>
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: 'rgba(255,255,255,0.72)', maxWidth: 540 }}>
            Fotos enviadas por nuestra comunidad. Etiqueta a @soyllull en Instagram y sé parte del fashion club.
          </p>
        </div>
      </div>

      {/* Auto-scrolling marquee track */}
      <div style={{ position: 'relative', overflow: 'hidden', padding: '8px 0 40px' }}>
        <div className="llulls-carousel-track" style={{
          display: 'flex', gap: 24, width: 'max-content',
          animation: 'llulls-carousel 60s linear infinite',
          paddingLeft: 24
        }}>
          {[...CUSTOMERS, ...CUSTOMERS].map((c, i) =>
          <CustomerCard key={i} idx={i} c={c} active={false} isMobile={isMobile} />
          )}
        </div>
      </div>

      <style>{`
        @keyframes llulls-carousel {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .llulls-carousel-track:hover { animation-play-state: paused; }
      `}</style>
    </section>);

}

const navBtn = {
  width: 44, height: 44, borderRadius: 100,
  background: 'transparent', border: '1px solid rgba(255,255,255,0.3)',
  color: '#fff', cursor: 'pointer', display: 'inline-flex',
  alignItems: 'center', justifyContent: 'center',
  transition: 'background 200ms, border-color 200ms'
};

function CustomerCard({ c, idx, active, isMobile }) {
  return (
    <figure
      data-card
      style={{
        flex: isMobile ? '0 0 260px' : '0 0 320px',
        scrollSnapAlign: 'start',
        background: '#fff',
        borderRadius: 8,
        overflow: 'hidden',
        color: 'var(--llulls-navy)',
        transform: active ? 'translateY(-4px)' : 'none',
        boxShadow: active ? '0 24px 48px rgba(0,0,0,0.28)' : '0 8px 24px rgba(0,0,0,0.18)',
        transition: 'transform 280ms, box-shadow 280ms',
        rotate: idx % 2 === 0 ? '-1.5deg' : '1.5deg'
      }}>
      
      <div style={{ aspectRatio: '1 / 1', position: 'relative' }}>
        {c.photo ?
        <img src={c.photo} alt={c.dog} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /> :
        <CustomerPortrait idx={idx} name={c.dog} dogName={c.dog} item={c.item} garment={c.garment} bg={c.bg} fur={c.fur} kind={idx} />
        }
        
        {/* item tag */}
        <div style={{
          position: 'absolute', bottom: 12, left: 12,
          background: 'rgba(255,255,255,0.95)',
          padding: '6px 10px', borderRadius: 100,
          fontSize: 11, fontWeight: 500, color: 'var(--llulls-navy)',
          letterSpacing: '0.04em'
        }}>
          Lleva: {c.item}
        </div>
      </div>
      <figcaption style={{ padding: '18px 20px 20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ fontFamily: 'Georgia, serif', fontSize: 20 }}>{c.dog}</div>
          <div style={{ display: 'flex', gap: 1 }}>
            {[...Array(5)].map((_, i) =>
            <Icon.star key={i} size={11} />
            )}
          </div>
        </div>
        <p style={{ fontSize: 14, lineHeight: 1.5, color: 'var(--color-gray-700)', fontStyle: 'italic' }}>
          “{QUOTES[idx]}”
        </p>
        <div style={{ marginTop: 10, fontSize: 11, color: 'var(--color-gray-500)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          — Familia de {c.dog}, {c.city}
        </div>
      </figcaption>
    </figure>);

}

/* ---------- Manifesto / story ---------- */
function Manifesto() {
  const isMobile = useIsMobile();
  return (
    <section id="historia" style={{ padding: isMobile ? '48px 20px' : '120px 40px', background: 'var(--color-cream)' }}>
      <div style={{ maxWidth: 980, margin: '0 auto', textAlign: isMobile ? 'center' : 'left' }}>
        <div style={{ fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase', letterSpacing: '0.14em', fontWeight: 500, marginBottom: 14 }}>Nuestra historia</div>
        <h2 style={{
          fontFamily: 'Georgia, serif', fontWeight: 400,
          fontSize: isMobile ? 'clamp(28px, 6vw, 36px)' : 'clamp(36px, 4vw, 52px)',
          color: 'var(--llulls-navy)', letterSpacing: '-0.01em',
          lineHeight: 1.1, maxWidth: 880
        }}>
          En octubre de 2021 adoptamos a <em style={{ fontStyle: 'italic', color: 'var(--llulls-coral)' }}>Llull</em>, un galgo con un corazón enorme… y un cuello aún más largo.
        </h2>
        <p style={{ marginTop: 28, fontSize: isMobile ? 16 : 18, lineHeight: 1.7, color: 'var(--color-gray-700)', maxWidth: 720, fontFamily: 'Georgia, serif' }}>
          Con la llegada del frío, nació una necesidad: encontrar ropa que abrigara su cuerpo delgado, sin apretar y sin restringir el movimiento de este corredor. Como no la encontramos, la creamos. Así nació Llull's.
        </p>
        <div style={{ marginTop: 32, fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 18, color: 'var(--llulls-navy)' }}>
          — Diana &amp; Borja
        </div>

        <div style={{ marginTop: 40 }}>
          <a href="#tienda" style={{
            background: 'var(--llulls-navy)', color: '#fff',
            padding: '15px 28px', borderRadius: 4,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            fontSize: 12, fontWeight: 500, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 10
          }}>
            Ver la colección <Icon.arrow size={14} />
          </a>
        </div>
      </div>
    </section>);

}

/* ---------- Cart drawer ---------- */
function CartDrawer({ open, items, onClose, onUpdate, onRemove, onCheckout }) {
  const isMobile = useIsMobile();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <>
      {/* backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0,
          background: 'rgba(15,59,94,0.4)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 240ms', zIndex: 100
        }} />
      
      <aside style={{
        position: 'fixed', top: 0, right: 0, bottom: 0,
        width: isMobile ? '100%' : 'min(440px, 92vw)', background: 'var(--color-cream)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 320ms cubic-bezier(0.22,1,0.36,1)',
        zIndex: 101, display: 'flex', flexDirection: 'column',
        boxShadow: '-20px 0 48px rgba(15,17,23,0.18)'
      }}>
        <header style={{ padding: '22px 24px', borderBottom: '0.5px solid rgba(15,59,94,0.12)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: 'Georgia, serif', fontSize: 22, color: 'var(--llulls-navy)' }}>Tu cesta</div>
            <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 2 }}>{items.length} {items.length === 1 ? 'prenda' : 'prendas'}</div>
          </div>
          <button onClick={onClose} style={iconBtn}><Icon.x size={22} /></button>
        </header>

        <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }}>
          {items.length === 0 &&
          <div style={{ padding: '60px 0', textAlign: 'center', color: 'var(--color-gray-500)' }}>
              <div style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', fontSize: 22, color: 'var(--llulls-navy)', marginBottom: 8 }}>Aún no hay nada aquí.</div>
              <div style={{ fontSize: 14 }}>Tu cesta está vacía — empieza por El Chaleco.</div>
            </div>
          }
          {items.map((item) =>
          <div key={`${item.id}-${item.size}`} style={{ display: 'grid', gridTemplateColumns: '72px 1fr auto', gap: 14, padding: '16px 0', borderBottom: '0.5px solid rgba(15,59,94,0.08)' }}>
              <div style={{ width: 72, height: 72, borderRadius: 6, background: item.bg, overflow: 'hidden' }}>
                <DogScene product={item} />
              </div>
              <div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 17, color: 'var(--llulls-navy)' }}>{item.name}</div>
                <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 4 }}>Talla {item.size}</div>
                <div style={{ marginTop: 8, display: 'inline-flex', alignItems: 'center', gap: 6, border: '0.5px solid rgba(15,59,94,0.2)', borderRadius: 4 }}>
                  <button onClick={() => onUpdate(item, -1)} style={qtyBtn}><Icon.minus size={12} /></button>
                  <span style={{ fontSize: 13, minWidth: 16, textAlign: 'center' }}>{item.qty}</span>
                  <button onClick={() => onUpdate(item, 1)} style={qtyBtn}><Icon.plus size={12} /></button>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: 'var(--llulls-navy)' }}>{item.price * item.qty}€</div>
                <button onClick={() => onRemove(item)} style={{ marginTop: 12, fontSize: 11, color: 'var(--color-gray-500)', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Quitar</button>
              </div>
            </div>
          )}
        </div>

        <footer style={{ padding: '20px 24px 24px', borderTop: '0.5px solid rgba(15,59,94,0.12)', background: '#fff' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
            <span style={{ fontSize: 13, color: 'var(--color-gray-500)' }}>Subtotal</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 26, color: 'var(--llulls-navy)' }}>{subtotal}€</span>
          </div>
          <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginBottom: 16 }}>
            {subtotal >= 60 ? '✓ Envío gratis incluido' : `Te faltan ${60 - subtotal}€ para envío gratis`}
          </div>
          <button
            disabled={items.length === 0}
            onClick={() => {onClose();onCheckout && onCheckout();}}
            style={{
              width: '100%', padding: '16px', borderRadius: 4, border: 'none',
              background: items.length === 0 ? 'rgba(15,59,94,0.2)' : 'var(--llulls-navy)',
              color: '#fff', fontSize: 13, fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.1em',
              cursor: items.length === 0 ? 'not-allowed' : 'pointer'
            }}>
            Finalizar compra
          </button>
        </footer>
      </aside>
    </>);

}
const qtyBtn = {
  width: 28, height: 28, background: 'transparent', border: 'none',
  cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  color: 'var(--llulls-navy)'
};

Object.assign(window, {
  useIsMobile, Icon, LlullsLogo, AnnouncementBar, TopNav, Hero, Marquee,
  ProductGrid, ProductCard, SizingBand, Carousel, Manifesto, CartDrawer
});