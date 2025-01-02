"use client";
import { useEffect } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("github-calendar").then((GitHubCalendar) => {
        GitHubCalendar.default(".calendar", "your-username", { responsive: true });
      });
    }
  }, []);

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">GitHub Contributions</h2>
      <div className="calendar text-center">
        {/* Placeholder while the calendar loads */}
        <p className="text-gray-600">Loading contributions...</p>
      </div>
    </div>
  );
};

export default GitHubCalendar;
