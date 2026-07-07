# Hackathon Starter

Boilerplate for the Odoo Hackathon 2026 virtual round. Clone this fresh
the moment the problem statement drops — don't build on top of old branches.

## Day-of workflow

1. `git clone` this repo, `npm install`, `npm run dev`
2. Read the problem, agree on scope as a team (~15 min max)
3. Rename things: update `Navbar brand=` in `App.jsx`, page title in `index.html`
4. Build your real feature in `src/pages/`, deleting the example CRUD in
   `Home.jsx` once you understand the pattern
5. Reuse `Button`, `Card`, `FormInput`, `Modal` from `src/components/` —
   don't rebuild these from scratch under time pressure
6. Reuse validators from `src/utils/validate.js` for every form
7. `src/utils/api.js` gives you working CRUD against localStorage on day
   one. Swap in real `fetch()` calls (example commented at the bottom of
   the file) once/if you stand up a backend — component code doesn't
   need to change since the function names stay the same

## What's already wired up

- **Routing** — `react-router-dom`, two example routes (`/`, `/about`)
- **Design tokens** — all colors/spacing/type in `src/index.css` as CSS
  variables. Change 6 hex values to reskin the whole app.
- **Components** — `Button`, `Card`, `FormInput`, `Modal`, `Navbar`
- **Validation** — composable validators (`required`, `email`, `minLength`,
  `number`, `phone`, etc.) in `src/utils/validate.js`
- **Data layer** — `getAll`, `getById`, `create`, `update`, `remove` in
  `src/utils/api.js`, backed by localStorage so CRUD works immediately

## Commands

```
npm install       # first time only
npm run dev        # local dev server
npm run build       # production build
```

## Team reminders (from Odoo's judging criteria)

- Use dynamic data, not static JSON, once you're past initial prototyping
- Every team member commits — not just the lead
- Validate every form input
- Keep the UI clean and consistent — the design tokens make this easy,
  don't override them ad hoc
