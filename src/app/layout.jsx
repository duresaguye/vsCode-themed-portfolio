"use client";
import { useEffect, useState } from "react";
import ServerLayout from "./server-layout";


export default function RootLayout({ children, pageProps }) {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ServerLayout>
      {children}
    </ServerLayout>
  );
}