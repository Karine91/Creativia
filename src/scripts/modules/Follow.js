import waypoints from "waypoints/lib/noframework.waypoints";
import Counter from "./Counter";

class Follow {
  constructor(followList) {
    this.followList = followList;
    this.initialize();
  }

  initialize() {
    this.list = [];
    this.followList.forEach(item => {
      this.list.push(new Counter(item));
    }, this);
    this.createWaypoints();
  }

  createWaypoints() {
    let self = this;
    new Waypoint({
      element: this.list[0].$element[0],
      handler: function() {
        self.list.forEach(function(item) {
          item.startCount();
        });
        this.destroy();
      },
      offset: "85%"
    });
  }
}

export default Follow;
