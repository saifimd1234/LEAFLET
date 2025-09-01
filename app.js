// Initialize map (centered at India with zoom 5)
const map = L.map('map').setView([20.5937, 78.9629], 5);

// Add OpenStreetMap tile layer
// const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
// const attribution = '&copy; OpenStreetMap contributors';
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);


