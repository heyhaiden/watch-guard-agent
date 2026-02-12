# ⌚ WatchGuard Advisor

**An AI advisor that helps luxury watch collectors decide if insurance makes financial sense.**

---

## The Problem

You own a nice watch—maybe a Rolex, Omega, or something special. Insurance premiums can run 1–2% of value annually. Is it worth it? Most collectors get vague advice or sales pitches. The math is simple, but nobody sits down to work through it with you.

## The Solution

WatchGuard Advisor is a conversational AI that asks 4–5 quick questions—watch value, your financial picture, quoted premium, how you wear it—and gives you a clear, honest recommendation: **insure**, **don’t insure**, or **optional** (it’s up to you).

No jargon. No formulas. Just plain-language guidance that respects both the numbers and the peace of mind that insurance can provide.

---

## What It Does

- **Conversational flow** — Asks one question at a time, like talking to a knowledgeable friend
- **Data-driven logic** — Uses premium ratio and financial impact to recommend insure / don’t insure / optional
- **Two modes** — MVP (direct, efficient) and Refined (warmer, more exploratory)
- **Smart defaults** — Assumes ~1.5% premium if you don’t have a quote yet
- **Artifacts** — Create documents, code, and spreadsheets alongside the chat when you need them

---

## How It Works

1. You start a chat with WatchGuard Advisor
2. It asks about your watch, value, financial situation, premium (if any), and usage
3. It collects the data via `collectWatchData` and runs the decision logic internally
4. You get a clear recommendation with reasoning—no calculations shown, just the conclusion
5. It closes with: *"Does this help? Happy to dig into specifics."*

---

## Tech Stack

- **Next.js 16** — App Router, Server Components
- **Vercel AI SDK** — Streaming chat, tool calling, multi-provider support
- **Vercel AI Gateway** — xAI (Grok), OpenAI, and other models
- **Neon Postgres** — Chat history and persistence
- **Auth.js** — Sign-in and guest access
- **shadcn/ui + Tailwind** — Accessible, polished UI

---

## Quick Start

```bash
pnpm install
pnpm db:migrate
pnpm dev
```

Configure environment variables (see `.env.example`). For Vercel deployments, use `vercel env pull` after linking your project.

Open [localhost:3000](http://localhost:3000) for the MVP flow, or `/refined` for the warmer, more conversational version.

---

## Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/ai-chatbot)

---

*Built for watch collectors who want clarity, not sales talk.*
