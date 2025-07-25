# 포트폴리오 블로그

개인 포트폴리오와 블로그를 위한 Next.js 기반 웹사이트입니다.

## 🚀 프로젝트 소개

이 프로젝트는 개인의 프로젝트 포트폴리오와 블로그 기능을 결합한 웹사이트입니다. Next.js 14와 TypeScript를 사용하여 구축되었습니다다

## ✨ 주요 기능

- **포트폴리오 섹션**: 프로젝트들을 카드 형태로 표시
- **소개 섹션**: 개인 소개 및 기술 스택
- **연락처**: 이메일 팝업을 통한 연락 기능
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 지원
- **모던 UI**: 깔끔하고 직관적인 사용자 인터페이스

## 🛠️ 기술 스택

- **프레임워크**: Next.js 14 (App Router)
- **언어**: TypeScript
- **스타일링**: CSS Modules, PostCSS
- **폰트**: Geist (Vercel)
- **배포**: Vercel

## 📦 설치 및 실행

### 필수 요구사항

- Node.js 18.0 이상
- npm, yarn, pnpm 또는 bun

### 설치 방법

1. 저장소 클론

```bash
git clone [repository-url]
cd portfolio-blog
```

2. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 열기

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── components/     # 재사용 가능한 컴포넌트들
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── EmailPopup.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   └── Projects.tsx
│   ├── globals.css    # 전역 스타일
│   ├── layout.tsx     # 루트 레이아웃
│   └── page.tsx       # 메인 페이지
├── public/            # 정적 파일들
│   └── images/        # 이미지 파일들
```

## 🎨 커스터마이징

### 프로젝트 정보 수정

`src/app/components/Projects.tsx` 파일에서 프로젝트 정보를 수정할 수 있습니다.

### 개인 정보 수정

`src/app/components/About.tsx` 파일에서 개인 소개 정보를 수정할 수 있습니다.

### 스타일 수정

`src/app/globals.css` 파일에서 전역 스타일을 수정할 수 있습니다.
