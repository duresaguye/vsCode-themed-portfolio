"use client"
import { useEffect } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import GitHubCalendar when on the client
      import("github-calendar").then((GitHubCalendar) => {
        GitHubCalendar.default(".calendar", "duresaguye", { responsive: true });
      });
    }
  }, []);

  return (
    <div className="calendar">
      {/* Placeholder while data loads */}
      Loading the data just for you...
    </div>
  );
};

export default GitHubCalendar;
