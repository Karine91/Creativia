import waypoints from "waypoints/lib/noframework.waypoints";

class Skill {
  constructor(width, height, container, percent) {
    this.svgns = "http://www.w3.org/2000/svg";
    this.svg = document.createElementNS(this.svgns, "svg");
    this.width = width;
    this.height = height;
    this.radius = this.width / 2 - 1.5;
    this.percent = percent;
    this.strokeDasharray = 2 * Math.PI * this.radius;
    this.$container = $(container);

    this.svg.setAttribute("width", this.width);
    this.svg.setAttribute("height", this.height);
    this.svg.setAttribute("viewBox", `0 0 ${this.width} ${this.height}`);

    this.baseCircle = this.createCircle("#ff0036", true);
    this.bgCircle = this.createCircle("#e0e0e0");

    this.add(this.$container);
  }

  createCircle(color, isBase = false) {
    const circle = document.createElementNS(this.svgns, "circle");
    const cx = this.width / 2;
    const cy = this.height / 2;
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", this.radius);
    circle.setAttribute("fill", "none");
    circle.setAttribute("stroke", color);
    circle.setAttribute("stroke-width", "3");
    if (isBase) {
      // circle.setAttribute("transform", `rotate(-90 ${cx} ${cy})`);
      circle.setAttribute("stroke-dasharray", this.strokeDasharray);
      circle.setAttribute("stroke-dashoffset", this.strokeDasharray);
    }
    return circle;
  }

  add() {
    this.svg.appendChild(this.bgCircle);
    this.svg.appendChild(this.baseCircle);
    this.$container.append(this.svg);
    return this;
  }

  draw() {
    let dashOffset = this.strokeDasharray * (1 - this.percent / 100);
    let angle = ((dashOffset / this.radius) * 180) / (2 * Math.PI);
    this.baseCircle.setAttribute(
      "transform",
      `rotate(${angle} ${this.width / 2} ${this.height / 2})`
    );
    $(this.baseCircle).animate(
      {
        "stroke-dashoffset": dashOffset
      },
      700
    );
  }
}

class SkillsSet {
  constructor(skillsList) {
    this.skillsList = skillsList;
    this.initialize();
  }

  initialize() {
    this.skills = [];
    this.skillsList.forEach(item => {
      this.skills.push(new Skill(145, 145, item.container, item.percent));
    }, this);
    this.createWaypoints();
  }

  createWaypoints() {
    this.skills.forEach(function(item) {
      new Waypoint({
        element: item.$container[0],
        handler: () => {
          item.draw();
        },
        offset: "85%"
      });
    });
  }
}

export default SkillsSet;
