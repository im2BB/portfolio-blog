# 포트폴리오 블로그 개발 로그 🚀

_작성일: 2024년 12월_  
_기술 스택: Next.js 15, React 19, TypeScript, Tailwind CSS 4_

---

## 📋 프로젝트 개요

이번 포트폴리오 블로그는 Next.js 15와 Tailwind CSS 4를 활용하여 개발자 이경훈의 포트폴리오와 기술 블로그를 구현한 프로젝트입니다. 모던 웹 개발 기술을 적용하여 반응형 디자인과 인터랙티브한 사용자 경험을 제공하는 것이 목표였습니다.

### 🎯 주요 목표

- Next.js 15 App Router를 활용한 모던 웹 애플리케이션 구축
- Tailwind CSS 4를 활용한 반응형 디자인 구현
- 컴포넌트 기반 아키텍처로 유지보수성 향상
- 인터랙티브한 사용자 경험 제공

---

## 🛠️ 기술 스택

### Frontend

- **Next.js 15.4.3**: App Router 기반의 풀스택 프레임워크
- **React 19.1.0**: 최신 React 버전 활용
- **TypeScript**: 타입 안전성 보장
- **Tailwind CSS 4**: 유틸리티 퍼스트 CSS 프레임워크

### Development Tools

- **ESLint**: 코드 품질 관리
- **PostCSS**: CSS 전처리
- **Vercel**: 배포 플랫폼

---

## 📁 프로젝트 구조

```
portfolio-blog/
├── src/
│   └── app/
│       ├── components/
│       │   ├── Header.tsx          # 네비게이션 헤더
│       │   ├── Hero.tsx            # 메인 히어로 섹션
│       │   ├── About.tsx           # 소개 섹션
│       │   ├── Projects.tsx        # 프로젝트 섹션
│       │   ├── ProjectCard.tsx     # 프로젝트 카드 컴포넌트
│       │   ├── Contact.tsx         # 연락처 섹션
│       │   ├── EmailPopup.tsx      # 이메일 팝업
│       │   └── Footer.tsx          # 푸터
│       ├── layout.tsx              # 루트 레이아웃
│       ├── page.tsx                # 메인 페이지
│       └── globals.css             # 전역 스타일
├── public/                         # 정적 파일
└── package.json                    # 프로젝트 설정
```

---

## 🎨 디자인 시스템

### 컬러 팔레트

- **Primary**: Orange (#f97316, #fb923c)
- **Background**: Black (#000000)
- **Text**: White (#ffffff), Gray (#9ca3af, #6b7280)
- **Border**: Gray (#374151, #4b5563)

### 타이포그래피

- **Heading**: Geist Sans (Bold, Semibold)
- **Body**: Geist Sans (Regular)
- **Code**: Geist Mono

---

## 🔧 구현 과정

### 1단계: 프로젝트 초기 설정

#### 1.1 Next.js 15 프로젝트 생성

```bash
npx create-next-app@latest portfolio-blog --typescript --tailwind --app --src-dir
```

#### 1.2 의존성 확인

```json
{
  "dependencies": {
    "react": "19.1.0",
    "react-dom": "19.1.0",
    "next": "15.4.3"
  },
  "devDependencies": {
    "typescript": "^5",
    "tailwindcss": "^4",
    "@tailwindcss/postcss": "^4"
  }
}
```

#### 1.3 메타데이터 설정 (`src/app/layout.tsx`)

```typescript
export const metadata: Metadata = {
  title: "포트폴리오 & 블로그",
  description: "개발자 포트폴리오와 기술 블로그",
};

// HTML lang 속성을 한국어로 변경
<html lang="ko">
```

### 2단계: 기본 레이아웃 구현

#### 2.1 헤더 컴포넌트 (`src/app/components/Header.tsx`)

- **기능**: 네비게이션, 로고, 반응형 메뉴
- **특징**:
  - Sticky 포지션으로 상단 고정
  - 오렌지 보더와 블러 효과
  - 로고: "P" 아이콘 + "이경훈의 포토폴리오" 텍스트

```typescript
<header className="sticky top-0 z-50 bg-black/90 backdrop-blur-md border-b border-orange-500/20">
  <div className="flex items-center space-x-2">
    <div className="w-8 h-8 bg-orange-400 rounded-lg flex items-center justify-center">
      <span className="text-white font-bold text-sm">P</span>
    </div>
    <span className="font-semibold text-lg text-white">
      이경훈의 포토폴리오
    </span>
  </div>
</header>
```

#### 2.2 히어로 섹션 (`src/app/components/Hero.tsx`)

- **기능**: 메인 소개, 프로필 이미지, CTA 버튼
- **특징**:
  - 32x32 원형 프로필 이미지 (이모지)
  - 반응형 제목 (4xl ~ 6xl)
  - 프로젝트 보기 버튼 (스크롤 기능)
  - 이력서 다운로드 버튼

```typescript
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  if (projectsSection) {
    projectsSection.scrollIntoView({ behavior: "smooth" });
  }
};
```

### 3단계: 컨텐츠 섹션 구현

#### 3.1 소개 섹션 (`src/app/components/About.tsx`)

- **기능**: 기술 스택, 경력 정보, 인터랙티브 토글
- **특징**:
  - 프로그레스 바로 기술 숙련도 표시
  - 아코디언 스타일의 상세 설명
  - 부드러운 애니메이션 효과

```typescript
const [expandedSkills, setExpandedSkills] = useState<number[]>([]);
const [expandedExperiences, setExpandedExperiences] = useState<number[]>([]);

const toggleSkill = (index: number) => {
  setExpandedSkills((prev) =>
    prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
  );
};
```

**기술 스택 데이터**:

- React / Next.js (90%)
- Node.js (80%)
- TypeScript (80%)
- Tailwind CSS (80%)
- JAVA (40%)

**경력 정보**:

- 주니어 프론트엔드 개발자 (SI 업체, 2024-2025)
- JAVA 개발자 국비 교육 (Full Stack, 2023-2024)

#### 3.2 프로젝트 섹션 (`src/app/components/Projects.tsx`)

- **기능**: 프로젝트 카드 그리드, 외부 링크
- **특징**:
  - 반응형 그리드 레이아웃 (md:grid-cols-2 lg:grid-cols-3)
  - Flexbox를 활용한 카드 하단 버튼 고정
  - GitHub 아이콘과 링크

**프로젝트 카드 컴포넌트** (`src/app/components/ProjectCard.tsx`):

```typescript
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
```

**프로젝트 목록**:

1. **당근마켓 클론 플랫폼**

   - 기술: React, Next.js, Tailwind, TypeScript, Firebase, Prismas, Vercel
   - 링크: https://carrot-market-clone-theta.vercel.app
   - GitHub: https://github.com/im2BB/carrot-market-clone

2. **포트폴리오 웹사이트**
   - 기술: React, Next.js, Tailwind, TypeScript
   - 현재 페이지

### 4단계: 인터랙티브 기능 구현

#### 4.1 연락처 섹션 (`src/app/components/Contact.tsx`)

- **기능**: 이메일 팝업, GitHub 링크
- **특징**: 이메일 버튼 클릭 시 팝업 표시

#### 4.2 이메일 팝업 (`src/app/components/EmailPopup.tsx`)

- **기능**: 이메일 주소 표시, 클립보드 복사
- **특징**:
  - 3초 자동 닫기
  - 클립보드 복사 기능
  - 모달 오버레이

```typescript
const handleCopyEmail = async () => {
  try {
    await navigator.clipboard.writeText("seoulbutter@gmail.com");
    alert("이메일 주소가 클립보드에 복사되었습니다!");
  } catch (err) {
    console.error("클립보드 복사 실패:", err);
  }
};
```

#### 4.3 푸터 컴포넌트 (`src/app/components/Footer.tsx`)

- **기능**: 로고, 저작권, 링크
- **특징**: 헤더와 동일한 로고 디자인

### 5단계: 디자인 개선

#### 5.1 컬러 테마 적용

- **기본**: 검정 배경 (#000000)
- **강조**: 오렌지 색상 (#f97316, #fb923c)
- **텍스트**: 흰색 (#ffffff), 회색 (#9ca3af)

#### 5.2 반응형 디자인

- **모바일**: 세로 스택 레이아웃
- **태블릿**: 2열 그리드
- **데스크톱**: 3열 그리드

#### 5.3 애니메이션 효과

- **호버 효과**: 색상 전환, 그림자 효과
- **전환 애니메이션**: 부드러운 높이 변화
- **스크롤 애니메이션**: 부드러운 스크롤

---

## 🎯 주요 기능

### 1. 반응형 네비게이션

- 데스크톱: 가로 메뉴
- 모바일: 햄버거 메뉴 (준비 중)

### 2. 인터랙티브 기술 스택

- 프로그레스 바로 숙련도 시각화
- 클릭 시 상세 설명 토글
- 부드러운 애니메이션 효과

### 3. 프로젝트 카드

- 일관된 디자인 시스템
- 하단 버튼 고정
- GitHub 아이콘 포함

### 4. 이메일 연락 기능

- 팝업 모달
- 클립보드 복사
- 자동 닫기 타이머

### 5. 부드러운 스크롤

- 내부 링크 스크롤
- 부드러운 애니메이션

---

## 🔧 기술적 도전과 해결

### 1. Next.js 15 App Router와 Client Components

**문제**: `useState` 훅 사용 시 "Client Component" 오류
**해결**: 컴포넌트 상단에 `"use client"` 지시어 추가

```typescript
"use client";
import { useState } from "react";
```

### 2. Tailwind CSS 4 클래스 적용

**문제**: 일부 배경색이 적용되지 않는 문제
**해결**: 개별 요소별로 클래스 적용 및 일관성 확인

### 3. 컴포넌트 재사용성

**문제**: 반복되는 코드 구조
**해결**: TypeScript 인터페이스를 활용한 재사용 가능한 컴포넌트 설계

### 4. 반응형 레이아웃

**문제**: 다양한 화면 크기에서의 일관성
**해결**: Tailwind CSS의 반응형 클래스 체계 활용

---

## 📊 성능 최적화

### 1. 컴포넌트 분리

- 각 섹션별 독립적인 컴포넌트
- 필요한 부분만 리렌더링

### 2. 이미지 최적화

- Next.js Image 컴포넌트 활용 (준비 중)
- WebP 포맷 사용

### 3. 번들 최적화

- Tree shaking으로 불필요한 코드 제거
- 동적 import 활용

---

## 🚀 배포 및 호스팅

### Vercel 배포

- GitHub 연동
- 자동 배포
- 환경 변수 관리

### 도메인 설정

- 커스텀 도메인 연결 (준비 중)
- SSL 인증서 자동 적용

---

## 📈 향후 개선 계획

### 1. 기능 추가

- [ ] 블로그 포스트 시스템
- [ ] 다크/라이트 모드 토글
- [ ] 다국어 지원 (한국어/영어)
- [ ] 검색 기능

### 2. 성능 개선

- [ ] 이미지 최적화
- [ ] 코드 스플리팅
- [ ] 캐싱 전략

### 3. 사용자 경험

- [ ] 로딩 애니메이션
- [ ] 스크롤 인디케이터
- [ ] 키보드 네비게이션

### 4. SEO 최적화

- [ ] 메타 태그 최적화
- [ ] 구조화된 데이터
- [ ] 사이트맵 생성

---

## 🛠️ 개발 도구 및 라이브러리

### 개발 환경

- **Node.js**: 18.x 이상
- **npm**: 패키지 관리
- **VS Code**: 코드 에디터
- **Git**: 버전 관리

### 코드 품질

- **ESLint**: 코드 린팅
- **TypeScript**: 타입 체크
- **Prettier**: 코드 포맷팅 (준비 중)

### 테스팅

- **Jest**: 단위 테스트 (준비 중)
- **React Testing Library**: 컴포넌트 테스트 (준비 중)

---

## 📚 학습한 내용

### 1. Next.js 15 App Router

- 새로운 라우팅 시스템 이해
- Server/Client Components 구분
- 메타데이터 API 활용

### 2. Tailwind CSS 4

- 유틸리티 퍼스트 접근법
- 반응형 디자인 구현
- 커스텀 설정 방법

### 3. TypeScript

- 인터페이스 설계
- 제네릭 활용
- 타입 안전성 확보

### 4. React 19

- 최신 React 기능 활용
- 훅 기반 상태 관리
- 컴포넌트 설계 패턴

---

## 🎉 결론

이번 포트폴리오 블로그 프로젝트를 통해 Next.js 15와 Tailwind CSS 4의 최신 기능들을 실제로 적용해볼 수 있었습니다. 컴포넌트 기반 아키텍처로 코드의 재사용성과 유지보수성을 크게 향상시켰으며, 인터랙티브한 사용자 경험을 제공하는 웹사이트를 완성했습니다.

특히 TypeScript를 활용한 타입 안전성 확보와 반응형 디자인 구현을 통해 실무에서 활용할 수 있는 기술들을 습득할 수 있었습니다. 앞으로도 지속적인 개선과 새로운 기능 추가를 통해 더욱 완성도 높은 포트폴리오를 만들어 나갈 예정입니다.

---

_이 포트폴리오는 Next.js 15, React 19, TypeScript, Tailwind CSS 4를 활용하여 개발되었습니다._  
_GitHub: [portfolio-blog](https://github.com/im2BB/portfolio-blog)_  
_배포: [Vercel](https://portfolio-blog-vercel.vercel.app)_
