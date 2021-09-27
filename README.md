# ☕ STARBUCKS

스타벅스 렌딩 페이지 입니다. <br>
⬇ 자세한 사항은 아래 내용을 확인하세요.

[main 브렌치로 이동](https://github.com/vonovo123/Starbucks_LandingPage_Clone)


[DEMO](https://priceless-murdock-1cb952.netlify.app) <br/>
<!-- [DEMO+signin](https://priceless-bhabha-83fc0d.netlify.app/) -->


![StarBucks](https://raw.githubusercontent.com/vonovo123/Starbucks_LandingPage_Clone/main/documents/main_screenshot.png)

## 문자 인코딩(Character Encoding) 설정

문자가 인코딩 되는 방식을 설정합니다.



```
  <meta charset="UTF-8">
```

- `UTF-8` : 초성, 중성, 종성으로 구분하여 문자를 작성(권장)
- `EUC-KR` : 하나의 완성된 글자를 인식

## 뷰포트 렌더링방식 설정

웹페이지가 화면(Viewport)에 표현되는 방식을 설정합니다.<br>
<u>모바일 환경</u>에서 적용됩니다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

- content
  - `width=device-width`: 화면의 가로 너비를 각 디바이스(Device)의 가로 너비와 동일하게 적용
  - `initial-scale=1.0`: 화면의 초기 화면 배율(확대 정도)을 설정
  - `user-scalable=no`: 사용자가 디바이스 화면을 확대(`yes`)/축소(`no`)할 수 있는지 설정
  - `maximum-scale=1`: 사용자가 화면을 확대할 수 있는 최댓값
  - `minimum-scale=1`: 사용자가 화면을 축소할 수 있는 최솟값



## 오픈 그래프(The Open Graph protocol)

웹페이지가 소셜 미디어(페이스북 등)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Starbucks" />
<meta property="og:title" content="Starbucks Coffee Korea" />
<meta property="og:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="og:image" content="./images/starbucks_seo.jpg" />
<meta property="og:url" content="https://starbucks.co.kr" />
```


- property
  - `og:type`: 페이지의 유형(E.g, `website`, `video.movie`)
  - `og:site_name`: 속한 사이트의 이름
  - `og:title`: 페이지의 이름(제목)
  - `og:description`: 페이지의 간단한 설명
  - `og:image`: 페이지의 대표 이미지 주소(URL)
  - `og:url`: 페이지 주소(URL)

## 트위터 카드(Twitter Cards)

웹페이지가 소셜 미디어(트위터)로 공유될 때 우선적으로 활용되는 정보를 지정합니다.

```html
<meta property="twitter:card" content="summary" />
<meta property="twitter:site" content="Starbucks" />
<meta property="twitter:title" content="Starbucks Coffee Korea" />
<meta property="twitter:description" content="스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다." />
<meta property="twitter:image" content="./images/starbucks_seo.jpg" />
<meta property="twitter:url" content="https://starbucks.co.kr" />
```
- content
  - `twitter:card`: 페이지(카드)의 유형(E.g. `summary`, `player`)
  - `twitter:site`: 속한 사이트의 이름
  - `twitter:title`: 페이지의 이름(제목)
  - `twitter:description`: 페이지의 간단한 설명
  - `twitter:image`: 페이지의 대표 이미지 주소(URL)
  - `twitter:url`: 페이지 주소(URL)


## Favicon (Favorite Icon)

웹페이지를 나타내는 아이콘, 웹페이지의 로고를 설정합니다.<br>
대부분의 경우 루트 경로에 `favicon.ico` 파일을 위치하면 자동으로 로딩하기 때문에 `<link />` 를 작성할 필요가 없습니다.
`favicon.png` 파일을 사용하려면 다음과 같이 `<link />`를 작성하세요.

>파비콘 이미지는 루트경로에 있어야합니다.

```html
<!--<link rel="shortcut icon" href="favicon.ico" />-->
<link rel="icon" href="./favicon.png" />
```

## Reset.css

각 브라우저의 기본 스타일 초기화

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.1/reset.min.css" />
```

## Google Fonts

페이지에서 사용한 폰트는 나눔고딕

>폰트 라이센스를 꼭 확인하자!

[Google Fonts](https://fonts.google.com/)에서 고른 폰트 파일을 가져옵니다.

```html
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet" />
```

페이지에 폰트를 적용(CSS 상속)합니다.

```css
body {
    font-family: 'Nanum Gothic', sans-serif;
}
```

## Google Material Icons

[구글에서 제공하는 머터리얼 아이콘](https://material.io/resources/icons/?style=baseline)을 무료로 사용할 수 있습니다.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```


다음과 같이 사용할 수 있습니다.

```html
<div class="material-icons">upload</div>
```

## GSAP & ScrollToPlugin

[GSAP(The GreenSock Animation Platform)](https://greensock.com/gsap/)은 자바스크립트로 제어하는 타임라인 기반의 애니메이션 라이브러리입니다.


[ScrollToPlugin](https://greensock.com/scrolltoplugin/)은 스크롤 애니메이션을 지원하는 GSAP 플러그인입니다.

## Swiper

[Swiper](https://swiperjs.com/)는 하드웨어 가속 전환과 여러 기본 동작을 갖춘 현대적인 슬라이드 라이브러리입니다.

## Youtube API

[IFrame Player API](https://developers.google.com/youtube/iframe_api_reference?hl=ko)를 통해 YouTube 동영상을 제어할 수 있습니다.

유튜브 영상이 출력될 위치에 요소를 지정(생성)합니다.

## ScrollMagic

[ScrollMagic](https://github.com/janpaepke/ScrollMagic)은 스크롤과 요소의 상호 작용을 위한 자바스크립트 라이브러리입니다.<br>
대표적으로 어떤 요소가 현재 화면에 보이는 상태인지를 확인할 때 사용합니다.

[ScrollMagic API](http://scrollmagic.io/docs/)


## Lodash

[Lodash](https://lodash.com/)는 다양한 유틸리티 기능을 제공하는 자바스크립트 라이브러리입니다.

[Lodash API](https://lodash.com/docs/4.17.15) <br>
[Lodash throttle](https://lodash.com/docs/4.17.15#throttle)

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.20/lodash.min.js" integrity="sha512-90vH1Z83AJY9DmlWa8WkjkV79yfS2n2Oxhsi2dZbIv0nC4E6m5AbH8Nh156kkM7JePmqD6tcZsfad1ueoaovww==" crossorigin="anonymous"></script>
```