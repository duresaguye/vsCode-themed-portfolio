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
          <img src="/icons/react.svg" alt="React" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">React</p>
        </div>
        <div className="text-center">
          <img src="/icons/nextjs.svg" alt="Next.js" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Next.js</p>
        </div>
        <div className="text-center">
          <img src="/icons/django.svg" alt="Django" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Django</p>
        </div>
        <div className="text-center">
          <img src="/icons/react-native.svg" alt="React Native" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">React Native</p>
        </div>
        <div className="text-center">
          <img src="/icons/tailwindcss.svg" alt="TailwindCSS" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">TailwindCSS</p>
        </div>
        <div className="text-center">
          <img src="/icons/python.svg" alt="Python" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Python</p>
        </div>

        {/* Databases */}
        <div className="text-center">
          <img src="/icons/postgresql.svg" alt="PostgreSQL" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">PostgreSQL</p>
        </div>
        <div className="text-center">
          <img src="/icons/firebase.svg" alt="Firebase" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Firebase</p>
        </div>
        <div className="text-center">
          <img src="/icons/supabase.svg" alt="Supabase" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">Supabase</p>
        </div>
        <div className="text-center">
          <img src="/icons/mongodb.svg" alt="MongoDB" className="w-12 h-12 mx-auto" />
          <p className="text-gray-300 mt-2">MongoDB</p>
        </div>
      </div>

      <p className="text-gray-300 mt-6">
        If you're looking for a reliable developer to bring your ideas to life or need advice on building scalable, robust systems, feel free to reach out. Let's collaborate and create something amazing together!
      </p>
    </div>
  );
}
