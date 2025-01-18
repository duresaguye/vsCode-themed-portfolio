import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "./components/Layout";
import CustomHead from "./components/Head";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.duresa.me/"),
  title: "Duresa Guye - Software Engineer | Web & Mobile App Developer from Ethiopia",
  description:
    "Explore the portfolio of Duresa Guye, a skilled Software Engineer specializing in web and mobile app development with over 2 years of experience in JavaScript, React, and Django. Based in Ethiopia, Duresa creates innovative solutions tailored to client needs.",
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
    "Ethiopia",
    "Addis Ababa",
    "Developer Portfolio"
  ],
  openGraph: {
    title: "Duresa Guye - Software Engineer | Web & Mobile App Developer",
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

export default function ServerLayout({ children }) {
  return (
    <html lang="en">
        <CustomHead  />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Layout>
      
          {children}
        
        </Layout>
      </body>
    </html>
  );
}