"use client";

import { useState } from "react";
import Layout from "./components/Layout";
import AboutMe from "./portfolio/aboutme";
import Projects from "./portfolio/project";
import Contact from "./portfolio/contact";

export default function Home() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {activeTab === "Home" && <h1>Welcome</h1>}
      {activeTab === "AboutMe" && <AboutMe />}
      {activeTab === "Projects" && <Projects />}
      {activeTab === "Contact" && <Contact />}
    </Layout>
  );
}