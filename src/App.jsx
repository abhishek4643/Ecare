import { useEffect, useMemo, useState } from 'react'
import {
  NavLink,
  Navigate,
  Outlet,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom'
import styled from 'styled-components'
import './App.css'

const products = [
  {
    id: 'p-1',
    name: 'Nucleus Smart Processor',
    price: '$1,250',
    priceInr: 'INR 1,03,000',
    condition: 'Refurbished',
    location: 'Hyderabad',
    tag: 'Warranty 6 mo',
    size: '62 x 36 mm',
    image: '/images/nucleus-smart-processor.png',
    category: 'Processors',
  },
  {
    id: 'p-2',
    name: 'Kanso Coil Kit',
    price: '$320',
    priceInr: 'INR 26,500',
    condition: 'New',
    location: 'Bengaluru',
    tag: 'Clinic verified',
    size: '38 mm coil',
    image: '/images/kanso-coil-kit.jpg',
    category: 'Coils',
  },
  {
    id: 'p-3',
    name: 'SoundWave Battery Pack',
    price: '$85',
    priceInr: 'INR 7,000',
    condition: 'New',
    location: 'Chennai',
    tag: 'Same day ship',
    size: '54 x 24 mm',
    image: '/images/soundwave-battery-pack.jpg',
    category: 'Batteries',
  },
  {
    id: 'p-4',
    name: 'Sync Remote Control',
    price: '$140',
    priceInr: 'INR 11,500',
    condition: 'Gently used',
    location: 'Mumbai',
    tag: 'Tested',
    size: '98 x 32 mm',
    image: '/images/sync-remote-control.png',
    category: 'Accessories',
  },
  {
    id: 'p-5',
    name: 'FlexSoft Earhook',
    price: '$48',
    priceInr: 'INR 3,900',
    condition: 'New',
    location: 'Pune',
    tag: 'Accessory',
    size: '22 x 12 mm',
    image: '/images/flexsoft-earhook.png',
    category: 'Accessories',
  },
  {
    id: 'p-6',
    name: 'ClearLink Mic Cover',
    price: '$32',
    priceInr: 'INR 2,600',
    condition: 'New',
    location: 'Kochi',
    tag: 'Clinic verified',
    size: '18 x 10 mm',
    image: '/images/clearlink-mic-cover.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-7',
    name: 'CeruLink Cable',
    price: '$56',
    priceInr: 'INR 4,600',
    condition: 'New',
    location: 'Delhi',
    tag: 'Accessory',
    size: '120 mm',
    image: '/images/cerulink-cable.png',
    category: 'Cables',
  },
  {
    id: 'p-8',
    name: 'AquaSeal Waterproof Case',
    price: '$110',
    priceInr: 'INR 9,100',
    condition: 'New',
    location: 'Goa',
    tag: 'Clinic verified',
    size: '72 x 48 mm',
    image: '/images/aquaseal-waterproof-case.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-9',
    name: 'FineTuner Remote',
    price: '$165',
    priceInr: 'INR 13,700',
    condition: 'Gently used',
    location: 'Jaipur',
    tag: 'Tested',
    size: '98 x 32 mm',
    image: '/images/finetuner-remote.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-11',
    name: 'Magna Coil Magnet',
    price: '$60',
    priceInr: 'INR 4,950',
    condition: 'New',
    location: 'Nagpur',
    tag: 'Verified',
    size: '15 mm',
    image: '/images/magna-coil-magnet.jpg',
    category: 'Coils',
  },
  {
    id: 'p-12',
    name: 'PulseGuard Battery Charger',
    price: '$95',
    priceInr: 'INR 7,900',
    condition: 'New',
    location: 'Surat',
    tag: 'Clinic verified',
    size: '88 x 48 mm',
    image: '/images/pulseguard-battery-charger.jpg',
    category: 'Batteries',
  },
  {
    id: 'p-13',
    name: 'AeroFit Processor Cover',
    price: '$28',
    priceInr: 'INR 2,300',
    condition: 'New',
    location: 'Mysuru',
    tag: 'Accessory',
    size: '60 x 34 mm',
    image: '/images/aerofit-processor-cover.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-14',
    name: 'SignalBoost Mic Set',
    price: '$74',
    priceInr: 'INR 6,100',
    condition: 'New',
    location: 'Ahmedabad',
    tag: 'Clinic verified',
    size: '20 x 12 mm',
    image: '/images/signalboost-mic-set.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-15',
    name: 'Nova Implant Magnet',
    price: '$120',
    priceInr: 'INR 9,900',
    condition: 'New',
    location: 'Thane',
    tag: 'Verified',
    size: '16 mm',
    image: '/images/nova-implant-magnet.jpg',
    category: 'Implants',
  },
  {
    id: 'p-16',
    name: 'Clinic Fit Cable Pack',
    price: '$62',
    priceInr: 'INR 5,100',
    condition: 'New',
    location: 'Lucknow',
    tag: 'Accessory',
    size: '150 mm',
    image: '/images/clinic-fit-cable-pack.png',
    category: 'Cables',
  },
  {
    id: 'p-17',
    name: 'Rehab Training Kit',
    price: '$210',
    priceInr: 'INR 17,500',
    condition: 'New',
    location: 'Coimbatore',
    tag: 'Clinic verified',
    size: 'Box set',
    image: '/images/rehab-training-kit.jpg',
    category: 'Accessories',
  },
  {
    id: 'p-18',
    name: 'Travel Dry Box',
    price: '$88',
    priceInr: 'INR 7,300',
    condition: 'New',
    location: 'Visakhapatnam',
    tag: 'Accessory',
    size: '90 x 60 mm',
    image: '/images/travel-dry-box.jpg',
    category: 'Accessories',
  },
]

const doctors = [
  {
    id: 'd-1',
    name: 'Dr. Asha Menon',
    specialty: 'Audiologist',
    rating: '4.9',
    availability: 'Tue-Thu',
  },
  {
    id: 'd-2',
    name: 'Dr. Kabir Rao',
    specialty: 'ENT Surgeon',
    rating: '4.8',
    availability: 'Mon-Wed',
  },
  {
    id: 'd-3',
    name: 'Dr. Meera Das',
    specialty: 'Rehab Therapist',
    rating: '5.0',
    availability: 'Fri-Sun',
  },
]

const categories = [
  'Processors',
  'Coils',
  'Cables',
  'Batteries',
  'Accessories',
  'Implants',
]

function App() {
  const [cartItems, setCartItems] = useState([])

  const cartCount = cartItems.length

  const addToCart = (product) => {
    setCartItems((items) =>
      items.some((item) => item.id === product.id)
        ? items
        : [...items, product],
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((items) => items.filter((item) => item.id !== productId))
  }

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<AppLayout cartCount={cartCount} />}>
        <Route
          path="/home"
          element={
            <Home
              cartItems={cartItems}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />
        <Route
          path="/marketplace"
          element={
            <Marketplace
              cartItems={cartItems}
              onAddToCart={addToCart}
              onRemoveFromCart={removeFromCart}
            />
          }
        />
        <Route path="/sell" element={<Sell />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function Login() {
  const navigate = useNavigate()
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    document.body.classList.toggle('theme-dark', isDark)
  }, [isDark])

  return (
    <div className="login-shell">
      <Form
        isDark={isDark}
        onToggleDark={() => setIsDark((value) => !value)}
        onSuccess={() => {
          navigate('/home')
        }}
      />
    </div>
  )
}

function Form({ isDark, onToggleDark, onSuccess }) {
  return (
    <StyledWrapper>
      <div className="form-container">
        <div className="form-header">
          <div className="form-brand">
            <Brand markOnly />
            <div>
              <p className="form-eyebrow">Cochlear care access</p>
              <p className="title">Welcome back</p>
            </div>
          </div>
          <div className="theme-toggle">
            <span>{isDark ? 'Dark' : 'Light'}</span>
            <ThemeSwitch checked={isDark} onChange={onToggleDark} />
          </div>
        </div>
        <p className="subtitle">
          Continue your personalized cochlear marketplace journey.
        </p>
        <form
          className="form"
          onSubmit={(event) => {
            event.preventDefault()
            onSuccess()
          }}
        >
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button type="submit" className="form-btn">
            Log in
          </button>
        </form>
        <div className="trust-strip">
          <span>Verified listings</span>
          <span>Encrypted data</span>
          <span>Doctor support</span>
        </div>
        <p className="sign-up-label">
          Don't have an account?
          <span className="sign-up-link">Sign up</span>
        </p>
        <div className="buttons-container">
          <div className="apple-login-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              className="apple-icon"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z" />
            </svg>
            <span>Log in with Apple</span>
          </div>
          <div className="google-login-button">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth={0}
              version="1.1"
              x="0px"
              y="0px"
              className="google-icon"
              viewBox="0 0 48 48"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
        c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
        c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
        c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </StyledWrapper>
  )
}

function ThemeSwitch({ checked, onChange }) {
  return (
    <SwitchWrapper>
      <div className="container">
        <input
          type="checkbox"
          className="checkbox"
          id="theme-switch"
          checked={checked}
          onChange={onChange}
        />
        <label className="switch" htmlFor="theme-switch">
          <span className="slider" />
        </label>
      </div>
    </SwitchWrapper>
  )
}

const StyledWrapper = styled.div`
  .form-container {
    width: min(420px, 90vw);
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 24px;
    box-sizing: border-box;
    padding: 28px 30px;
    box-shadow: var(--shadow);
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
    overflow: hidden;
  }

  .form-container::before {
    content: '';
    position: absolute;
    inset: -120px -60px auto auto;
    width: 220px;
    height: 220px;
    background: radial-gradient(
      circle,
      rgba(49, 196, 141, 0.25),
      transparent 70%
    );
  }

  .form-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
  }

  .form-brand {
    display: flex;
    gap: 12px;
    align-items: center;
  }

  .form-eyebrow {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 10px;
    color: var(--primary-strong);
    margin: 0 0 6px;
    font-weight: 700;
  }

  .title {
    margin: 0;
    font-size: 26px;
    font-weight: 700;
    color: var(--text);
  }

  .subtitle {
    margin: 0;
    color: var(--muted);
    font-size: 14px;
  }

  .theme-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--muted);
    font-size: 12px;
    font-weight: 600;
  }

  .form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .input {
    border-radius: 16px;
    border: 1px solid var(--border);
    outline: none;
    box-sizing: border-box;
    padding: 12px 14px;
    background: var(--surface-strong);
    color: var(--text);
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  .input:focus {
    border-color: rgba(15, 118, 110, 0.5);
    box-shadow: 0 0 0 3px rgba(15, 118, 110, 0.16);
  }

  .page-link {
    text-decoration: none;
    margin: 0;
    text-align: end;
    color: var(--secondary);
    font-size: 12px;
    font-weight: 600;
  }

  .page-link-label {
    cursor: pointer;
  }

  .form-btn {
    padding: 12px 15px;
    border-radius: 16px;
    border: none;
    outline: none;
    background: linear-gradient(130deg, var(--primary), var(--accent));
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 12px 24px rgba(15, 118, 110, 0.22);
  }

  .sign-up-label {
    margin: 0;
    font-size: 12px;
    color: var(--muted);
  }

  .sign-up-link {
    margin-left: 4px;
    font-size: 12px;
    text-decoration: underline;
    color: var(--primary-strong);
    cursor: pointer;
    font-weight: 700;
  }

  .trust-strip {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .trust-strip span {
    padding: 6px 10px;
    border-radius: 999px;
    background: rgba(15, 118, 110, 0.12);
    color: var(--primary-strong);
    font-size: 11px;
    font-weight: 600;
  }

  .buttons-container {
    width: 100%;
    display: grid;
    gap: 12px;
  }

  .apple-login-button,
  .google-login-button {
    border-radius: 16px;
    box-sizing: border-box;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    gap: 6px;
  }

  .apple-login-button {
    background-color: #111827;
    color: #fff;
    border: 2px solid #111827;
  }

  .google-login-button {
    border: 2px solid rgba(15, 118, 110, 0.2);
    color: var(--text);
    background: var(--surface-strong);
  }

  .apple-icon,
  .google-icon {
    font-size: 18px;
    margin-bottom: 1px;
  }
`

const SwitchWrapper = styled.div`
  .container {
    width: 51px;
    height: 31px;
    position: relative;
  }

  .checkbox {
    opacity: 0;
    width: 0;
    height: 0;
    position: absolute;
  }

  .switch {
    width: 100%;
    height: 100%;
    display: block;
    background-color: #e9e9eb;
    border-radius: 16px;
    cursor: pointer;
    transition: all 0.2s ease-out;
  }

  .slider {
    width: 27px;
    height: 27px;
    position: absolute;
    left: calc(50% - 27px / 2 - 10px);
    top: calc(50% - 27px / 2);
    border-radius: 50%;
    background: #ffffff;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15),
      0px 3px 1px rgba(0, 0, 0, 0.06);
    transition: all 0.2s ease-out;
    cursor: pointer;
  }

  .checkbox:checked + .switch {
    background-color: #34c759;
  }

  .checkbox:checked + .switch .slider {
    left: calc(50% - 27px / 2 + 10px);
    top: calc(50% - 27px / 2);
  }
`

function AppLayout({ cartCount }) {
  return (
    <div className="app-shell">
      <header className="top-nav">
        <Brand />
        <nav className="nav-links">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/marketplace">Marketplace</NavLink>
          <NavLink to="/sell">Sell</NavLink>
          <NavLink to="/appointments">Appointments</NavLink>
          <NavLink to="/profile">Profile</NavLink>
        </nav>
        <div className="nav-tools">
          <div className="nav-search">
            <span className="search-icon" aria-hidden="true">⌕</span>
            <input
              type="search"
              placeholder="Search cochlear products, clinics..."
              aria-label="Search"
            />
          </div>
          <NavLink className="btn btn-ghost" to="/cart">
            Cart ({cartCount})
          </NavLink>
        </div>
      </header>
      <main className="page">
        <Outlet />
      </main>
      <footer className="footer">
        <div>
          <Brand markOnly />
          <p>Secure cochlear commerce with clinical guidance built in.</p>
        </div>
        <div className="footer-links">
          <a href="/">Support</a>
          <a href="/">Verification</a>
          <a href="/">Clinics</a>
          <a href="/">Privacy</a>
        </div>
        <div className="footer-meta">2026 HearWell Exchange</div>
      </footer>
    </div>
  )
}

function Brand({ markOnly = false }) {
  return (
    <div className={`brand ${markOnly ? 'brand-mark' : ''}`}>
      <svg viewBox="0 0 56 56" aria-hidden="true" className="brand-icon">
        <path
          d="M30 12c-8 0-14 6-14 14 0 6 3 11 8 13"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M31 18c-4 0-7 3-7 7 0 3 2 6 5 7"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="34" cy="36" r="7" fill="currentColor" opacity="0.15" />
        <path
          d="M37 24c3 3 4 7 3 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      {!markOnly && (
        <div>
          <p className="brand-title">HearWell Exchange</p>
          <p className="brand-tag">Cochlear care marketplace</p>
        </div>
      )}
    </div>
  )
}

function Home({ cartItems, onAddToCart, onRemoveFromCart }) {
  return (
    <div className="stack">
      <section className="hero">
        <div>
          <p className="eyebrow">Trusted medical resale</p>
          <h1>Buy, sell, and book cochlear support with confidence.</h1>
          <p className="hero-copy">
            HearWell Exchange is a verified marketplace for cochlear products,
            paired with instant doctor consultation for every stage of care.
          </p>
          <div className="hero-actions">
            <NavLink className="btn btn-primary" to="/marketplace">
              Browse marketplace
            </NavLink>
            <NavLink className="btn btn-secondary" to="/appointments">
              Book a consultation
            </NavLink>
          </div>
          <div className="hero-stats">
            <div>
              <p className="stat-value">98%</p>
              <p className="stat-label">Verified listings</p>
            </div>
            <div>
              <p className="stat-value">4.9</p>
              <p className="stat-label">Doctor satisfaction</p>
            </div>
            <div>
              <p className="stat-value">24 hr</p>
              <p className="stat-label">Avg dispatch</p>
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <div className="panel-card">
            <p className="panel-title">Live device checks</p>
            <p className="panel-meta">Clinic verified in 2 hours</p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Audiology support</p>
            <p className="panel-meta">Care team on call</p>
          </div>
          <div className="panel-card">
            <p className="panel-title">Secure escrow</p>
            <p className="panel-meta">Payments released on fit</p>
          </div>
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title="Featured cochlear devices"
          subtitle="Clinically verified listings updated every hour."
        />
        <div className="card-grid">
          {products.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} loading="lazy" />
              </div>
              <div className="product-badge">{product.tag}</div>
              <h3>{product.name}</h3>
              <p className="product-meta">{product.condition}</p>
              <p className="product-size">Size: {product.size}</p>
              <div className="product-row">
                <div className="price-stack">
                  <span className="price">{product.price}</span>
                  <span className="price-inr">{product.priceInr}</span>
                </div>
                <span className="location">{product.location}</span>
              </div>
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  type="button"
                  className="btn btn-ghost btn-icon"
                  onClick={() => onRemoveFromCart(product.id)}
                >
                  <span aria-hidden="true">✕</span>
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary btn-icon"
                  onClick={() => onAddToCart(product)}
                >
                  <span aria-hidden="true">＋</span>
                  Add to cart
                </button>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <SectionHeader
          title="Member coupons"
          subtitle="Save on verified cochlear accessories and services."
        />
        <div className="coupon-grid">
          <article className="coupon-card">
            <div>
              <p className="coupon-title">NEWCARE15</p>
              <p className="coupon-meta">15% off first accessory order</p>
            </div>
            <button type="button" className="btn btn-secondary">
              Apply coupon
            </button>
          </article>
          <article className="coupon-card">
            <div>
              <p className="coupon-title">CLINIC10</p>
              <p className="coupon-meta">INR 1,000 off clinic consultation</p>
            </div>
            <button type="button" className="btn btn-secondary">
              Apply coupon
            </button>
          </article>
          <article className="coupon-card">
            <div>
              <p className="coupon-title">BUNDLE20</p>
              <p className="coupon-meta">20% off battery + cable bundle</p>
            </div>
            <button type="button" className="btn btn-secondary">
              Apply coupon
            </button>
          </article>
        </div>
      </section>

      <section className="section split">
        <div>
          <SectionHeader
            title="One marketplace, two journeys"
            subtitle="Buy and sell safely with doctor guidance included."
          />
          <ol className="steps">
            <li>
              <h4>List or request a device</h4>
              <p>Upload specs, photos, and service history in minutes.</p>
            </li>
            <li>
              <h4>Clinical verification</h4>
              <p>Our partner clinics run diagnostics before approval.</p>
            </li>
            <li>
              <h4>Book the consultation</h4>
              <p>Choose online or in-person fitting with your device.</p>
            </li>
          </ol>
        </div>
        <div className="highlight-card">
          <p className="eyebrow">Next available consult</p>
          <h3>Today 4:30 PM with Dr. Meera Das</h3>
          <p>
            Get compatibility checks, tuning, and activation guidance in one
            session.
          </p>
          <button type="button" className="btn btn-primary">
            Reserve slot
          </button>
        </div>
      </section>
    </div>
  )
}

function Marketplace({ cartItems, onAddToCart, onRemoveFromCart }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredProducts =
    activeCategory === 'All'
      ? products
      : products.filter((product) => product.category === activeCategory)

  return (
    <div className="stack">
      <SectionHeader
        title="Marketplace"
        subtitle="Search verified cochlear listings with clinical assurance."
      />
      <section className="marketplace-filters">
        <div className="filter-card">
          <div className="filter-header">
            <div>
              <h3>Smart filters</h3>
              <p>Refine by price, availability, and verified condition.</p>
            </div>
            <button type="button" className="btn btn-ghost">
              Reset filters
            </button>
          </div>
          <div className="filter-grid">
            <div className="filter-row">
              <label className="filter-field">
                Price range
                <div className="filter-range">
                  <input type="text" placeholder="Min" />
                  <span>to</span>
                  <input type="text" placeholder="Max" />
                </div>
              </label>
              <label className="filter-field">
                Items per page
                <select>
                  <option>12 items</option>
                  <option>24 items</option>
                  <option>36 items</option>
                </select>
              </label>
            </div>
            <label className="filter-field">
              Condition
              <select>
                <option>All verified</option>
                <option>New</option>
                <option>Refurbished</option>
                <option>Gently used</option>
              </select>
            </label>
            <label className="filter-field">
              Sort by
              <select>
                <option>Recommended</option>
                <option>Price: low to high</option>
                <option>Price: high to low</option>
                <option>Newest listings</option>
              </select>
            </label>
          </div>
          <div className="filter-actions">
            <div className="filter-status">
              <span className="status-dot" />
              128 verified listings available
            </div>
            <button type="button" className="btn btn-primary">
              Apply filters
            </button>
          </div>
        </div>
      </section>
      <div className="chip-row">
        {['All', ...categories].map((category) => (
          <button
            className={`chip ${activeCategory === category ? 'active' : ''}`}
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="card-grid">
        {filteredProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>
            <div className="product-badge">{product.tag}</div>
            <h3>{product.name}</h3>
            <p className="product-meta">{product.condition}</p>
            <p className="product-size">Size: {product.size}</p>
            <div className="product-row">
              <div className="price-stack">
                <span className="price">{product.price}</span>
                <span className="price-inr">{product.priceInr}</span>
              </div>
              <span className="location">{product.location}</span>
            </div>
            <div className="product-actions">
              {cartItems.some((item) => item.id === product.id) ? (
                <button
                  type="button"
                  className="btn btn-ghost btn-icon"
                  onClick={() => onRemoveFromCart(product.id)}
                >
                  <span aria-hidden="true">✕</span>
                  Remove
                </button>
              ) : (
                <button
                  type="button"
                  className="btn btn-secondary btn-icon"
                  onClick={() => onAddToCart(product)}
                >
                  <span aria-hidden="true">＋</span>
                  Add
                </button>
              )}
              <button type="button" className="btn btn-ghost">
                Save
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

function Sell() {
  return (
    <div className="stack">
      <SectionHeader
        title="List a device"
        subtitle="Reach verified buyers and attach a clinical check."
      />
      <div className="form-grid">
        <form className="form-card">
          <label>
            Product name
            <input type="text" placeholder="Ex: Aurora X2 Processor" />
          </label>
          <label>
            Condition
            <select>
              <option>New</option>
              <option>Refurbished</option>
              <option>Gently used</option>
            </select>
          </label>
          <label>
            Asking price
            <input type="text" placeholder="$" />
          </label>
          <label>
            Upload documents
            <input type="file" />
          </label>
          <label>
            Notes for clinic review
            <textarea placeholder="Service history, compatibility notes..." />
          </label>
          <button type="button" className="btn btn-primary">
            Submit for verification
          </button>
        </form>
        <div className="form-aside">
          <h3>Verification checklist</h3>
          <ul>
            <li>Serial number and warranty proof</li>
            <li>Battery health or coil diagnostics</li>
            <li>Clinic inspection within 48 hours</li>
          </ul>
          <div className="aside-card">
            <p className="eyebrow">Seller protection</p>
            <h4>Escrow payments released after fit.</h4>
            <p>Track every step from pickup to patient fitting.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Appointments() {
  return (
    <div className="stack">
      <SectionHeader
        title="Book a consultation"
        subtitle="Meet cochlear specialists online or in clinic."
      />
      <div className="card-grid">
        {doctors.map((doctor) => (
          <article className="doctor-card" key={doctor.id}>
            <div>
              <h3>{doctor.name}</h3>
              <p className="doctor-meta">{doctor.specialty}</p>
            </div>
            <div className="doctor-info">
              <span>{doctor.availability}</span>
              <span>{doctor.rating} rating</span>
            </div>
            <button type="button" className="btn btn-secondary">
              Book slot
            </button>
          </article>
        ))}
      </div>
      <div className="form-grid">
        <form className="form-card">
          <label>
            Consultation type
            <select>
              <option>Remote tuning</option>
              <option>Device compatibility</option>
              <option>Post surgery check</option>
            </select>
          </label>
          <label>
            Preferred date
            <input type="date" />
          </label>
          <label>
            City or telehealth
            <input type="text" placeholder="Ex: Hyderabad / Online" />
          </label>
          <label>
            Notes for doctor
            <textarea placeholder="Share concerns or device model." />
          </label>
          <button type="button" className="btn btn-primary">
            Confirm appointment
          </button>
        </form>
        <div className="form-aside">
          <h3>Why book here?</h3>
          <ul>
            <li>Consultations linked to purchase history</li>
            <li>Secure medical record uploads</li>
            <li>Post-consult reports in your profile</li>
          </ul>
          <div className="aside-card">
            <p className="eyebrow">Care guarantee</p>
            <h4>Free follow-up within 14 days.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

function Profile() {
  return (
    <div className="stack">
      <SectionHeader
        title="Patient profile"
        subtitle="Track listings, appointments, and care reports."
      />
      <div className="profile-grid">
        <div className="profile-card">
          <h3>Priya Nair</h3>
          <p className="profile-meta">Hearing journey since 2020</p>
          <div className="profile-tags">
            <span>Verified buyer</span>
            <span>2 active listings</span>
          </div>
          <button type="button" className="btn btn-secondary">
            Edit profile
          </button>
        </div>
        <div className="profile-card">
          <h3>My profile</h3>
          <p className="profile-meta">Quick access to your account.</p>
          <ul className="profile-list">
            <li>
              <span>My orders</span>
              <button type="button" className="btn btn-ghost btn-compact">
                View
              </button>
            </li>
            <li>
              <span>My appointments</span>
              <button type="button" className="btn btn-ghost btn-compact">
                Manage
              </button>
            </li>
            <li>
              <span>Saved items</span>
              <button type="button" className="btn btn-ghost btn-compact">
                Open
              </button>
            </li>
            <li>
              <span>Care reports</span>
              <button type="button" className="btn btn-ghost btn-compact">
                Review
              </button>
            </li>
            <li>
              <span>Account settings</span>
              <button type="button" className="btn btn-ghost btn-compact">
                Update
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function Cart({ cartItems, onRemoveFromCart }) {
  const totals = useMemo(() => {
    const usd = cartItems.reduce((sum, item) => {
      const value = Number(item.price.replace(/[^0-9.]/g, '')) || 0
      return sum + value
    }, 0)

    const inr = cartItems.reduce((sum, item) => {
      const value = Number(item.priceInr.replace(/[^0-9]/g, '')) || 0
      return sum + value
    }, 0)

    return {
      usd,
      inr,
    }
  }, [cartItems])

  return (
    <div className="stack">
      <SectionHeader
        title="Checkout"
        subtitle="Secure payments released after medical approval."
      />
      <div className="cart-grid">
        <div className="cart-list">
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <h3>Your cart is empty</h3>
              <p className="product-meta">
                Add cochlear items from the marketplace to see them here.
              </p>
            </div>
          ) : (
            cartItems.map((product) => (
              <div className="cart-item" key={product.id}>
                <div>
                  <h4>{product.name}</h4>
                  <p className="product-meta">{product.condition}</p>
                </div>
                <div className="cart-actions">
                  <div className="price-stack">
                    <span className="price">{product.price}</span>
                    <span className="price-inr">{product.priceInr}</span>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ghost"
                    onClick={() => onRemoveFromCart(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
          <button type="button" className="btn btn-ghost">
            Continue shopping
          </button>
        </div>
        <div className="summary-card">
          <h3>Order summary</h3>
          <div className="summary-row">
            <span>Items</span>
            <span>{cartItems.length}</span>
          </div>
          <div className="summary-row">
            <span>Subtotal (USD)</span>
            <span>${totals.usd.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Subtotal (INR)</span>
            <span>INR {totals.inr.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>${totals.usd.toFixed(2)}</span>
          </div>
          <button type="button" className="btn btn-primary">
            Pay securely
          </button>
        </div>
      </div>
    </div>
  )
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}

export default App
