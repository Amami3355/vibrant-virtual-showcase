import { useTranslation } from "react-i18next";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
  { category: "Backend", items: ["Node.js", "Python", "Java", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Kubernetes"] },
  { category: "Tools", items: ["Git", "VS Code", "Jira", "Figma"] },
];

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-portfolio-primary">
          {t('skills.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-4 text-portfolio-primary">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-gray-600 flex items-center space-x-2"
                  >
                    <span className="w-2 h-2 bg-portfolio-secondary rounded-full" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;