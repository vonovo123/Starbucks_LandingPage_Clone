# Node JS

## Node 버전 매니져(NVM)으로 버전 관리

NVM 설치 명령어로 설치

```
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash

$ nvm install 12.21.0
$ nvm use 12.21.0
$ nvm uninstall 12.21.0
```
- `install` : 버전별 설치
- `user` : 사용할 버전 선택
- `uninstall` : 불필요한 버전 삭제

## Node 패키지 매니저(NPM)로 node 프로젝트 관리

```
  npm init -y //npm 으로 패키지 관리

  npm install parcel-bundler -D //모듈설치

  npm install //package.json 을 참고해서 일괄 설치
```

- `info package name` : 버전확인

## 유의적 버전 (Semantic Version)
해석가능한 버전
^Major.Minor.Patch
- `^` : Major 버전 안에서 최신버전으로 업데이트 가능
- `Major` : 기존버전과호환되지않는 새로운 버전
- `Minor` : 기존버전과 호환이 가능하지만 새로운 기능이 추가된 버전
- `Patch` : 기존버전과 호환되는 버그 및 오타등이 수정된 버전

