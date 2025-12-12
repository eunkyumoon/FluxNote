# 🚀 Vercel 배포 완전 초보자 가이드

이 가이드는 프로그래밍을 처음 시작하는 분들을 위한 단계별 배포 가이드입니다.

---

## 📋 준비물

- ✅ GitHub 계정 (없으면 만들어야 합니다)
- ✅ 이 프로젝트가 컴퓨터에 있어야 합니다
- ✅ 인터넷 연결

---

## 1단계: GitHub 계정 만들기 (이미 있으면 건너뛰기)

### 1-1. GitHub 가입하기

1. 웹 브라우저를 엽니다 (Chrome, Edge 등)
2. 주소창에 `github.com` 입력하고 엔터
3. 오른쪽 상단의 **"Sign up"** 버튼 클릭
4. 다음 정보 입력:
   - **Username**: 원하는 사용자명 (예: `myusername`)
   - **Email**: 이메일 주소
   - **Password**: 비밀번호
5. **"Create account"** 버튼 클릭
6. 이메일 인증 완료 (이메일함 확인)

✅ **완료**: GitHub 계정이 만들어졌습니다!

---

## 2단계: Git 설치 확인 (이미 설치되어 있을 수 있음)

### 2-1. Git이 설치되어 있는지 확인

1. **Windows 검색창**에 "PowerShell" 또는 "명령 프롬프트" 입력
2. PowerShell 또는 명령 프롬프트 실행
3. 다음 명령어 입력:
   ```bash
   git --version
   ```
4. 버전이 나오면 ✅ **설치됨**
5. "명령을 찾을 수 없습니다" 오류가 나면 ❌ **설치 필요**

### 2-2. Git 설치하기 (필요한 경우)

1. 브라우저에서 `https://git-scm.com/download/win` 접속
2. **"Download for Windows"** 버튼 클릭
3. 다운로드된 파일 실행
4. 설치 마법사에서 **"Next"** 버튼만 계속 클릭 (기본 설정 그대로)
5. 설치 완료 후 컴퓨터 재시작

---

## 3단계: GitHub에 프로젝트 업로드하기

### 3-1. 프로젝트 폴더로 이동

1. PowerShell 또는 명령 프롬프트를 엽니다
2. 다음 명령어 입력 (프로젝트 폴더로 이동):
   ```bash
   cd C:\DEV\FluxNote
   ```
3. 엔터 키 누르기

### 3-2. Git 초기화

다음 명령어들을 **하나씩** 입력하고 엔터를 누릅니다:

```bash
git init
```

**설명**: 이 명령어는 이 폴더를 Git 저장소로 만듭니다.

### 3-3. 모든 파일 추가

```bash
git add .
```

**설명**: 이 명령어는 모든 파일을 Git에 추가합니다.

### 3-4. 첫 번째 커밋 (저장)

```bash
git commit -m "첫 번째 커밋: FluxNote 메모 앱"
```

**설명**: 이 명령어는 파일들을 저장합니다.

**⚠️ 주의**: 처음 사용하면 이름과 이메일을 설정하라는 메시지가 나올 수 있습니다. 그럴 경우:

```bash
git config --global user.name "당신의 이름"
git config --global user.email "당신의이메일@example.com"
```

그리고 다시 `git commit` 명령어를 실행하세요.

### 3-5. GitHub에 저장소 만들기

1. 브라우저에서 `github.com` 접속
2. 로그인 (오른쪽 상단)
3. 오른쪽 상단의 **"+"** 버튼 클릭 → **"New repository"** 선택
4. 다음 정보 입력:
   - **Repository name**: `fluxnote` (또는 원하는 이름)
   - **Description**: "반응형 메모 앱" (선택사항)
   - **Public** 선택 (무료로 사용하려면)
   - **"Add a README file"** 체크 해제 (이미 있으므로)
   - **"Add .gitignore"** 체크 해제 (이미 있으므로)
5. **"Create repository"** 버튼 클릭

### 3-6. 로컬 프로젝트를 GitHub에 연결

GitHub에서 저장소를 만들면 나오는 페이지에 명령어가 있습니다. 하지만 여기서는 다음 명령어를 사용하세요:

**⚠️ 주의**: `사용자명`을 여러분의 GitHub 사용자명으로 바꿔주세요!

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/사용자명/fluxnote.git
```

**예시**: 사용자명이 `john123`이면
```bash
git remote add origin https://github.com/john123/fluxnote.git
```

### 3-7. GitHub에 코드 업로드

```bash
git push -u origin main
```

**설명**: 이 명령어는 코드를 GitHub에 업로드합니다.

**처음 사용하는 경우**:
- GitHub 사용자명 입력 요청 → 입력하고 엔터
- 비밀번호 입력 요청 → 입력하고 엔터
  - ⚠️ 비밀번호 대신 **Personal Access Token**이 필요할 수 있습니다 (아래 참고)

### 3-8. Personal Access Token 만들기 (비밀번호가 안 될 경우)

1. GitHub → 오른쪽 상단 프로필 클릭 → **"Settings"**
2. 왼쪽 메뉴에서 **"Developer settings"** 클릭
3. **"Personal access tokens"** → **"Tokens (classic)"** 클릭
4. **"Generate new token"** → **"Generate new token (classic)"** 클릭
5. 다음 설정:
   - **Note**: "Vercel 배포용" (아무거나)
   - **Expiration**: 원하는 기간 선택
   - **Scopes**: `repo` 체크
6. **"Generate token"** 클릭
7. **토큰 복사** (한 번만 보여줍니다!)
8. `git push` 할 때 비밀번호 대신 이 토큰을 입력

✅ **완료**: GitHub에 코드가 업로드되었습니다!

---

## 4단계: Vercel 가입하기

### 4-1. Vercel 접속

1. 브라우저에서 `vercel.com` 접속
2. 오른쪽 상단의 **"Sign Up"** 버튼 클릭

### 4-2. GitHub로 로그인

1. **"Continue with GitHub"** 버튼 클릭
2. GitHub 로그인 화면이 나타나면 로그인
3. **"Authorize Vercel"** 버튼 클릭 (Vercel이 GitHub에 접근할 수 있도록 허용)

✅ **완료**: Vercel 계정이 만들어졌습니다!

---

## 5단계: Vercel에 프로젝트 배포하기

### 5-1. 새 프로젝트 추가

1. Vercel 대시보드에서 **"Add New Project"** 버튼 클릭
   - 또는 **"New Project"** 버튼 클릭

### 5-2. GitHub 저장소 선택

1. **"Import Git Repository"** 섹션에서
2. 방금 만든 `fluxnote` 저장소를 찾아서 클릭
   - 찾기 어려우면 검색창에 `fluxnote` 입력

### 5-3. 프로젝트 설정 (자동으로 설정됨)

Vercel이 자동으로 다음을 감지합니다:
- **Framework Preset**: Create React App ✅
- **Root Directory**: `./` ✅
- **Build Command**: `npm run build` ✅
- **Output Directory**: `build` ✅

**⚠️ 확인사항**: 
- **Build Command**가 `npm run build`인지 확인
- **Output Directory**가 `build`인지 확인

### 5-4. 배포 시작

1. 모든 설정이 올바른지 확인
2. **"Deploy"** 버튼 클릭

### 5-5. 배포 진행 상황 확인

- 배포가 진행되는 동안 로그를 볼 수 있습니다
- 약 1-2분 정도 소요됩니다
- **"Building"** → **"Deploying"** → **"Ready"** 순서로 진행됩니다

✅ **완료**: 배포가 완료되었습니다!

---

## 6단계: 배포된 사이트 확인하기

### 6-1. 사이트 URL 확인

배포가 완료되면:
- **"Congratulations!"** 메시지가 나타납니다
- **"Visit"** 버튼을 클릭하거나
- 자동 생성된 URL을 확인합니다 (예: `https://fluxnote.vercel.app`)

### 6-2. 사이트 접속

1. 제공된 URL을 클릭하거나
2. 브라우저 주소창에 URL을 입력하고 엔터
3. ✅ **FluxNote 앱이 실행되는 것을 확인합니다!**

---

## 7단계: 자동 배포 설정 (이미 설정됨)

### 7-1. 자동 배포 확인

이제부터는:
- GitHub에 코드를 푸시하면
- Vercel이 자동으로 새 버전을 배포합니다!

### 7-2. 테스트해보기

1. 코드를 수정 (예: `src/App.js`에서 제목 변경)
2. 다음 명령어 실행:
   ```bash
   git add .
   git commit -m "제목 변경"
   git push
   ```
3. Vercel 대시보드에서 자동 배포되는 것을 확인

---

## 🎉 완료!

축하합니다! 이제 여러분의 메모 앱이 인터넷에 공개되었습니다!

---

## ❓ 문제 해결

### 문제 1: "Build Failed" 오류

**해결 방법**:
1. 로컬에서 빌드 테스트:
   ```bash
   npm run build
   ```
2. 오류가 나면 수정 후 다시 푸시

### 문제 2: 사이트가 열리지 않음

**해결 방법**:
1. Vercel 대시보드에서 배포 상태 확인
2. "Redeploy" 버튼 클릭

### 문제 3: Git 명령어가 작동하지 않음

**해결 방법**:
1. Git이 설치되어 있는지 확인 (`git --version`)
2. PowerShell을 관리자 권한으로 실행

### 문제 4: GitHub에 푸시가 안 됨

**해결 방법**:
1. Personal Access Token 사용
2. 저장소 URL이 올바른지 확인

---

## 📞 추가 도움말

- **Vercel 공식 문서**: https://vercel.com/docs
- **GitHub 가이드**: https://guides.github.com
- **Git 가이드**: https://git-scm.com/doc

---

**작성일**: 2024년  
**난이도**: 초보자용  
**예상 소요 시간**: 15-30분

