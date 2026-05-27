import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vipin | Healthcare Data Analyst & Pharma-Tech Professional",
  description: "Personal portfolio of Vipin, a B.Pharm student transitioning into Healthcare Data Analytics and Pharmaceutical Technology. Skilled in Power BI, SQL, Python, Excel, and pharmacology.",
  keywords: [
    "Vipin",
    "Healthcare Data Analyst",
    "Pharma-Tech",
    "B.Pharm Data Analyst",
    "Pharmacovigilance Analytics",
    "Clinical Data Analyst",
    "Power BI Healthcare Dashboard",
    "SQL Medical Data Analysis",
    "Python Healthcare Analytics"
  ],
  authors: [{ name: "Vipin" }],
  creator: "Vipin",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vipin-prajapati-portfolio.vercel.app", // Placeholder Vercel URL
    title: "Vipin | Healthcare Data Analyst & Pharma-Tech Professional",
    description: "Personal portfolio of Vipin, a B.Pharm student transitioning into Healthcare Data Analytics and Pharmaceutical Technology. Skilled in Power BI, SQL, Python, Excel, and pharmacology.",
    siteName: "Vipin Portfolio",
    images: [
      {
        url: "/vipin.jpg",
        width: 800,
        height: 800,
        alt: "Vipin Portrait"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vipin | Healthcare Data Analyst & Pharma-Tech Professional",
    description: "B.Pharm student transitioning into Healthcare Data Analytics and Pharmaceutical Technology. Skilled in Power BI, SQL, Python, Excel, and pharmacology.",
    images: ["/vipin.jpg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  console.error(e);
                }
              })()
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-brand-dark dark:text-slate-100 transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
