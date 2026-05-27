# Vipin Prajapati | Pharmacy Portfolio Website

A premium, recruiter-focused personal portfolio website designed for **Vipin Prajapati**, an ambitious 6th-semester B.Pharm student, future Drug Inspector, and aspiring pharmaceutical professional.

This portfolio is built to showcase expertise in pharmacology, pharmacovigilance, regulatory affairs, and healthcare analysis.

---

## 🌟 Key Features

- **Interactive Molecular Canvas Animation**: Dynamically rendered chemical bonding structures reacting to browser rendering states in the Hero background.
- **Glassmorphic Floating Navigation**: Dynamic scroll-spy navbar that highlights sections as the user scrolls, including a fully-responsive mobile navigation drawer.
- **Interactive Recruiter-Ready CV/Resume Modal**: An embedded interactive curriculum vitae allowing recruiters to review credentials, print directly, or request a PDF version.
- **Pharma-Specific Academic Projects**: Highlights of specific projects including a "Drug Interaction Awareness System" and a "Pharmacovigilance Reporting Dashboard".
- **Dynamic Tabbed Skills Component**: Interactive skills explorer dividing capabilities into Pharmaceutical Sciences, Professional Abilities, and Tech & AI Tools.
- **Educational Timeline**: Interactive timeline showcasing academic progression, GPA, and school/board achievements.
- **Polished Dark & Light Modes**: System-integrated dark/light theme switcher using modern Tailwind CSS v4 variables.
- **Premium UI Aesthetics**: High-end styling using a cyan/sky blue/slate color palette, smooth Framer Motion transitions, and micro-interactions.

---

## 🛠️ Technology Stack

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (with custom SVG fallbacks for brand assets)

---

## 📂 Project Structure

```
pharma-portfolio/
├── public/                 # Static assets (images, profile photo)
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Main layout, custom SEO metadata, inline dark mode init script
│   │   ├── page.tsx        # Portfolio page assembler (imports and sections layout)
│   │   └── globals.css     # CSS custom properties, Tailwind directives, theme definitions
│   ├── components/
│   │   ├── Navbar.tsx      # Navigation (mobile-friendly + scroll spy)
│   │   ├── Hero.tsx        # Hero section with typing effect & molecular canvas & CV modal
│   │   ├── About.tsx       # Bio & core values
│   │   ├── Education.tsx   # AKTU / JSSATE academic timeline
│   │   ├── Skills.tsx      # Tabbed technical skill matrices
│   │   ├── CareerGoals.tsx # Short & long-term plans (Drug Inspector, Pharmacovigilance)
│   │   ├── Projects.tsx    # Academic project showcases
│   │   ├── Achievements.tsx # Scholarships, competitive exams, extra-curriculars
│   │   ├── Certifications.tsx # Professional certificates
│   │   ├── Contact.tsx     # Contact form with simulated submissions
│   │   ├── Footer.tsx      # Recruiter friendly links and copyrights
│   │   ├── ScrollProgress.tsx # Top bar indicating reading progression
│   │   ├── ThemeToggle.tsx  # Interactive light/dark toggle switch
│   │   └── icons.tsx       # Custom SVG brand assets (LinkedIn, GitHub)
│   └── hooks/
│       └── useActiveSection.ts # Scroll spy utility hook
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configurations
└── package.json            # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js LTS (v24.16.0 or later recommended)
- npm (packaged with Node.js)

### Installation

1. Clone or navigate to the repository directory:
   ```bash
   cd pharma-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

Start the development server with Node prepended to the environment path:

```powershell
# In PowerShell (Windows)
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

### Building for Production

Compile a production build of the Next.js application:

```powershell
$env:PATH = "C:\Program Files\nodejs;" + $env:PATH
npm run build
```

---

## 🌐 Deployment to Vercel

The easiest way to deploy this portfolio is using Vercel:

1. **Push to GitHub/GitLab/Bitbucket**:
   Initialize a git repository, commit the files, and push to a remote repository.
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Vipin's Pharma Portfolio"
   git remote add origin <your-repo-url>
   git branch -M main
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Log in to [Vercel](https://vercel.com).
   - Click **Add New** > **Project**.
   - Import your GitHub repository.
   - Leave the default build settings (Next.js settings are auto-detected).
   - Click **Deploy**.

3. **Custom Domain**:
   Configure a custom domain (e.g., `vipin-prajapati.com`) in the Vercel project settings under **Domains**.
"# Vipin_Portfolio" 
