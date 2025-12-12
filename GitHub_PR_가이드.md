# GitHub Pull Request (PR) 완전 초보자 가이드

이 가이드는 GitHub에서 Pull Request를 만드는 방법을 단계별로 설명합니다.

---

## 📚 PR이란?

**Pull Request (PR)**는:
- 한 브랜치의 변경사항을 다른 브랜치에 병합(merge)하고 싶을 때 사용합니다
- 예: `dev` 브랜치의 변경사항을 `main` 브랜치에 반영하고 싶을 때
- 코드 리뷰를 받을 수 있고, 변경사항을 검토한 후 병합할 수 있습니다

---

## 🎯 시나리오: dev → main으로 PR 만들기

현재 상황:
- `main` 브랜치: 프로덕션(배포용) 코드
- `dev` 브랜치: 개발 중인 코드

목표: `dev` 브랜치의 변경사항을 `main` 브랜치에 병합

---

## 방법 1: GitHub 웹사이트에서 PR 만들기 (가장 쉬움)

### 1단계: dev 브랜치에 변경사항 푸시

먼저 `dev` 브랜치에서 작업하고 변경사항을 푸시해야 합니다.

```bash
# dev 브랜치로 전환 (이미 dev 브랜치에 있다면 생략)
git checkout dev

# 파일 수정 후...
git add .
git commit -m "새로운 기능 추가"
git push origin dev
```

### 2단계: GitHub 저장소 접속

1. 브라우저에서 저장소 접속:
   - https://github.com/eunkyumoon/FluxNote
2. 저장소 페이지가 열립니다

### 3단계: Pull Request 버튼 클릭

1. 저장소 페이지 상단에 **"Pull requests"** 탭 클릭
2. 또는 저장소 페이지에서 바로 **"Compare & pull request"** 버튼이 보일 수 있습니다
3. **"New pull request"** 버튼 클릭

### 4단계: 브랜치 선택

1. **"base"** 드롭다운: `main` 선택 (병합할 대상 브랜치)
2. **"compare"** 드롭다운: `dev` 선택 (병합할 소스 브랜치)
3. 변경사항이 자동으로 표시됩니다

### 5단계: PR 정보 입력

1. **제목 (Title)**:
   - 예: "dev 브랜치의 변경사항을 main에 병합"
   - 또는: "새로운 기능 추가 및 버그 수정"

2. **설명 (Description)**:
   - 변경사항 설명 작성
   - 예:
     ```
     ## 변경사항
     - 새로운 기능 추가
     - UI 개선
     - 버그 수정
     
     ## 테스트
     - 로컬에서 테스트 완료
     ```

3. **리뷰어 지정** (선택사항):
   - "Reviewers"에서 리뷰어 추가 가능
   - 혼자 작업하는 경우 생략 가능

4. **라벨 추가** (선택사항):
   - "Labels"에서 라벨 추가 가능 (예: enhancement, bug fix)

### 6단계: PR 생성

1. 모든 정보를 입력한 후
2. **"Create pull request"** 버튼 클릭
3. ✅ PR이 생성되었습니다!

### 7단계: PR 병합 (Merge)

PR이 생성되면 병합할 수 있습니다:

1. PR 페이지에서 **"Merge pull request"** 버튼 클릭
2. 병합 메시지 확인 (또는 수정)
3. **"Confirm merge"** 버튼 클릭
4. ✅ 병합 완료!

**병합 옵션 설명**:
- **Create a merge commit**: 병합 커밋 생성 (권장)
- **Squash and merge**: 여러 커밋을 하나로 합침
- **Rebase and merge**: 커밋 히스토리를 재정렬

---

## 방법 2: GitHub CLI 사용 (고급)

터미널에서 PR을 만들 수도 있습니다:

```bash
# GitHub CLI 설치 필요
gh pr create --base main --head dev --title "PR 제목" --body "설명"
```

---

## 📋 PR 체크리스트

PR을 만들기 전에 확인:

- [ ] 코드가 정상 작동하는지 테스트
- [ ] 불필요한 파일이 포함되지 않았는지 확인
- [ ] 커밋 메시지가 명확한지 확인
- [ ] 변경사항을 설명하는 PR 제목과 설명 작성

---

## 🔄 PR 워크플로우 예시

### 일반적인 개발 프로세스

1. **main 브랜치에서 dev 브랜치 생성**
   ```bash
   git checkout main
   git checkout -b dev
   ```

2. **dev 브랜치에서 개발**
   ```bash
   # 파일 수정
   git add .
   git commit -m "기능 추가"
   git push origin dev
   ```

3. **PR 생성**
   - GitHub에서 dev → main PR 생성

4. **PR 리뷰 및 병합**
   - 코드 리뷰 (필요시)
   - 병합

5. **로컬 main 브랜치 업데이트**
   ```bash
   git checkout main
   git pull origin main
   ```

---

## 🎨 PR 템플릿 예시

### 기능 추가 PR

```markdown
## 📝 변경사항
- 새로운 기능 추가
- UI 개선

## 🎯 목적
사용자 경험 개선을 위한 새로운 기능 추가

## ✅ 체크리스트
- [ ] 코드 리뷰 완료
- [ ] 테스트 완료
- [ ] 문서 업데이트
```

### 버그 수정 PR

```markdown
## 🐛 버그 설명
어떤 버그를 수정했는지 설명

## 🔧 수정 내용
어떻게 수정했는지 설명

## ✅ 테스트
수정 후 테스트 방법 및 결과
```

---

## 💡 유용한 팁

### 1. PR 전에 로컬에서 테스트
```bash
# main 브랜치를 최신으로 업데이트
git checkout main
git pull origin main

# dev 브랜치를 main에 병합해보기 (테스트)
git checkout dev
git merge main
# 충돌이 있으면 해결
```

### 2. 작은 단위로 PR 만들기
- 한 번에 너무 많은 변경사항을 포함하지 않기
- 하나의 기능이나 버그 수정 단위로 PR 만들기

### 3. 명확한 제목과 설명
- PR 제목만 봐도 무엇을 변경했는지 알 수 있게
- 변경 이유와 방법을 설명

### 4. 스크린샷 첨부 (UI 변경 시)
- UI가 변경된 경우 스크린샷 첨부하면 이해하기 쉬움

---

## 🔍 PR 확인 및 관리

### PR 목록 보기
- 저장소 → "Pull requests" 탭
- 열린 PR, 닫힌 PR, 병합된 PR 확인 가능

### PR 상태
- **Open**: 아직 병합되지 않은 PR
- **Closed**: 닫힌 PR (병합되지 않음)
- **Merged**: 병합된 PR

### PR에 댓글 달기
- PR 페이지에서 댓글 작성 가능
- 코드 라인별로 댓글 달기 가능

---

## 🚨 주의사항

1. **main 브랜치 보호**
   - 중요한 프로젝트는 main 브랜치를 보호할 수 있음
   - PR 리뷰 필수, 자동 병합 방지 등

2. **충돌 해결**
   - PR을 만들 때 충돌이 발생할 수 있음
   - 로컬에서 충돌 해결 후 다시 푸시

3. **PR 삭제**
   - PR은 삭제할 수 있지만, 병합된 PR은 삭제 불가
   - 대신 "Close"로 닫을 수 있음

---

## 📚 추가 학습 자료

- [GitHub 공식 PR 가이드](https://docs.github.com/en/pull-requests)
- [Git 브랜치 전략](https://www.atlassian.com/git/tutorials/comparing-workflows)

---

**작성일**: 2024년  
**난이도**: 초보자용  
**예상 소요 시간**: 5-10분

