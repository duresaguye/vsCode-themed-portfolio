"use client";

import React, { useEffect } from "react";
import GitHubCalendar from "github-calendar";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubContributions = () => {
  useEffect(() => {
    GitHubCalendar(".calendar", "duresaguye");
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">GitHub Contributions</h1>
      <div className="calendar"></div>
    </div>
  );
};

export default GitHubContributions;
