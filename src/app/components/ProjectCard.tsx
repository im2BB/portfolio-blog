interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  projectUrl?: string;
  githubUrl?: string;
  emoji: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  projectUrl,
  githubUrl,
  emoji,
  primaryButtonText = "프로젝트 보기",
  secondaryButtonText = "GitHub",
}: ProjectCardProps) {
  return (
    <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500/20 transition-shadow border border-gray-800 flex flex-col">
      <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
        <span className="text-white text-4xl">{emoji}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-2 mt-auto">
          {projectUrl && (
            <a
              href={projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-colors text-sm"
            >
              {primaryButtonText}
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-900 transition-colors text-sm flex items-center justify-center gap-2"
            >
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {secondaryButtonText}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
