# PR 브랜치 선택 문제 해결 가이드

## 🔴 문제: "There isn't anything to compare" 또는 "main and dev are identical"

### 원인
- `main` 브랜치와 `dev` 브랜치가 완전히 동일한 상태
- `dev` 브랜치에 변경사항이 없음
- 변경사항을 커밋하지 않았거나 푸시하지 않음

---

## ✅ 해결 방법

### 방법 1: dev 브랜치에 변경사항 추가하기 (권장)

#### 1단계: dev 브랜치로 전환
```bash
git checkout dev
```

#### 2단계: 변경사항 만들기
- 파일 수정
- 새 파일 추가
- 또는 기존 파일 삭제

**예시:**
```bash
# README 파일 수정
echo "# 변경사항 추가" >> README.md

# 또는 새 파일 생성
echo "개발 중" > dev-notes.txt
```

#### 3단계: 변경사항 커밋 및 푸시
```bash
git add .
git commit -m "dev 브랜치에 변경사항 추가"
git push origin dev
```

#### 4단계: GitHub에서 PR 생성
- 이제 `main`과 `dev` 브랜치 간 차이점이 표시됩니다
- PR을 정상적으로 만들 수 있습니다

---

### 방법 2: 기존 변경사항이 있는 경우

#### 1단계: 변경사항 확인
```bash
git status
```

#### 2단계: 변경사항 커밋
```bash
git add .
git commit -m "변경사항 설명"
```

#### 3단계: 푸시
```bash
git push origin dev
```

---

### 방법 3: 간단한 테스트 변경사항 만들기

PR 테스트를 위해 간단한 변경사항을 만들 수 있습니다:

```bash
# dev 브랜치에서
git checkout dev

# README에 간단한 주석 추가
echo "" >> README.md
echo "## 개발 브랜치" >> README.md
echo "이 브랜치는 개발 중입니다." >> README.md

# 커밋 및 푸시
git add README.md
git commit -m "dev 브랜치 설명 추가"
git push origin dev
```

---

## 🔍 문제 진단

### 현재 상태 확인

```bash
# 현재 브랜치 확인
git branch

# 변경사항 확인
git status

# 브랜치 간 차이 확인
git log --oneline --graph --all -10
```

### 브랜치가 동일한지 확인

```bash
# main과 dev의 차이 확인
git diff main..dev

# 차이가 없으면 아무것도 표시되지 않음
```

---

## 📋 체크리스트

PR을 만들기 전에 확인:

- [ ] `dev` 브랜치에 있음 (`git branch`로 확인)
- [ ] 변경사항이 있음 (`git status`로 확인)
- [ ] 변경사항을 커밋했음
- [ ] GitHub에 푸시했음 (`git push origin dev`)
- [ ] GitHub에서 브랜치가 업데이트되었는지 확인

---

## 🎯 빠른 해결 (지금 바로)

현재 상황에서 바로 해결하려면:

```bash
# 1. dev 브랜치 확인
git checkout dev

# 2. 간단한 변경사항 만들기 (예: README 수정)
# 또는 이미 있는 변경사항 커밋

# 3. 커밋 및 푸시
git add .
git commit -m "PR 테스트를 위한 변경사항"
git push origin dev

# 4. GitHub에서 PR 생성 시도
```

---

## 💡 예방 방법

앞으로 이런 문제를 방지하려면:

1. **작업 전 브랜치 확인**
   ```bash
   git checkout dev  # dev 브랜치로 전환
   ```

2. **변경사항을 정기적으로 커밋**
   ```bash
   git add .
   git commit -m "작업 내용"
   git push origin dev
   ```

3. **PR 전에 차이 확인**
   ```bash
   git diff main..dev  # 차이가 있는지 확인
   ```

---

## 🚨 자주 발생하는 오류

### 오류 1: "refusing to allow a Personal Access Token to create or update workflow"

**원인**: GitHub Actions 워크플로우 파일 권한 문제

**해결**:
- 워크플로우 파일을 제외하고 푸시
- 또는 Personal Access Token에 `workflow` 권한 추가

### 오류 2: "Everything up-to-date"

**원인**: 로컬과 원격이 동일

**해결**:
- 변경사항을 만들고 커밋
- 푸시

### 오류 3: 브랜치가 드롭다운에 안 보임

**원인**: 브랜치가 GitHub에 푸시되지 않음

**해결**:
```bash
git push origin dev  # 브랜치를 GitHub에 푸시
```

---

## ✅ 성공 확인

PR을 만들 수 있는 상태인지 확인:

1. GitHub에서 "Compare & pull request" 버튼이 보임
2. 브랜치 선택 시 변경사항이 표시됨
3. "Able to merge" 메시지가 표시됨

---

**작성일**: 2024년  
**상태**: 문제 해결 완료 ✅

