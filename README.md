<div align="center">

# 🚀 MERN Sprint — Finish by October
### Full Stack (MERN-Only) → Production-Ready → Zoho-Ready

![Status](https://img.shields.io/badge/STATUS-IN_PROGRESS-2ea043?style=for-the-badge&labelColor=0d1117)
![Current Phase](https://img.shields.io/badge/CURRENT_PHASE-03_CSS3_TAILWIND-1f6feb?style=for-the-badge&labelColor=0d1117)
![Sprint](https://img.shields.io/badge/SPRINT-102_DAYS-e3b341?style=for-the-badge&labelColor=0d1117)
![Phases](https://img.shields.io/badge/TOTAL_PHASES-13-8957e5?style=for-the-badge&labelColor=0d1117)
![Stack](https://img.shields.io/badge/STACK-MERN-f78166?style=for-the-badge&labelColor=0d1117)

*Replanned from the original 201-day / 23-phase roadmap, then re-compressed*
*from 120 days to 102 days to finish in October — no spillover into November.*

</div>

---

## 📖 What Changed & Why (v2)

First cut: 201 days → 120 days by dropping non-MERN scope (SQL/Prisma, NestJS,
GraphQL, deep TypeScript, deep System Design, SaaS/Stripe, observability, deep
networking) — see the deferred list at the bottom.

Second cut: **120 days → 102 days**, to guarantee an **October finish, not
November**. This round didn't touch MERN-core content (JS, React, Node/Express,
MongoDB, Auth, Deployment) — it tightened the *light* phases that already had
slack built in, and trimmed the capstone from 24 days to 20:

| Phase | Old Days | New Days | What was tightened |
|:---|:---:|:---:|:---|
| JavaScript | 18 | 15 | Merged overlapping fundamentals (e.g. type coercion folded into `==`/`===` day) |
| React | 15 | 13 | Combined optimization topics into fewer project-linked days |
| State Mgmt (Light) | 4 | 3 | Dropped standalone TanStack day — folded into Zustand mini-project |
| Node/Express | 12 | 10 | Combined Node internals (event loop, streams, fs) into 2 days instead of 4 |
| MongoDB/Mongoose | 8 | 7 | Backup/restore folded into Atlas prod-setup day |
| Auth & Security | 6 | 5 | CORS + OWASP hygiene combined into one applied day |
| Redis (Light) | 3 | 2 | Cache-aside + rate limiting combined into one day |
| Testing (Light) | 4 | 3 | Mocking folded into Vitest setup day |
| Deployment & Git | 6 | 5 | Git basics + branching combined into one day |
| AI Integration | 6 | 5 | Embeddings/RAG-lite combined into one applied day |
| Capstone (OpportuNet) | 24 | 20 | Kept every deliverable, tightened day ranges per task |

**Start date:** 14 July 2026 → **Target completion:** ~14 October 2026
(leaves all of **November + December free** for pure DSA/mock interviews
before Zoho in Jan–Feb 2027 — more runway than the original plan gave you)

---

## 🗺️ Roadmap (13 Phases, 102 Days)

| # | Phase | Focus Area | Duration | Status |
|:---:|:---|:---|:---:|:---:|
| 01 | 🌍 Web Fundamentals | Request-response, DNS, HTTP/HTTPS, rendering path | 3 Days | ✅ Done |
| 02 | 🧱 HTML5 | Semantic structure, forms, accessibility | 3 Days | ✅ Done |
| 03 | 🎨 CSS3 & Tailwind | Flexbox, Grid, responsive, utility-first | 8 Days | 🟡 Resume Day 10 |
| 04 | ⚙️ JavaScript (Trimmed) | Core syntax → closures, async/await, event loop, DOM | 15 Days | ⬜ |
| 05 | ⚛️ React | Components, hooks, rendering, composition | 13 Days | ⬜ |
| 06 | 🧩 State Management (Light) | Context API, Zustand | 3 Days | ⬜ |
| 07 | 🟢 Node.js & Express | REST APIs, middleware, validation (Zod) | 10 Days | ⬜ |
| 08 | 🗄️ MongoDB & Mongoose | Schemas, aggregation, indexing, relations | 7 Days | ⬜ |
| 09 | 🔐 Auth & Security (Core) | JWT, bcrypt, CORS, OWASP hygiene | 5 Days | ⬜ |
| 10 | ⚡ Redis (Light) | Caching, rate limiting | 2 Days | ⬜ |
| 11 | 🧪 Testing (Light) | Vitest unit tests, API testing | 3 Days | ⬜ |
| 12 | ☁️ Deployment & Git | Git/GitHub, env vars, Vercel + Render | 5 Days | ⬜ |
| 13 | 🤖 AI Integration | Gemini API — curation, structured output, RAG-lite | 5 Days | ⬜ |
| — | 🏁 **Capstone: OpportuNet Polish** | Auth, validation, submission workflow, seeding, personalization, mobile pass | 20 Days | ⬜ |

**Total: 102 Days** (9 already done → **93 days remaining from today**)

---

## ✅ Daily Tracker

### 🌍 Phase 1 — Web Fundamentals *(Done)*
- [✅] Day 1–3: Request-Response, DNS/IP/Ports, HTTP vs HTTPS & Rendering Path

### 🧱 Phase 2 — HTML5 *(Done)*
- [✅] Day 4–6: Semantic HTML, Forms, Multimedia/SEO — 🛠️ Semantic Personal Profile

### 🎨 Phase 3 — CSS3 & Tailwind *(Resume Day 10)*
- [✅] Day 7–9: Selectors/Specificity, Colors/Typography, Box Model/Units/Positioning
- [✅] Day 10: Flexbox Deep Dive
- [✅] Day 11: CSS Grid In-Depth
- [✅] Day 12: Responsive Design & Media Queries
- [ ] Day 13: Tailwind Setup & Core Utilities
- [ ] Day 14: Responsive Prefixes, Dark Mode, `@apply` — 🛠️ SaaS Landing Page

### ⚙️ Phase 4 — JavaScript *(15 Days: Day 15–29)*
- [✅] Day 15: Variables & Data Types
- [✅]Day 16: Operators & Conditionals
- [ ] Day 17: Loops
- [ ] Day 18: Functions
- [ ] Day 19: Arrays & Objects
- [ ] Day 20: Scope & Hoisting
- [ ] Day 21: Closures
- [ ] Day 22: `==` vs `===` & Type Coercion
- [ ] Day 23: Arrow Functions & Rest/Default Params
- [ ] Day 24: `this` Keyword
- [ ] Day 25: Classes (ES6+)
- [ ] Day 26: Promises
- [ ] Day 27: `async`/`await` & Event Loop
- [ ] Day 28: DOM Manipulation & Event Delegation
- [ ] Day 29: Fetch API & LocalStorage — 🛠️ Interactive To-Do/Kanban

### ⚛️ Phase 5 — React *(13 Days: Day 30–42)*
- [ ] Day 30: Component Model, Virtual DOM, Vite Setup
- [ ] Day 31: JSX Fundamentals
- [ ] Day 32: Components & Props/Composition
- [ ] Day 33: `useState`
- [ ] Day 34: State Updates & Batching
- [ ] Day 35: Lifting State Up
- [ ] Day 36: `useEffect`
- [ ] Day 37: Effect Cleanup
- [ ] Day 38: `useRef`
- [ ] Day 39: `useContext` & Solving Prop Drilling
- [ ] Day 40: `useMemo`
- [ ] Day 41: `useCallback` & Render Optimization
- [ ] Day 42: Performance Profiling — 🛠️ Component Library

### 🧩 Phase 6 — State Management (Light) *(3 Days: Day 43–45)*
- [ ] Day 43: Why State Libraries — Zustand Setup
- [ ] Day 44: Stores, Slices, Persist Middleware
- [ ] Day 45: TanStack Query Basics (fetch + cache) — 🛠️ Global Store Mini-Project

### 🟢 Phase 7 — Node.js & Express *(10 Days: Day 46–55)*
- [ ] Day 46: Node Basics, npm, `package.json`
- [ ] Day 47: Node Internals (Event Loop, Streams, FS)
- [ ] Day 48: Express Setup & Routing
- [ ] Day 49: Controllers & Route Organization
- [ ] Day 50: Request/Response Lifecycle
- [ ] Day 51: Custom Middleware
- [ ] Day 52: Error Handling Middleware
- [ ] Day 53: Validation with Zod
- [ ] Day 54: Rate Limiting Basics
- [ ] Day 55: API Structuring Best Practices — 🛠️ REST API Project

### 🗄️ Phase 8 — MongoDB & Mongoose *(7 Days: Day 56–62)*
- [ ] Day 56: MongoDB Basics & Schemas
- [ ] Day 57: Mongoose Modeling
- [ ] Day 58: Relations & Population
- [ ] Day 59: Aggregation Pipeline
- [ ] Day 60: Indexing
- [ ] Day 61: MongoDB Atlas — Prod Setup & Backup Basics
- [ ] Day 62: Query Optimization — 🛠️ Schema Design for OpportuNet

### 🔐 Phase 9 — Auth & Security (Core) *(5 Days: Day 63–67)*
- [ ] Day 63: AuthN vs AuthZ
- [ ] Day 64: JWT Fundamentals
- [ ] Day 65: Password Hashing (bcrypt)
- [ ] Day 66: Protected Routes / Middleware Guards
- [ ] Day 67: CORS + Basic OWASP Hygiene — 🛠️ Apply: OpportuNet `/admin` auth

### ⚡ Phase 10 — Redis (Light) *(2 Days: Day 68–69)*
- [ ] Day 68: Key-Value Basics & Cache-Aside Pattern
- [ ] Day 69: Rate Limiting with Redis — 🛠️ API Rate Limiter

### 🧪 Phase 11 — Testing (Light) *(3 Days: Day 70–72)*
- [ ] Day 70: Why Testing — Unit vs Integration
- [ ] Day 71: Vitest Setup, Unit Tests & Mocking
- [ ] Day 72: API Testing (Postman/Thunder Client) — 🛠️ Test OpportuNet endpoints

### ☁️ Phase 12 — Deployment & Git *(5 Days: Day 73–77)*
- [ ] Day 73: Git Basics & Branching
- [ ] Day 74: GitHub Workflow (PRs, issues)
- [ ] Day 75: Environment Variables & Secrets Management
- [ ] Day 76: Vercel Deployment (Frontend)
- [ ] Day 77: Render Deployment (Backend) + MongoDB Atlas Connection — 🛠️ Redeploy OpportuNet cleanly

### 🤖 Phase 13 — AI Integration *(5 Days: Day 78–82)*
- [ ] Day 78: LLM API Fundamentals (Gemini)
- [ ] Day 79: Prompt Engineering Basics
- [ ] Day 80: Function/Tool Calling
- [ ] Day 81: Structured Outputs (JSON mode)
- [ ] Day 82: Embeddings & RAG-lite Pattern — 🛠️ Gemini-assisted curation for OpportuNet

### 🏁 Capstone — OpportuNet Production Polish *(20 Days: Day 83–102)*
- [ ] Day 83–86: JWT auth fully protecting `/admin` route
- [ ] Day 87–89: Backend validation + rate limiting on all public endpoints
- [ ] Day 90–93: Public submission form with pending/approved workflow
- [ ] Day 94–95: Seed 20–30 real opportunities
- [ ] Day 96–98: Gemini API-assisted curation live
- [ ] Day 99–100: Student profile personalization
- [ ] Day 101: Full mobile responsiveness pass
- [ ] Day 102: Final QA, README polish, resume/GitHub update, demo video — 🏁 **Ship it**

---

## 🏆 Milestone Tracker

- [ ] 🎯 Day 29 — Frontend Fundamentals Locked (CSS → JS)
- [ ] 🎯 Day 42 — React Core Mastered
- [ ] 🎯 Day 62 — Backend + Database Core Complete
- [ ] 🎯 Day 72 — Auth, Redis, Testing Done (production-safe backend)
- [ ] 🎯 Day 82 — Full MERN + AI Stack Complete
- [ ] 🎯 **Day 102 (~14 Oct 2026) — 🏁 OpportuNet Production-Ready + MERN Sprint Complete**
- [ ] 🎯 Nov–Dec 2026 — Full runway for pure DSA + mock interviews before Zoho (Jan–Feb 2027)

---

## 🔮 Deferred (Phase 2 Roadmap — After Zoho Prep)

- TypeScript (deep), PostgreSQL + Prisma, NestJS
- GraphQL + WebSockets/Socket.io
- Deep System Design (HLD/LLD, Sharding, Consistent Hashing)
- Observability (Sentry, Grafana), SaaS/Stripe billing
- Computer Networks deep dive, Performance Optimization deep dive

---

## 🎯 Principles (Unchanged)

1. **No copy-paste** — if you can't rebuild it from memory, you haven't learned it.
2. **Ship over study** — every phase feeds directly into OpportuNet.
3. **Daily consistency** — short session beats a skipped day.
4. **Scope discipline** — not MERN, not needed for Zoho → deferred, not abandoned.

---

<div align="center">

### ⚡ "I alone level up."

**Maintained by [Abishek](https://github.com/Abishek220-pro)** — building in public, one day at a time

![Profile Views](https://komarev.com/ghpvc/?username=Abishek220-pro&style=for-the-badge&color=1f6feb)

</div>