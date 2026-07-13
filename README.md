<div align="center">

# 🚀 MERN Sprint — 4 Months
### Full Stack (MERN-Only) → Production-Ready → Zoho-Ready

![Status](https://img.shields.io/badge/STATUS-IN_PROGRESS-2ea043?style=for-the-badge&labelColor=0d1117)
![Current Phase](https://img.shields.io/badge/CURRENT_PHASE-03_CSS3_TAILWIND-1f6feb?style=for-the-badge&labelColor=0d1117)
![Sprint](https://img.shields.io/badge/SPRINT-120_DAYS_%2F_4_MONTHS-e3b341?style=for-the-badge&labelColor=0d1117)
![Phases](https://img.shields.io/badge/TOTAL_PHASES-13-8957e5?style=for-the-badge&labelColor=0d1117)
![Stack](https://img.shields.io/badge/STACK-MERN-f78166?style=for-the-badge&labelColor=0d1117)

*Replanned from the original 201-day / 23-phase roadmap.*
*Scope cut to MERN only — everything not needed to ship a production-grade
MERN project (OpportuNet) or clear Zoho (Jan–Feb 2027) is dropped or deferred.*

</div>

---

## 📖 What Changed & Why

The original plan (201 days, 23 phases) covered a full generalist stack: SQL + Prisma,
NestJS, GraphQL, deep TypeScript, System Design internals, SaaS billing, observability
tooling, and computer networks. That's a great long-term roadmap, but it's not what's
needed **right now** to ship OpportuNet and walk into Zoho with one strong, polished
production project.

This replan:
- **Keeps** everything that's core to MERN: CSS/Tailwind, JavaScript, React, light state
  management, Node/Express, MongoDB/Mongoose, JWT auth, light Redis, light testing,
  deployment, and Gemini API integration (already in use).
- **Cuts** PostgreSQL/Prisma, NestJS, GraphQL, deep TypeScript, deep System Design,
  SaaS/Stripe, observability tooling, and deep computer networks — these become a
  **Phase 2 roadmap** to pick up *after* Zoho prep is locked in, not before.
- **Compresses timeline**: 201 days → **120 days (~4 months)**, since scope is tighter
  and you already have working knowledge from OpportuNet.
- **Keeps your existing progress** — Phase 1 (Web Fundamentals) and Phase 2 (HTML5)
  are marked done, and Phase 3 (CSS/Tailwind) resumes exactly where you left off
  (Day 10).

**Start date:** 13 July 2026 → **Target completion:** ~13 November 2026
(leaves Nov 2026 – Dec 2026 for pure DSA/mock interviews before Zoho in Jan–Feb 2027)

---

## 🗺️ New Roadmap (13 Phases, 120 Days)

| # | Phase | Focus Area | Duration | Status |
|:---:|:---|:---|:---:|:---:|
| 01 | 🌍 Web Fundamentals | Request-response, DNS, HTTP/HTTPS, rendering path | 3 Days | ✅ Done |
| 02 | 🧱 HTML5 | Semantic structure, forms, accessibility | 3 Days | ✅ Done |
| 03 | 🎨 CSS3 & Tailwind | Flexbox, Grid, responsive, utility-first | 8 Days | 🟡 In Progress (Day 7/8 done) |
| 04 | ⚙️ JavaScript (Trimmed) | Core syntax → closures, async/await, event loop, DOM | 18 Days | ⬜ |
| 05 | ⚛️ React | Components, hooks, rendering, composition | 15 Days | ⬜ |
| 06 | 🧩 State Management (Light) | Context API, Zustand basics | 4 Days | ⬜ |
| 07 | 🟢 Node.js & Express | REST APIs, middleware, validation (Zod) | 12 Days | ⬜ |
| 08 | 🗄️ MongoDB & Mongoose | Schemas, aggregation, indexing, relations | 8 Days | ⬜ |
| 09 | 🔐 Auth & Security (Core) | JWT, bcrypt, CORS, basic OWASP hygiene | 6 Days | ⬜ |
| 10 | ⚡ Redis (Light) | Caching, rate limiting | 3 Days | ⬜ |
| 11 | 🧪 Testing (Light) | Vitest unit tests, Postman/Thunder Client API tests | 4 Days | ⬜ |
| 12 | ☁️ Deployment & Git | Git/GitHub, env vars, Vercel + Render deploy flow | 6 Days | ⬜ |
| 13 | 🤖 AI Integration | Gemini API in MERN — curation, chat, RAG-lite | 6 Days | ⬜ |
| — | 🏁 **Capstone: OpportuNet Polish** | Auth on `/admin`, validation, submission workflow, seeding, mobile responsiveness, resume-ready polish | 24 Days | ⬜ |

**Total: 120 Days**

---

## 📂 Repository Structure

```
MERN-Sprint/
│
├── 01-Web-Fundamentals/        ✅ done
├── 02-HTML5/                   ✅ done
├── 03-CSS-Tailwind/            🟡 in progress
├── 04-JavaScript/
├── 05-React/
├── 06-State-Management-Light/
├── 07-Node-Express/
├── 08-MongoDB-Mongoose/
├── 09-Auth-Security-Core/
├── 10-Redis-Light/
├── 11-Testing-Light/
├── 12-Deployment-Git/
├── 13-AI-Integration/
└── 14-Capstone-OpportuNet/
```

---

## ✅ 120-Day Daily Tracker

### 🌍 Phase 1 — Web Fundamentals *(Done)*
- [✅] Day 1: Request–Response Cycle & Client–Server Architecture
- [✅] Day 2: DNS & IP/Ports
- [✅] Day 3: HTTP vs HTTPS & Critical Rendering Path

### 🧱 Phase 2 — HTML5 *(Done)*
- [✅] Day 4: Semantic HTML & DOM Structure
- [✅] Day 5: Forms & Validation
- [✅] Day 6: Multimedia & SEO Metadata — 🛠️ Project: Semantic Personal Profile

### 🎨 Phase 3 — CSS3 & Tailwind *(In Progress — resume Day 10)*
- [✅] Day 7: Syntax, Selectors, Specificity
- [✅] Day 8: Colors, Typography, Borders/Spacing
- [✅] Day 9: Box Model, Units, Positioning
- [✅ ] Day 10: Flexbox Deep Dive
- [ ] Day 11: CSS Grid In-Depth
- [ ] Day 12: Responsive Design & Media Queries
- [ ] Day 13: Tailwind Setup & Core Utilities

### ⚙️ Phase 4 — JavaScript (Trimmed) *(18 Days)*
- [ ] Day 15: Variables & Data Types
- [ ] Day 16: Operators
- [ ] Day 17: Conditionals
- [ ] Day 18: Loops
- [ ] Day 19: Functions
- [ ] Day 20: Arrays & Objects
- [ ] Day 21: Scope & Hoisting
- [ ] Day 22: Closures
- [ ] Day 23: `==` vs `===` & Type Coercion
- [ ] Day 24: Arrow Functions & Rest/Default Params
- [ ] Day 25: `this` Keyword
- [ ] Day 26: Classes (ES6+)
- [ ] Day 27: Promises
- [ ] Day 28: `async`/`await`
- [ ] Day 29: Event Loop & Call Stack
- [ ] Day 30: DOM Manipulation
- [ ] Day 31: Event Bubbling & Delegation
- [ ] Day 32: Fetch API & LocalStorage — 🛠️ Project: Interactive To-Do/Kanban

### ⚛️ Phase 5 — React *(15 Days)*
- [ ] Day 33: Component Model, Virtual DOM, Vite Setup
- [ ] Day 34: JSX Fundamentals
- [ ] Day 35: Components (Function-based)
- [ ] Day 36: Props & Composition
- [ ] Day 37: `useState`
- [ ] Day 38: State Updates & Batching
- [ ] Day 39: Lifting State Up
- [ ] Day 40: `useEffect`
- [ ] Day 41: Effect Cleanup
- [ ] Day 42: `useRef`
- [ ] Day 43: `useContext`
- [ ] Day 44: Solving Prop Drilling
- [ ] Day 45: `useMemo`
- [ ] Day 46: `useCallback`
- [ ] Day 47: Render Optimization — 🛠️ Project: Component Library

### 🧩 Phase 6 — State Management (Light) *(4 Days)*
- [ ] Day 48: Why State Libraries — Zustand Setup
- [ ] Day 49: Stores & Slices
- [ ] Day 50: Persist Middleware
- [ ] Day 51: TanStack Query Basics (fetch + cache only) — 🛠️ Mini Project: Global Store

### 🟢 Phase 7 — Node.js & Express *(12 Days)*
- [ ] Day 52: Node Basics, npm, `package.json`
- [ ] Day 53: Node Core Modules
- [ ] Day 54: Node Event Loop
- [ ] Day 55: File System Operations
- [ ] Day 56: Express Setup & Routing
- [ ] Day 57: Controllers & Route Organization
- [ ] Day 58: Request/Response Lifecycle
- [ ] Day 59: Custom Middleware
- [ ] Day 60: Error Handling Middleware
- [ ] Day 61: Validation with Zod
- [ ] Day 62: Rate Limiting Basics
- [ ] Day 63: API Structuring Best Practices — 🛠️ Project: REST API

### 🗄️ Phase 8 — MongoDB & Mongoose *(8 Days)*
- [ ] Day 64: MongoDB Basics & Schemas
- [ ] Day 65: Mongoose Modeling
- [ ] Day 66: Relations & Population
- [ ] Day 67: Aggregation Pipeline
- [ ] Day 68: Indexing
- [ ] Day 69: MongoDB Atlas — Prod Setup
- [ ] Day 70: Query Optimization
- [ ] Day 71: Backup/Restore Basics — 🛠️ Project: Schema Design for OpportuNet

### 🔐 Phase 9 — Auth & Security (Core) *(6 Days)*
- [ ] Day 72: AuthN vs AuthZ
- [ ] Day 73: JWT Fundamentals
- [ ] Day 74: Password Hashing (bcrypt)
- [ ] Day 75: Protected Routes / Middleware Guards
- [ ] Day 76: CORS
- [ ] Day 77: Basic OWASP Hygiene (XSS/CSRF awareness) — 🛠️ Apply directly: OpportuNet `/admin` auth

### ⚡ Phase 10 — Redis (Light) *(3 Days)*
- [ ] Day 78: Key-Value Basics
- [ ] Day 79: Cache-Aside Pattern
- [ ] Day 80: Rate Limiting with Redis — 🛠️ Mini Project: API Rate Limiter

### 🧪 Phase 11 — Testing (Light) *(4 Days)*
- [ ] Day 81: Why Testing — Unit vs Integration
- [ ] Day 82: Vitest Setup & Unit Tests
- [ ] Day 83: Mocking Basics
- [ ] Day 84: API Testing (Postman/Thunder Client) — 🛠️ Apply: Test OpportuNet endpoints

### ☁️ Phase 12 — Deployment & Git *(6 Days)*
- [ ] Day 85: Git Basics (init, add, commit, log)
- [ ] Day 86: Git Branching (branch, merge, checkout)
- [ ] Day 87: GitHub Workflow (PRs, issues)
- [ ] Day 88: Environment Variables & Secrets Management
- [ ] Day 89: Vercel Deployment (Frontend)
- [ ] Day 90: Render Deployment (Backend) + MongoDB Atlas Connection — 🛠️ Apply: Redeploy OpportuNet cleanly

### 🤖 Phase 13 — AI Integration *(6 Days)*
- [ ] Day 91: LLM API Fundamentals (Gemini)
- [ ] Day 92: Prompt Engineering Basics
- [ ] Day 93: Function/Tool Calling
- [ ] Day 94: Structured Outputs (JSON mode)
- [ ] Day 95: Embeddings & Vector Search (conceptual)
- [ ] Day 96: RAG-lite Pattern — 🛠️ Apply: Gemini-assisted opportunity curation for OpportuNet

### 🏁 Capstone — OpportuNet Production Polish *(24 Days, Day 97–120)*
- [ ] Day 97–100: JWT auth fully protecting `/admin` route
- [ ] Day 101–104: Backend validation + rate limiting on all public endpoints
- [ ] Day 105–108: Public submission form with pending/approved workflow
- [ ] Day 109–111: Seed 20–30 real opportunities
- [ ] Day 112–115: Gemini API-assisted curation live
- [ ] Day 116–118: Student profile personalization
- [ ] Day 119: Full mobile responsiveness pass
- [ ] Day 120: Final QA, README polish, resume/GitHub update, demo video — 🏁 **Ship it**

---

## 🏆 Milestone Tracker

- [ ] 🎯 Day 32 — Frontend Fundamentals Locked (CSS → JS)
- [ ] 🎯 Day 47 — React Core Mastered
- [ ] 🎯 Day 71 — Backend + Database Core Complete
- [ ] 🎯 Day 84 — Auth, Redis, Testing Done (production-safe backend)
- [ ] 🎯 Day 96 — Full MERN + AI Stack Complete
- [ ] 🎯 Day 120 — 🏁 **OpportuNet Production-Ready + MERN Sprint Complete**
- [ ] 🎯 Nov 2026 – Dec 2026 — Pure DSA + Mock Interviews window before Zoho (Jan–Feb 2027)

---

## 🔮 Deferred (Phase 2 Roadmap — After Zoho Prep)

Pick this up once OpportuNet ships and Zoho prep is locked in — not before:

- TypeScript (deep)
- PostgreSQL + Prisma
- NestJS
- GraphQL + WebSockets/Socket.io
- Deep System Design (HLD/LLD, Sharding, Consistent Hashing)
- Observability (Sentry, Grafana)
- SaaS/Stripe billing
- Computer Networks deep dive (TLS handshake, HTTP/3)
- Performance Optimization deep dive (Core Web Vitals, bundle splitting)

---

## 🎯 Principles (Unchanged)

1. **No copy-paste** — if you can't rebuild it from memory, you haven't learned it.
2. **Ship over study** — every phase feeds directly into OpportuNet, not just notes.
3. **Daily consistency** — short session beats a skipped day.
4. **Scope discipline** — if it's not MERN or not needed for Zoho, it's deferred, not abandoned.

---

<div align="center">

### ⚡ "I alone level up."

**Maintained by [Abishek](https://github.com/Abishek220-pro)** — building in public, one day at a time

![Profile Views](https://komarev.com/ghpvc/?username=Abishek220-pro&style=for-the-badge&color=1f6feb)

</div>