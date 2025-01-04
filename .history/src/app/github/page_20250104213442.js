"use client";

import { useEffect, useState } from "react";
import "github-calendar/dist/github-calendar-responsive.css";

const GitHubCalendar = () => {

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center mb-8">GitHub Contributions</h1>
      <div class="text-center">

  <img src="https://avatars.githubusercontent.com/u/duresaguye" alt="GitHub Profile" class="rounded-full w-32 h-32 mx-auto" />
  <h2 class="text-xl mt-2">Duresa Guye</h2>
  <p class="text-gray-600">Full Stack Developer</p>
  <a href="https://github.com/duresaguye" target="_blank" class="text-blue-600 hover:underline">GitHub Profile</a>
  <div className="flex flex-wrap justify-center">
  <img src="https://img.shields.io/github/followers/duresaguye?style=social" alt="GitHub Followers" />
     
  </div>
</div>
 
<img src="https://github-readme-activity-graph.vercel.app/graph?username=duresaguye&bg_color=transparent" alt="GitHub Activity Graph" />
      
      <div className="flex flex-wrap justify-center space-x-4"> <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=duresaguye&layout=compact&theme=radical" alt="GitHub Top Languages" />
      <img src="https://github-readme-stats.vercel.app/api?username=duresaguye&show_icons=true&theme=radical" alt="GitHub Stats" />
      <img src="https://github-readme-streak-stats.herokuapp.com/?user=duresaguye&theme=radical" alt="GitHub Streak" />
     </div>
     

      


    </div>
  );
};

export default GitHubCalendar;