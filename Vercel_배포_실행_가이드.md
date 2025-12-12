# Vercel 배포 실전 가이드 - 단계별 실행

이 가이드는 Vercel에 FluxNote를 배포하는 과정을 화면별로 안내합니다.

---

## 📋 준비사항 확인

✅ 확인된 사항:
- GitHub 저장소: https://github.com/eunkyumoon/FluxNote
- 프로젝트 구조: Create React App
- 빌드 설정: `npm run build`
- 출력 디렉토리: `build`

---

## 1단계: Vercel 계정 만들기

### 1-1. Vercel 웹사이트 접속

1. 브라우저를 엽니다
2. 주소창에 `vercel.com` 입력하고 엔터
3. 또는 직접 접속: https://vercel.com

### 1-2. 회원가입

1. 오른쪽 상단의 **"Sign Up"** 버튼 클릭
2. **"Continue with GitHub"** 버튼 클릭
   - ⚠️ GitHub 계정으로 로그인하는 것이 중요합니다!
3. GitHub 로그인 화면이 나타나면:
   - GitHub 사용자명과 비밀번호 입력
   - 로그인
4. **"Authorize Vercel"** 버튼 클릭
   - Vercel이 GitHub 저장소에 접근할 수 있도록 허용
5. ✅ Vercel 계정 생성 완료!

---

## 2단계: 프로젝트 추가하기

### 2-1. 대시보드 접속

1. Vercel에 로그인하면 대시보드가 표시됩니다
2. 화면 중앙에 **"Add New Project"** 버튼이 보입니다
   - 또는 상단의 **"New Project"** 버튼 클릭

### 2-2. GitHub 저장소 선택

1. **"Import Git Repository"** 섹션이 보입니다
2. GitHub 저장소 목록이 표시됩니다
3. **"eunkyumoon / FluxNote"** 저장소를 찾아서 클릭
   - 찾기 어려우면 검색창에 `FluxNote` 입력

### 2-3. 저장소 권한 확인

처음 사용하는 경우:
- **"Install Vercel for GitHub"** 또는 **"Configure GitHub App"** 버튼이 보일 수 있습니다
- 클릭하여 Vercel이 GitHub 저장소에 접근할 수 있도록 설정
- 저장소 선택: `eunkyumoon/FluxNote` 선택
- **"Install"** 또는 **"Save"** 클릭

---

## 3단계: 프로젝트 설정

### 3-1. 프로젝트 이름 확인

- **Project Name**: `fluxnote` (또는 원하는 이름)
- 기본값으로 저장소 이름이 사용됩니다

### 3-2. Framework 설정 (자동 감지됨)

Vercel이 자동으로 다음을 감지합니다:
- ✅ **Framework Preset**: `Create React App`
- ✅ **Root Directory**: `./` (현재 디렉토리)
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `build`

**⚠️ 확인사항**:
- Build Command가 `npm run build`인지 확인
- Output Directory가 `build`인지 확인
- 다르면 수정하세요!

### 3-3. 환경 변수 설정 (선택사항)

- 현재는 환경 변수가 필요 없습니다
- 나중에 필요하면 추가할 수 있습니다

### 3-4. 추가 설정 (선택사항)

- **Install Command**: 기본값 `npm install` 사용
- **Development Command**: 기본값 사용
- 기타 설정은 기본값으로 두면 됩니다

---

## 4단계: 배포 시작

### 4-1. 배포 버튼 클릭

1. 모든 설정을 확인한 후
2. 페이지 하단으로 스크롤
3. **"Deploy"** 버튼 클릭
   - 파란색 또는 초록색 큰 버튼입니다

### 4-2. 배포 진행 상황 확인

배포가 시작되면:
- **"Building"** 단계: 의존성 설치 및 빌드 진행
- **"Deploying"** 단계: 빌드된 파일 배포
- **"Ready"** 단계: 배포 완료

**예상 소요 시간**: 약 1-3분

### 4-3. 배포 로그 확인

- 배포 중 로그를 실시간으로 볼 수 있습니다
- 오류가 있으면 로그에서 확인 가능
- 일반적으로 성공적으로 완료됩니다

---

## 5단계: 배포 완료 확인

### 5-1. 성공 메시지 확인

배포가 완료되면:
- **"Congratulations!"** 메시지가 표시됩니다
- 또는 **"Deployment successful"** 메시지

### 5-2. 사이트 URL 확인

배포 완료 후:
- 자동 생성된 URL이 표시됩니다
- 예: `https://fluxnote.vercel.app`
- 또는: `https://fluxnote-xxxxx.vercel.app`

### 5-3. 사이트 접속

1. **"Visit"** 버튼 클릭
2. 또는 URL을 복사하여 브라우저에 붙여넣기
3. ✅ **FluxNote 앱이 실행되는 것을 확인합니다!**

---

## 6단계: 배포 확인 및 테스트

### 6-1. 사이트 기능 테스트

배포된 사이트에서:
- ✅ 메모 작성 기능
- ✅ 메모 수정 기능
- ✅ 메모 삭제 기능
- ✅ 검색 기능
- ✅ 반응형 디자인

모두 정상 작동하는지 확인하세요!

### 6-2. 모바일에서 확인

- 스마트폰 브라우저에서도 접속해보세요
- 반응형 디자인이 잘 작동하는지 확인

---

## 7단계: 자동 배포 설정 확인

### 7-1. 자동 배포 활성화

Vercel은 기본적으로 자동 배포가 활성화되어 있습니다:
- GitHub의 `main` 브랜치에 푸시하면 자동으로 재배포됩니다
- PR을 만들면 프리뷰 배포도 자동으로 생성됩니다

### 7-2. 배포 설정 확인

1. Vercel 대시보드에서 프로젝트 클릭
2. **"Settings"** 탭 클릭
3. **"Git"** 섹션에서:
   - Production Branch: `main`
   - Auto-deploy: 활성화됨

---

## 🎯 빠른 참조: 전체 프로세스

```
1. vercel.com 접속
   ↓
2. GitHub로 로그인
   ↓
3. "Add New Project" 클릭
   ↓
4. "FluxNote" 저장소 선택
   ↓
5. 설정 확인 (자동 감지됨)
   ↓
6. "Deploy" 클릭
   ↓
7. 배포 완료 대기 (1-3분)
   ↓
8. URL로 접속하여 확인
   ↓
9. 완료! ✅
```

---

## 🔧 문제 해결

### 문제 1: "Build Failed"

**원인**: 빌드 오류

**해결 방법**:
1. 로컬에서 빌드 테스트:
   ```bash
   npm run build
   ```
2. 오류가 나면 수정 후 다시 푸시
3. Vercel에서 "Redeploy" 클릭

### 문제 2: 저장소가 안 보임

**해결 방법**:
1. GitHub 저장소가 Public인지 확인
2. Vercel에 GitHub 권한이 있는지 확인
3. "Configure GitHub App"에서 권한 설정

### 문제 3: 배포는 되지만 사이트가 안 열림

**해결 방법**:
1. URL이 올바른지 확인
2. 브라우저 캐시 삭제 후 다시 시도
3. Vercel 대시보드에서 배포 상태 확인

### 문제 4: 404 오류

**해결 방법**:
- `vercel.json` 파일이 올바르게 설정되어 있는지 확인
- SPA 라우팅 설정 확인

---

## 📱 커스텀 도메인 설정 (선택사항)

나중에 원하는 도메인을 연결할 수 있습니다:

1. Vercel 대시보드 → 프로젝트 → **"Settings"** → **"Domains"**
2. 원하는 도메인 입력
3. DNS 설정 안내에 따라 도메인 제공업체에서 설정

---

## 🎉 완료!

축하합니다! 이제 여러분의 메모 앱이 인터넷에 공개되었습니다!

**배포된 사이트**: `https://fluxnote.vercel.app` (또는 자동 생성된 URL)

---

## 📚 추가 정보

- **Vercel 대시보드**: https://vercel.com/dashboard
- **프로젝트 설정**: 대시보드에서 프로젝트 클릭 → Settings
- **배포 로그**: 프로젝트 → Deployments → 각 배포 클릭

---

**작성일**: 2024년  
**난이도**: 초보자용  
**예상 소요 시간**: 5-10분

