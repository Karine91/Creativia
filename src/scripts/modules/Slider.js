class Slider {
  constructor() {
    this.$slider = $(".slider");
    this.$slides = $(".slider__content");
    this.slideActiveSelector = "slider__content--active";
    this.$navLeft = $(".slider__nav-item--left");
    this.$navRight = $(".slider__nav-item--right");
    this.currentSlide = 0;
    this.totalSlides = this.$slides.length;
    this.animationCloseTime = 800;
    this.events();
    this.autoPlay();
  }

  events() {
    this.$navLeft.click(this.slidePrev.bind(this));
    this.$navRight.click(this.slideNext.bind(this));
  }

  slideNext(e) {
    e.preventDefault();
    clearInterval(this.timerId);
    this.setActive(this.currentSlide + 1);
    this.autoPlay();
  }

  slidePrev(e) {
    e.preventDefault();
    clearInterval(this.timerId);
    this.setActive(this.currentSlide - 1);
    this.autoPlay();
  }

  setActive(slideActive) {
    this.$slider.removeClass(
      "slider__animation slider__animation--close slider__animation--open"
    );
    this.$slider.addClass("slider__animation slider__animation--close");
    setTimeout(() => {
      this.currentSlide = (slideActive + this.totalSlides) % this.totalSlides;
      let nextSlide = this.$slides.eq(this.currentSlide);
      nextSlide
        .show()
        .delay(2000)
        .addClass(this.slideActiveSelector);
      this.$slides.not(nextSlide).hide();
      this.$slider.addClass("slider__animation slider__animation--open");
    }, this.animationCloseTime);
  }

  autoPlay() {
    this.timerId = setInterval(() => {
      this.setActive(this.currentSlide + 1);
    }, 5000);
  }
}

export default Slider;
