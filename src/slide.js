function slider(val) {
  var slider = document.querySelector(`.container-${val}`);
  var slides = document.querySelectorAll(`.slide${val}`);
  slider.style.overflow = "hidden";

  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${100 * i}%)`;
  });

  var curSlide = 0;
  var maxSlide = slides.length - 1;

  var btnRight = document.querySelector(`.btn-right${val}`);
  btnRight.addEventListener("click", function () {
    if (curSlide == maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });

  var btnLeft = document.querySelector(`.btn-left${val}`);
  btnLeft.addEventListener("click", function () {
    if (curSlide == 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    slides.forEach(function (s, i) {
      s.style.transform = `translateX(${100 * (i - curSlide)}%)`;
    });
  });
}
export default slider;
