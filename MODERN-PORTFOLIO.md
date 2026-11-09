# Sajjad Mahmud® — Next-Generation Creative Developer Portfolio

An Awwwards-inspired, luxury cinematic creative developer portfolio engineered alongside the authentic classic portfolio.

---

## 💎 Design & Architectural Highlights

1. **Theme:** Luxury Cinematic Dark (`#08090B`, `#111318`, `#B7FF5A`, `#F5F5F0`).
2. **Typography:** `Syne` (Bold Display) + `Plus Jakarta Sans` (Crisp Editorial Body) + `Space Grotesk` (Tech metadata).
3. **Hero Section:**
   - Interactive 3D WebGL Torus Mesh built with Three.js (battery-optimized with `IntersectionObserver`).
   - Magnetic CTA buttons with physical pull physics.
   - Live Availability indicator with pulsing neon radar.
   - Preloader with monogram SVG reveal & percentage counter (`00%` to `100%`).
4. **Authentic Content Separation:**
   - **Classic Experience (`/classic`):** 100% original portfolio with full 9-semester academic resources, course syllabi, and lab reports intact.
   - **Modern Experience (`/modern`):** Professional high-signal creative developer identity (cleanly omitting semester cards and grades).
5. **Interactive Version Switcher:**
   - Seamless floating switch (`[ CLASSIC | MODERN ]`) with instant transition and `localStorage` memory.
6. **Dynamic Blog System:**
   - Filter by categories (*Research & EV*, *Conferences*, *Frontend*, *Backend*).
   - Real-time search.
   - Interactive modal reader.
7. **"Ask Sajjad AI" — Strictly Free Client-Side Intelligence:**
   - Floating chat trigger.
   - Vector knowledge matching based on authentic projects, skills, leadership (VP of GUCC, Student Mentor), and contact info.
   - $0 API cost, 0 external keys exposed, instant response.
8. **Admin Control Console (`/admin`):**
   - Authentication gate (default passcode: `sajjad2026`).
   - Overview with live visitor telemetry & device stats.
   - Project registry (CRUD).
   - Blog management (CRUD).
   - Inbound contact messages viewer.
9. **Genuinely Free Contact Form:**
   - Integrated with EmailJS using authentic existing templates (`service_sajjad`, `template_wwymg5f`).
   - Direct copy-to-clipboard for `sajjadmahmudsuton@gmail.com`.
   - Live Dhaka local time widget (`UTC+6`).

---

## 🚀 Local Development & Preview

Start the local server with:
```powershell
node server.js
```

Open in your browser:
* **Modern Portfolio:** `http://localhost:3000/` or `http://localhost:3000/modern`
* **Classic Portfolio:** `http://localhost:3000/classic`
* **Admin Console:** `http://localhost:3000/admin`

---

## 🌐 Firebase Deployment

To deploy to your live Firebase project (`sajjad-mahmud.web.app`):
```powershell
firebase deploy
```
*(Rewrites are already pre-configured in `firebase.json` for `/classic`, `/modern`, and `/admin`)*.

