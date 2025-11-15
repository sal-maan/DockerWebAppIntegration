/* RESET */
*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    line-height: 1.6;
    background: #020617;
    color: #e5e7eb;
    overflow-x: hidden;
}

/* Animated background blob */
.bg-orbit {
    position: fixed;
    inset: -40%;
    background:
        radial-gradient(circle at 10% 20%, rgba(59,130,246,0.22), transparent 60%),
        radial-gradient(circle at 80% 10%, rgba(56,189,248,0.25), transparent 55%),
        radial-gradient(circle at 10% 90%, rgba(16,185,129,0.20), transparent 55%);
    filter: blur(10px);
    opacity: 0.75;
    z-index: -2;
    animation: orbit 26s infinite linear alternate;
}

@keyframes orbit {
    0%   { transform: translate3d(0,0,0) scale(1); }
    50%  { transform: translate3d(-40px,20px,0) scale(1.1); }
    100% { transform: translate3d(25px,-20px,0) scale(1.05); }
}

/* BASIC ELEMENTS */
a {
    color: inherit;
    text-decoration: none;
}

.container {
    max-width: 1024px;
    margin: 0 auto;
    padding: 0 1.25rem;
}

/* HEADER */
.header {
    position: sticky;
    top: 0;
    z-index: 20;
    backdrop-filter: blur(18px);
    background: radial-gradient(circle at top, rgba(15,23,42,0.98), rgba(2,6,23,0.9));
    border-bottom: 1px solid rgba(148,163,184,0.3);
}

.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0;
}

.logo {
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 1.1rem;
}

.logo span {
    background: linear-gradient(90deg, #38bdf8, #22c55e);
    -webkit-background-clip: text;
    color: transparent;
}

/* NAV LINKS with stronger animation */
.header nav {
    display: flex;
    align-items: center;
    gap: 0.7rem;
}

.header nav a {
    --hover-bg: rgba(15,23,42,0.95);
    font-size: 0.9rem;
    position: relative;
    padding: 0.35rem 0.8rem;
    border-radius: 999px;
    opacity: 0.85;
    transition:
        opacity 0.18s ease,
        transform 0.18s ease,
        background 0.18s ease,
        color 0.18s ease,
        box-shadow 0.18s ease;
}

.header nav a::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid transparent;
    background: conic-gradient(from 180deg, #38bdf8, #a855f7, #22c55e, #38bdf8);
    opacity: 0;
    transform: scale(0.8);
    transition: opacity 0.22s ease, transform 0.22s ease;
    z-index: -1;
}

.header nav a:hover {
    opacity: 1;
    color: #0b1120;
    background: linear-gradient(135deg,#38bdf8,#22c55e);
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(56,189,248,0.45);
}

.header nav a:hover::after {
    opacity: 1;
    transform: scale(1.08);
}

/* MENU BUTTON (MOBILE) */
.menu-btn {
    display: none;
    flex-direction: column;
    gap: 4px;
    border: none;
    background: transparent;
    cursor: pointer;
}

.menu-btn span {
    width: 20px;
    height: 2px;
    border-radius: 999px;
    background: #e5e7eb;
    transition: transform 0.25s ease, opacity 0.25s ease;
}

/* HERO */
.hero {
    padding: 2.5rem 0 1.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
}

.hero-text {
    max-width: 640px;
}

.eyebrow {
    text-transform: uppercase;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    color: #bfdbfe;
    margin-bottom: 0.6rem;
}

.hero h1 {
    font-size: 2.35rem;
    line-height: 1.2;
    font-weight: 700;
    margin-bottom: 0.9rem;
}

.gradient-text {
    background: linear-gradient(90deg,#38bdf8,#a855f7,#22c55e);
    -webkit-background-clip: text;
    color: transparent;
}

.subtitle {
    color: #9ca3af;
    max-width: 560px;
    min-height: 2.3rem;
    margin-bottom: 1.25rem;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.9rem;
    margin-bottom: 1.1rem;
}

.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 1.6rem;
    border-radius: 999px;
    border: 1px solid transparent;
    font-size: 0.9rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition:
        transform 0.16s ease,
        box-shadow 0.16s ease,
        background 0.16s ease,
        border-color 0.16s ease,
        color 0.16s ease;
}

.btn-primary {
    background: linear-gradient(135deg,#38bdf8,#22c55e);
    color: #020617;
    box-shadow: 0 18px 40px rgba(56,189,248,0.4);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 60px rgba(56,189,248,0.55);
}

.btn-outline {
    background: rgba(15,23,42,0.7);
    border-color: rgba(148,163,184,0.6);
    color: #e5e7eb;
}

.btn-outline:hover {
    background: rgba(15,23,42,1);
    transform: translateY(-1px);
}

.btn::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 10% 0,#ffffff33,transparent 55%);
    opacity: 0;
    transition: opacity 0.25s ease;
}

.btn:hover::after {
    opacity: 1;
}

.hero-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.45rem;
    font-size: 0.75rem;
    color: #a5b4fc;
}

.hero-tags span {
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(129,140,248,0.6);
    background: rgba(15,23,42,0.8);
}

/* HERO BADGE */
.hero-badge {
    position: relative;
    width: 180px;
    height: 180px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    perspective: 800px;
}

.badge-ring {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px dashed rgba(148,163,184,0.7);
    animation: spin 18s linear infinite;
}

.badge-content {
    position: relative;
    width: 120px;
    height: 120px;
    border-radius: 24px;
    background: radial-gradient(circle at top,#1d4ed8,#020617);
    box-shadow: 0 22px 45px rgba(15,23,42,0.9);
    padding: 0.9rem;
    display: grid;
    place-content: center;
    text-align: left;
    transform-style: preserve-3d;
    animation: float 5s ease-in-out infinite;
}

.badge-content p {
    font-size: 0.8rem;
    font-weight: 600;
}

.badge-content span {
    display: block;
    font-size: 0.7rem;
    color: #9ca3af;
}

.badge-content .dot {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    width: 10px;
    height: 10px;
    border-radius: 999px;
    background: #22c55e;
    box-shadow: 0 0 12px #22c55e;
}

@keyframes float {
    0%,100% { transform: translateY(0) rotate3d(1,1,0,8deg); }
    50%     { transform: translateY(-12px) rotate3d(-1,1,0,8deg); }
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* SECTIONS & CARDS */
.section {
    margin-bottom: 1.3rem;
}

.card {
    background: radial-gradient(circle at top left, rgba(56,189,248,0.15), rgba(15,23,42,0.96));
    border-radius: 1.15rem;
    padding: 1.7rem 1.5rem;
    border: 1px solid rgba(148,163,184,0.5);
    box-shadow: 0 22px 60px rgba(15,23,42,0.95);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: "";
    position: absolute;
    inset: -40%;
    background: radial-gradient(circle at 0 0, rgba(56,189,248,0.24), transparent 60%);
    opacity: 0;
    transition: opacity 0.45s ease, transform 0.45s ease;
    transform: translate3d(0,20px,0);
}

.card:hover::before {
    opacity: 1;
    transform: translate3d(0,0,0);
}

.card h2 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
}

.mt-1 {
    margin-top: 0.6rem;
}

/* Reveal animation */
.reveal {
    opacity: 0;
    transform: translateY(32px) scale(0.98);
    transition:
        opacity 0.55s ease-out,
        transform 0.55s ease-out;
}

.reveal.show {
    opacity: 1;
    transform: translateY(0) scale(1);
}

/* Chips */
.chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
    margin-top: 0.7rem;
}

.chip {
    padding: 0.3rem 0.75rem;
    border-radius: 999px;
    border: 1px solid rgba(148,163,184,0.7);
    background: rgba(15,23,42,0.9);
    font-size: 0.78rem;
    transition: transform 0.16s ease, box-shadow 0.16s ease, border-color 0.16s ease;
}

.chip:hover {
    transform: translateY(-2px);
    border-color: #38bdf8;
    box-shadow: 0 10px 25px rgba(56,189,248,0.35);
}

/* Toolbox columns */
.columns {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    margin-top: 0.8rem;
}

.column-card {
    padding: 0.9rem 0.95rem;
    border-radius: 0.9rem;
    border: 1px solid rgba(148,163,184,0.45);
    background: rgba(15,23,42,0.9);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.column-card:hover {
    transform: translateY(-5px);
    border-color: #38bdf8;
    box-shadow: 0 18px 40px rgba(56,189,248,0.35);
}

.column-card h3 {
    font-size: 1rem;
    margin-bottom: 0.3rem;
}

.column-card ul {
    list-style: none;
    font-size: 0.88rem;
    color: #d1d5db;
}

.column-card li + li {
    margin-top: 0.25rem;
}

/* Workflow */
.workflow-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1rem;
    margin-top: 0.8rem;
}

.workflow-step {
    position: relative;
    padding: 1rem 0.95rem 0.95rem 1.1rem;
    border-radius: 0.9rem;
    border: 1px solid rgba(148,163,184,0.45);
    background: rgba(15,23,42,0.9);
    overflow: hidden;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.workflow-step::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at top left, rgba(56,189,248,0.2), transparent 60%);
    opacity: 0;
    transition: opacity 0.25s ease;
}

.workflow-step:hover {
    transform: translateY(-5px);
    border-color: #22c55e;
    box-shadow: 0 18px 40px rgba(34,197,94,0.35);
}

.workflow-step:hover::after {
    opacity: 1;
}

.workflow-step h3 {
    font-size: 1rem;
    margin-bottom: 0.35rem;
}

.workflow-step p {
    font-size: 0.88rem;
    color: #e5e7eb;
}

.step-badge {
    position: absolute;
    top: 0.6rem;
    right: 0.8rem;
    font-size: 0.75rem;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
    border: 1px solid rgba(148,163,184,0.7);
    color: #9ca3af;
}

/* Projects */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    gap: 1rem;
    margin-top: 0.9rem;
}

.project {
    padding: 1.05rem;
    border-radius: 0.95rem;
    border: 1px solid rgba(148,163,184,0.55);
    background: radial-gradient(circle at top, rgba(59,130,246,0.25), rgba(15,23,42,0.98));
    box-shadow: 0 18px 45px rgba(15,23,42,0.9);
    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
    cursor: default;
}

.project h3 {
    font-size: 1.02rem;
    margin-bottom: 0.35rem;
}

.project p {
    font-size: 0.9rem;
}

.tech {
    margin-top: 0.45rem;
    font-size: 0.8rem;
    color: #bfdbfe;
}

.project:hover {
    transform: translateY(-6px) scale(1.01);
    box-shadow: 0 24px 60px rgba(56,189,248,0.4);
    border-color: #38bdf8;
}

/* Contact */
.contact {
    list-style: none;
    margin-top: 0.7rem;
    font-size: 0.9rem;
}

.contact li + li {
    margin-top: 0.25rem;
}

.contact a {
    color: #38bdf8;
}

/* FOOTER */
.footer {
    padding: 1.6rem 0 2.2rem;
    font-size: 0.85rem;
    text-align: center;
    color: #9ca3af;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .header nav {
        position: absolute;
        top: 56px;
        right: 0;
        background: rgba(15,23,42,0.97);
        flex-direction: column;
        align-items: flex-start;
        padding: 0.7rem 1.3rem 0.9rem;
        transform-origin: top right;
        transform: scaleY(0);
        opacity: 0;
        pointer-events: none;
        border-left: 1px solid rgba(148,163,184,0.4);
        border-bottom: 1px solid rgba(148,163,184,0.4);
        border-radius: 0 0 0 1rem;
        transition: transform 0.22s ease, opacity 0.22s ease;
    }

    .header nav.show {
        transform: scaleY(1);
        opacity: 1;
        pointer-events: auto;
    }

    .menu-btn {
        display: flex;
    }

    .menu-btn.active span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
    }

    .menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .menu-btn.active span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
    }

    .hero {
        flex-direction: column;
        align-items: flex-start;
    }

    .hero-badge {
        align-self: center;
        margin-top: 0.5rem;
    }

    .hero h1 {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .card {
        padding: 1.4rem 1.2rem;
    }

    .hero {
        padding-top: 1.8rem;
    }
}
