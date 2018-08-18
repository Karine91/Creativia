import $ from "jquery";
import waypoints from "waypoints/lib/noframework.waypoints";

class RevealOnScroll {
  constructor(els, revealClassMod, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.revealClassMod = revealClassMod;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReveal.addClass("reveal-item " + this.revealClassMod);
  }

  createWaypoints() {
    const self = this;
    this.itemsToReveal.each(function(index) {
      let currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: () => {
          setTimeout(() => {
            $(currentItem).addClass("reveal-item--is-visible");
          }, index * 500);
        },
        offset: self.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;
