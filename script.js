// WhatsApp Configuration
const WA_PHONE = "628979489086";

function openWhatsApp() {
  const text = "Halo Kentang Kita, saya mau pesan cemilan crispy dong 🍟";
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

function openWhatsAppItem(item, size, price) {
  const text = `Halo Kentang Kita, saya mau pesan ${item} ukuran ${size} (${price}).`;
  const url = `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank");
}

// Mobile Menu Toggle
const mobileToggle = document.getElementById("mobileToggle");
const navMenu = document.getElementById("navMenu");

mobileToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  const icon = mobileToggle.querySelector("i");
  if (navMenu.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});

// Close mobile menu on link click
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    const icon = mobileToggle.querySelector("i");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  });
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// FAQ Accordion
const faqItems = document.querySelectorAll(".faq-item");
faqItems.forEach((item) => {
  const btn = item.querySelector(".faq-question");
  btn.addEventListener("click", () => {
    const isActive = item.classList.contains("active");
    // Close all others
    faqItems.forEach((otherItem) => otherItem.classList.remove("active"));
    // Toggle current
    if (!isActive) {
      item.classList.add("active");
    }
  });
});

// Blog Read More Toggle
document.querySelectorAll(".blog-card").forEach((card) => {
  const btn = card.querySelector(".read-more");
  const fullContent = card.querySelector(".blog-full");

  btn.addEventListener("click", () => {
    const isVisible = fullContent.style.display === "block";
    if (isVisible) {
      fullContent.style.display = "none";
      btn.innerHTML = `Baca Selengkapnya <i class="fas fa-chevron-down"></i>`;
    } else {
      fullContent.style.display = "block";
      btn.innerHTML = `Tutup <i class="fas fa-chevron-up"></i>`;
    }
  });
});

// Set Current Year in Footer
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll Reveal Animation (Intersection Observer)
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // Hanya animasi sekali
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  },
);

revealElements.forEach((el) => revealObserver.observe(el));
