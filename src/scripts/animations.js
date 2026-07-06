import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducedMotion) {
  // --- Hero entrance -----------------------------------------------
  const heroEls = gsap.utils.toArray("[data-hero]");
  if (heroEls.length) {
    gsap.set(heroEls, { autoAlpha: 0, y: 34 });
    gsap.to(heroEls, {
      autoAlpha: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      stagger: 0.12,
      delay: 0.15,
    });
  }

  // Slow Ken Burns drift on the hero image.
  const heroImg = document.querySelector("[data-hero-img]");
  if (heroImg) {
    gsap.fromTo(
      heroImg,
      { scale: 1.12 },
      { scale: 1, duration: 2.4, ease: "power2.out" }
    );
    gsap.to(heroImg, {
      yPercent: 12,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
  }

  // --- Generic reveal-on-scroll ------------------------------------
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 86%",
        once: true,
      },
    });
  });

  // --- Voltage capability bars --------------------------------------
  gsap.utils.toArray("[data-bar]").forEach((bar) => {
    gsap.to(bar, {
      scaleX: 1,
      duration: 1.2,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: bar,
        start: "top 88%",
        once: true,
      },
    });
  });

  // --- Delivery process line ----------------------------------------
  const processLine = document.querySelector("[data-process-line]");
  if (processLine) {
    gsap.to(processLine, {
      scaleX: 1,
      duration: 1.6,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: processLine,
        start: "top 85%",
        once: true,
      },
    });
  }

  // --- Stat counters --------------------------------------------------
  gsap.utils.toArray("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count);
    const counter = { value: 0 };
    gsap.to(counter, {
      value: target,
      duration: 1.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
      onUpdate: () => {
        el.textContent =
          target % 1 === 0
            ? Math.round(counter.value).toString()
            : counter.value.toFixed(1);
      },
    });
  });
} else {
  // Reduced motion: make sure counters show final values.
  document.querySelectorAll("[data-count]").forEach((el) => {
    el.textContent = el.dataset.count;
  });
}

// Header border once the page is scrolled (cheap, runs regardless).
const header = document.getElementById("site-header");
const onScroll = () => {
  header?.classList.toggle("is-scrolled", scrollY > 10);
};
onScroll();
addEventListener("scroll", onScroll, { passive: true });
