// function createMap(unemplayer,crimelayer) {
function createMap(unempStates,crimeRates) {

    // Create the tile layer that will be the background of our map.
    var streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
  
  var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

  
    // Create a baseMaps object to hold the streetmap layer.
    var baseMaps = {
      "Street Map": streetmap,
      "Topographic Map": topo
    };
  
    // Create an overlayMaps object to hold the bikeStations layer.
    var overlayMaps = {
      "Unemployment Rates": unempStates 
      // "Crime Rates": crimelayer
    };

    var overlayMaps = {
      "Crime Rates": crimeRates 
      // "Crime Rates": crimelayer
    };
    
  
    // Create the map object with options.
    var myMap = L.map("map", {
      center: [37.09, -95.71],
      zoom: 5,
      layers: [streetmap, unempStates,crimeRates]
    });
  
    // Create a layer control, and pass it baseMaps and overlayMaps. Add the layer control to the map.
    L.control.layers(baseMaps, overlayMaps, {
      collapsed: false
    }).addTo(myMap);
  }



function createMarkers(dataset) {
 console.log("in create markers");
//  console.log(dataset);


//     // Initialize an array to hold Unemployment markers.
var unempMarkers = [];
var crimeMarkers = [];  
//     // Loop through the stations array.
    for (var index = 0; index < dataset.length; index++) {
        var unemp = dataset[index];
        var crime = dataset[index];

      // For each station, create a marker, and bind a popup with the station's name.
        var unempMarker = L.marker([unemp.Latitude, unemp.Longitude])
        .bindPopup("<h3>" + unemp.State + "<h3><h3>Year: " + unemp.Year + "</h3><h3>UnEmployment: " + unemp.Unemployment + "</h3>");
  

        // For each station, create a marker, and bind a popup with the station's name.
        var crimeMarker = L.marker([crime.Latitude, crime.Longitude])
        .bindPopup("<h3>" + crime.State + "<h3><h3>Year: " + crime.Year + "</h3><h3>TotalCrimeRate: " + crime.Total_CrimeRate + "</h3>");
  
//     //   // Add the marker to the bikeMarkers array.
        unempMarkers.push(unempMarker);
        crimeMarkers.push(crimeMarker);
        // unempMarkers.push(
        //     L.circle([unemp.Latitude, unemp.Longitude], {
        //       stroke: false,
        //       fillOpacity: 0.75,
        //       color: "white",
        //       fillColor: "white",
        //       radius: unemp.Unemployment*2
        //     }).bindPopup("<h3>" + crime.State + "<h3><h3>Year: " + crime.Year + "</h3><h3>UnEmployment: " + crime.Total_CrimeRate + "</h3>")
        //   );


    }
  
//     // Create a layer group that's made from the bike markers array, and pass it to the createMap function.
    //  unemplayer=L.layerGroup(unempMarkers);
    //  crimelayer=L.layerGroup(crimeMarkers);
    //  createMap(unemplayer,crimelayer);
     
    //  createMap(L.layerGroup(unempMarkers));
    //  createMap(L.layerGroup(crimeMarkers));

     createMap(L.layerGroup(unempMarkers),L.layerGroup(crimeMarkers));

  }

createMarkers(dataset);

