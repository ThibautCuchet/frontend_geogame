const L = require("leaflet");
const MAP_DATA = require("../country.json");
import "../../node_modules/leaflet/dist/leaflet.css";

let mapPage = `<div id="mapid"></div>`;

const MapPage = async (data) => {
  console.log("Map", data);
  let page = document.querySelector("#main");
  page.innerHTML = mapPage;

  loadMap(data);
};

function loadMap(data) {
  let mymap = L.map("mapid", {
    attributionControl: false,
    zoomSnap: 0.1,
    minZoom: 2.5,
    maxZoom: 12,
  }).setView([51.505, -0.09], 2.5);

  let geojson = L.geoJSON(MAP_DATA, {
    onEachFeature: null,
    style: {
      color: "#A2A28B",
      fillOpacity: 1,
      weight: 1,
      fillColor: "#e0cda9",
    },
    filter: (feature, layer) => {
      if (data.map !== "world") {
        return feature.properties.continent === data.map;
      }
      return true;
    },
  }).addTo(mymap);

  let back = L.geoJSON(MAP_DATA, {
    onEachFeature: null,
    style: {
      color: "#A2A28B",
      fillOpacity: 0.5,
      weight: 1,
      fillColor: "#e0cda9",
    },
    filter: (feature, layer) => {
      if (data.map !== "world") {
        return feature.properties.continent !== data.map;
      }
      return false;
    },
  }).addTo(mymap);
}

export default MapPage;
