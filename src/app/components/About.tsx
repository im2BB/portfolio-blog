"use client";

import { useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  description: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

const skills: Skill[] = [
  {
    name: "React / Next.js",
    percentage: 90,
    description:
      "Next.js를 활용한 풀스택 웹 개발 경험이 있습니다. 컴포넌트 기반 아키텍처,  서버 사이드 렌더링(SSR), 슬라이드(swiper)  등을 구현할 수 있습니다. ",
  },
  {
    name: "React / Node.js",
    percentage: 60,
    description:
      "Node.js로 간단한 영화 찾기 서비스를 구현한 적이 있습니다 api 연결과 그 외 간단한 검색기능 구현 및 기본적인 react 기능 구현 및 기본적인 프로젝트 구조 설계 및 팀 프로젝트 경험이 있습니다.",
  },
  {
    name: "TypeScript",
    percentage: 80,
    description:
      "TypeScript를 활용한 타입 안전한 개발을 진행했습니다. 인터페이스 정의, 타입 가드 등을 사용하여 런타임 오류를 줄이고 코드 품질을 향상시켰습니다.",
  },
  {
    name: "Tailwind CSS",
    percentage: 80,
    description:
      "Tailwind CSS를 활용한 반응형 웹 디자인을 구현했습니다. 빠른 스타일링과 일관된 디자인 시스템을 구축할 수 있습니다. 커스텀 컴포넌트와 다크 모드 구현 경험이 있습니다.",
  },
  {
    name: "Prisma",
    percentage: 40,
    description: "Prisma 를 활용한 데이터베이스 연동 경험이 있습니다.",
  },
];

const experiences: Experience[] = [
  {
    title: "주니어 프론트엔드 개발자",
    company: "SI 업체(루키도)",
    period: "2024 - 2025",
    description:
      "SI 업체에서 프론트엔드 개발자로 근무하며 React와 TypeScript를 활용한 웹 애플리케이션 개발을 담당했습니다. 팀 프로젝트에서 컴포넌트 설계, 상태 관리, API 연동, 반응형 UI 구현 등을 수행했습니다. 24년 9월 부터 25년 1월까지 SK C&C SI 협력 업체로 파견 근무로 나가 해당 프로젝트 캘린더 및 회의실 등록 및 예약 작업에 대한 프론트 개발을 담당했습니다",
  },
  {
    title: "JAVA 개발자 국비 교육",
    company: "Full Stack",
    period: "2023 - 2024",
    description:
      "국비지원 교육을 통해 JAVA 기반의 풀스택 개발 과정을 수료했습니다. Spring Framework, MySQL, HTML/CSS/JavaScript 등을 학습하여 웹 개발의 전반적인 이해를 바탕으로 현재 프론트엔드 개발에 집중하고 있습니다. 프로젝트 기반 학습을 통해 실무 역량을 기를 수 있었습니다. 해당 교육 과정에서 팀 프로젝트 작업 중 프론트개발자가 없어 본인 스스로 따로 프론트 공부 진행해 해당 프로젝트에 전반적인 프론트 작업 전부 진행한 경험이 있습니다",
  },
];

export default function About() {
  const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
  const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);

  const toggleSkill = (index: number) => {
    setExpandedSkills((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const toggleExperience = (index: number) => {
    setExpandedExperiences((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          📢 소개
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              기술 스택
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg p-4"
                >
                  <div
                    className="cursor-pointer group"
                    onClick={() => toggleSkill(index)}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 group-hover:text-orange-400 transition-colors font-medium">
                        {skill.name}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 group-hover:text-orange-400 transition-colors">
                          {skill.percentage}%
                        </span>
                        <svg
                          className={`w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-all duration-200 ${
                            expandedSkills.includes(index) ? "rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 group-hover:bg-gray-600 transition-colors">
                      <div
                        className="bg-orange-400 h-2 rounded-full group-hover:bg-orange-500 transition-colors"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* 상세 설명 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedSkills.includes(index)
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 text-white">
              경력 및 교육
            </h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="border border-gray-700 rounded-lg p-4 cursor-pointer group hover:border-orange-400/50 transition-colors"
                  onClick={() => toggleExperience(index)}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">
                        {exp.title}
                      </h4>
                      <p className="text-gray-400 group-hover:text-orange-300 transition-colors text-sm">
                        {exp.company} • {exp.period}
                      </p>
                    </div>
                    <svg
                      className={`w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-all duration-200 mt-1 ${
                        expandedExperiences.includes(index) ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* 상세 설명 */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedExperiences.includes(index)
                        ? "max-h-96 opacity-100 mt-4"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pt-4 border-t border-gray-700">
                      <p className="text-gray-300 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
