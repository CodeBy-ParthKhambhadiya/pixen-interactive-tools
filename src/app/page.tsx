import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "My Portfolio",
      url: "https://parth-portfolio-eosin.vercel.app/",
      description: "A modern and responsive personal portfolio website built to showcase my skills, projects, and experience.",
      color: "text-blue-500",
    },
    {
      title: "Pixen Interactive Tools",
      url: "https://pixen-interactive-tools.vercel.app/",
      description: `Pixen Interactive Tools is a versatile web-based toolkit designed for creative minds and developers alike. 
      It offers a variety of interactive pixel-based tools, allowing users to experiment with graphics, design prototypes, 
      and visual effects directly in the browser. With a clean and intuitive interface, Pixen empowers designers, artists, 
      and developers to create, test, and iterate quickly. Features include live previews, color manipulation, grid-based layouts, 
      and export options. It’s perfect for experimenting with UI concepts, generating creative assets, or just having fun with digital art.`,
      color: "text-purple-500",
    },
    {
      title: "InstaPlug WordPress Plugin",
      url: "https://instaplug.app/embed-instagram-feed-in-wordpress",
      description: "A WordPress plugin for embedding Instagram feeds easily into any website. Makes Instagram integration seamless.",
      color: "text-green-500",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-900 dark:bg-gray-800 shadow-md sticky top-0 z-50 py-12 min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-white">My Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-7xl">
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-start hover:scale-105 transition-transform duration-300"
          >
            <h2 className="text-2xl font-semibold mb-3 text-gray-900">{project.title}</h2>
            <p className={`mb-4 ${project.color} font-medium whitespace-pre-line`}>
              {project.description}
            </p>
            <Link
              href={project.url}
              target="_blank"
              className="mt-auto px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition"
            >
              Visit Project
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
