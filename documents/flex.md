# display : flex 블록 요소와 같이 Flex Container 정의
# flex-direction : flex container의 정렬 주축선택
# 
 : 자연스러운 줄바꿈 처리 (default : no-wrap);

# justify-content : 수평정렬의 축별 정렬방법
## flex-start : 기본값 왼쪽부터
## flex-end :  오른쪽 부터
## center: 가운데 부터

# align-content : 수직정렬의 축별 정렬방법
## stretch : flex items을 시작점으로 부모공간 전체를 씀
## flex-start : flex items를 시작점으로 위를 기준으로 정렬
## flex-end : flex items를 끝점으로
## center : flex items를 가운데 정렬

# align-items : 교차 축의 한 줄에 대한 정렬 방법
## flex-start
## flex-end 

# item에 적용하는 속성

# flex-grow
## 증가하는 비율 설정
### 같은라인 아이템들 끼리의 비율 조정

# order
## 같은 라인 요소들끼리의 순서 조정(작을수록 앞으로감)

# flex-shrink
## 같은 라인 요소들 끼리 감소너비 비율 조정
## 감소 너비 비율 (Default : 1)

# flex-basis
## Flex item의 content의 공간 배분 전 기본 너비
## flex-basis의 기본값인 auto를 0으로 바꾸면 전체 요소들에 대한 비율로 계산해서 flex-grow를 시각적으로 맞게 조정한다




