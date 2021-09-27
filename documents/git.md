# git

## git 버전확인

git의 설치버전을 확인합니다.

```
  $git --version
```

## git 버전관리 선언
현재 프로젝트에서 변경사항 추적을 시작합니다.
```
  $git init
```

## git 환경설정

git의 초기환경을 설정합니다
```
  $git config --global core.autocrlf input
  $git config --global user.name 'username'
  $git config --global user.email 'useremail'
  $git config --global --list
```
- `core.autocrlf` : 개행방식을 os별로 자동설정하게합니다.
- `user.name` : 버전 생성을 위한 전역 사용자 명을 설정합니다.
- `user.email` : 버전 생성을 위한 전역 사용자 이메일을 설정합니다.
- `--list` : 등록상태를 확인합니다.

## 버전관리 상태확인

버전관리 할 프로젝트 내부 파일들의 버전관리 상태를 확인합니다.
```
  $git status
```

## 버전관리 파일 추가
변경사항을 추적할 파일을 지정합니다.
```
  $git add .
```
>`.` : 프로젝트내 모든 파일의 변경사항을 추적합니다.

## 버전 생성
버전관리할 파일의 새로운 버전을 생성합니다.
```
  $git commit -m 'message'
```
- `-m 'message'`: 메세지와 함께 버전을 생성합니다.

## 이력 확인
버전 관리 이력을 확인합니다.
```
  $git log
```

## 원격저장소와 연결
원격 저장소(repository)에 프로젝트를 연결합니다.
```
  $git remote add origin address
```
> address(원격저장소 주소)의 origin(원격저장소의 별칭)에 현제 프로젝트를 remote 한다.

## 버전 업로드
윈격 저장소에 현재 프로젝트를 업로드합니다.
```
  $git push origin main
```
> origin(원격저장소)에 현재 프로젝트의 버전내역을 업로드 합니다.

## netlify를 활용한 배포
https://app.netlify.com/teams/vonovo123/overview

## branch 목록 확인
생성된 브랜치 목록을 확인합니다.
```
  $git branch
```
- `-a` : 원격 저장소의 브랜치까지 일괄 조회합니다.
- `-r` : 원격 저장소의 브랜치를 조회합니다.
- `branch name` : branch name으로 branch를 생성합니다.

## branch 변경
브랜치를 변경합니다.
```
  $git checkout branch name
```

## clone으로 저장소 복사하기
원격저장소를 로컬파일로 복제합니다
```
  $git clone repo 주소
```

## reset으로 버전 되돌리기
과거 버전으로 되돌립니다.
```
  $git reset --hard HEAD~1
```
> HEAD(최신버전)으로 부터 1만큼 이전버전으로 완전히(hard) 되돌리겠다.

## 되돌리기 원복하기
되돌리기를 취소하고 기존상태로 돌아옵니다
```
  $git reset --hard ORIG_HEAD
```
> ORIG_HEAD(기존 버전)으로 돌아갑니다.

## 원격저장소의 브랜치로 체크아웃하기
원격 저장소의 브랜치로 체크아웃합니다
```
$git checkout -t origin branch명
```

## 브렌치 삭제
브렌치를 삭제합니다
```
$git -d 브렌치 명
```
