// var myMap = L.map("map", {
//   center: [37.09, -105.71],
//   zoom: 4.5,
// });

// Adding a tile layer (the background map image) to our map:
// We use the addTo() method to add objects to our map.
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);
var queryUrl = 'other/Export_DataFrame.json';
//console.log(queryUrl);
// Perform a GET request to the query URL/
d3.json(queryUrl).then(function (data) {
  // Once we get a response, send the data.features object to the createFeatures function.
  createFeatures(data.features);
});

function createFeatures(mapData) {

  // Define a function that we want to run once for each feature in the features array.
  // Give each feature a popup that describes the place and time of the earthquake.
   function onEachFeature(feature, layer) {
     layer.bindPopup(`<h3>${feature.properties.Murder}</h3><hr>`);
     //layer.bindPopup(`<h3>${feature.properties.rape}</h3><hr>`);
     //layer.bindPopup(`<h3>${feature.properties.Robbery}</h3><hr>`);
     //layer.bindPopup(`<h3>${feature.properties.Burglary}</h3><hr>`);
  }
  // var murderMarker = L.marker([coordinates], {
  //   draggable: false,
  //   title: 'murder'
  // }).addTo(myMap);
  

  // Create a GeoJSON layer that contains the features array on the earthquakeData object.
  // Run the onEachFeature function once for each piece of data in the array.
  var result = L.geoJSON(mapData, {
    onEachFeature: onEachFeature
  });

  // Send our earthquakes layer to the createMap function/
  createMap(result);
}

function createMap(result) {

  // Create the base layers.
  var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  })

  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  // Create a baseMaps object.
  var baseMaps = {
    "Street Map": street,
    "Topographic Map": topo
  };

  // Create an overlay object to hold our overlay.
  var overlayMaps = {
    Murder: result,
    Rape: result
  };

  // Create our map, giving it the streetmap and earthquakes layers to display on load.
  var myMap = L.map("map", {
    center: [
      37.09, -95.71
    ],
    zoom: 5,
    layers: [street, result]
  });

  // Create a layer control.
  // Pass it our baseMaps and overlayMaps.
  // Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);

  // d3.json('http://127.0.0.1:5501/').then(function(respone){
  //   console.log(response);
  // })
}