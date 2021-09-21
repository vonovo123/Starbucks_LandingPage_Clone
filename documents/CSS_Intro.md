# width / height
## 요소의 넓이와 높이
## 기본값(auto)를 가지고있음
### -> span와 같은 인라인요소에 걸면 text의 너비와 높이만큼 자동지정
### -> block에 걸면 width는 최대한 늘이고 height는 최대한 줄임
### -> 단 block의 auto로 지정되는 width의 최대값은 부모의 너비보다 작거나 같다.
# background-color 
## width/heigth만큼 색을 채운다.

## 정리
### width/heigth는 요소의 너비와 높이를 지정하는 요소이다.
### width/heigth의 기본값은 auto이다
### max-width/max-heigth의 기본값은 none이다.(최대로 늘이고 최대로 줄이는 성질)
## min-width/min-height의 기본값은 0 이다.
---
# Css 단위
## px : 모니터의 점 하나 기준
## % : 상대적 백분율
## em : 요소의 글꼴크기(font-size default 16px)
## rem : 루트요소의 글꼴크기(html font-size default 16px)
## vw : 뷰포트 가로 너비의 백분율
## vh : 뷰포트 세로 너비의 백분율
---
# margin
## 요소의 외부여백(공간)을 지정하는 단축 속성
### 1개 All
### 2개 (top bottom) (left right)
### 3개 top (left right) bottom
### 4개 top right bottom left
### default 0
### auto : 가운데 정렬
### 음수를 사용할 수 있음
---
# padding
## 요소의 내부 여백을 지정하는 단축 속성
## 요소 자체가 커진다

---
# border
## 요소의크기가 늘어난다
## 선-두깨 선-종류 선-색상
## border-width / border-style 모두 방향별제어 가능

---
# 색상 표현
## 색상 이름
## HEX 코드 #1234
## RGB rgb(0,0,0,0)
## RGBA rgba(0,0,0,0) rgb + 투명도

---
# border-radius
## border-radius : 10px(정원의 반지름으로 자름)
## 왼쪽상단부터 시계방향 0 0 0 0

---
# box-sizing
## content-box : 요소의 내용으로 크기계산
## border-box : 요소의 내용 + padding + boder로 크기 계산

---
# over-flow
## 넘침부분을 어떻게 표현할것인가
### visible 그대로보여줌
### hidden 숨김
### scroll x/y 모두 스크롤
### auto 넘치는부분만 스크롤

---
# font-family
## 글꼴1,(글꼴2),(글꼴3), 글꼴계열

---
# text-align
## 문자 수평정렬

---
# 배경
## background-image:url('url');
## background-size 
### cover : 가로세로중 더 넓은 쪽에 맞춤
### Contain : 더 짧은 쪽에 맞춤
## background-position : right top 
## background-repeat : no-repeat
## background-attachment 
### scroll : 이미지가 요소를 따라서 같이 스크롤(default);
### fixed : 이미지가 뷰포트에 고정

---
# 배치
## position : absolute
  ### 위치상 부모요소를 기준으로 배치
  ### 위치상 부모가 되려면 부모요소에
  ###  position:relative가 지정되어있어야함
  ###  position:relative가 지정된 부모를 따라 계속 올라감
## position :relative
 ### 기본적으로 자기자신이 있던 자리를 기준으로 이동
 ### 원래자리값도 차지하고있기때문에 좋지않음

## positon : fixted
### 기본적으로 viewport를 기준으로 배치

## 요소 쌓임 순서
### position의 값이 있으면 더 높게 쌓인다
### z-index가 높은경우 더 높게 쌓인다.
### html 다음구조일수록 높게 쌓인다.

## position:absolute / position:fixed 속성 부여하면 자동으로 display:block 속성 추가됨

---
# transition
## property duration delay

# transform : 요소를 변환시켜주는 함수
## 함수 : 원근법, 이동, 크기, 기울임, 회전 등
## transform rotate(deg) scale(num) 
## 2D
### translate(x, y) 이동
### translate(x) 이동
### translate(y) 이동
### scale(x, y) 크기 변경
### rotate(x,y) 
### skewX() 기울임 x축
### skewY() 기울임 y축
## 3D
## 원근법이 없기때문에 전환이 느껴지지않음 -> perspective를 transform 맨앞에 설정해줘야함
### transform:perspective(거리) rotateX(deg)
### rotateX() X회전
### rotateY() Y회전

## perspective()와 perspective 속성의 차이점
### 함수는 자식요소에 부여하고 속성은 부모요소에 부여한다

## backfage-visiblity
### visible/hidden 

