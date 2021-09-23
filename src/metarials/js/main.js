console.log('running!!!')
const searchEl = document.querySelector('.search');
console.log(searchEl)
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', (e) => {
  searchInputEl.focus();
})

searchInputEl.addEventListener('focus', (e) => {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색');
})

searchInputEl.addEventListener('blur', (e) => {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '');
})

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(() => {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
  } else {
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    })
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, idx) => {
  gsap.to(fadeEl, 1, {
    delay: (idx + 1) * .7,
    opacity: 1
  })
})

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true
})

new Swiper('.promotion .swiper', {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

const promotionEl = document.querySelector('.promotion');
const promotionToggleEl = document.querySelector('.toggle_promotion');
let isHidePromotion = false;
promotionToggleEl.addEventListener('click', (e) => {
  console.log(isHidePromotion);
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) promotionEl.classList.add('hide');
  else promotionEl.classList.remove('hide');
})

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  });
}

function random(min, max) {
  return parseFloat(Math.random() * (max - min).toFixed(2));
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 20)