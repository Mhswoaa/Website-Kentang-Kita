/* CSS VARIABLES - Premium Palette */
:root {
  --bg-main: #fffcf7; /* Soft cream */
  --bg-surface: #ffffff;
  --bg-accent: #fff3e0;
  --primary: #f97316; /* Appetizing Orange */
  --primary-hover: #ea580c;
  --primary-light: #ffedd5;
  --text-dark: #291304; /* Espresso Brown */
  --text-muted: #785a46;
  --border-color: #f3e8d8;
  --shadow-sm:
    0 4px 6px -1px rgba(41, 19, 4, 0.05), 0 2px 4px -2px rgba(41, 19, 4, 0.05);
  --shadow-md:
    0 10px 25px -5px rgba(41, 19, 4, 0.08),
    0 8px 10px -6px rgba(41, 19, 4, 0.04);
  --shadow-lg: 0 25px 50px -12px rgba(249, 115, 22, 0.15);
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-pill: 100px;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* RESET & BASE */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Plus Jakarta Sans", sans-serif;
  background-color: var(--bg-main);
  color: var(--text-dark);
  line-height: 1.6;
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Outfit", sans-serif;
  font-weight: 700;
  line-height: 1.2;
  color: var(--text-dark);
}

a {
  text-decoration: none;
  color: inherit;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
}
ul {
  list-style: none;
}
button {
  font-family: inherit;
  cursor: pointer;
  border: none;
  background: none;
}

/* REVEAL ANIMATION CLASS */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
}
.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

/* NAVBAR (Glassmorphism) */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 252, 247, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-color);
  transition: var(--transition);
}

header.scrolled {
  box-shadow: var(--shadow-sm);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-logo {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-surface);
  box-shadow: var(--shadow-sm);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.brand-logo img {
  border-radius: 50%;
}

.brand-text h1 {
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.5px;
}
.brand-text span {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 500;
}

.nav-menu {
  display: flex;
  gap: 32px;
  align-items: center;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-muted);
  transition: var(--transition);
  position: relative;
}

.nav-link:hover {
  color: var(--primary);
}
.nav-link::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: var(--transition);
  border-radius: 2px;
}
.nav-link:hover::after {
  width: 100%;
}

.btn-wa-nav {
  background: var(--primary);
  color: white;
  padding: 10px 24px;
  border-radius: var(--radius-pill);
  font-weight: 600;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(249, 115, 22, 0.3);
  transition: var(--transition);
}
.btn-wa-nav:hover {
  background: var(--primary-hover);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

.mobile-toggle {
  display: none;
  font-size: 1.5rem;
  color: var(--text-dark);
  cursor: pointer;
}

/* HERO SECTION */
.hero {
  padding: 140px 24px 80px;
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 40px;
  align-items: center;
}

.hero-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-light);
  color: var(--primary-hover);
  padding: 6px 16px;
  border-radius: var(--radius-pill);
  font-weight: 700;
  font-size: 0.85rem;
  margin-bottom: 24px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.hero h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  margin-bottom: 20px;
  letter-spacing: -1px;
}
.hero h1 span {
  color: var(--primary);
}

.hero p.subtitle {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 32px;
  max-width: 90%;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 40px;
}
.badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-dark);
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-sm);
}
.badge i {
  color: var(--primary);
}

.hero-cta {
  display: flex;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
}

.btn-outline {
  padding: 12px 28px;
  border-radius: var(--radius-pill);
  border: 2px solid var(--border-color);
  background: transparent;
  color: var(--text-dark);
  font-weight: 600;
  font-size: 1rem;
  transition: var(--transition);
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.btn-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
  background: var(--primary-light);
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-wrapper {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 450px;
  aspect-ratio: 1;
  background: var(--bg-surface);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-lg);
  border: 12px solid var(--bg-main);
}
.hero-image-wrapper img {
  width: 75%;
  height: 75%;
  object-fit: contain;
}

.blob-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  z-index: 1;
  background: radial-gradient(
    circle,
    var(--primary-light) 0%,
    rgba(255, 237, 213, 0) 70%
  );
  border-radius: 50%;
  filter: blur(20px);
}

/* SECTION HEADER (Reusable) */
.section-header {
  text-align: center;
  margin-bottom: 56px;
}
.section-tag {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--primary);
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 8px;
  display: block;
}
.section-title {
  font-size: 2.5rem;
  margin-bottom: 16px;
}
.section-desc {
  color: var(--text-muted);
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.05rem;
}

/* MENU SECTION */
.section-padding {
  padding: 100px 24px;
  max-width: 1200px;
  margin: 0 auto;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.menu-card {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: 24px;
  position: relative;
  border: 1px solid var(--border-color);
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
}
.menu-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-md);
  border-color: var(--primary-light);
}

.menu-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: var(--text-dark);
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
}
.menu-badge.populer {
  background: var(--primary);
}

.menu-icon-box {
  width: 72px;
  height: 72px;
  border-radius: 20px;
  background: var(--bg-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 20px;
}

.menu-card h3 {
  font-size: 1.25rem;
  margin-bottom: 8px;
}
.menu-card p {
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 24px;
  flex-grow: 1;
}

.menu-actions {
  background: var(--bg-main);
  padding: 6px;
  border-radius: 12px;
  display: flex;
  gap: 6px;
}

.size-btn {
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 700;
  background: transparent;
  color: var(--text-muted);
  border: 1px solid transparent;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}
.size-btn span {
  color: var(--text-dark);
  font-size: 0.95rem;
}
.size-btn:hover {
  background: var(--bg-surface);
  border-color: var(--border-color);
  box-shadow: var(--shadow-sm);
  color: var(--primary);
}

/* ABOUT / BENTO GRID */
.bento-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.bento-item {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: 40px;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
}
.bento-main {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--primary-light);
  border-color: transparent;
}
.bento-main h3 {
  font-size: 2rem;
  margin-bottom: 16px;
  color: var(--text-dark);
}
.bento-main p {
  font-size: 1.1rem;
  color: var(--text-muted);
  max-width: 700px;
}

.bento-stat {
  display: flex;
  align-items: center;
  gap: 20px;
}
.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}
.stat-text h4 {
  font-size: 1.8rem;
  margin-bottom: 4px;
}
.stat-text p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* TESTIMONIALS */
.testi-container {
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: 40px;
  align-items: start;
}

.testi-summary {
  background: var(--text-dark);
  color: white;
  padding: 40px;
  border-radius: var(--radius-lg);
}
.testi-summary h3 {
  font-size: 4rem;
  color: white;
  margin: 10px 0;
}
.testi-summary .stars {
  color: var(--primary);
  font-size: 1.5rem;
  margin-bottom: 16px;
}
.testi-summary p {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
  margin-bottom: 24px;
}
.testi-summary ul li {
  margin-bottom: 12px;
  font-size: 0.9rem;
  display: flex;
  gap: 10px;
  align-items: start;
  color: rgba(255, 255, 255, 0.9);
}
.testi-summary ul li i {
  color: var(--primary);
  margin-top: 4px;
}

.testi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
.testi-card {
  background: var(--bg-surface);
  padding: 24px;
  border-radius: var(--radius-md);
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow-sm);
  position: relative;
}
.testi-card::before {
  content: "\201C";
  font-family: "Outfit", sans-serif;
  position: absolute;
  top: 10px;
  right: 20px;
  font-size: 4rem;
  color: var(--primary-light);
  line-height: 1;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-light);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}
.user-name {
  font-weight: 700;
  font-size: 1rem;
}
.user-role {
  font-size: 0.8rem;
  color: var(--text-muted);
}
.testi-card p {
  font-size: 0.95rem;
  color: var(--text-muted);
  font-style: italic;
}

/* BLOG / TIPS */
.blog-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}
.blog-card {
  background: var(--bg-surface);
  border-radius: var(--radius-lg);
  padding: 32px;
  border: 1px solid var(--border-color);
  transition: var(--transition);
}
.blog-card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}
.blog-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: var(--bg-accent);
  color: var(--primary-hover);
  border-radius: var(--radius-pill);
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 16px;
  text-transform: uppercase;
}
.blog-card h3 {
  font-size: 1.3rem;
  margin-bottom: 12px;
}
.blog-meta {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 16px;
}
.blog-excerpt {
  font-size: 0.95rem;
  color: var(--text-muted);
}
.blog-full {
  display: none;
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px dashed var(--border-color);
}
.read-more {
  margin-top: 20px;
  color: var(--primary);
  font-weight: 700;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 6px;
}
.read-more:hover {
  color: var(--primary-hover);
}

/* FAQ */
.faq-container {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  background: var(--bg-surface);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  margin-bottom: 16px;
  overflow: hidden;
  transition: var(--transition);
}
.faq-item:hover {
  border-color: var(--primary-light);
  box-shadow: var(--shadow-sm);
}
.faq-question {
  width: 100%;
  text-align: left;
  padding: 20px 24px;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-dark);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.faq-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: var(--bg-accent);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}
.faq-item.active .faq-icon {
  transform: rotate(180deg);
  background: var(--primary);
  color: white;
}
.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition:
    max-height 0.4s ease,
    padding 0.4s ease;
  background: var(--bg-main);
}
.faq-item.active .faq-answer {
  max-height: 200px;
  padding: 0 24px 24px;
}
.faq-answer p {
  color: var(--text-muted);
  font-size: 0.95rem;
}

/* ORDER CTA SECTION */
.order-cta {
  background: linear-gradient(135deg, var(--text-dark) 0%, #4a2b11 100%);
  border-radius: var(--radius-lg);
  padding: 60px 40px;
  margin: 0 24px 100px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
  max-width: 1152px;
  margin-left: auto;
  margin-right: auto;
}
.order-cta::before {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: var(--primary);
  filter: blur(80px);
  border-radius: 50%;
  top: -100px;
  right: -100px;
  opacity: 0.3;
  pointer-events: none;
}
.order-cta h2 {
  color: white;
  font-size: 2.5rem;
  margin-bottom: 16px;
}
.order-cta p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 32px;
  max-width: 600px;
  margin-inline: auto;
}
.cta-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-big-wa {
  background: #25d366;
  color: white;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-size: 1.1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
  transition: var(--transition);
}
.btn-big-wa:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(37, 211, 102, 0.4);
}
.btn-big-wa i {
  font-size: 1.3rem;
}

.btn-gofood {
  background: white;
  color: #ee2737;
  padding: 16px 32px;
  border-radius: var(--radius-pill);
  font-size: 1.1rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: var(--transition);
}
.btn-gofood:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.2);
}

/* FOOTER */
footer {
  background: var(--bg-surface);
  border-top: 1px solid var(--border-color);
  padding: 80px 24px 24px;
}
.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}
.footer-brand p {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 16px;
  max-width: 350px;
}
.footer-title {
  font-size: 1.1rem;
  margin-bottom: 20px;
}
.footer-links li {
  margin-bottom: 12px;
}
.footer-links a {
  color: var(--text-muted);
  transition: var(--transition);
  font-size: 0.95rem;
}
.footer-links a:hover {
  color: var(--primary);
  padding-left: 5px;
}

.social-links {
  display: flex;
  gap: 12px;
  margin-top: 20px;
}
.social-link {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--bg-main);
  border: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-dark);
  transition: var(--transition);
}
.social-link:hover {
  background: var(--primary);
  color: white;
  border-color: var(--primary);
  transform: translateY(-3px);
}

.footer-bottom {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 24px;
  border-top: 1px solid var(--border-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  color: var(--text-muted);
  font-size: 0.85rem;
}
