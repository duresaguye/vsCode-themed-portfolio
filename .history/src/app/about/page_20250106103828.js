import { FaReact, FaNodeJs, FaDocker, FaGithub, FaGit, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiDjango, SiFirebase, SiSupabase, SiMongodb, SiTypescript, SiPostgresql } from 'react-icons/si';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaTelegram } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <div className="p-6 font-mono">
      <h1 className="text-2xl text-blue-400 font-semibold">About Me</h1>
      <p className="text-gray-300 mt-2">
        Hi, I'm <span className="text-yellow-400">Duresa</span> – a passionate and dedicated full-stack developer with expertise in both frontend and backend technologies. 
        With a strong foundation in modern web development, I specialize in creating dynamic and user-friendly applications using <span className="text-blue-500">React</span>, 
        <span className="text-purple-400">Next.js</span>, and <span className="text-green-400">Django</span>, among other technologies.
      </p>
      <p className="text-gray-300 mt-2">
        I'm also experienced in mobile app development using <span className="text-blue-400">React Native</span>, and I have a growing interest in integrating advanced AI features into applications. 
        I enjoy solving complex problems, continuously learning, and adapting to new challenges in the ever-evolving tech landscape. 
        I'm particularly excited by the potential of AI to transform user experiences and enhance app functionality.
      </p>

      <h2 className="text-xl text-blue-400 font-semibold mt-6">Primary Tech Stack</h2>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
        {/* Frontend and Backend */}
        <div className="text-center">
          <FaReact className="text-blue-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">React</p>
        </div>
        <div className="text-center">
          <SiNextdotjs className="text-black w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Next.js</p>
        </div>
        <div className="text-center">
          <SiDjango className="text-green-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Django</p>
        </div>
        <div className="text-center">
          <FaNodeJs className="text-green-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Node.js</p>
        </div>
        <div className="text-center">
          <FaPython className="text-yellow-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Python</p>
        </div>
        <div className="text-center">
          <FaReact className="text-blue-400 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">React Native</p>
        </div>

        {/* Programming Languages */}
        <div className="text-center">
          <SiTypescript className="text-blue-600 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">TypeScript</p>
        </div>

        {/* Databases */}
        <div className="text-center">
          <SiPostgresql className="text-blue-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">PostgreSQL</p>
        </div>
        <div className="text-center">
          <SiFirebase className="text-yellow-400 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Firebase</p>
        </div>
        <div className="text-center">
          <SiSupabase className="text-green-600 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Supabase</p>
        </div>
        <div className="text-center">
          <SiMongodb className="text-green-500 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">MongoDB</p>
        </div>

        {/* Tools and Platforms */}
        <div className="text-center">
          <FaDocker className="text-blue-400 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Docker</p>
        </div>
        <div className="text-center">
          <FaGit className="text-orange-600 w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Git</p>
        </div>
        <div className="text-center">
          <FaGithub className="text-black w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">GitHub</p>
        </div>
      </div>

      <h2 className="text-xl text-blue-400 font-semibold mt-6">Connect with Me</h2>
      <div className="flex space-x-4 mt-4">
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-600 w-8 h-8" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-black w-8 h-8" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-blue-400 w-8 h-8" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-blue-600 w-8 h-8" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-pink-500 w-8 h-8" />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
          <FaTelegram className="text-blue-500 w-8 h-8" />
        </a>
      </div>

      <p className="text-gray-300 mt-6">
        If you're looking for a reliable developer to bring your ideas to life or need advice on building scalable, robust systems, feel free to reach out. Let's collaborate and create something amazing together!
      </p>
    </div>
  );
}
  