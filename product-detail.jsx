/* eslint-disable */
const { useState } = React;

/* ---------- Product Detail Page ---------- */
function ProductDetail({ product, onBack, onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState('M');
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart({ ...product, size: selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  const sizingRows = [
    { size: 'S', pecho: '70 - 75 cm', espalda: '65 - 70 cm' },
    { size: 'M', pecho: '76 - 81 cm', espalda: '71 - 76 cm' },
    { size: 'L', pecho: '82 - 86 cm', espalda: '77 - 84 cm' },
  ];

  return (
    <div style={{ background: 'var(--color-cream)', minHeight: '100vh', padding: '60px 40px 120px' }}>
      {/* Back button */}
      <div style={{ maxWidth: 1240, margin: '0 auto 48px' }}>
        <button onClick={onBack} style={{
          background: 'transparent', border: 'none', color: 'var(--llulls-navy)',
          fontSize: 14, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8,
          padding: 0, fontFamily: 'inherit'
        }}>
          <Icon.arrow size={14} style={{ transform: 'rotate(180deg)' }} />
          Volver a la tienda
        </button>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
        {/* Left: Product Image */}
        <div style={{
          aspectRatio: '4 / 3',
          background: product.bg,
          borderRadius: 12,
          border: '0.5px solid rgba(15,59,94,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'sticky',
          top: 40
        }}>
          <DogScene product={product} />
        </div>

        {/* Right: Product Info */}
        <div>
          {/* Name & Price */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 12 }}>
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(32px, 3.5vw, 44px)',
              color: 'var(--llulls-navy)',
              fontWeight: 400,
              lineHeight: 1.1,
              margin: 0
            }}>{product.name}</h1>
            <div style={{
              fontSize: 28,
              fontFamily: 'Georgia, serif',
              color: 'var(--llulls-navy)',
              fontWeight: 500
            }}>{product.price}€</div>
          </div>

          {/* Short description */}
          <p style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: 'var(--color-gray-700)',
            marginTop: 16,
            marginBottom: 36
          }}>
            {product.tagline}
          </p>

          {/* Size selector */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gray-500)', fontWeight: 500, marginBottom: 12 }}>
              Talla
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              {['S', 'M', 'L'].map(s => (
                <button key={s} onClick={() => setSelectedSize(s)} style={{
                  flex: 1,
                  padding: '14px',
                  background: selectedSize === s ? 'var(--llulls-navy)' : '#fff',
                  color: selectedSize === s ? '#fff' : 'var(--llulls-navy)',
                  border: selectedSize === s ? 'none' : '1px solid rgba(15,59,94,0.18)',
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 200ms',
                  fontFamily: 'inherit'
                }}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart button */}
          <button onClick={handleAdd} style={{
            width: '100%',
            padding: '18px',
            background: added ? '#1F8A5B' : 'var(--llulls-coral)',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            transition: 'background 200ms',
            fontFamily: 'inherit',
            marginBottom: 40
          }}>
            {added ? <><Icon.check size={16} /> Añadido</> : <>Añadir al carrito · {product.price}€</>}
          </button>

          {/* Separator */}
          <div style={{ height: 1, background: 'rgba(15,59,94,0.1)', marginBottom: 32 }} />

          {/* Material section */}
          <div style={{ marginBottom: 32 }}>
            <h3 style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--llulls-coral)',
              fontWeight: 500,
              marginBottom: 12
            }}>Material</h3>
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--color-gray-700)'
            }}>
              Polar fleece 100% polyester · 250 g/m² · Certificado OEKO-TEX Standard 100 · Suave, abriga sin pesar, no pica
            </p>
          </div>

          {/* Care section */}
          <div style={{ marginBottom: 36 }}>
            <h3 style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--llulls-coral)',
              fontWeight: 500,
              marginBottom: 12
            }}>Cuidado</h3>
            <p style={{
              fontSize: 15,
              lineHeight: 1.7,
              color: 'var(--color-gray-700)'
            }}>
              Lavado a máquina en frío programa delicado · Sin lejía ni suavizante · Lavar del revés · Secar al aire
            </p>
          </div>

          {/* Sizing table */}
          <div>
            <h3 style={{
              fontSize: 11,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: 'var(--llulls-coral)',
              fontWeight: 500,
              marginBottom: 16
            }}>Tallas</h3>
            <div style={{
              background: '#fff',
              borderRadius: 8,
              border: '0.5px solid rgba(15,59,94,0.12)',
              overflow: 'hidden'
            }}>
              <div style={{
                padding: '14px 20px',
                borderBottom: '0.5px solid rgba(15,59,94,0.10)',
                display: 'grid',
                gridTemplateColumns: '70px 1fr 1fr',
                gap: 16,
                fontSize: 11,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-gray-500)',
                fontWeight: 500
              }}>
                <span>Talla</span><span>Pecho</span><span>Espalda</span>
              </div>
              {sizingRows.map(r => (
                <div key={r.size} style={{
                  padding: '14px 20px',
                  borderBottom: '0.5px solid rgba(15,59,94,0.06)',
                  display: 'grid',
                  gridTemplateColumns: '70px 1fr 1fr',
                  gap: 16,
                  alignItems: 'center',
                  fontSize: 14,
                  color: 'var(--llulls-navy)',
                  background: selectedSize === r.size ? 'rgba(232,93,93,0.04)' : 'transparent'
                }}>
                  <span style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: 20,
                    fontWeight: 500,
                    color: selectedSize === r.size ? 'var(--llulls-coral)' : 'var(--llulls-navy)'
                  }}>{r.size}</span>
                  <span>{r.pecho}</span>
                  <span>{r.espalda}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
