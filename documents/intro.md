## 웹에서 사용하는 이미지의 종류
### Bitmap :  정교하고 다양한 색상표현가능/품질 저하
##### png : 투명한 영역을 지원해서 활용도가 높다.
##### jpeg : 용량압축률이 높아서 활용에 용이하다.
##### WEBP : 손실압축방식/비손실압축방식 모두 지원/GIF 기능도 지원

### 백터(svg)
#### 확대축소에 영향이 없음/ 용량변화가 없음/정교한 이미지 표현 어려움
#### Css/Js로 컨트롤 가능
#### 파일 및 코드 삽입 가능

---
## 특수기호
### ~ : 틸트(물결기호)
### ^ : 캐럿
### & : 엔퍼센드
### _ : 언더스코어
### | : 버티컬 바
### \ : 백슬레쉬
### [] : 브레킷

---
## 단축키 & snippet

### ! : html default snippet
### cmd + b : 탐색기 토글
### cmd + alt + f : 바꾸기
### alt + 방향키 : 줄이동
### alt + shift + 방향키 : 복사
### cmd + \ : 화면분할
---
## Beautify extension을 활용한 코드정렬 
1. Beautify Extension 설치
2. 바로가기에 HookyQR.beautify 검색한 후 단축키 등록(option + command + l)

## auto rename tag 를 이용한 열린/닫힌  태그 동기화

## 모두저장 기능 활용 alt + command + s

## 공백을 사용한 들여쓰기 간격 2로 변경

---
## link tag 와 브라우저의 관계
### 브라우저는 link의 href값의 확장자를 확인하지 않기 때문에 rel 이하의 값을 지정하여 관계를 설정한다
#### rel='stylesheet' / rel = 'icon'
#### ./ : 주변

## meta tag : HTML문서의 제작자, 내용, 키워드 같은 여러 정보를 검색엔진이나 브라우저에 제공
### name = 'author' / name = 'viewport'


---

## 절대경로 상대경로
### 맨앞에 ./ 생략해도 상대경로(./)로 인식함

---

## tab size 설정
### 사용자환경설정 -> tab size -> 2

---

### 브라우져 css 초기화
Chrome default css

 `
 body {
    display: block;
    margin: 8px;
  }
 `

### rest.css cdn으로 받기
### cdn https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css

---
## emit 문법활용

### 예시 : div>ul>li*4{$}

---
## Inline 요소와 Block 요소

### Inline 요소 : 다른 inline 요소들과 같은 라인에 배치 되는 요소
#### `<span>, <a>, <img>`
##### img : alt를 설정하지 않으면 웹표준에 어긋남
##### a : target='_blank' 선언하면 새로운 창을 열어 이동
### block 요소 : 전후 줄바꿈이 들어가 혼자 한 라인을 차지하는 요소
#### `<div>, <p>, <h1>`
##### input:radio 는 Name으로 그룹핑함
##### input:checkbox의 label은 id로 묶음
##### a:title는 마우스올려놨을때 나오는 text 지정

---
## 전역속성
### data- : 요소에 데이터를 지정
#### e.data 로 접근하면 DOMStringMap{key(camelCase):value} 형태로 출력
### javascript의 type을 module로 지정하면 후처리됨

---
## CSS 선언방식

### 인라인방식은 유지보수에 악영향

### @import url() 은 css 파일 안에서 다른 Css파일을 불러올때 사용하는 방식
### 직렬방식은 연결지연되는데 장단점이 될수있음 많이 사용되진않음
### link방식은 병렬로 연결된다

---
## 복합선택자
### 일치선택자 ABCXYY : ABC와 XYZ를 동시에 만족하는 요소를 선택


### 자식선택자 ABC > XYZ : 선택자 ABC의 자식 XYZ를 선택

### 후손선택자 ABC XYZ : 선택자 ABC의 후손 XYZ를 선택

### 인접형제선택자 ABC + XYZ : 선택자 ABC의 다음형제요소 중 XYZ에 해당하는 인접한 요소 선택

### 일반형제선택자 ABC ~ XYZ : 선택자 ABC의 다음형제요소 중 XYZ에 해당하는 모두요소 선택

---
## 가상선택자 .className:가상선택자
### transition : 가상선택자의 css 변화 시간 부여
### :focus : tabindex=-1을 지정하면 input속성이 아닌 요소들에도 :focus적용가능
### abc:first-child / abc:last-child abc 형제 요소 중 첫번째 / 마지막
### abc:*nth-child(n) abc 형제요소중 n번째 (n넣으면 전체선택)
### abc:not(xyz) xyz가 아닌 abc요소 선택

---
## 가상요소 선택자 .className::가상요소선택자
### ::before 요소 앞에 가상의 인라인 content 삽입
### ::after 요소 뒤에 가상의 인라인 content 삽입
#### content 항목은 빈값이라도 반드시 있어야함
#### 너비나 높이를 수정하려면 블락요소로 변경한 후 

---
## 속성 선택자 [속성]
### [속성="종류"]

---
## 상속 : inherit 예약어로 상위 속성 상속

---
## 우선순위 :점수가 높은선언이 유리/ 점수가 같으면 선언순서가 느릴수록 
### 상속 (x) < 전체선택자(0) < 태그선택자(1) < class선택자(10) < id 선택자(100) < 인라인(1000) < important(9999999)

---
## BEM(Block Element Modifier)
### Class 명 작성법
### 요소__일부분 : lodash로 요소의 일부분임을 표시
### 요소--상태 : 요소의 상태를 표시

---
## lodash.js
`<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>`

### _.throttle(() => {}, time)

---
## GSAP
### gsap.to(요소, 지속시간, 옵션);

## swiperjs

