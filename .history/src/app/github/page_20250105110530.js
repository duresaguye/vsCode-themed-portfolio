"use client";

import { useEffect, useState } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchGitHubProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/duresaguye");
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Failed to fetch GitHub profile:", error);
      }
    };

    fetchGitHubProfile();
  }, []);

  if (!profile) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">GitHub Contributions</h1>
      <div className="text-center">
        <img
          src={profile.avatar_url}
          alt={`${profile.name || profile.login}'s GitHub Profile`}
          className="rounded-full w-32 h-32 mx-auto"
        />
        <h2 className="text-xl mt-2">{profile.name || profile.login}</h2>
        <p className="text-gray-600">{profile.bio || "Full Stack Developer"}</p>
        <a
          href={profile.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          GitHub Profile
        </a>
        <div className="flex flex-wrap justify-center mt-4">
          <img
            src={`https://img.shields.io/github/followers/${profile.login}?style=social`}
            alt="GitHub Followers"
          />
        </div>
      </div>

      <img
        src={`https://github-readme-activity-graph.vercel.app/graph?username=${profile.login}&bg_color=transparent`}
        alt="GitHub Activity Graph"
        className="mt-6"
      />

      <div className="flex flex-wrap justify-center space-x-4 mt-6">
        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${profile.login}&layout=compact&theme=radical`}
          alt="GitHub Top Languages"
        />
        <img
          src={`https://github-readme-stats.vercel.app/api?username=${profile.login}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
        />
        <img
          src={`https://github-readme-streak-stats.herokuapp.com/?user=${profile.login}&theme=radical`}
          alt="GitHub Streak"
        />
      </div>
    </div>
  );
};

export default GitHubCalendar;
