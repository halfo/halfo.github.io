const activeClass = 'slider-btn-active';

const slider = document.getElementsByClassName('slider')[0];
const slidesContainer = slider.getElementsByClassName('slides')[0];
const slides = [...slidesContainer.getElementsByClassName('slide')];
const sliderButtons = [...slider.getElementsByClassName('slider-btn')];

const isSlideInView = () => slidesContainer.getBoundingClientRect().top > 20;

const scrollToElem = (elem) => elem.scrollIntoView({
  behavior: 'auto',
  block: isSlideInView() ? 'nearest' : 'center',
  inline: 'nearest',
});

const changeActiveButton = (targetIdx) => sliderButtons.forEach(
  (b, idx) => b.classList[targetIdx === idx ? 'add' : 'remove'](activeClass)
);

let targetButtonIdx = null;
sliderButtons.forEach((button, idx) => {
  button.addEventListener('click', function () {
    if (this.classList.contains(activeClass)) return;

    targetButtonIdx = idx;
    scrollToElem(slides[idx]);
    changeActiveButton(idx);

    return false;
  })
});

const sliderObserver = new IntersectionObserver((elems) => {
  elems.forEach(elem => {
    if (elem.isIntersecting) {
      const key = +elem.target.getAttribute('key');

      if (targetButtonIdx === null) {
        changeActiveButton(key);
      } else if (targetButtonIdx === key) {
        targetButtonIdx = null;
      }
    }
  });
}, { threshold: .6 });

slides.forEach(slide => sliderObserver.observe(slide));
