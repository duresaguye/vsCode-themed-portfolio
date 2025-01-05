"use client";

import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">GitHub Contributions</h1>
      <div className="flex justify-center">
        <GitHubCalendar
          username="duresaguye"
          colorScheme="dark"
          blockMargin={4}
          blockSize={15}
        />
      </div>
    </div>
  );
};

export default GitHubContributions;
