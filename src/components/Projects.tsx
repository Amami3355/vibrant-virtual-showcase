import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "AWS"],
  },
  {
    title: "Task Management App",
    description: "Real-time task management application with team collaboration",
    tech: ["React", "Firebase", "Material-UI", "Redux"],
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    tech: ["React", "D3.js", "Express", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-gray-50" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-primary">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-portfolio-secondary/10 text-portfolio-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;