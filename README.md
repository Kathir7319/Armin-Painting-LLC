# Armin Painting LLC — Official Website

> **Premium Interior & Exterior Painting in Fuquay-Varina, NC**  
> High-performance multi-page React application built with React 19, Tailwind CSS v4, Lucide Icons, and React Router.

![Armin Painting LLC Logo](public/logo.svg)

---

## 🌟 Overview & Key Features

This website is custom-crafted for **Armin Painting LLC**, a premier residential and commercial painting contractor serving Fuquay-Varina, NC, and the greater Triangle region (Holly Springs, Apex, Cary, Willow Spring, Angier, Garner, Raleigh).

### 📄 Multi-Page Architecture
1. **Home Page (`/`)**:
   - **Hero Section**: High-impact headlines, trust signals (5.0 Stars, NC Licensed & Insured), and direct CTA to request a free in-home estimate.
   - **Visual Asset**: Touch-friendly, drag-enabled **Interactive Before/After Transformation Slider**.
   - **Core Value Propositions**: Versatile Solutions, Premium Paint Specs (Sherwin-Williams & Benjamin Moore), and Flawless Execution.
   - **Services Summary**: Residential Interior, Exterior House, Cabinet Refinishing & Deck Staining.
   - **Interactive Color Visualizer Studio**: Homeowners can test trending Sherwin-Williams (Emerald, SuperPaint) and Benjamin Moore (Regal Select, Aura) paint colors directly on simulated walls.
   - **Systemized 4-Step Contracting Protocol**: Step-by-step walk-through of the customer journey.
   - **Social Proof**: Authentic customer reviews featuring Sarah M., David T., and Marcus B.
   - **Ballpark Cost Estimator Tool**: Quick interactive calculator for homeowners to test budget ranges.

2. **Services & Portfolio Page (`/services`)**:
   - Masterful Residential Services & Fine Finish Refinishing.
   - **4 In-Depth Service Deep Dives**:
     1. High-End Interior Repaints (Property protection workflows, masking, drywall repair, uniform coats)
     2. Exterior House & Commercial Painting (NC climate protection, power-washing, scrape, prime, siding/trim/brick)
     3. Cabinet Refinishing & Restoration (Multi-coat factory-like spray finish, saving $10k+ vs replacement)
     4. Deck & Wood Staining (Wood preservation, weather-resistant deep wash, sand, and seal)
   - **Premium Material Specifications**: Full breakdown of Sherwin-Williams (SuperPaint, Emerald, Duration) and Benjamin Moore (Regal Select, Aura, Ben Low-VOC).
   - **Filterable Before/After Project Portfolio**: Interactive showcases with location and paint spec metadata.

3. **Free Estimate Request Form (`/estimate`)**:
   - Streamlined multi-step lead intake form with all 10 structural fields:
     1. Full Name
     2. Phone Number
     3. Email Address
     4. Property Address / Location in Fuquay-Varina area
     5. Project Type (Dropdown)
     6. Estimated Scope Size (Dropdown)
     7. Desired Timeline (Dropdown)
     8. Paint Brand Preferences (Dropdown: Sherwin-Williams, Benjamin Moore, or Expert Recommendation)
     9. Project Photos (Optional up to 20MB with drag & drop preview)
     10. Additional Structural Details / Special Notes
   - Pre-fills seamlessly from URL parameters when using the ballpark calculator.
   - **Guaranteed Trust Anchor**: Full privacy notice stating information is strictly for cost breakdown and never shared.
   - Generates instant Reference ID and confirmation summary.

4. **About & Service Area Page (`/about`)**:
   - Armin Painting LLC founding principles, crew standards, safety protocols, and insurance credentials.
   - Zip code coverage directory for Fuquay-Varina (27526), Holly Springs, Apex, Cary, and surrounding towns.

---

## 🎨 Brand Identity & Custom Logo
- **Symbol**: Architectural modern gable silhouette intersecting with a curved painter's brush stroke / roller arc, accented with an amber-gold paint droplet.
- **Color Palette**: Deep Navy Blue (`#0c233c`), Royal Azure (`#2563eb`), Amber Gold (`#f59e0b`), and Crisp White (`#ffffff`).
- **Files**:
  - `src/components/Logo.jsx`: Dynamic React logo with light/dark variants and full/compact modes.
  - `public/logo.svg`: Vector logo file.
  - `public/favicon.svg`: High-resolution browser favicon.

---

## 🛠 Tech Stack
- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Plus Jakarta Sans & Playfair Display

---

## 🚀 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Create production build
npm run build

# 4. Preview production build locally
npm run preview
```

---

## 📤 Step-by-Step: Push to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "feat: complete Armin Painting LLC website with logo and multi-page routing"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name your repository (e.g., `armin-painting-llc`)
   - Keep it Public or Private
   - Do NOT check "Initialize with a README" (you already have one!)

3. **Link and Push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR-USERNAME>/armin-painting-llc.git
   git push -u origin main
   ```

---

## ☁️ Step-by-Step: Deploy to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)
1. Go to [vercel.com](https://vercel.com/) and sign in.
2. Click **"Add New..."** -> **"Project"**.
3. Import your **`armin-painting-llc`** GitHub repository.
4. Vercel automatically detects the **Vite** framework preset:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**. Your site will be live within 30 seconds with a free `.vercel.app` URL and automatic HTTPS!
6. Every time you push to `main`, Vercel will automatically build and deploy the changes.

### Option 2: Deploy using Vercel CLI
If you prefer deploying directly from your terminal:
```bash
# 1. Install Vercel CLI globally
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy to preview
vercel

# 4. Deploy to production
vercel --prod
```

> **Note on Client-Side Routing**: The included `vercel.json` file contains the URL rewrite rule required for SPA routing:
> ```json
> {
>   "framework": "vite",
>   "cleanUrls": true,
>   "rewrites": [
>     { "source": "/(.*)", "destination": "/index.html" }
>   ]
> }
> ```
> This ensures that direct navigation or refreshing pages like `/services` or `/estimate` works flawlessly without 404 errors.

---

## 📞 Company Contact Details
- **Company**: Armin Painting LLC
- **Location**: Fuquay-Varina, NC 27526
- **Phone**: [(919) 346-4520](tel:9193464520)
- **Email**: contact@arminpainting.com
- **Working Hours**: Monday – Saturday: 7:00 AM – 6:00 PM (Sunday Closed)
