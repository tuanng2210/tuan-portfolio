const skills = [
  { name: "JavaScript / TypeScript", src: "/skills/TypeScript.png" },
  { name: "React", src: "/skills/React.png" },
  { name: "Tailwind CSS", src: "/skills/Tailwind CSS.png" },
  { name: "MongoDB", src: "/skills/MongoDB.png" },
  { name: "MySQL", src: "/skills/MySQL.png" },
  { name: "Express", src: "/skills/Expresscolor.png" },
  { name: "Docker", src: "/skills/Docker.png" },
  { name: "Git", src: "/skills/Git.png" },
  { name: "C++", src: "/skills/Cplus.png" },
  { name: "Azure", src: "/skills/Azure.png" },
  { name: "Spring Boot", src: "/skills/Spring.png" },
];

const Skills = () => {
  return (
    <section className="bg-black px-6 py-24 text-white flex flex-col items-center text-center min-h-screen">
      <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
        <span className="text-white">Experience with</span>
      </h2>

      <div className="mt-10 flex flex-wrap justify-center gap-10 max-w-5xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
            />
            <p className="text-sm text-gray-400">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
