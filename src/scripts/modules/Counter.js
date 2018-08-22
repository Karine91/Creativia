class Counter {
  constructor(el) {
    this.$element = $(el);
  }

  startCount() {
    this.$element.prop("Counter", 0).animate(
      {
        Counter: this.$element.text()
      },
      {
        duration: 2000,
        easing: "swing",
        step: function(now) {
          $(this).text(Math.ceil(now));
        }
      }
    );
  }
}

export default Counter;
