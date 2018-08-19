class Accordion {
  constructor() {
    this.$accordion = $(".accordion");
    this.$accordionItem = $(".accordion__item");
    this.activeItemSelector = "accordion__item--active";
    this.itemContentSelector = ".accordion__content";
    this.events();
  }

  events() {
    this.$accordionItem.click(this.onItemClick.bind(this));
  }

  onItemClick(e) {
    this.$accordionItem.removeClass(this.activeItemSelector);
    this.$accordionItem
      .find(this.itemContentSelector)
      .stop()
      .slideUp();
    let currentItem = $(e.target).closest(".accordion__item");
    currentItem
      .find(this.itemContentSelector)
      .stop()
      .slideDown();
    currentItem.addClass(this.activeItemSelector);
  }
}

export default Accordion;
