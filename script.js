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

const updateNavState = () => {
  if (!siteNav) {
    return;
  }

  siteNav.classList.toggle("is-scrolled", window.scrollY > 36);
};

updateNavState();
window.addEventListener("scroll", updateNavState, { passive: true });
