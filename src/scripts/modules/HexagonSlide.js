class HexagonSlider {
  constructor() {
    this.hexagonCenterClass = "hexagon-wrap--center";
    this.hexagonLeftClass = "hexagon-wrap--left";
    this.hexagonRightClass = "hexagon-wrap--right";
    this.$hexagonItemWrap = $(".hexagon-outer-wrap");
    this.hexagonItemSelector = ".hexagon-wrap--front";
    this.hexagonActiveClass = "hexagon-outer-wrap--active";
    this.currentSlide = 0;
    this.totalSlides = this.$hexagonItemWrap.length;
    this.initialize();
  }

  initialize() {
    this.timerId = setInterval(() => {
      this.currentSlide = this.getSlide(this.currentSlide + 1);
      let leftSlideIndex = this.getSlide(this.currentSlide + 1);
      let rightSlideIndex = this.getSlide(this.currentSlide - 1);
      //Remove active item class
      this.$hexagonItemWrap.removeClass(this.hexagonActiveClass);

      //Remove positioning classes
      $(this.hexagonItemSelector).removeClass(
        `${this.hexagonLeftClass} ${this.hexagonRightClass} ${
          this.hexagonCenterClass
        }`
      );
      //Set center item
      this.$hexagonItemWrap
        .eq(this.currentSlide)
        .find(this.hexagonItemSelector)
        .addClass(this.hexagonCenterClass);
      //Set left item
      this.$hexagonItemWrap
        .eq(leftSlideIndex)
        .find(this.hexagonItemSelector)
        .addClass(this.hexagonLeftClass);
      //Set right item
      this.$hexagonItemWrap
        .eq(rightSlideIndex)
        .find(this.hexagonItemSelector)
        .addClass(this.hexagonRightClass);

      //Set active item
      this.$hexagonItemWrap
        .eq(this.currentSlide)
        .addClass(this.hexagonActiveClass);
    }, 5000);
  }

  getSlide(index) {
    return (index + this.totalSlides) % this.totalSlides;
  }
}

export default HexagonSlider;
