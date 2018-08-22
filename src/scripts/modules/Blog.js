import { truncateText } from "./utils";

class Blog {
  constructor() {
    this.$blogItem = $(".blog-item");
    this.$blogItemText = $(".blog-item__text");
    this.initialize();
  }

  initialize() {
    this.$blogItemText.each(function() {
      truncateText(this);
    });
  }
}

export default Blog;
