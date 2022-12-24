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

const detailsList = [...document.getElementsByTagName('details')];
detailsList.forEach(details =>
  details.addEventListener('toggle', _ => details.open && detailsList.forEach(
    other => other.open = other === details,
  ))
);
