// Zoralis — page transitions (Barba.js) + dust-dissolve effect + small UI bits.
// Vanilla JS, no build step, matching the brief's own "no framework" stack.
//
// Structure: <nav> and the closing CTA+footer are OUTSIDE Barba's
// data-barba="container" (persistent across navigations, same on every
// page) — only <main data-barba="container"> swaps and dust-transitions.
// That's the standard Barba pattern, and avoids the footer/newsletter
// form re-rendering (and the newsletter's own JS state resetting) on
// every click when it's identical content on every page anyway.

// ───────────────────────────── Dust particle canvas ─────────────────────
// Real pixel-sampled disintegration: html2canvas (CDN) rasterizes the
// actual on-screen <main> right before it leaves, we read its real pixels,
// and every particle below is seeded from an actual rendered pixel (its
// position AND its color) instead of a generic random field — so the dust
// is literally made of whatever headline, card, or button was on screen,
// not an unrelated effect layered on top of it. If html2canvas fails to
// load (CDN blocked, offline), makeGenericDust() below is the fallback —
// the transition still runs, just without content sampling.
const canvas = document.getElementById("dust-canvas");
const ctx = canvas ? canvas.getContext("2d") : null;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth * devicePixelRatio;
  canvas.height = window.innerHeight * devicePixelRatio;
  canvas.style.width = window.innerWidth + "px";
  canvas.style.height = window.innerHeight + "px";
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

const DUST_PARTICLE_BUDGET = 2400;

// Captures the currently-visible portion of `el`, reads its real pixels,
// and turns them into a field of physics particles — origin position and
// color taken straight from the screenshot, initial velocity pointing
// outward from screen-center (explode) with a slight upward ash drift.
async function buildContentDust(el) {
  if (!window.html2canvas) return makeGenericDust();
  // A click right after load could otherwise race the webfont fetch —
  // html2canvas would capture mid-swap, same near-invisible-text failure
  // the @import bug caused, just intermittently instead of always.
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch (e) { /* ignore, proceed anyway */ }
  }
  const rect = el.getBoundingClientRect();
  const visTop = Math.max(0, -rect.top);
  const visHeight = Math.min(el.clientHeight - visTop, window.innerHeight - Math.max(rect.top, 0));
  if (!el.clientWidth || visHeight <= 0) return makeGenericDust();
  try {
    const snap = await window.html2canvas(el, {
      backgroundColor: null,
      scale: 1,
      x: 0,
      y: visTop,
      width: el.clientWidth,
      height: Math.ceil(visHeight),
      // html2canvas's own canvas-text renderer silently drops glyphs for
      // this webfont family (confirmed: headline text came back as a
      // near-blank fill, max luminance ~14 out of 255, even with the
      // font fully loaded) — foreignObjectRendering delegates to the
      // browser's real SVG rendering instead and captures it correctly.
      foreignObjectRendering: true,
      useCORS: true,
      logging: false,
    });
    return sampleParticlesFromCanvas(snap, rect.left, Math.max(rect.top, 0));
  } catch (err) {
    return makeGenericDust();
  }
}

// Fixed, deliberately dense sample step — thin text strokes and card
// borders are only a few px wide, so a budget-driven adaptive stride
// (tried first, scaled to viewport area) skipped straight over most of
// them and produced a near-empty, unconvincing dust field. Scanning
// densely and capping the RESULT afterward (not the scan grid) is what
// actually catches the letterforms.
const DUST_SAMPLE_STEP = 3;

function sampleParticlesFromCanvas(srcCanvas, offsetX, offsetY) {
  const w = srcCanvas.width, h = srcCanvas.height;
  if (!w || !h) return makeGenericDust();
  const data = srcCanvas.getContext("2d").getImageData(0, 0, w, h).data;
  const vw = window.innerWidth, vh = window.innerHeight;
  const cx = vw / 2, cy = vh / 2;
  const list = [];
  for (let y = 0; y < h; y += DUST_SAMPLE_STEP) {
    for (let x = 0; x < w; x += DUST_SAMPLE_STEP) {
      const i = (y * w + x) * 4;
      const a = data[i + 3];
      if (a < 40) continue; // transparent gap between elements
      const r = data[i], g = data[i + 1], b = data[i + 2];
      const lum = 0.299 * r + 0.587 * g + 0.114 * b;
      if (lum < 20) continue; // skip the near-black page/card background fill
      // so the dust reads as actual text/buttons/borders dissolving,
      // not a featureless dark rectangle breaking apart.
      const ox = offsetX + x, oy = offsetY + y;
      const dx = ox - cx, dy = oy - cy;
      const dist = Math.hypot(dx, dy) || 1;
      list.push({
        ox, oy,
        vx: (dx / dist) * (1.1 + Math.random() * 2.1),
        vy: (dy / dist) * (1.1 + Math.random() * 2.1) - (0.8 + Math.random() * 1.3),
        size: 1.4 + Math.random() * 1.8,
        color: `${r},${g},${b}`,
        jitter: Math.random() * Math.PI * 2,
      });
    }
  }
  if (!list.length) return makeGenericDust();
  if (list.length > DUST_PARTICLE_BUDGET) {
    // Random downsample (not a coarser grid) so the kept particles are
    // still an even, representative scatter across every real shape
    // instead of silently dropping whichever shapes land off-grid.
    for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
    }
    list.length = DUST_PARTICLE_BUDGET;
  }
  return list;
}

function makeGenericDust() {
  const w = window.innerWidth, h = window.innerHeight;
  const cx = w * 0.5, cy = h * 0.5;
  const list = [];
  for (let i = 0; i < 160; i++) {
    const x = Math.random() * w, y = Math.random() * h;
    const dx = x - cx, dy = y - cy;
    const dist = Math.hypot(dx, dy) || 1;
    list.push({
      ox: x, oy: y,
      vx: (dx / dist) * (1.4 + Math.random() * 2.6),
      vy: (dy / dist) * (1.4 + Math.random() * 2.6) - 0.6,
      size: 1.4 + Math.random() * 2.6,
      color: Math.random() < 0.5 ? "167,139,250" : "245,243,247", // accent-light / ink
      jitter: Math.random() * Math.PI * 2,
    });
  }
  return list;
}

function drawDustFrame(particles, progress, direction) {
  if (!ctx) return;
  ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

  particles.forEach((p) => {
    let px, py, alpha;
    if (direction === "leave") {
      const travel = 1 - Math.pow(1 - progress, 3); // ease-out burst
      const turb = Math.sin(p.jitter + progress * 7) * 3 * progress;
      px = p.ox + p.vx * 95 * travel + turb;
      py = p.oy + p.vy * 95 * travel;
      alpha = 1 - Math.pow(progress, 1.5);
    } else {
      const remain = Math.pow(1 - progress, 2); // ease-out settle
      px = p.ox + p.vx * 95 * remain;
      py = p.oy + p.vy * 95 * remain;
      alpha = Math.pow(progress, 1.3);
    }
    ctx.beginPath();
    ctx.fillStyle = `rgba(${p.color},${Math.max(0, Math.min(1, alpha)).toFixed(3)})`;
    ctx.arc(px, py, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
}

function animateDustPhase(particles, direction, duration) {
  return new Promise((resolve) => {
    if (!particles.length) { resolve(); return; }
    const start = performance.now();
    function frame(now) {
      const t = Math.min((now - start) / duration, 1);
      drawDustFrame(particles, t, direction);
      if (t < 1) {
        requestAnimationFrame(frame);
      } else {
        if (ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        resolve();
      }
    }
    requestAnimationFrame(frame);
  });
}

const LEAVE_MS = 780;
const ENTER_MS = 560;

// ──────────────────────────── One-time UI wiring ─────────────────────────
// Nav toggle + newsletter form live in the persistent chrome, so they're
// bound once and never need re-binding on navigation.

function initNavToggle() {
  const btn = document.querySelector(".nav-toggle");
  const menu = document.querySelector(".mobile-menu");
  if (!btn || !menu) return;
  btn.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });
}

function initNewsletterForms() {
  document.querySelectorAll(".newsletter-field").forEach((field) => {
    const key = field.querySelector(".newsletter-key");
    const input = field.querySelector("input");
    if (!key || !input) return;
    key.addEventListener("click", () => {
      if (!input.value.trim()) { input.focus(); return; }
      key.textContent = "✓";
      input.disabled = true;
      input.value = "Subscribed";
    });
  });
}

// The footer's two reaching hands start slid off-screen (see .hand--left /
// .hand--right in style.css) and only part inward once the footer actually
// scrolls into view — it's well below the fold on every page, so triggering
// this on page load like [data-reveal] would mean the animation finishes
// off-screen before anyone sees it.
function initFooterHandsReveal() {
  const footer = document.querySelector(".footer");
  if (!footer) return;
  if (!("IntersectionObserver" in window)) {
    footer.classList.add("is-revealed");
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footer.classList.add("is-revealed");
          io.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  io.observe(footer);
}

// ──────────────────────── Per-navigation wiring ──────────────────────────
// Entrance reveals are scoped to the swapped <main>; active-nav highlight
// re-checks the whole document since the nav itself didn't just change.

function initReveals(container) {
  container.querySelectorAll("[data-reveal]").forEach((el, i) => {
    el.style.animationDelay = `${Math.min(i, 8) * 70}ms`;
  });
}

function setActiveNav() {
  const path = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a, .mobile-menu a").forEach((a) => {
    const href = a.getAttribute("href");
    a.classList.toggle("active", href === path || (path === "" && href === "index.html"));
  });
}

function initPageContent(container) {
  initReveals(container);
  setActiveNav();
}

// ──────────────────────────────────── Boot ───────────────────────────────

initNavToggle();
initNewsletterForms();
initFooterHandsReveal();
initPageContent(document.querySelector('[data-barba="container"]') || document);

if (window.barba) {
  barba.init({
    transitions: [
      {
        name: "dust",
        async leave(data) {
          document.body.classList.add("is-transitioning");
          const main = data.current.container;
          // Capture while still fully painted, *then* hide — the dust's
          // first frame is drawn from these exact pixels at these exact
          // positions, so swapping real DOM for canvas reads as seamless.
          const particles = await buildContentDust(main);
          main.style.transition = "none";
          main.style.opacity = "0";
          await animateDustPhase(particles, "leave", LEAVE_MS);
        },
        enter(data) {
          window.scrollTo(0, 0);
          data.next.container.style.opacity = "0";
          data.next.container.style.filter = "blur(10px)";
          void data.next.container.offsetHeight; // force layout before transitioning in
          data.next.container.style.transition = `opacity ${ENTER_MS}ms ease, filter ${ENTER_MS}ms ease`;
          data.next.container.style.opacity = "1";
          data.next.container.style.filter = "blur(0)";
          return animateDustPhase(makeGenericDust(), "enter", ENTER_MS).then(() => {
            document.body.classList.remove("is-transitioning");
          });
        },
        beforeEnter(data) {
          initPageContent(data.next.container);
        },
      },
    ],
  });
}
// If window.barba is undefined (CDN failed, offline, etc.), the page still
// works fully, just without cross-page transitions — normal <a> navigation.
