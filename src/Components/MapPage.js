const L = require("leaflet");
const MAP_DATA = require("../country.json");
import "../../node_modules/leaflet/dist/leaflet.css";
import { TIME_BETWEEN_QUESTION, TIME_TO_ANSWER } from "../utils/config";
import { blinkItem } from "../utils/render";

let mapPage = `<div id="mapid"></div>`;
let percent = 0;
let questionInterval;

const MapPage = async (data) => {
  console.log("Map", data);
  let page = document.querySelector("#main");
  page.innerHTML = mapPage;

  loadMap(data);
  setQuestionLayout();
  percent = 0;
  nextQuestion();
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

const setQuestionLayout = () => {
  document.querySelector("#logo").innerHTML = `<div class="question">
    <div></div>
    <div class="progress" style="height: 10px;">
      <div class="progress-bar" id="progress" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
  </div>`;
};

const setProgress = (percent) => {
  let progress = document.querySelector("#progress");
  progress.style.width = `${percent}%`;
  if (percent > 95) {
    progress.className = "progress-bar bg-danger";
  } else if (percent > 75) {
    progress.className = "progress-bar bg-warning";
  } else {
    progress.className = "progress-bar";
  }
};

const nextQuestion = () => {
  setTimeout(() => {
    percent = 0;
    setProgress(percent);
  }, TIME_BETWEEN_QUESTION / 2);
  setTimeout(() => {
    questionInterval = setInterval(() => {
      if (percent >= 100) {
        setTimeout(() => wrongAnswer(), TIME_BETWEEN_QUESTION / 3);
        clearInterval(questionInterval);
        nextQuestion();
      }
      percent++;
      setProgress(percent);
    }, TIME_TO_ANSWER / 100);
  }, TIME_BETWEEN_QUESTION);
};

const successAnswer = () => {
  blinkItem(document.querySelector(".question"), "green", {
    duration: 500,
    iterations: 3,
  });
};

const wrongAnswer = () => {
  blinkItem(document.querySelector(".question"), "red", {
    duration: 500,
    iterations: 3,
  });
};

export default MapPage;
