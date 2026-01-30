# vision.scot

A comprehensive policy framework for building a happier, fairer, and more prosperous Scotland through technology, renewable wealth, and progressive policy reform.

**Less Tax, Less Work, More Life**

## About

This website presents "A Vision for a Better Scotland" - a detailed policy document covering:

- **Scottish Wealth Fund** - Capturing renewable energy wealth, modelled on Norway
- **Land Value Tax** - Shifting taxation from labour to land and wealth
- **Four-Day Week** - 32 hours at full pay, proven internationally
- **Affordable Housing** - Costs capped at 25% of income
- **Cheaper Energy** - Scottish Energy Tariff at 15p/kWh
- **Digital Democracy** - Estonia-style transparent government

## Features

- **Interactive Tooltips** - Hover over highlighted terms (in amber) to see funding sources, international examples, and context
- **Mobile Friendly** - Fully responsive design
- **PDF Download** - Generated automatically from the policy markdown
- **Dark Mode** - Respects system preferences

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [Tailwind CSS 4](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible popover components
- [react-markdown](https://github.com/remarkjs/react-markdown) - Markdown rendering
- [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) - PDF generation

## Project Structure

```
vision.scot/
├── app/
│   ├── page.tsx          # Homepage
│   ├── policy/
│   │   └── page.tsx      # Full policy document
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Header.tsx        # Navigation
│   ├── Footer.tsx        # Site footer
│   ├── Tooltip.tsx       # Interactive tooltips (Radix Popover)
│   ├── PolicyContent.tsx # Markdown renderer with tooltips
│   └── ShareButtons.tsx  # Copy link & PDF download
├── content/
│   └── policy.md         # The policy document (markdown)
├── data/
│   └── funding-data.json # Tooltip data (60+ entities)
├── scripts/
│   ├── generate-pdf.mjs  # PDF generation script
│   └── pdf-styles.css    # PDF styling
└── public/
    └── vision-scotland-policy.pdf  # Generated PDF
```

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Building

```bash
# Build for production (includes PDF generation)
npm run build

# Start production server
npm start
```

## PDF Generation

The PDF is automatically generated from `content/policy.md` during build:

```bash
# Generate PDF manually
npm run generate-pdf
```

The PDF includes:
- vision.scot branding at the top
- Styled tables, headings, and blockquotes
- A4 format with proper margins

## Adding Tooltip Data

Edit `data/funding-data.json` to add new terms. Each entity has:

```json
{
  "Term Name": {
    "type": "country|policy|person|organisation|etc",
    "description": "What this term means",
    "relevance": "Why it matters to Scotland",
    "funding_source": "Optional: who funds this"
  }
}
```

Terms are automatically matched in the policy content and displayed with interactive tooltips.

## Deployment

Deploy to Vercel, Netlify, or any platform supporting Next.js:

```bash
npm run build
```

The site is fully static and can be deployed to any static hosting.

## License

Content: All rights reserved

## Version

1.14 - January 2026
