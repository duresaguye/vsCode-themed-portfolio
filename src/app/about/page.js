import React from 'react';
import { 
  FaReact, FaNodeJs, FaDocker, FaGithub, FaGit, FaPython, 

} from 'react-icons/fa';
import { 
  SiNextdotjs, SiDjango, SiFirebase, SiSupabase, SiMongodb, SiTypescript, SiPostgresql 
} from 'react-icons/si';

export default function AboutMe() {
  const techStack = [
    { icon: <FaReact className="text-blue-500 w-12 h-12 mx-auto" />, name: "React" },
    { icon: <SiNextdotjs className="text-black w-12 h-12 mx-auto" />, name: "Next.js" },
    { icon: <SiDjango className="text-green-500 w-12 h-12 mx-auto" />, name: "Django" },
    { icon: <FaNodeJs className="text-green-500 w-12 h-12 mx-auto" />, name: "Node.js" },
    { icon: <FaPython className="text-yellow-500 w-12 h-12 mx-auto" />, name: "Python" },
    { icon: <FaReact className="text-blue-400 w-12 h-12 mx-auto" />, name: "React Native" },
    { icon: <SiTypescript className="text-blue-600 w-12 h-12 mx-auto" />, name: "TypeScript" },
    { icon: <SiPostgresql className="text-blue-500 w-12 h-12 mx-auto" />, name: "PostgreSQL" },
    { icon: <SiFirebase className="text-yellow-400 w-12 h-12 mx-auto" />, name: "Firebase" },
    { icon: <SiSupabase className="text-green-600 w-12 h-12 mx-auto" />, name: "Supabase" },
    { icon: <SiMongodb className="text-green-500 w-12 h-12 mx-auto" />, name: "MongoDB" },
    { icon: <FaDocker className="text-blue-400 w-12 h-12 mx-auto" />, name: "Docker" },
    { icon: <FaGit className="text-orange-600 w-12 h-12 mx-auto" />, name: "Git" },
    { icon: <FaGithub className="text-black w-12 h-12 mx-auto" />, name: "GitHub" },
  ];

  return (
    <div className="p-6 font-mono">
      {/* About Section */}
      <h1 className="text-2xl text-blue-400 font-semibold">About Me</h1>
      <p className="text-gray-300 mt-2">
        Hi, I'm <span className="text-yellow-400">Duresa</span> – a passionate and dedicated full-stack developer with expertise in both frontend and backend technologies. 
        I specialize in creating dynamic and user-friendly applications using 
        <span className="text-blue-500"> React</span>, <span className="text-purple-400"> Next.js</span>, and <span className="text-green-400"> Django</span>, among other technologies.
      </p>
      <p className="text-gray-300 mt-2">
        I'm also experienced in mobile app development using <span className="text-blue-400">React Native</span>, and I have a growing interest in integrating advanced AI features into applications. 
        I enjoy solving complex problems, continuously learning, and adapting to new challenges in the ever-evolving tech landscape. 
      </p>

      {/* Tech Stack Section */}
      <h2 className="text-xl text-blue-400 font-semibold mt-6">Primary Tech Stack</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {techStack.map((tech, index) => (
          <div key={index} className="text-center">
            {tech.icon}
            <p className="text-gray-300 mt-2">{tech.name}</p>
          </div>
        ))}
      </div>

      {/* Closing Section */}
      <p className="text-gray-300 mt-6">
        If you're looking for a reliable developer to bring your ideas to life or need advice on building scalable, robust systems, feel free to reach out. 
        Let's collaborate and create something amazing together!
      </p>
    </div>
  );
}
