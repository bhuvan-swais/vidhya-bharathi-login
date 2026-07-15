# SWAIS Saraswati

A warm, culturally-rooted **saffron & white** login experience for a holistic
learning platform, plus five role-based placeholder dashboards. Rooted in the
five-fold vision (**पञ्च कोश विकास**) of Vidya Bharati.

## Stack
- **Vite + React 18** (lightweight — no framework meta-layer)
- **React Router v6** for file-free routing
- Plain CSS with **semantic design tokens** in `src/index.css` (no hardcoded colours in components)
- Google Fonts: **Fraunces** (serif/Sanskrit headings), **Nunito** (body), **Noto Sans Devanagari**

## Run
```bash
npm install
npm run dev      # http://localhost:5173
```

## Routes
| Path | Role |
|------|------|
| `/` | Login (`स्वागतम्` / Welcome) |
| `/vidyarthi` | विद्यार्थी — Student |
| `/acharya` | आचार्य — Teacher |
| `/palaka` | पालक — Parent |
| `/pradhana-acharya` | प्रधान आचार्य — Principal (Attendance) |
| `/mulyankan` | मूल्यांकन — Assessment (Administration) |

## Scope
Design + navigation only. **No real auth**: "Send OTP" reveals a local-only
6-digit input, and **Continue** simply routes to the selected role's dashboard.
No magic-link email, no SMS, no RBAC, no persistence.

## Structure
```
src/
  main.jsx                 # router
  index.css                # design tokens + responsive styles
  roles.js                 # the five roles (bilingual labels)
  components/
    SwaisLogo.jsx          # reusable brand lockup
    DashboardShell.jsx     # shared dashboard chrome + per-route <title>/meta
  pages/
    Login.jsx
    dashboards/            # Vidyarthi, Acharya, Palaka, PradhanaAcharya, Mulyankan
```
