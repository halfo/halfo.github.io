const animationObserver=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&e.target.classList.add("show")}))})),classes=["h1:not(.slogan *)","h3:not(.slogan *)",".dp",".slogan",".card",".slider"],elems=document.querySelectorAll([classes].join(", "));elems.forEach((e=>animationObserver.observe(e)));
//# sourceMappingURL=index.f9182a70.js.map
