class MobileMenu {
  constructor() {
    this.$siteHeader = $(".header");
    this.$menuIcon = $(".humburger");
    this.$menuContent = $(".menu__list-wrapper");
    this.menuOpen = false;
    this.events();
  }

  events() {
    this.$menuIcon.click(this.toggleTheMenu.bind(this));
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode == 27 && this.menuOpen) {
      this.toggleTheMenu();
    }
  }

  toggleTheMenu() {
    this.menuOpen = !this.menuOpen;
    this.$menuContent.toggleClass("menu__list-wrapper--is-visible");
    this.$siteHeader.toggleClass("header--is-expanded");
    this.$menuIcon.toggleClass("humburger--close-x");
  }
}

export default MobileMenu;
