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
    gsap.to(badgeEl, .6,
      {
        opacity: 0,
        display: 'none'
      }
    );
  } else {
    gsap.to(badgeEl, .6,
      {
        opacity: 1,
        display: 'block'
      }
    )
  }
}, 300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach((fadeEl, idx) => {
  gsap.to(fadeEl, 1, {
    delay: (idx + 1) * .7,
    opacity : 1
  })
})