
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./client-layout";
import Layout from "./components/Layout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Duresa Guye - Software Engineer || Data Science Enthusiast",
  description:
    "Discover the work of Duresa Guye, a Software Engineer from Ethiopia with 2+ years of expertise in web and mobile development, specializing in JavaScript, React, and Django.",
  keywords: [
    "Duresa Guye",
    "Software Engineer",
    "Web Developer",
    "Mobile App Developer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Django Developer",
    "JavaScript",
    "TypeScripts",
    "Ethiopia",
    "Addis Ababa",
    "Developer Portfolio"
  ],
  openGraph: {
    title: "Duresa Guye - Software Engineer || Data Science Enthusiast",
    description:
      "Discover the work of Duresa Guye, a Software Engineer from Ethiopia with 2+ years of expertise in web and mobile development, specializing in JavaScript, React, and Django.",
    images: [
      {
        url: "https://www.duresa.me/portfolio.png",
        width: 800,
        height: 600,
        alt: "Duresa Guye - Software Engineer"
      }
    ],
  },
  alternates: {
    canonical: "https://www.duresa.me/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.alternates.canonical} />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>
        <Layout>
      
      {children}
    
    </Layout>
        </ClientLayout>
      </body>
    </html>
  );
}