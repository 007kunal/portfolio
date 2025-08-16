import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "YouTube Video Uploader",
    description:
      "A tool to upload videos directly to YouTube using Google APIs, built with React frontend and Spring Boot backend.",
    image: "/projects/videouploader.jpg",
    tags: ["React", "Spring Boot", "Google API"],
    demoUrl: "#", // replace with live link if available
    githubUrl: "https://github.com/007kunal/youtube-uploader",
  },
  {
    id: 2,
    title: "Student Management System",
    description:
      "A web application to manage students, courses, and grades, built with React frontend and Spring Boot backend using REST APIs for CRUD operations.",
    image: "/projects/student-management.png",
    tags: ["React", "Spring Boot", "REST API"],
    demoUrl: "#",
    githubUrl: "https://github.com/007kunal/Student-management-system",
  },
  {
    id: 3,
    title: "Job App",
    description:
      "A job portal application where users can browse, apply, and manage job postings, built with React frontend and Spring Boot backend.",
    image: "/projects/job-app.png",
    tags: ["React", "Spring Boot", "Job Portal"],
    demoUrl: "#",
    githubUrl: "https://github.com/007kunal/Job-App",
  },
];

// Upcoming projects
const upcomingProjects = [
  {
    id: 1,
    title: "Real-Time Chat App",
    description:
      "A chat application supporting instant messaging and authentication, built with React and Spring Boot using WebSocket for real-time communication.",
    image: "/projects/chatApp.png",
    tags: ["React", "Spring Boot", "WebSocket"],
    demoUrl: "#",
    githubUrl: "https://github.com/007kunal/Real-time-ChatApp",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        {/* Featured projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming projects */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-20">
          Upcoming <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/007kunal"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
