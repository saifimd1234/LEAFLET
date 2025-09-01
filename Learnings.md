## 1. Understanding Coordinates

Leaflet (and most mapping tools) uses **Latitude and Longitude** values:

* **Latitude** → North–South position

  * Range: `-90` (South Pole) to `+90` (North Pole).
  * Example: `28.6139` → Delhi’s latitude.

* **Longitude** → East–West position

  * Range: `-180` (West) to `+180` (East).
  * Example: `77.2090` → Delhi’s longitude.

So when we write:

```js
[28.6139, 77.2090]
```

* `28.6139` → Latitude (Delhi is north of the equator, so it’s positive).
* `77.2090` → Longitude (Delhi is east of Greenwich, so it’s positive).

---

## 2. Rectangles in Leaflet

When we create a rectangle, we need **two corners**:

```js
const bounds = [
  [lat1, lon1], // South-West corner (bottom-left)
  [lat2, lon2]  // North-East corner (top-right)
];
L.rectangle(bounds).addTo(map);
```

👉 Leaflet will automatically draw the rectangle between those two opposite corners.

Example (around Delhi):

```js
[[28.6, 77.0], [28.7, 77.2]]
```

* First point = **28.6°N, 77.0°E**
* Second point = **28.7°N, 77.2°E**
  This covers a small rectangle area in Delhi.

---

## 3. Polygons in Leaflet

A polygon needs **multiple points** (in order). Leaflet will join them with lines and fill the inside:

```js
const polygonCoords = [
  [22.57, 88.36],
  [22.60, 88.40],
  [22.55, 88.42],
  [22.53, 88.38]
];
L.polygon(polygonCoords).addTo(map);
```

This makes a polygon around Kolkata.

---

## 4. How to Choose or Add Your Own Custom Values

### Option 1: Use a Map Service

* Open **Google Maps** or **OpenStreetMap**.
* Right-click on a location → select **“What’s here?”** or copy the **lat, lon** values.
* Example: Right-click on India Gate → you’ll get something like `(28.6129, 77.2295)`.
* Use it in Leaflet:

  ```js
  L.marker([28.6129, 77.2295]).addTo(map);
  ```

### Option 2: Click on the Leaflet Map to Get Coordinates

You can add this code to show coordinates when you click:

```js
map.on('click', function(e) {
  alert("Lat: " + e.latlng.lat + ", Lng: " + e.latlng.lng);
});
```

Now, when you click anywhere on your Leaflet map, it will give you the coordinates. You can copy and use them for markers, rectangles, or polygons.

### Option 3: Manually Pick Numbers

If you just want to test:

* Latitude (Y axis): pick any number between -90 and +90.
* Longitude (X axis): pick any number between -180 and +180.

Example:

```js
L.marker([10, 10]).addTo(map);
```

This will put a marker near Africa.

---

👉 So, to **add your own custom values**, you either:

1. Copy coordinates from Google Maps/OpenStreetMap.
2. Click on your Leaflet map (with event listener) to grab coords.
3. Just try numbers manually if you’re experimenting.

---


