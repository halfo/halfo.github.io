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

sliderButtons.forEach((button, idx) => {
  button.addEventListener('click', function () {
    if (this.classList.contains(activeClass)) return;

    scrollToElem(slides[idx]);

    sliderButtons.forEach(
      b => b.classList[b === this ? 'add' : 'remove']('slider-btn-active')
    );

    return false;
  })
});

const scrollEventListener = () => {
  for (let i = 0; i < slides.length; ++i) {
    const { left, right } = slides[i].getBoundingClientRect();
    const mid = (left + right) / 2;

    if (mid < 0 || screen.width < mid) continue;

    if (sliderButtons[i].classList.contains(activeClass)) break;

    const activeButton = sliderButtons.find(button => button.classList.contains(activeClass));
    activeButton.classList.remove(activeClass);
    sliderButtons[i].classList.add(activeClass);
    break;
  }
}

const debounce = (fn, timeout) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { fn.apply(this, args); }, timeout);
  };
}

slidesContainer.addEventListener(
  'scroll',
  debounce(scrollEventListener, 40),
  { passive: true },
);
