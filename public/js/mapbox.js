/* eslint-disable */
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidGFuZXJvemVyIiwiYSI6ImNsc3A1YzN6ajBqODEybWxyY2J4cmg0bDYifQ.vF-bijJQDm-9OWt9l9A7Cw";

  var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/tanerozer/clsp5uzf500jp01qwdy7md9dy",
    scrollZoom: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    const el = document.createElement("div");
    el.className = "marker";

    new mapboxgl.Marker({
      element: el,
      anchor: "bottom",
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
      .addTo(map);

    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      bottom: 150,
      left: 100,
      right: 100,
    },
  });
};
