import { setLayout } from "../utils/render.js";
const L = require("leaflet");
const data = require("../country.json");
import "../../node_modules/leaflet/dist/leaflet.css";

let mapPage = `<div id="mapid"></div>`;

const MapPage = async () => {
  setLayout("Home");
  let page = document.querySelector("#page");
  page.innerHTML = mapPage;

  loadMap();
};

function loadMap() {
  let mymap = L.map("mapid", {
    attributionControl: false,
    zoomSnap: 0.1,
    minZoom: 1,
    maxZoom: 12,
  }).setView([51.505, -0.09], 2.5);

  let geojson = L.geoJSON(data, {
    onEachFeature: null,
    style: {
      color: "#A2A28B",
      fillOpacity: 1,
      weight: 1,
      fillColor: "#808067",
    },
  }).addTo(mymap);
}

export default MapPage;
