// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// Close nav on link click (mobile)
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// Smooth scroll helper
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Expose scrollToSection for inline use
window.scrollToSection = scrollToSection;

// WhatsApp opener – ganti nomor dengan nomor kamu
const WA_PHONE = "628979489086";

function openWhatsApp() {
  const text = "Halo Kentang Kita, saya mau pesan Kentang Crispy dong";
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function openWhatsAppItem(item, size, price) {
  const text = `Halo Kentang Kita, saya mau pesan ${item} ukuran ${size} (${price}).`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Tahun di footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

// Toggle "Baca selengkapnya" di artikel
document.querySelectorAll(".blog-card").forEach((card) => {
  const btn = card.querySelector(".blog-readmore-btn");
  const fullContent = card.querySelector(".blog-full");

  btn.addEventListener("click", () => {
    const visible = fullContent.style.display === "block";

    if (visible) {
      fullContent.style.display = "none";
      btn.innerHTML = `Baca selengkapnya <i class="fas fa-chevron-down"></i>`;
    } else {
      fullContent.style.display = "block";
      btn.innerHTML = `Sembunyikan <i class="fas fa-chevron-up"></i>`;
    }
  });
});

// FAQ toggle – satu terbuka, yang lain tertutup
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const button = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  button.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");

    // tutup semua dulu
    faqItems.forEach((other) => {
      const otherBtn = other.querySelector(".faq-question");
      const otherAns = other.querySelector(".faq-answer");
      other.classList.remove("open");
      otherBtn.setAttribute("aria-expanded", "false");
      otherAns.setAttribute("aria-hidden", "true");
    });

    // kalau sebelumnya tertutup, buka yang ini
    if (!isOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      answer.setAttribute("aria-hidden", "false");
    }
  });
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

