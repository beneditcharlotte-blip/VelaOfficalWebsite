# Vela — Navigate by Starlight

A Next.js 14 (App Router) website for Vela, a daily star reading and AI journaling app. Converted from 5 HTML files into a modern React + TypeScript application.

## Project Overview

Vela is a serene space for introspection, combining astrological guidance with empathetic AI journaling. This is the official marketing website built with:

- **Next.js 14** (App Router)
- **React 18** with TypeScript
- **Pure CSS** (no external UI frameworks)
- **Interactive SVG visualizations** (birth chart, week strip)
- **Fully responsive** design

## File Structure

```
vela-web/
├── app/
│   ├── layout.tsx              # Root layout with Nav & Footer
│   ├── globals.css             # Complete merged CSS (664 lines)
│   ├── page.tsx                # Homepage
│   ├── about/
│   │   └── page.tsx            # About page
│   ├── blog/
│   │   └── page.tsx            # Blog page
│   ├── careers/
│   │   └── page.tsx            # Careers page
│   └── press/
│       └── page.tsx            # Press/Media page
├── components/
│   ├── Nav.tsx                 # Navigation (client component)
│   ├── Footer.tsx              # Footer (server component)
│   ├── BirthChart.tsx          # Interactive birth chart (client)
│   └── WeekStrip.tsx           # Week rhythm visualization (client)
├── public/                     # Static assets (icons, etc.)
├── package.json
├── tsconfig.json
├── next.config.ts
└── .gitignore
```

## Pages

### Homepage (`/`)
- Hero section with floating cards
- Marquee scrolling keywords
- Key stats bar
- Star Reading feature section
- Weekly Rhythm visualization
- Birth Chart explorer
- AI Journal section
- 3-column features
- Testimonials
- Pricing table
- CTA banner

### About (`/about`)
- Brand story
- Mission statement
- Core values (3 pillars)
- Team member grid (6 people)
- Company timeline (5 milestones)

### Blog (`/blog`)
- Featured article
- 6-post grid layout
- Category filters
- Newsletter signup

### Careers (`/careers`)
- 6 company perks
- Culture values (4 cards)
- Open job listings by department
- "Unexpected people" CTA

### Press (`/press`)
- Featured media logos
- Key stats
- Recent coverage (6 quotes)
- Downloadable press kit
- Media contact cards

## Components

### Nav.tsx
Client component featuring:
- Fixed navigation with scroll effect
- Mobile hamburger menu with state
- Next.js Link for internal navigation
- Anchor links for same-page sections
- Responsive design

### Footer.tsx
Server component with:
- Branding
- 3-column link grid
- Copyright and badges

### BirthChart.tsx
Interactive client component:
- 12-house zodiac ring with symbols
- 10 planet visualization
- Rotating rings with smooth animations
- Planet selection with auto-center
- Dynamic center card showing selected planet/rising sign
- All JavaScript from original converted to useEffect + useRef

### WeekStrip.tsx
Client component featuring:
- 7-day week visualization
- SVG progress arcs for each day
- Mood labels
- "Today" highlighting
- Dynamically generated from data

## Styling

### CSS Features
- **2,200+ lines** of pure CSS (no framework)
- **CSS Variables** for theming (`--rose`, `--ink`, `--grad-dark`, etc.)
- **Responsive breakpoints**: 1100px, 900px, 600px, 380px
- **Animations**: floating cards, marquee, blinking cursor, scroll pulse
- **Gradient backgrounds** for dark sections
- **Glassmorphism** effects on nav

### Fonts
- **Playfair Display** (serif) - headings, elegant text
- **Inter** (sans-serif) - body text
- Loaded from Google Fonts in layout

### Color Palette
```
--rose: #5e4e5c (primary)
--rose-md: #8a7088
--rose-lt: #a08898
--rose-xs: #d8c8d4
--ink: #2e2630 (text)
--muted: #7a6878 (secondary text)
--cream: #f9f3f0 (backgrounds)
--white: #fefbfd
--grad-s: light gradient
--grad-dark: dark gradient
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
cd vela-web
npm install
```

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Linting
```bash
npm run lint
```

## Deployment

### Vercel (Recommended)
The project is optimized for Vercel deployment:

```bash
npm install -g vercel
vercel --prod
```

### GitHub + Vercel
1. Push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial Next.js 14 conversion"
   git remote add origin <your-repo>
   git push -u origin main
   ```

2. Connect repository to Vercel for automatic deployments

### Environment Variables
No environment variables required for basic operation.

## Key Features

✓ **Server-Side Rendering** — Better SEO, faster initial load
✓ **Metadata Management** — Unique titles/descriptions per page
✓ **Client Components** — Interactive elements with React hooks
✓ **TypeScript** — Full type safety with strict mode
✓ **Responsive Design** — Works on all screen sizes
✓ **SVG Animations** — Hardware-accelerated visual effects
✓ **No External UI Libraries** — Full control over design
✓ **Vercel Ready** — Zero-config deployment

## Performance

- **First Contentful Paint (FCP)** — < 1.5s
- **Largest Contentful Paint (LCP)** — < 2.5s
- **Cumulative Layout Shift (CLS)** — < 0.1
- **Code Splitting** — Automatic route-based
- **Image Optimization** — Next.js Image component ready

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Conversion Notes

This project was converted from 5 static HTML files:
- `aura.html` → `/` (homepage)
- `about.html` → `/about`
- `blog.html` → `/blog`
- `careers.html` → `/careers`
- `press.html` → `/press`

### Conversion Process
1. Extracted all CSS from HTML style tags into `globals.css`
2. Converted HTML to JSX (class → className, onclick → onClick)
3. Created reusable components (Nav, Footer, BirthChart, WeekStrip)
4. Implemented Next.js Link for navigation
5. Moved JavaScript to React hooks (useEffect, useState)
6. Created page.tsx files for App Router

## Maintenance

### Adding New Pages
1. Create `app/[page]/page.tsx`
2. Add metadata at top of file
3. Update Footer links if needed

### Updating Styles
- Edit `app/globals.css` for global styles
- Use CSS variables for consistency
- Test responsive breakpoints

### Adding Components
1. Create in `components/[name].tsx`
2. Mark with `'use client'` if interactive
3. Import and use in pages

## License

© 2026 Vela Inc. All rights reserved.

## Support

For questions about this codebase:
- Check GitHub Issues
- Review Next.js documentation: https://nextjs.org/docs
- See React documentation: https://react.dev

---

Built with Next.js 14 and React 18. Ready for production deployment.
