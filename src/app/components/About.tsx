interface Skill {
  name: string;
  percentage: number;
}

interface Experience {
  title: string;
  company: string;
  period: string;
}

const skills: Skill[] = [
  { name: "React / Next.js", percentage: 90 },
  { name: "Node.js", percentage: 80 },
  { name: "TypeScript", percentage: 80 },
  { name: "Tailwind CSS", percentage: 80 },
  { name: "JAVA", percentage: 40 },
];

const experiences: Experience[] = [
  {
    title: "주니어 프론트엔드 개발자",
    company: "SI 협력업체",
    period: "2024 - 2025",
  },
  {
    title: "JAVA 개발자 국비 교육",
    company: "Full Stack",
    period: "2023 - 2024",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          📢 소개
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              기술 스택
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{skill.name}</span>
                    <span className="text-gray-400">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              경력 및 교육
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="border-l-4 border-orange-400 pl-4">
                  <h4 className="text-lg font-medium text-white">
                    {exp.title}
                  </h4>
                  <p className="text-gray-400">
                    {exp.company} • {exp.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
