import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "당근마켓 클론 플랫폼",
    description: "React와 Next.js를 사용한 풀스택 E-커머스 웹 애플리케이션",
    tags: [
      "React",
      "Next.js",
      "Tailwind",
      "TypeScript",
      "Firebase",
      "Prismas",
      "Vercel",
    ],
    projectUrl: "https://carrot-market-clone-theta.vercel.app",
    githubUrl: "https://github.com/im2BB/carrot-market-clone",
    emoji: "🥕",
    primaryButtonText: "방문하기",
  },
  {
    title: "포트폴리오 웹사이트",
    description: "Next.js와 Tailwind CSS로 제작한 반응형 포트폴리오 사이트",
    tags: ["React", "Next.js", "Tailwind", "TypeScript"],
    projectUrl: "#",
    githubUrl: "https://github.com/im2BB/portfolio-blog",
    emoji: "🗒️",
    primaryButtonText: "방문하기",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          💻 프로젝트
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
