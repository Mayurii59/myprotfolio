# Mayuri Patidar — Personal Developer Portfolio

> **AI Enthusiast • Software Developer • UI/UX Designer**  
> *"Building intelligent products with code, design, and AI."*

A modern, interactive developer portfolio website built for **Mayuri Patidar** with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and GSAP. Designed with a dark-first aesthetic, fluid glassmorphism, 3D card tilt interactions, an interactive developer terminal, and multi-role project simulators.

---

## ⚡ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Library**: React 19
- **Language**: TypeScript (Strict typing)
- **Styling**: Tailwind CSS & Modern CSS Variables
- **Animations**: Framer Motion & GSAP
- **Icons**: Lucide React & Custom SVG Brand Icons
- **Celebrations / Interactions**: Canvas Confetti & Custom Spring Trailing Cursor

---

## 📁 Project Architecture

```
myportfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css         # Dark theme tokens, grid patterns, glassmorphism, scrollbars
│   ├── layout.tsx          # SEO, OpenGraph metadata, CustomCursor & BackgroundMesh
│   └── page.tsx            # Master page composing all sections
├── components/
│   ├── About.tsx           # Academic & internship narrative, stat cards
│   ├── Achievements.tsx    # Milestones (Horizon17 internship & Figma design)
│   ├── BackgroundMesh.tsx  # Ambient glows and subtle tech grid
│   ├── Certifications.tsx  # AWS Cloud, GenAI, Agentic AI, DevOps
│   ├── Contact.tsx         # Direct contact channels, copy email, interactive form
│   ├── CustomCursor.tsx    # Spring trailing cursor with fine-pointer detection
│   ├── Education.tsx       # Medi-Caps University (CGPA 8.26) & Digambar Jain School
│   ├── Experience.tsx      # Horizon17 UI/UX Internship timeline & deliverables
│   ├── Footer.tsx          # Branding, copyright, social channels, back-to-top
│   ├── Hero.tsx            # Animated role cycler, CTAs, direct links
│   ├── Icons.tsx           # Crisp SVGs for GitHub, LinkedIn, Figma
│   ├── InteractiveTerminal.tsx # System terminal with pipeline diagnostics & JSON profile
│   ├── Navbar.tsx          # Floating blurred header, active spy, mobile drawer
│   ├── ProjectCard.tsx     # 3D tilt card, tech tags, metric callouts
│   ├── ProjectModal.tsx    # Architectural deep-dive window
│   ├── ProjectPreviews.tsx # Live role-based dashboard & AI planning simulator
│   ├── Projects.tsx        # Featured projects & GitHub showcase
│   ├── SectionHeading.tsx  # Editorial numbered headers (01 // ABOUT, etc.)
│   └── Skills.tsx          # Filterable skill cards & AI/DevOps focus spotlight
├── data/
│   └── portfolio.ts        # Central data source for all portfolio content
├── lib/
│   ├── animations.ts       # Reusable Framer Motion variants
│   └── utils.ts            # Class merging utility (clsx + twMerge)
└── public/
    └── resume/
        └── Mayuri_Patidar_Resume.pdf  # Downloadable resume file
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Verify ESLint
```bash
npm run lint
```

### 4. Build for Production
```bash
npm run build
```

---

## 🛠️ Customization Guide

All portfolio data is centralized in [`data/portfolio.ts`](./data/portfolio.ts) for effortless maintenance.

### 1. Update Contact & Social URLs
Open [`data/portfolio.ts`](./data/portfolio.ts) and locate `PORTFOLIO_DATA.personal`:
- **GitHub**: Change `socialLinks.github` (default: `https://github.com/Mayurii59`)
- **LinkedIn**: Change `socialLinks.linkedin` (default: `https://linkedin.com/in/mayuri-patidar`)
- **Email**: Change `email` (default: `mayuripatidar22@gmail.com`)
- **Phone**: Change `phone` (default: `+91-7247381226`)

### 2. Replace the Resume PDF
Replace the file located at:
```
public/resume/Mayuri_Patidar_Resume.pdf
```
Ensure the filename matches `resumeUrl` in [`data/portfolio.ts`](./data/portfolio.ts).

### 3. Update Projects & Live Demo Links
In [`data/portfolio.ts`](./data/portfolio.ts) under `PORTFOLIO_DATA.projects`:
- Update `githubUrl` to point to your specific repository.
- Update `liveUrl` with your deployed URL (e.g., `https://citytour.vercel.app`).
- To add project screenshots, place images in `public/images/projects/` and reference their paths in the project object.

### 4. Certifications
In [`data/portfolio.ts`](./data/portfolio.ts) under `PORTFOLIO_DATA.certifications`:
- Add `verifyUrl` links to your AWS, Coursera, or certificate verification portals.

### 5. Contact Form Backend Webhook
In [`components/Contact.tsx`](./components/Contact.tsx):
- Currently configured as a client-side mock submission with instant validation and confetti feedback.
- To connect a live email service, integrate [Formspree](https://formspree.io/), [Resend](https://resend.com/), or Next.js App Router API route (`app/api/contact/route.ts`).

---

## 🚢 Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete portfolio for Mayuri Patidar"
   git push origin main
   ```
2. Import the repository on [Vercel](https://vercel.com/new).
3. Framework preset: **Next.js**.
4. Click **Deploy**.
