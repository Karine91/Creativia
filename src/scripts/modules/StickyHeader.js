import waypoints from "waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader {
  constructor() {
    this.$siteHeader = $(".header");
    this.$sections = $(".section");
    this.$headerLinks = $(".menu .menu__item");
    this.createHeaderWaypoint();
    this.createSectionWaypoints();
    this.addSmothScrolling();
  }

  addSmothScrolling() {
    this.$headerLinks.find("a").smoothScroll({ speed: "auto" });
  }

  createHeaderWaypoint() {
    new Waypoint({
      element: this.$sections[0],
      handler: direction => {
        if (direction == "down") {
          this.$siteHeader.removeClass("header__sticky--hide");
          this.$siteHeader
            .addClass("header__sticky")
            .not(".header--is-expanded")
            .addClass(" header__sticky--show");
        } else {
          this.$siteHeader.removeClass("header__sticky--show");
          this.$siteHeader.addClass("header__sticky");
          this.$siteHeader
            .not(".header--is-expanded")
            .addClass("header__sticky--hide");
        }
      }
    });

    new Waypoint({
      element: $(".slider")[0],
      handler: direction => {
        if (direction == "up") {
          this.$siteHeader.removeClass("header__sticky header__sticky--hide");
        }
      },
      offset: "-70px"
    });
  }

  createSectionWaypoints() {
    const self = this;
    this.$sections.each(function() {
      let currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: direction => {
          if (direction == "down") {
            let matchingHeaderLink = currentSection.getAttribute(
              "data-matching-link"
            );
            self.$headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentSection,
        handler: direction => {
          if (direction == "up") {
            let matchingHeaderLink = currentSection.getAttribute(
              "data-matching-link"
            );
            self.$headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: "-20%"
      });
    });
  }
}

export default StickyHeader;
