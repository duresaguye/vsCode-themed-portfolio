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
      <div className="flex justify-center items-center ">
        {activeTab === "Home" && (
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
            <p className="text-lg">
              Explore my projects, learn more about me, or get in touch!
            </p>
          </div>
        )}
        {activeTab === "About" && <AboutMe />}
        {activeTab === "Projects" && <Projects />}
        {activeTab === "Contact" && <Contact />}
      </div>
    </Layout>
  );
}