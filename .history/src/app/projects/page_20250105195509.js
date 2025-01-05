import projects from '../data/Project';

export default function Projects() {
  return (
    <div className="p-6   font-mono">
      <h1 className="text-3xl text-blue-400 font-semibold mb-6">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className=" p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img 
              src={project.image} 
              alt={`${project.title} screenshot`} 
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="mt-4">
              <h2 className="text-xl font-semibold text-blue-400">{project.title}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <div className="mt-4">
                <span className="text-sm font-semibold text-gray-400">Tech Stack: </span>
                <span className="text-sm  text-blue-400">
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
          </div>
        ))}
      </div>
    </div>
  );
}
