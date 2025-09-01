// Initialize map (centered at India with zoom 5)
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tile layer
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution = '&copy; OpenStreetMap contributors';
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// code to get the coordinates when clicking on map
map.on('click', function(e) {
  alert("Lat: " + e.latlng.lat + ", Lng: " + e.latlng.lng);
});

// Add a marker with popup
const marker = L.marker([28.6139, 77.2090]).addTo(map);
marker.bindPopup("<b>Hello!</b><br>I am in Delhi.").openPopup();

// Add circle layer
const CLayer = L.circle([28.6139, 77.2090], {radius: 200000, color: '#e00707'});
CLayer.addTo(map);

// ---------------------
// Rectangle Example 1 (basic rectangle with default style)
// ---------------------
const bounds1 = [
  [28.6, 77.0], // southwest corner
  [28.7, 77.2]  // northeast corner
];
L.rectangle(bounds1).addTo(map).bindPopup("Basic Rectangle");

// ---------------------
// Rectangle Example 2 (styled rectangle)
// ---------------------
const bounds2 = [
  [19.0, 72.8],  // Mumbai area approx
  [19.2, 73.0]
];
L.rectangle(bounds2, {
  color: "red",       // border color
  weight: 2,          // border thickness
  fillColor: "orange", // inside color
  fillOpacity: 0.5
}).addTo(map).bindPopup("Styled Rectangle (Mumbai)");

// ---------------------
// Polygon Example
// ---------------------
const polygonCoords = [
  [22.57, 88.36], // Kolkata
  [22.60, 88.40],
  [22.55, 88.42],
  [22.53, 88.38]
];

L.polygon(polygonCoords, {
  color: "blue",
  weight: 2,
  fillColor: "lightblue",
  fillOpacity: 0.6
}).addTo(map).bindPopup("Polygon Example (Kolkata)");

// Define custom icon
const icon = L.icon({
  iconUrl: 'git.png',   // Make sure git.png is in the same folder as index.html
  iconSize: [80, 60],   // width, height in pixels
  iconAnchor: [40, 60], // point of the icon which corresponds to marker's location (optional)
  popupAnchor: [0, -60] // where popup will open relative to the icon (optional)
});

// ----------------------
// Markers
// ----------------------
const marker1 = L.marker(
  [27.16547342337483, 79.02465820312501],
  { icon: icon }
).bindPopup("Marker 1: Git Icon");

const marker2 = L.marker(
  [23.21547342337483, 77.07465820312501],
  { icon: icon }
).bindPopup("Marker 2: Nearby Git Icon");

// Group for markers
const markerGroup = L.layerGroup([marker1, marker2]);
markerGroup.addTo(map);
