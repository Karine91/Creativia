import $ from "jquery";
import "jquery-validation";
import StickyHeader from "./modules/StickyHeader";
import Slider from "./modules/Slider";
import Portfolio from "./modules/Portfolio";
import Accordion from "./modules/Accordion";
import HexagonSlider from "./modules/HexagonSlide";
import RevealOnScroll from "./modules/RevealOnScroll";
import SliderWithBullets from "./modules/SliderWithBullets";
import SkillsSet from "./modules/Skills";
import Blog from "./modules/Blog";
import Follow from "./modules/Follow";
import GoogleMap from "./modules/Map";
import Validation from "./modules/Validation";
import MobileMenu from "./modules/MobileMenu";

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

const followList = [
  "#follow_facebook",
  "#follow_twitter",
  "#follow_pinterest",
  "#follow_google-plus"
];

$(document).ready(function() {
  //add simple support for background images:
  document.addEventListener("lazybeforeunveil", function(e) {
    var bg = e.target.getAttribute("data-bg");
    if (bg) {
      e.target.style.backgroundImage = "url(" + bg + ")";
    }
  });
  new StickyHeader();
  new MobileMenu();
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
  new RevealOnScroll($(".services__item:odd"), "reveal-item--right", "85%");
  new RevealOnScroll($(".services__item:even"), "reveal-item--left", "85%");
  new RevealOnScroll($(".plans__item"), "reveal-item--left", "85%");
  new Blog();
  new Follow(followList);
  new GoogleMap();
  new Validation();
});
