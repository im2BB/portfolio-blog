export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">👨‍💻</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
            안녕하세요, <span className="text-orange-400"> 이경훈 </span>
            입니다
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            프론트엔드 개발과 사용자 경험에 열정을 가진 개발자입니다. 새로운
            기술을 배우고 창의적인 솔루션을 만드는 것을 좋아합니다.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium inline-block"
          >
            프로젝트 보기
          </button>
          <a
            href="/이경훈 입사지원서.docx"
            download="이경훈_입사지원서.docx"
            className="px-8 py-3 border border-orange-400 text-orange-300 rounded-lg hover:bg-orange-500/10 hover:text-orange-400 transition-colors font-medium inline-block"
          >
            이력서 다운로드
          </a>
        </div>
      </div>
    </section>
  );
}
