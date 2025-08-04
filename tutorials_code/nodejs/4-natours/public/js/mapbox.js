/* eslint-disable */

console.log('Hello from the client side');

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoibW9oYW1tZWR5YXpqaSIsImEiOiJjbWR3d3ZrNGMxcXIwMmtzYWFpZTQ4aHhuIn0.AMNqkmRjpK_D46ql_c221Q';

const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/mohammedyazji/cmdwxiqqo007401sd8vbsbk44', // style URL
  scrollZoom: false,
  // center: [-118.113491, 34.111745], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  // zoom: 10, // starting zoom
  // interactive: false,
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // add marker
  const el = document.createElement('div');
  el.className = 'marker';

  // add marker to the map
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // add popup
  new mapboxgl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);
  // extend map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
}); // make smooth animation to fit the bounds
