import $ from "jquery";
import Slider from "./modules/Slider";
import Portfolio from "./modules/Portfolio";
import Accordion from "./modules/Accordion";
import HexagonSlider from "./modules/HexagonSlide";
import RevealOnScroll from "./modules/RevealOnScroll";

new Slider();
new Portfolio();
new Accordion();
new HexagonSlider();
new RevealOnScroll(
  $(".features-list--left .features-list__item"),
  "reveal-item--left",
  "85%"
);
new RevealOnScroll(
  $(".features-list--right .features-list__item"),
  "reveal-item--right",
  "85%"
);
