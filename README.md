# CareMate — Hospital Caregiver Booking

**Live demo:** https://caremate-m3vd.vercel.app/

CareMate is an on-demand marketplace that connects families with vetted hospital caregivers. When a loved one is admitted and family can't always be present, CareMate lets you book a trusted companion by the hour, shift, or full day — directly from a browser with no app download required.

---

## Features

- **Quick booking widget** — pick a date and duration, get an instant price estimate
- **Verified caregiver profiles** — ID-checked caregivers with ratings, reviews, languages spoken, and years of experience
- **Flexible pricing** — hourly (₹350/hr), 8-hour shift (₹2,400), or full day (₹4,800)
- **In-app chat & updates** — caregivers send periodic text/photo updates to the family
- **24/7 support** — help available around the clock
- **Fully responsive** — works on mobile, tablet, and desktop

---

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | Vanilla HTML5, CSS (CSS custom properties, Grid, Flexbox) |
| Hosting | Vercel (static) |
| Payments | Placeholder — to be integrated with Razorpay / Stripe |

No build step, no bundler, no dependencies — open `index.html` and it works.

---

## Project structure

```
caremate/
└── index.html     # Single-page UI — landing, booking widget, caregiver grid, pricing
└── README.md      # This file
```

---

## Getting started

```bash
# Clone the repo
git clone <repo-url>
cd caremate

# Open locally — no build step needed
open caremate/index.html          # macOS
start caremate/index.html         # Windows
xdg-open caremate/index.html      # Linux
```

Or just drag `index.html` into any browser.

---

## Deploying to Vercel

```bash
npm i -g vercel
vercel --prod
```

Point Vercel's root to the `caremate/` directory (or the repo root if `index.html` is at the top level).

---

## Roadmap

- [ ] Backend API (Node / FastAPI) for real booking and caregiver management
- [ ] Authentication — family & caregiver login (email + OTP)
- [ ] Real-time availability calendar
- [ ] In-app messaging
- [ ] Razorpay payment integration
- [ ] Caregiver onboarding flow (photo upload, background check status)
- [ ] Admin dashboard (booking management, payouts)
- [ ] Mobile app (React Native)

---

## License

MIT © 2026 CareMate
