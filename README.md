# PulseBoard

A modern SaaS analytics dashboard built for multimodal UI bug-fix benchmarking.

**Live:** https://pulseboard-eight-zeta.vercel.app

## Stack

- Next.js 16 · TypeScript · Tailwind CSS · Recharts · Lucide icons

## Run locally

```bash
npm install
npm run dev
```

## Bug Registry

See [BUG_REGISTRY.md](./BUG_REGISTRY.md) for all 7 independently reproducible UI bugs with buggy/fix commit SHAs.

| # | Feature | Buggy SHA | Fix SHA |
|---|---------|-----------|---------|
| 1 | Mobile Navigation Drawer | `03d8e5b` | `4bfd2c6` |
| 2 | KPI Card Grid Overflow | `f0da208` | `e1f4cb5` |
| 3 | Analytics Chart Fixed Width | `76af613` | `96c9927` |
| 4 | Projects Table No Scroll | `97769b0` | `7106ab5` |
| 5 | Settings Form Overflow | `0fb61db` | `a1fe6dd` |
| 6 | Notification Dropdown Overflow | `f50f495` | `30e4b89` |
| 7 | Invite Modal Too Wide | `1d68a92` | `7f19e20` |
