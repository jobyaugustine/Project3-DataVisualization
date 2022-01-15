function createMap(layer) {
  // Create the tile layer that will be the background of our map.
  var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  // Create a baseMaps object to hold the streetmap layer.
  var baseMaps = {
    "Street Map": streetmap
  };

  // Create an overlayMaps object to hold the bikeStations layer.
  var overlayMaps = {
    "UnemploymentRates": layer
  };

  // Create the map object with options.
  var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streetmap, layer]
  });

  // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(myMap);
}

function createMarkers(dataset) {
  
  // Initialize an array to hold Unemployment markers.
  var newUnempMarkers = [];

  // Create a new marker cluster group.
  // var markersClusterGroup = L.markerClusterGroup();

  // Loop through the dataset array.
  for (var index = 0; index < dataset.length; index++) {
    var unemp = dataset[index];


    // For each station, create a marker, and bind a popup with the station's name.
    var unempMarker = L.marker([unemp.Latitude, unemp.Longitude])
      .bindPopup("<h3>" + unemp.State + "<h3><h3>Year: " 
      + unemp.Year + "</h3><h3>Year: " + unemp.Unemployment 
      + "</h3><h3>Crime Rate: " + unemp.Total_CrimeRate + "</h3>");

    //   // Add the marker to the bikeMarkers array.
    newUnempMarkers.push(unempMarker);
  }

  // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
  // createMap(L.layerGroup(newUnempMarkers));
  createMap(newUnempMarkers);
}

// Perform an API call to the Citi Bike API to get the station information. Call createMarkers when it completes.
createMarkers(dataset)