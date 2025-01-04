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

      {/* User Info */}
      {userData && (
        <div className="flex justify-center items-center gap-6 mb-6">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="rounded-full w-16 h-16"
          />
          <div>
            <h2 className="text-xl font-semibold">{userData.login}</h2>
            <p>{userData.public_repos} Repositories</p>
            <p>{userData.followers} Followers</p>
          </div>
        </div>
      )}

      {/* GitHub Calendar */}
      <div className=" p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold  mb-4">Contribution Graph</h2>
        <div className="calendar text-center">
          <p className="text-gray-600">Loading contributions...</p>
        </div>
      </div>

      {/* Repositories */}
      {repos.length > 0 && (
        <div className="mt-8">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Top Repositories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {repos.map((repo) => (
              <div key={repo.id} className="p-4 bg-white rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{repo.name}</h3>
                <p className="text-gray-600">{repo.description || "No description"}</p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 mt-2 inline-block"
                >
                  View Repository
                </a>
              </div>
            ))}
          </div>
          <img src="https://github-readme-activity-graph.vercel.app/graph?username=your-duresaguye&bg_color=transparent" alt="GitHub Activity Graph" />

        </div>
      )}
    </div>
  );
};

export default GitHubCalendar;