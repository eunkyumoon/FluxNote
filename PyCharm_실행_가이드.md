# PyCharm에서 FluxNote 실행 가이드

## 방법 1: PyCharm 내장 터미널 사용 (가장 간단)

1. **PyCharm에서 프로젝트 열기**
   - File → Open → `C:\DEV\FluxNote` 선택

2. **내장 터미널 열기**
   - 하단의 "Terminal" 탭 클릭
   - 또는 `Alt + F12` 단축키 사용

3. **의존성 설치 (처음 한 번만)**
   ```bash
   npm install
   ```

4. **개발 서버 시작**
   ```bash
   npm start
   ```

5. **브라우저에서 확인**
   - 자동으로 `http://localhost:3000`이 열립니다
   - 또는 수동으로 브라우저에서 접속

---

## 방법 2: Run Configuration 사용

1. **Run Configuration 생성**
   - 상단 메뉴: Run → Edit Configurations...
   - 왼쪽 상단 `+` 버튼 클릭 → "npm" 선택
   - 설정:
     - **Name**: Start React App
     - **Command**: start
     - **package.json**: `$PROJECT_DIR$/package.json` (자동 감지됨)

2. **실행**
   - 상단 툴바에서 "Start React App" 선택
   - 실행 버튼(▶) 클릭 또는 `Shift + F10`

---

## 방법 3: package.json 스크립트 직접 실행

1. **package.json 파일 열기**
2. **스크립트 옆의 실행 버튼(▶) 클릭**
   - `"start": "react-scripts start"` 옆의 실행 버튼

---

## 문제 해결

### 포트 3000이 이미 사용 중인 경우
```bash
# 다른 포트로 실행
set PORT=3001 && npm start
```

### 의존성 설치 오류
```bash
# 캐시 삭제 후 재설치
npm cache clean --force
npm install
```

### Node.js가 설치되지 않은 경우
- [Node.js 공식 사이트](https://nodejs.org/)에서 LTS 버전 다운로드 및 설치

---

## 서버 중지 방법

터미널에서 `Ctrl + C`를 누르면 개발 서버가 중지됩니다.

