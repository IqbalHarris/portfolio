/*
  Featured projects, archive items, and the consultation beat start compressed
  and faint in CSS. IntersectionObserver expands each reveal on scroll.
*/
const revealRows = document.querySelectorAll(".reveal, .consultation-reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  },
  {
    rootMargin: "0px 0px -12% 0px",
    threshold: 0.22,
  },
);

revealRows.forEach((row) => revealObserver.observe(row));

/*
  Keep the main navigation available while browsing the long portfolio pages.
  Scrolling softens it into a quieter utility state; hover/focus restores clarity.
*/
const siteNav = document.querySelector(".site-nav");

if (siteNav && !siteNav.querySelector(".nav-particle")) {
  const navParticles = [
    { x: "18%", y: "34%", size: "0.92rem", color: "cyan", delay: "0s", duration: "19s" },
    { x: "28%", y: "58%", size: "0.48rem", color: "gold", delay: "-7s", duration: "24s" },
    { x: "39%", y: "24%", size: "0.68rem", color: "ember", delay: "-12s", duration: "22s" },
    { x: "51%", y: "62%", size: "0.36rem", color: "cyan", delay: "-4s", duration: "18s" },
    { x: "63%", y: "30%", size: "1.12rem", color: "gold", delay: "-15s", duration: "27s" },
    { x: "73%", y: "56%", size: "0.56rem", color: "ember", delay: "-9s", duration: "21s" },
    { x: "84%", y: "25%", size: "0.78rem", color: "cyan", delay: "-18s", duration: "26s" },
    { x: "91%", y: "66%", size: "0.42rem", color: "gold", delay: "-2s", duration: "20s" },
  ];

  navParticles.forEach((particle) => {
    const square = document.createElement("span");
    square.className = `nav-particle nav-particle-${particle.color}`;
    square.setAttribute("aria-hidden", "true");
    square.style.setProperty("--particle-x", particle.x);
    square.style.setProperty("--particle-y", particle.y);
    square.style.setProperty("--particle-size", particle.size);
    square.style.setProperty("--particle-delay", particle.delay);
    square.style.setProperty("--particle-duration", particle.duration);
    siteNav.appendChild(square);
  });
}

const updateNavState = () => {
  if (!siteNav) {
    return;
  }

  siteNav.classList.toggle("is-scrolled", window.scrollY > 36);
};

updateNavState();
window.addEventListener("scroll", updateNavState, { passive: true });
