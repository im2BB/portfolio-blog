export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 border-t border-orange-500/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-semibold text-lg">이경훈의 포토폴리오</span>
        </div>
        <p className="text-gray-400 mb-6">
          © 2024 포트폴리오 & 블로그. 모든 권리 보유.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            개인정보처리방침
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            이용약관
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-orange-400 transition-colors"
          >
            사이트맵
          </a>
        </div>
      </div>
    </footer>
  );
}
