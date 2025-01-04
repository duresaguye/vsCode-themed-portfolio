"use client";

import { useEffect, useState } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const fetchGitHubData = async () => {
    const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
    const token = process.env.GITHUB_API_KEY;

    console.log("GitHub Username:", username);
    console.log("GitHub API Key:", token);

    if (!username || !token) {
      console.error("GitHub username or API key is missing.");
      return;
    }

    try {
      // Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${username}`, {
        headers: { Authorization: `token ${token}` },
      });
      const userData = await userRes.json();

      // Fetch repositories
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=6&sort=updated`,
        { headers: { Authorization: `token ${token}` } }
      );
      const reposData = await reposRes.json();

      setUserData(userData);
      setRepos(reposData);
    } catch (error) {
      console.error("Error fetching GitHub data:", error);
    }
  };

  useEffect(() => {
    fetchGitHubData();

    if (typeof window !== "undefined") {
      import("github-calendar").then((GitHubCalendar) => {
        GitHubCalendar.default(".calendar", process.env.NEXT_PUBLIC_GITHUB_USERNAME, {
          responsive: true,
        });
      });
    }
  }, []);


  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">GitHub Contributions</h1>

      <img src="https://github-readme-activity-graph.vercel.app/graph?username=duresaguye&bg_color=transparent" alt="GitHub Activity Graph" />
      <img src="https://github-readme-stats.vercel.app/api?username=duresaguye&show_icons=true&theme=radical" alt="GitHub Stats" />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=duresaguye&theme=radical" alt="GitHub Streak" />



    </div>
  );
};

export default GitHubCalendar;