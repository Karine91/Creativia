import $ from "jquery";
import Slider from "./modules/Slider";
import Portfolio from "./modules/Portfolio";
import Accordion from "./modules/Accordion";
import HexagonSlider from "./modules/HexagonSlide";
import RevealOnScroll from "./modules/RevealOnScroll";
import SliderWithBullets from "./modules/SliderWithBullets";
import SkillsSet from "./modules/Skills";

const skillsList = [
  {
    container: "#photoshop",
    percent: 90
  },
  {
    container: "#html",
    percent: 80
  },
  {
    container: "#php",
    percent: 70
  },
  {
    container: "#wordpress",
    percent: 90
  }
];

$(document).ready(function() {
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
  new SliderWithBullets();
  new SkillsSet(skillsList);
});
