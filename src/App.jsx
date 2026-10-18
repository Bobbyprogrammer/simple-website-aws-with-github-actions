import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";

const pages = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

function Header() {
  return (
    <header className="site-header">
      <NavLink className="brand" to="/" aria-label="Simple home">
        Simple.
      </NavLink>

      <nav aria-label="Main navigation">
        {pages.map(({ to, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function Home() {
  return (
    <section className="page hero-page">
      <p className="eyebrow"> Updated by A simple React Router example</p>
      <h1>
        Three pages.
        <br />
        One clean experience.
      </h1>
      <p className="intro">
        Use the navigation above to move between pages without a full browser
        refresh.
      </p>
      <NavLink className="button" to="/about">
        Learn more
      </NavLink>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <p className="eyebrow">About</p>
      <h1>Built to stay simple.</h1>
      <p className="intro">
        This small Vite app uses React Router for client-side navigation and
        plain CSS for a lightweight, responsive design.
      </p>
      <div className="feature-grid">
        <article>
          <span>01</span>
          <h2>Fast navigation</h2>
          <p>
            Pages update instantly without reloading the entire application.
          </p>
        </article>
        <article>
          <span>02</span>
          <h2>Clear structure</h2>
          <p>
            Each route maps to a focused page component that is easy to extend.
          </p>
        </article>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="page">
      <p className="eyebrow">Contact</p>
      <h1>Let’s start a conversation.</h1>
      <p className="intro">
        Have a question or an idea? Send a note and we’ll get back to you soon.
      </p>
      <a className="button" href="mailto:hello@example.com">
        hello@example.com
      </a>
    </section>
  );
}

function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer>© 2026 Simple Studio</footer>
    </div>
  );
}

export default App;
