/* eslint-disable */

/* ---------- Checkout ---------- */
function Checkout({ items, onBack, onPlaceOrder }) {
  const isMobile = useIsMobile();
  const [form, setForm] = React.useState({
    email: '', name: '', address: '', apt: '', zip: '', city: '', phone: '',
  });
  const [hover, setHover] = React.useState(false);

  const subtotal = items.reduce((s, i) => s + i.price * (i.qty || 1), 0);
  const freeShipping = subtotal >= 60;
  const shipping = freeShipping || subtotal === 0 ? 0 : 4.95;
  const total = subtotal + shipping;

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  return (
    <div style={{ background: 'var(--color-cream)', minHeight: '100vh' }}>
      {/* Cream top bar — blends with page */}
      <header style={{
        background: 'var(--color-cream)',
        padding: isMobile ? '18px 20px' : '18px 40px',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <button onClick={onBack} style={{
          position: 'absolute', left: isMobile ? 16 : 40, top: '50%', transform: 'translateY(-50%)',
          background: 'transparent', border: 'none', color: 'var(--llulls-navy)',
          fontSize: 13, cursor: 'pointer', display: 'inline-flex', alignItems: 'center',
          gap: 6, fontFamily: 'inherit', padding: 0,
        }}>← Seguir comprando</button>

        <div style={{
          display: 'inline-flex', alignItems: 'center',
        }}>
          <img src="assets/Logo-transparent.png" alt="Llulls" style={{ height: 56, display: 'block' }} />
        </div>

        <div style={{
          position: 'absolute', right: isMobile ? 16 : 40, top: '50%', transform: 'translateY(-50%)',
          display: 'inline-flex', alignItems: 'center', gap: 8,
          fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase',
          color: 'var(--llulls-coral)', fontWeight: 500,
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Compra segura
        </div>
      </header>

      {/* Main grid */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: isMobile ? '32px 20px 56px' : '64px 40px 96px',
        display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: isMobile ? 32 : 56, alignItems: 'start' }}>

        {/* LEFT: Shipping form */}
        <div>
          <div style={{
            fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase',
            letterSpacing: '0.14em', fontWeight: 500, marginBottom: 14,
          }}>Tu pedido</div>
          <h1 style={{
            fontFamily: 'Georgia, serif', fontWeight: 400,
            fontSize: 'clamp(34px, 3.6vw, 48px)',
            color: 'var(--llulls-navy)', letterSpacing: '-0.01em',
            lineHeight: 1.05, margin: 0,
          }}>
            Datos de envío
          </h1>
          <p style={{
            marginTop: 16, fontSize: 15, lineHeight: 1.6,
            color: 'var(--color-gray-700)', maxWidth: 480,
          }}>
            Rellena tus datos y te enviamos el pedido en 24-48h.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (onPlaceOrder) onPlaceOrder({ name: form.name, email: form.email });
            }}
            style={{
              marginTop: 32,
              background: '#fff',
              border: '0.5px solid rgba(15,59,94,0.10)',
              borderRadius: 12,
              padding: 28,
              boxShadow: '0 2px 8px rgba(15,59,94,0.04)',
            }}
          >
            <Field label="Email" type="email" placeholder="tu@email.com"
              value={form.email} onChange={update('email')} />
            <Field label="Nombre completo" placeholder="María García"
              value={form.name} onChange={update('name')} />
            <Field label="Dirección" placeholder="Calle y número"
              value={form.address} onChange={update('address')} />

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              <Field label="Piso / puerta (opcional)" placeholder="3º B"
                value={form.apt} onChange={update('apt')} />
              <Field label="Código postal" placeholder="28004"
                value={form.zip} onChange={update('zip')} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 16 }}>
              <Field label="Ciudad" placeholder="Madrid"
                value={form.city} onChange={update('city')} />
              <Field label="Teléfono" type="tel" placeholder="600 123 456"
                value={form.phone} onChange={update('phone')} />
            </div>

            <button
              type="submit"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              style={{
                marginTop: 12, width: '100%',
                padding: '17px 22px', borderRadius: 6, border: 'none',
                background: hover ? '#0a2b45' : 'var(--llulls-navy)',
                color: '#fff', fontSize: 13, fontWeight: 600,
                textTransform: 'uppercase', letterSpacing: '0.12em',
                cursor: 'pointer', display: 'inline-flex',
                alignItems: 'center', justifyContent: 'center', gap: 10,
                transition: 'background 200ms',
                fontFamily: 'inherit',
              }}
            >
              Confirmar pedido →
            </button>

            <p style={{
              marginTop: 14, fontSize: 12, lineHeight: 1.5,
              color: 'var(--color-gray-500)', textAlign: 'center',
            }}>
              El pago se realizará en el siguiente paso de forma segura con Stripe.
            </p>
          </form>
        </div>

        {/* RIGHT: Order summary */}
        <aside style={{
          position: isMobile ? 'static' : 'sticky', top: isMobile ? 'auto' : 32,
          background: '#fff',
          border: '0.5px solid rgba(15,59,94,0.10)',
          borderRadius: 12,
          padding: 28,
          boxShadow: '0 2px 8px rgba(15,59,94,0.04)',
        }}>
          <div style={{
            fontSize: 11, color: 'var(--llulls-coral)', textTransform: 'uppercase',
            letterSpacing: '0.14em', fontWeight: 500, marginBottom: 14,
          }}>Resumen</div>
          <h2 style={{
            fontFamily: 'Georgia, serif', fontSize: 24, fontWeight: 400,
            color: 'var(--llulls-navy)', margin: 0, lineHeight: 1.1,
          }}>Tu pedido</h2>

          {/* Items */}
          <div style={{ marginTop: 22, display: 'grid', gap: 16 }}>
            {items.length === 0 && (
              <div style={{ padding: '24px 0', textAlign: 'center', color: 'var(--color-gray-500)', fontSize: 14, fontStyle: 'italic' }}>
                Tu cesta está vacía.
              </div>
            )}
            {items.map((item, i) => (
              <div key={`${item.id}-${item.size}-${i}`} style={{
                display: 'grid', gridTemplateColumns: '54px 1fr auto', gap: 14, alignItems: 'center',
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

          {/* Free shipping note */}
          {freeShipping && items.length > 0 && (
            <div style={{
              marginTop: 22, padding: '12px 14px',
              background: 'rgba(43,169,169,0.08)',
              borderRadius: 6, fontSize: 13,
              color: 'var(--llulls-teal-deep)',
              fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 8,
            }}>
              ✓ Envío gratis
            </div>
          )}

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(15,59,94,0.1)', margin: '24px 0' }} />

          {/* Subtotal */}
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: 'var(--color-gray-700)', marginBottom: 10 }}>
            <span>Subtotal</span>
            <span style={{ color: 'var(--llulls-navy)' }}>{subtotal}€</span>
          </div>

          {/* Shipping */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', fontSize: 14,
            color: freeShipping ? 'var(--llulls-teal-deep)' : 'var(--color-gray-700)',
            marginBottom: 18, fontWeight: freeShipping ? 500 : 400,
          }}>
            <span>Envío</span>
            <span>{freeShipping ? 'Gratis' : items.length === 0 ? '—' : `${shipping.toFixed(2)}€`}</span>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(15,59,94,0.1)', marginBottom: 18 }} />

          {/* Total */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--color-gray-500)' }}>Total</span>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: 32, color: 'var(--llulls-navy)' }}>
              {total.toFixed(2).replace('.00', '')}€
            </span>
          </div>

          <div style={{ marginTop: 18, fontSize: 12, color: 'var(--color-gray-500)', lineHeight: 1.55 }}>
            Impuestos incluidos. Devoluciones gratis durante 30 días.
          </div>
        </aside>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder, type = 'text' }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: 'block', marginBottom: 18 }}>
      <div style={{
        fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.12em',
        color: 'var(--color-gray-500)', fontWeight: 500, marginBottom: 6,
      }}>{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: '100%', padding: '12px 14px',
          background: 'var(--color-cream)',
          border: focus ? '1px solid var(--llulls-navy)' : '1px solid rgba(15,59,94,0.16)',
          borderRadius: 6, fontSize: 15,
          color: 'var(--llulls-navy)',
          outline: 'none', transition: 'border 160ms',
          fontFamily: 'inherit',
        }}
      />
    </label>
  );
}

Object.assign(window, { Checkout });
