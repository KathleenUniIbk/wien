/* Vienna Sightseeing Beispiel */

// Stephansdom Objekt
let stephansdom = {
    lat: 48.208493,
    lng: 16.373118,
    zoom: 12,
    title: "Domkirche St. Stephan",
};

// Karte initialisieren
let map = L.map("map").setView([stephansdom.lat, stephansdom.lng], stephansdom.zoom);

// Hintergrundkarte definieren
L.tileLayer('https://mapsneu.wien.gv.at/basemap/bmapgrau/normal/google3857/{z}/{y}/{x}.png', {
    maxZoom: 19,
    attribution: 'Hintergrundkarte: <a href="https://www.basemap.at">basemap.at</a>'
}).addTo(map);


//Maßstab
L.control.scale({
    imperial: false,
}).addTo(map);

//Sehenswürdigkeiten Standorte Wien
async function loadSights(url) {
    console.log(url);
    //console.log(url;)
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    //console.log(jsondata);
    L.geoJSON(jsondata,{
        attribution: "Datenquelle: <a href='https://data.wien.gv.at' >Stadt Wien</a>"
    }).addTo(map);
}
loadSights("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:SEHENSWUERDIGOGD&srsName=EPSG:4326&outputFormat=json")

//Sightseeing load lines
async function loadLines(url) {
    console.log(url);
    //console.log(url;)
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    //console.log(jsondata);
    L.geoJSON(jsondata,{
        attribution: "Datenquelle: <a href='https://data.wien.gv.at' >Stadt Wien</a>"
    }).addTo(map);
}
loadLines("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKLINIEVSLOGD&srsName=EPSG:4326&outputFormat=json")

//Sightseeing load Stops
async function loadStops(url) {
    console.log(url);
    //console.log(url;)
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    //console.log(jsondata);
    L.geoJSON(jsondata,{
        attribution: "Datenquelle: <a href='https://data.wien.gv.at' >Stadt Wien</a>"
    }).addTo(map);
}
loadStops("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:TOURISTIKHTSVSLOGD&srsName=EPSG:4326&outputFormat=json")

//Sightseeing load Zones
async function loadZones(url) {
    console.log(url);
    //console.log(url;)
    let response = await fetch(url);
    let jsondata = await response.json();
    console.log(jsondata);
    //console.log(jsondata);
    L.geoJSON(jsondata,{
        attribution: "Datenquelle: <a href='https://data.wien.gv.at' >Stadt Wien</a>"
    }).addTo(map);
}
loadZones("https://data.wien.gv.at/daten/geo?service=WFS&request=GetFeature&version=1.1.0&typeName=ogdwien:FUSSGEHERZONEOGD&srsName=EPSG:4326&outputFormat=json")