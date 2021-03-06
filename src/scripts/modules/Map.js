let Popup;

class GoogleMap {
  constructor() {
    this.apiKey = "AIzaSyAxepjUtDZ_Bods64x5L79GK9_mM7_ouVg";
    window.initMap = this.initMap.bind(this);
    this.$map = $("#map");
    this.lat = -35.054102;
    this.lng = 146.761693;
    this.addScript();
  }

  addScript() {
    const scriptMap = $(
      `<script src="https://maps.googleapis.com/maps/api/js?key=${
        this.apiKey
      }&callback=initMap" async defer></script>`
    );
    $("body").append(scriptMap);
  }

  initMap() {
    definePopupClass();
    let mapWidth = this.$map.outerWidth();
    let mapCenter;
    if (mapWidth < 1005 && mapWidth > 960) {
      mapCenter = { lat: -34.397, lng: 147.396 };
    } else if (mapWidth > 1005) {
      mapCenter = { lat: -34.397, lng: 148.396 };
    } else {
      mapCenter = { lat: -34.357, lng: this.lng };
    }
    let map = new google.maps.Map(this.$map[0], {
      center: mapCenter,
      zoom: 8
    });

    let popup = new Popup(
      new google.maps.LatLng(this.lat, this.lng),
      document.getElementById("map__content")
    );

    popup.setMap(map);
  }
}
/** Defines the Popup class. */
function definePopupClass() {
  /**
   * A customized popup on the map.
   * @param {!google.maps.LatLng} position
   * @param {!Element} content
   * @constructor
   * @extends {google.maps.OverlayView}
   */
  Popup = function(position, content) {
    this.position = position;

    content.classList.add("popup-bubble-content");

    var pixelOffset = document.createElement("div");
    pixelOffset.classList.add("popup-bubble-anchor");
    pixelOffset.appendChild(content);

    this.anchor = document.createElement("div");
    this.anchor.classList.add("popup-tip-anchor");
    this.anchor.appendChild(pixelOffset);

    // Optionally stop clicks, etc., from bubbling up to the map.
    this.stopEventPropagation();
  };
  // NOTE: google.maps.OverlayView is only defined once the Maps API has
  // loaded. That is why Popup is defined inside initMap().
  Popup.prototype = Object.create(google.maps.OverlayView.prototype);

  /** Called when the popup is added to the map. */
  Popup.prototype.onAdd = function() {
    this.getPanes().floatPane.appendChild(this.anchor);
  };

  /** Called when the popup is removed from the map. */
  Popup.prototype.onRemove = function() {
    if (this.anchor.parentElement) {
      this.anchor.parentElement.removeChild(this.anchor);
    }
  };

  /** Called when the popup needs to draw itself. */
  Popup.prototype.draw = function() {
    var divPosition = this.getProjection().fromLatLngToDivPixel(this.position);
    // Hide the popup when it is far out of view.
    var display =
      Math.abs(divPosition.x) < 4000 && Math.abs(divPosition.y) < 4000
        ? "block"
        : "none";

    if (display === "block") {
      this.anchor.style.left = divPosition.x + "px";
      this.anchor.style.top = divPosition.y + "px";
    }
    if (this.anchor.style.display !== display) {
      this.anchor.style.display = display;
    }
  };

  /** Stops clicks/drags from bubbling up to the map. */
  Popup.prototype.stopEventPropagation = function() {
    var anchor = this.anchor;
    anchor.style.cursor = "auto";

    [
      "click",
      "dblclick",
      "contextmenu",
      "wheel",
      "mousedown",
      "touchstart",
      "pointerdown"
    ].forEach(function(event) {
      anchor.addEventListener(event, function(e) {
        e.stopPropagation();
      });
    });
  };
}

export default GoogleMap;
