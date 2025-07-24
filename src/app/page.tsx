"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowEmailPopup(true);
    // 3초 후 자동으로 팝업 닫기
    setTimeout(() => setShowEmailPopup(false), 3000);
  };
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="font-semibold text-lg text-white">
                이경훈의 포토폴리오
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                소개
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                프로젝트
              </a>
              <a
                href="#blog"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                블로그
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-orange-400 transition-colors"
              >
                연락처
              </a>
            </nav>
            <button className="md:hidden p-2 text-white">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
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
            <a
              href="https://carrot-market-clone-theta.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium inline-block"
            >
              프로젝트 보기
            </a>
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

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            소개
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                기술 스택
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">React / Next.js</span>
                    <span className="text-gray-400">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Node.js</span>
                    <span className="text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">TypeScript</span>
                    <span className="text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">Tailwind CSS</span>
                    <span className="text-gray-400">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">JAVA</span>
                    <span className="text-gray-400">40%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-orange-400 h-2 rounded-full"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">
                경력 & 교육
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-white">
                    주니어 프론트엔드 개발자
                  </h4>
                  <p className="text-gray-400">SI 협력업체 • 2024 - 2025</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold text-white">
                    JAVA 개발자 국비 교육
                  </h4>
                  <p className="text-gray-400">Full Stack • 2023 - 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            프로젝트
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500/20 transition-shadow border border-gray-800 flex flex-col">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-4xl">🚀</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  당근마켓 클론 플랫폼
                </h3>
                <p className="text-gray-400 mb-4">
                  React와 Next.js를 사용한 풀스택 E-커머스 웹 애플리케이션
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Firebase
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Prismas
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Vercel
                  </span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="https://carrot-market-clone-theta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                  >
                    프로젝트 보기
                  </a>
                  <a
                    href="https://github.com/im2BB/carrot-market-clone"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-900 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-black rounded-lg shadow-lg overflow-hidden hover:shadow-orange-500/20 transition-shadow border border-gray-800 flex flex-col">
              <div className="h-48 bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center">
                <span className="text-white text-4xl">🎨</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-white">
                  포트폴리오 웹사이트
                </h3>
                <p className="text-gray-400 mb-4">
                  Next.js와 Tailwind CSS로 제작한 반응형 포트폴리오 사이트
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    React
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    Tailwind
                  </span>
                  <span className="px-2 py-1 bg-orange-400/20 text-orange-300 text-xs rounded">
                    TypeScript
                  </span>
                </div>
                <div className="flex gap-2 mt-auto">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                  >
                    방문하기
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded hover:bg-gray-900 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-white">연락처</h2>
          <p className="text-xl text-gray-300 mb-8">
            프로젝트 협업이나 궁금한 점이 있으시면 언제든 연락주세요!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-orange-400 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              이메일 주소
            </button>
            <a
              href="https://github.com/im2BB"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Email Popup */}
      {showEmailPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-orange-400 rounded-lg p-8 max-w-md mx-4 relative">
            <button
              onClick={() => setShowEmailPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                이메일 주소
              </h3>
              <p className="text-orange-400 text-lg font-mono mb-4 break-all">
                seoulbutter@gmail.com
              </p>
              <p className="text-gray-400 text-sm mb-6">
                위 이메일 주소로 연락해 주세요!
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={() => {
                    navigator.clipboard.writeText("seoulbutter@gmail.com");
                    alert("이메일 주소가 클립보드에 복사되었습니다!");
                  }}
                  className="px-4 py-2 bg-orange-400 text-white rounded hover:bg-orange-600 transition-colors text-sm"
                >
                  복사하기
                </button>
                {/* <a
                  href="mailto:seoulbutter@gmail.com"
                  className="px-4 py-2 border border-orange-400 text-orange-400 rounded hover:bg-orange-400/10 transition-colors text-sm"
                >
                  메일 보내기
                </a> */}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
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
    </div>
  );
}
