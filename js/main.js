const slides = [...document.getElementsByClassName('slide')];
const sliderButtons = [...document.getElementsByClassName('slider-btn')];

sliderButtons.forEach((button, idx) => {
  button.addEventListener('click', function () {
    const activeClass = 'slider-btn-active';
    if (this.classList.contains(activeClass)) return;

    console.log(slides[0]);
    scrollToElem(slides[idx]);

    sliderButtons.forEach(
      b => b.classList[b === this ? 'add' : 'remove']('slider-btn-active')
    );

    return false;
  })
});

const isSlideInView = () => {
  const slides = document.getElementsByClassName('slides')[0];
  return slides.getBoundingClientRect().top > 20;
}

const scrollToElem = (elem) =>
  elem.scrollIntoView({
    behavior: 'auto',
    block: isSlideInView() ? 'nearest' : 'center',
    inline: 'nearest',
  });
