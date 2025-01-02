"use client";

import { useState } from "react";
import Layout from "./components/Layout";
import AboutMe from "./portfolio/aboutme";
import Projects from "./portfolio/project";
import Contact from "./portfolio/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
   <>
   <h1>well come</h1>
   </>
  );
}