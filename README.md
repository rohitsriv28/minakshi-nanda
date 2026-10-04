# Minakshi Nanda — Portfolio

> Personal portfolio website of **Minakshi Nanda**, a **UI/UX Designer & Business Strategist** based in Birgunj, Nepal.

Designed with an editorial aesthetic (*Nature Distilled / Warm Editorial*), this portfolio showcases work at the intersection of human-centered design, business strategy, and technology.

---

## ✨ Features

- **Warm Editorial Design System**: Tailored color palette (terracotta, warm sand, gold accents, deep brown) with WCAG AA compliance.
- **Editorial Typography Stack**:
  - *Display*: [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) (light/italic)
  - *Body*: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (300 / 400 / 500)
  - *Labels / Eyebrows*: [DM Mono](https://fonts.google.com/specimen/DM+Mono)
- **Fluid & Accessible Interactions**:
  - Custom fluid cursor follower with hardware-accelerated RAF interpolation (automatically disabled on touch devices or under `prefers-reduced-motion`).
  - Scroll-triggered reveal animations via custom IntersectionObserver hooks.
  - Responsive mobile navigation drawer with sticky action bar.
- **Comprehensive Content Structure**:
  - **Hero**: Clean typographic introduction, portrait arch frame, and quick credentials.
  - **Selected Proof**: Key quantified metrics (projects shipped, audiences addressed, QA impact).
  - **About**: Journey spanning BSc CSIT into an MBA, design philosophy, and core focus areas.
  - **Skills & Tooling**: UI/UX design, business analysis, and front-end development capabilities.
  - **Experience & Projects**: Real-world product work, award-winning hackathon pitches, and full-stack deliverables.
  - **Public Speaking & Hosting**: Event hosting chronicle across 10+ stages and 1,300+ attendees.
  - **Contact**: Direct communication channels and social links.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 6](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Data Architecture**: Structured JSONC datasets (`src/data/`) for modular updates

---

## 📁 Project Structure

```text
minakshi-portfolio/
├── public/
│   └── minakshi-nanda.png      # High-resolution optimized portrait asset
├── src/
│   ├── components/             # Reusable UI sections
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Interests.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Proof.jsx
│   │   ├── Skills.jsx
│   │   └── StickyMobileCta.jsx
│   ├── data/                   # JSONC content files (easy to edit)
│   │   ├── education.jsonc
│   │   ├── events.jsonc
│   │   ├── experience.jsonc
│   │   └── projects.jsonc
│   ├── hooks/
│   │   └── useReveal.js        # IntersectionObserver scroll reveal hook
│   ├── App.jsx                 # Main layout and cursor orchestration
│   ├── index.css               # Global typography, color tokens, and utilities
│   └── main.jsx
├── design-system/
│   └── minakshi-portfolio/
│       └── MASTER.md           # Design tokens, dials, and accessibility specs
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended) or Bun / pnpm / yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/<your-username>/minakshi-portfolio.git
   cd minakshi-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   bun run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

---

## 📦 Building for Production

To generate an optimized production bundle:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 📄 License

This project is created for personal portfolio presentation. All rights reserved.
