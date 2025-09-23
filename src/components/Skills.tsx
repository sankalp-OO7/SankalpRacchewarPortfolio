import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5 / CSS3", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 92 },
        { name: "Redux", level: 88 },
        { name: "Responsive Design", level: 94 },
        { name: "Tailwind CSS / MUI", level: 90 },
      ],
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js & Express.js", level: 58 },
        { name: "MongoDB", level: 45 },
        { name: "REST APIs", level: 90 },
        { name: "GraphQL", level: 50 },
        { name: "SQL / MySQL", level: 25 },
      ],
    },
    {
      title: "Testing & DevOps",
      skills: [
        { name: "Jest & Integration Testing", level: 82 },
        { name: "CI/CD Pipelines", level: 40 },
        { name: "AWS (EC2, S3, Lambda)", level: 48 },
        { name: "Git / GitHub", level: 95 },
        { name: "Agile / Scrum", level: 88 },
      ],
    },
    {
      title: "Additional Expertise",
      skills: [
        { name: "Payment Gateway Integration", level: 80 },
        { name: "Performance Optimization", level: 90 },
        { name: "API Security & Auth", level: 82 },
        { name: "Figma to Code (UI/UX)", level: 100 },
        { name: "Debugging & Problem Solving", level: 90 },
      ],
    },
  ];

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A full-stack MERN developer skilled in frontend, backend, testing,
            DevOps, and cloud deployment — delivering scalable, reliable, and
            user-focused applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-10%" }}
          className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 justify-items-center"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
              className="skill-card bg-gray-50 dark:bg-dark-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-dark-700 w-full max-w-xs"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center pb-4 border-b border-gray-200 dark:border-dark-600">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                        {skill.name}
                      </span>
                      <span className="text-primary-600 dark:text-primary-400 font-bold text-xs bg-primary-50 dark:bg-primary-900/20 px-2 py-1 rounded-full">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2.5 overflow-hidden shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                          duration: 1.2,
                          delay: categoryIndex * 0.08 + skillIndex * 0.03,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                        className="h-full bg-gradient-to-r from-primary-500 to-purple-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Extra Skill Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Highlighted Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              "MERN Stack Applications",
              "Performance Optimization",
              "Payment Gateway Integration",
              "CI/CD Automation",
              "AWS Cloud Deployment",
              "API Security & Auth",
              "Agile/Scrum Practices",
              "UI/UX to Production",
              "Reusable Components",
            ].map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-700"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
