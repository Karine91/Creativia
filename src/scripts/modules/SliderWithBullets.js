import "owl.carousel";

class SliderWithBullets {
  constructor() {
    this.$slideItem = $(".testimonials__item");
    this.slideItemActiveClass = "testimonials__item--active";
    this.totalSlides = this.$slideItem.length;
    this.$bulletsNav = $(".testimonials-nav");
    this.bulletItemClass = "testimonials-nav__item";
    this.bulletItemActiveClass = "testimonials-nav__item--active";
    this.initialize();
  }

  initialize() {
    $(".owl-carousel").owlCarousel({
      dotsContainer: ".testimonials-nav",
      items: 1,
      loop: true,
      autoplay: true
    });
  }
}

export default SliderWithBullets;
