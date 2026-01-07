# 🥋 Arts Martiaux Reims

A stunning, modern website for a martial arts club in Reims, France. Features immersive 3D animations, smooth scroll effects, and full internationalization support.

![Tech Stack](https://img.shields.io/badge/Framework-Next.js_16.1-000000?style=flat-square&logo=next.js)
![Tech Stack](https://img.shields.io/badge/Styling-Tailwind_CSS_4-06B6D4?style=flat-square&logo=tailwindcss)
![Tech Stack](https://img.shields.io/badge/UI-Shadcn/ui-000000?style=flat-square)
![Tech Stack](https://img.shields.io/badge/3D-Three.js-000000?style=flat-square&logo=three.js)
![Tech Stack](https://img.shields.io/badge/Animation-GSAP-88CE02?style=flat-square&logo=greensock)
![Tech Stack](https://img.shields.io/badge/i18n-next--intl-blue?style=flat-square)

<p align="center">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=24&duration=3000&pause=1000&color=C41E3A&center=true&vCenter=true&width=500&lines=%E5%8A%9F%E5%A4%AB+Kung+Fu;%E6%AD%A6%E8%A1%93+Martial+Arts;%E9%81%93+The+Way" alt="Chinese Characters Animation" />
</p>

## ✨ Features

- **🎨 Immersive 3D Hero** - Three.js animated sphere with particle field and dynamic lighting
- **⚡ Smooth Animations** - GSAP scroll-triggered animations and Framer Motion transitions
- **🌍 Bilingual Support** - Full French/English internationalization with next-intl
- **📱 Fully Responsive** - Mobile-first design with adaptive navigation
- **🎯 SEO Optimized** - Complete metadata, JSON-LD structured data, sitemap & robots.txt
- **🎭 Martial Arts Theme** - Custom crimson/gold/black color palette with Chinese typography
- **♿ Accessible** - ARIA labels, keyboard navigation, semantic HTML

## 🏗️ Architecture

```
kung-fu-reims/
├── 📄 src/
│   ├── app/
│   │   ├── [locale]/           # Internationalized routes
│   │   │   ├── layout.tsx      # Root layout with providers
│   │   │   └── page.tsx        # Home page
│   │   ├── layout.tsx          # Global metadata
│   │   ├── sitemap.ts          # Dynamic sitemap
│   │   └── robots.ts           # Robots configuration
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navigation.tsx  # Responsive navbar
│   │   │   └── Footer.tsx      # Site footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        # 3D animated hero
│   │   │   ├── Disciplines.tsx # Martial arts cards
│   │   │   ├── About.tsx       # Teacher profile
│   │   │   ├── Schedule.tsx    # Class timetable
│   │   │   └── Contact.tsx     # Contact form
│   │   ├── seo/
│   │   │   └── JsonLd.tsx      # Structured data
│   │   └── ui/                 # Shadcn components
│   │
│   ├── i18n/
│   │   ├── routing.ts          # Locale configuration
│   │   ├── request.ts          # Server-side i18n
│   │   └── navigation.ts       # Localized navigation
│   │
│   └── lib/
│       └── utils.ts            # Utility functions
│
├── 📝 messages/
│   ├── fr.json                 # French translations
│   └── en.json                 # English translations
│
├── ⚙️ next.config.ts           # Next.js configuration
├── 🎨 tailwind.config.ts       # Tailwind configuration
└── 📖 README.md
```

## 🚀 Quick Start

### Prerequisites

- **Node.js 18+** - [Download Node.js](https://nodejs.org/)
- **pnpm** - [Install pnpm](https://pnpm.io/installation)

### Installation

```bash
# Clone and navigate to project
cd kung-fu-reims

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
# Create optimized build
pnpm build

# Start production server
pnpm start
```

## 🎨 Design System

### Color Palette

| Color | Variable | Usage |
|-------|----------|-------|
| 🔴 Crimson | `--crimson` | Primary actions, accents |
| 🟡 Gold | `--gold` | Highlights, borders |
| ⚫ Ink | `--ink` | Backgrounds |
| 📜 Parchment | `--parchment` | Light mode backgrounds |

### Typography

- **Headers** - Geist Sans (bold)
- **Chinese Characters** - Noto Serif SC
- **Body** - Geist Sans (regular)

### Components

Custom CSS classes for martial arts theming:

```css
.gradient-text     /* Gold to crimson gradient text */
.gold-shimmer      /* Animated gold shimmer effect */
.martial-line      /* Decorative underline */
.card-martial      /* Hover effect for cards */
.btn-martial       /* Button with color transition */
```

## 📚 Disciplines

The website showcases 7 martial arts disciplines:

| Discipline | Chinese | Description |
|------------|---------|-------------|
| 🥋 Kung Fu | 功夫 | Traditional Chinese martial art |
| 🛡️ Krav Maga | 格鬥術 | Israeli self-defense system |
| ⚡ Jeet Kune Do | 截拳道 | Bruce Lee's martial philosophy |
| 🌬️ Taichi Qigong | 太極氣功 | Internal martial art & wellness |
| 🎯 Taekwondo | 跆拳道 | Korean Olympic martial art |
| 🔥 MMA | 綜合格鬥 | Mixed Martial Arts |
| 👶 Children | 兒童班 | Kids martial arts program |

## 🌍 Internationalization

The site supports French and English with automatic locale detection:

```typescript
// Supported locales
locales: ['fr', 'en']
defaultLocale: 'fr'

// URL structure
artsmartiauxreims.fr      → French (default)
artsmartiauxreims.fr/en   → English
```

### Adding Translations

Edit the JSON files in `/messages`:

```json
// messages/fr.json
{
  "hero": {
    "title": "L'Art du Combat",
    "cta": "Cours d'Essai Gratuit"
  }
}
```

## 🔍 SEO Features

- **Metadata** - Open Graph, Twitter Cards, canonical URLs
- **Structured Data** - JSON-LD SportsActivityLocation schema
- **Sitemap** - Auto-generated with alternate languages
- **Robots.txt** - Search engine directives
- **Semantic HTML** - Proper heading hierarchy, landmarks

## 🛠️ Tech Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.1 | React framework with App Router |
| React | 19 | UI library |
| TypeScript | 5.9 | Type safety |
| Tailwind CSS | 4.1 | Utility-first styling |
| Shadcn/ui | Latest | UI component library |
| Three.js | 0.182 | 3D graphics |
| @react-three/fiber | 9.5 | React renderer for Three.js |
| @react-three/drei | 10.7 | Three.js helpers |
| GSAP | 3.14 | Animation library |
| Framer Motion | 12 | React animations |
| next-intl | 4.7 | Internationalization |
| Lucide React | 0.562 | Icon library |

## 📁 Customization

### Update Club Information

Edit the translation files to customize:

```json
// messages/fr.json
{
  "contact": {
    "address": { "value": "Your Address, Reims" },
    "phone": { "value": "+33 X XX XX XX XX" },
    "email": { "value": "your@email.com" }
  }
}
```

### Change Schedule

Edit `src/components/sections/Schedule.tsx`:

```typescript
const schedule = [
  {
    day: 'monday',
    classes: [
      { time: '18:00 - 19:30', discipline: 'Kung Fu', level: 'beginner' }
    ]
  }
  // ...
];
```

### Modify Color Theme

Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --crimson: oklch(0.55 0.25 25);
  --gold: oklch(0.80 0.15 85);
  --ink: oklch(0.12 0.01 250);
}
```

## 🐛 Troubleshooting

### Three.js SSR Issues

The 3D components use dynamic imports with `ssr: false`. If you see hydration errors:

```typescript
// Already configured in next.config.ts
transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']
```

### Middleware Deprecation Warning

Next.js 16.1 shows a middleware deprecation warning. This is expected and doesn't affect functionality. The middleware handles locale routing correctly.

### Font Loading

If Chinese characters don't display:

1. Add Noto Serif SC font files to `/public/fonts/`
2. Or rely on the Google Fonts fallback

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational and personal use.

---

<p align="center">
  <strong>武術之道</strong><br>
  <em>The Way of Martial Arts</em>
</p>

<p align="center">
  Made with ❤️ and 🥋 in Reims, France
</p>
