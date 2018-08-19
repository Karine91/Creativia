import Isotope from "isotope-layout";

class Portfolio {
  constructor() {
    this.portfolioWrapSelector = ".portfolio";
    this.portfolioItemSelector = ".portfolio__item";
    this.$filters = $(".filters__link");
    this.$filtersItems = $(".filters__item");
    this.initializeIsotope();
    this.events();
  }

  filterFunction(itemElem, value) {
    if (value === "all") return true;
    var filter = $(itemElem).data("filter-value");
    return filter === value;
  }

  onFilterClick(e) {
    e.preventDefault();
    let filterValue = $(e.target).data("filter");
    this.$filtersItems.removeClass("filters__item--active");
    $(e.target)
      .closest("li")
      .addClass("filters__item--active");
    this.grid.arrange({
      filter: elem => this.filterFunction(elem, filterValue)
    });
  }

  events() {
    this.$filters.click(this.onFilterClick.bind(this));
  }

  initializeIsotope() {
    let elem = document.querySelector(this.portfolioWrapSelector);
    this.grid = new Isotope(elem, {
      // options
      itemSelector: this.portfolioItemSelector,
      layoutMode: "fitRows"
    });
  }
}

export default Portfolio;
