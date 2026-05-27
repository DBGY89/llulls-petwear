/* eslint-disable */

/* ---------- Thank You page ---------- */
function ThankYou({ items, name, email, onBack }) {
  const isMobile = useIsMobile();
  const total = items.reduce((s, i) => s + i.price * (i.qty || 1), 0);
  const orderNum = React.useMemo(
    () => `#LLS-2024-${Math.floor(1000 + Math.random() * 9000)}`,
    []
  );

  const firstName = (name || '').trim().split(' ')[0] || 'Amig@';
  const safeEmail = email || 'tu correo';

  return (
    <div style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>
      {/* Cream top bar — blends with page */}
      <header style={{
        background: 'var(--color-cream)',
        padding: isMobile ? '18px 20px' : '18px 40px',
        display: 'flex', alignItems: 'center', justifyContent: isMobile ? 'flex-end' : 'center',
        position: 'relative',
      }}>
        <button onClick={onBack} style={{
          position: 'absolute', left: isMobile ? 16 : 40, top: '50%', transform: 'translateY(-50%)',
          background: 'transparent', border: 'none', color: 'var(--llulls-navy)',
          fontSize: 13, cursor: 'pointer', fontFamily: 'inherit', padding: 0,
        }}>← Volver a la tienda</button>

        <div style={{ display: 'inline-flex', alignItems: 'center' }}>
          <img src="assets/Logo-transparent.png" alt="Llulls" style={{ height: 56, display: 'block' }} />
        </div>
      </header>

      {/* Centered content */}
      <main style={{
        maxWidth: 620, margin: '0 auto', padding: '72px 32px 96px',
        textAlign: 'center'
      }}>
        {/* Teal check */}
        <div style={{
          width: 96, height: 96, borderRadius: '50%',
          background: 'var(--llulls-teal)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 8px 24px rgba(43,169,169,0.25)',
          marginBottom: 28,
        }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        {/* Eyebrow */}
        <div style={{
          fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase',
          letterSpacing: '0.16em', fontWeight: 500, marginBottom: 18,
        }}>Pedido confirmado</div>

        {/* Title */}
        <h1 style={{
          fontFamily: 'Georgia, serif', fontWeight: 400,
          fontSize: 'clamp(34px, 4.2vw, 48px)',
          color: 'var(--llulls-navy)', lineHeight: 1.1,
          letterSpacing: '-0.01em', margin: 0,
        }}>
          ¡Tu pedido está en camino, <em style={{ fontStyle: 'italic', color: 'var(--llulls-coral)' }}>{firstName}</em>!
        </h1>

        {/* Subtitle */}
        <p style={{
          marginTop: 20, fontSize: 17, lineHeight: 1.6,
          color: 'var(--color-gray-700)',
        }}>
          Llull ya lo ha aprobado. Te enviaremos un email de confirmación a <strong style={{ color: 'var(--llulls-navy)', fontWeight: 500 }}>{safeEmail}</strong> con todos los detalles.
        </p>

        {/* Order summary card */}
        <section style={{
          marginTop: 40,
          background: '#fff',
          border: '0.5px solid rgba(15,59,94,0.10)',
          borderRadius: 12,
          padding: 28,
          textAlign: 'left',
          boxShadow: '0 2px 8px rgba(15,59,94,0.04)',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            paddingBottom: 18, borderBottom: '0.5px solid rgba(15,59,94,0.10)',
          }}>
            <div>
              <div style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--color-gray-500)', fontWeight: 500, marginBottom: 4 }}>
                Número de pedido
              </div>
              <div style={{ fontFamily: 'Georgia, serif', fontSize: 20, color: 'var(--llulls-navy)' }}>
                {orderNum}
              </div>
            </div>
            <div style={{
              padding: '6px 12px', borderRadius: 100,
              background: 'rgba(43,169,169,0.10)',
              color: 'var(--llulls-teal-deep)',
              fontSize: 11, fontWeight: 500,
              textTransform: 'uppercase', letterSpacing: '0.1em',
            }}>
              Procesando
            </div>
          </div>

          {/* Items */}
          <div style={{ display: 'grid', gap: 16, padding: '20px 0' }}>
            {items.length === 0 && (
              <div style={{ padding: '20px 0', color: 'var(--color-gray-500)', fontSize: 14, fontStyle: 'italic', textAlign: 'center' }}>
                Sin productos.
              </div>
            )}
            {items.map((item, i) => (
              <div key={`${item.id}-${item.size}-${i}`} style={{
                display: 'grid', gridTemplateColumns: '54px 1fr auto',
                gap: 14, alignItems: 'center',
              }}>
                <div style={{
                  width: 54, height: 54, borderRadius: 6,
                  background: item.bg, overflow: 'hidden',
                  border: '0.5px solid rgba(15,59,94,0.08)',
                }}>
                  <DogScene product={item} />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: 'var(--llulls-navy)', lineHeight: 1.2 }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-gray-500)', marginTop: 3 }}>
                    Talla {item.size} · Cantidad {item.qty || 1}
                  </div>
                </div>
                <div style={{ fontFamily: 'Georgia, serif', fontSize: 16, color: 'var(--llulls-navy)' }}>
                  {item.price * (item.qty || 1)}€
                </div>
              </div>
            ))}
          </div>

          {/* Total */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
            paddingTop: 18, borderTop: '0.5px solid rgba(15,59,94,0.10)',
          }}>
            <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gray-500)' }}>Total</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 30, color: 'var(--llulls-navy)' }}>
              {total}€
            </span>
          </div>
        </section>

        {/* Navy CTA card */}
        <section style={{
          marginTop: 32,
          background: 'var(--llulls-navy)',
          borderRadius: 12,
          padding: '36px 32px',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* tiny decorative coral circle */}
          <div aria-hidden style={{
            position: 'absolute', top: -40, right: -40,
            width: 140, height: 140, borderRadius: '50%',
            background: 'var(--llulls-coral)', opacity: 0.18,
          }} />

          <h3 style={{
            fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 400,
            color: '#fff', lineHeight: 1.2, margin: 0,
            letterSpacing: '-0.005em', position: 'relative',
          }}>
            Únete al <em style={{ fontStyle: 'italic', color: 'var(--llulls-yellow)' }}>Club de Fashion</em> de Llulls
          </h3>
          <p style={{
            marginTop: 14, fontSize: 15, lineHeight: 1.6,
            color: 'rgba(255,255,255,0.78)',
            maxWidth: 440, margin: '14px auto 0',
            position: 'relative',
          }}>
            Cuando llegue tu pedido, etiquétanos en Instagram <strong style={{ color: '#fff', fontWeight: 500 }}>@soyllull</strong> y aparece en nuestra web.
          </p>
          <a
            href="https://instagram.com/soyllull"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 10,
              marginTop: 24, padding: '14px 28px',
              background: 'var(--llulls-coral)', color: '#fff',
              borderRadius: 6, textDecoration: 'none',
              fontSize: 12, fontWeight: 600,
              textTransform: 'uppercase', letterSpacing: '0.12em',
              position: 'relative',
              transition: 'transform 200ms, background 200ms',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.background = '#D04848'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.background = 'var(--llulls-coral)'; }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            Ver Instagram
          </a>
        </section>

        {/* footer mini link */}
        <div style={{ marginTop: 36 }}>
          <button onClick={onBack} style={{
            background: 'transparent', border: 'none',
            color: 'var(--llulls-navy)', fontSize: 13,
            textDecoration: 'underline', textUnderlineOffset: 4,
            cursor: 'pointer', fontFamily: 'inherit',
          }}>
            Seguir explorando la tienda
          </button>
        </div>
      </main>
    </div>
  );
}

Object.assign(window, { ThankYou });
