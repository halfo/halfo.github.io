const animationObserver = new IntersectionObserver((elems) => {
  elems.forEach(elem => {
    if (elem.isIntersecting) {
      elem.target.classList.add('show');
    }
  });
})

const classes = ['h1:not(.slogan *)', 'h3:not(.slogan *)', '.dp', '.slogan', '.card', '.slider'];
const elems = document.querySelectorAll([classes].join(', '));
elems.forEach(el => animationObserver.observe(el));
