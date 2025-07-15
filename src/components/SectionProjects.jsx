import { ExternalLink, Github } from "lucide-react";

export const SectionProjects = () => {
  const projectsData = [
    {
      title: "Mijn portfolio",
      description: "Moderne portfolio voor het delen van mijn ervaring",
      image: "/images/portfolio.png",
      technologies: ["React", "Node.js", "Tailwindcss"],
      liveUrl: "https://sebastiaan.huizedevries.nl",
      githubUrl: "https://github.com/SpastBanana/portfolio",
    },
    {
      title: "Sebastiaans Rhythm Studios",
      description: "Mijn muziek bedrijf",
      image: "/images/rhythmstudios.png",
      technologies: ["php", "Wordpress", "Elementor"],
      liveUrl: "https://rhythmstudios.nl",
      githubUrl: "#",
    },
    {
      title: "Stichting Lief & Lied",
      description: "Website voor de kaartverkoop van benefietconcerten",
      image: "/images/lieflied.png",
      technologies: ["php", "Wordpress", "Elementor"],
      liveUrl: "https://kaarten.liefenlied.nl",
      githubUrl: "#",
    },
  ];

  return (
    <section className="">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          {/* Center line - visible on all screen sizes */}
          <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-600"></div>

          {/* Projects timeline */}
          <div className="space-y-16">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } flex-row`}
              >
                {/* Timeline dot - visible on all screen sizes */}
                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10 flex">
                  <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border-2 bg-background border-primary">
                    <span className="text-primary-foreground text-lg md:text-xl font-bold">
                      {index + 1}
                    </span>
                  </div>
                </div>

                {/* Content container */}
                <div
                  className={`w-full max-w-100 md:w-5/12 ml-16 md:ml-0 cards`}
                >
                  <div className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Project image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                    </div>

                    {/* Project content */}
                    <div className="p-4">
                      <h3 className="t2 text-primary-foreground">
                        {project.title}
                      </h3>
                      <p className="t4 text-graytext mb-4">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-primary/22 text-primary text-[11px] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          className="flex items-center gap-2 px-2 py-1 bg-primary text-gray-200 rounded-md hover:bg-primary/88 transition-colors t4 cursor-pointer"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                        <a
                          href={
                            project.githubUrl !== "#" ? project.githubUrl : null
                          }
                          target={project.githubUrl !== "#" ? "_blank" : null}
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-2 py-1 border border-gray-600 text-graytext rounded-md hover:border-primary hover:text-primary transition-colors t4"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
