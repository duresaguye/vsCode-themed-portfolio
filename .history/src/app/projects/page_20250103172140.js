export default function Projects() {
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills, projects, and blog posts.",
        techStack: ["React", "Tailwind CSS", "Next.js"],
        link: "https://example.com/portfolio",
      },
      {
        title: "E-commerce App",
        description: "A full-stack e-commerce platform built with React and Django, allowing users to buy and sell products.",
        techStack: ["React", "Django", "PostgreSQL"],
        link: "https://example.com/ecommerce",
      },
      {
        title: "Blog Platform",
        description: "A blog platform where users can create, edit, and share their blog posts, with advanced search functionality.",
        techStack: ["React", "Node.js", "MongoDB"],
        link: "https://example.com/blog",
      },
    ];
  
    return (
      <div className="p-6  text-white font-mono">
        <h1 className="text-3xl text-blue-400 font-semibold mb-6">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-400">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4">
                <span className="text-sm font-semibold text-gray-400">Tech Stack: </span>
                <span className="text-sm text-gray-300">
                  {project.techStack.join(", ")}
                </span>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-blue-400 hover:text-blue-600 transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  