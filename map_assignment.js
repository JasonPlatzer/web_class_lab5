// cooridinates of us
let usCoordinates = [37.0902, - 95.7129]
// I thought this was the best zoom level to see everything
let zoomLevel = 3
// makes a leaflet map object to put in empty div in html, sets cooridinates to view, and zoom level
let map = L.map('bridges-map').setView(usCoordinates,zoomLevel)
// gets things like streets ect. to fill map and adds them to map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// an array of objects to use to add markers, with info to use for each marker
let bridges = [
{'name':'Verrazano-Narrows Bridge', 'cities': 'New York, NY', 'span': '1298.4','coordinates': [40.6066, -74.0447]},
{'name': 'Golden Gate Bridge','cities':'San Francisco and Marin, CA', 'span': '1280.2','coordinates': [37.8199, -122.4783]},
{'name': 'Mackinac Bridge', 'cities':'Mackinaw and St Ignace, MI','span':'1158.0', 'coordinates': [45.8174, -84.7278]},
{'name': 'George Washington Bridge', 'cities':	'New York, NY and New Jersey, NJ', 'span': '1067.0','coordinates':[40.8517, -73.9527]},
{'name': 'Tacoma Narrows Bridge', 'cities':	'Tacoma and Kitsap, WA', 'span': '853.44','coordinates':[47.2690, -122.5517]}
]
// changes markers to bridge icons
var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    // if I don't comment this out it makes 2 bridges, I didn't know how to get a shadow image
   // shadowUrl: 'bridge.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
// for each bridge it adds text with names, cities, and the span. then adds markers to each location of bridge, changes marker to a bridge then
// adds marker with text to map
bridges.forEach(function(bridge){
    let markerText = `${bridge.name}, ${bridge.cities},<br> span is ${bridge.span} meters`
L.marker((bridge.coordinates),{icon: bridgeIcon}).addTo(map).bindPopup(markerText)
})

