const L = require("leaflet");
const MAP_DATA = require("../country.json");
import "../../node_modules/leaflet/dist/leaflet.css";
import { TIME_BETWEEN_QUESTION, TIME_TO_ANSWER } from "../utils/config";
import { blinkItem, setNavSize, showError } from "../utils/render";
import { RedirectUrl } from "./Router";

let mapPage = `<div id="mapid"></div>`;
let percent = 0;
let questionInterval;
let data;
let canClick = false;
let page = document.querySelector("#main");
let mymap;
let country;
let geojson;

const MapPage = (_data) => {
  console.log("Map", _data);
  data = _data;
  page.innerHTML = mapPage;
  setTimeout(() => setNavSize("6em"), 100);
  loadMap(data);
  setQuestionLayout();
  percent = 0;

  fetch("/api/questions/start", {
    method: "POST",
    body: JSON.stringify({
      location: data.map,
      type: Object.keys(data).filter((item) => data[item] === true),
      username: localStorage.getItem("username"),
    }),
    headers: {
      Authorization: localStorage.getItem("auth"),
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (response.ok) return;
      return response.text().then((text) => {
        throw new Error(text);
      });
    })
    .catch((error) => {
      RedirectUrl("/connection");

      setTimeout(() => showError(error), 100);
    });

  setTimeout(nextQuestion, 1000);
};

function loadMap(data) {
  mymap = L.map("mapid", {
    attributionControl: false,
    zoomSnap: 0.1,
    minZoom: 2.5,
    maxZoom: 12,
  }).setView([51.505, -0.09], 2.5);

  geojson = L.geoJSON(MAP_DATA, {
    onEachFeature: onEachFeature,
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
  let question = document.createElement("div");
  question.className = "question";
  question.innerHTML = `<div style="display: flex; justify-content: center; align-items: center; flex: 1"></div>
  <div class="progress" style="height: 10px;">
    <div class="progress-bar" id="progress" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
  </div>`;

  let points = document.createElement("div");
  points.className = "points";
  points.innerHTML = `<div id="points">0 points</div>`;

  page.append(question);
  page.append(points);
};

const setProgress = (percent) => {
  let progress = document.querySelector("#progress");
  progress.style.width = `${percent}%`;
  if (percent == 90) {
    progress.className = "progress-bar bg-danger";
  } else if (percent == 50) {
    progress.className = "progress-bar bg-warning";
  } else if (percent == 0) {
    progress.className = "progress-bar bg-info";
  }
};

const nextQuestion = () => {
  clearInterval(questionInterval);
  setTimeout(() => {
    if (document.querySelector(".question")) {
      document.querySelector(".question").querySelector("div").innerHTML = "";
      percent = 0;
      setProgress(percent);
    }
  }, TIME_BETWEEN_QUESTION / 2);

  fetch("/api/questions/next", {
    method: "POST",
    body: JSON.stringify({
      location: data.map,
      type: Object.keys(data).filter((item) => data[item] === true),
      username: localStorage.getItem("username"),
    }),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth"),
    },
  })
    .then((response) => {
      if (response.ok) return response.json();
    })
    .then((response) => {
      console.log(response);
      if (response.state === "finish") {
        clearInterval(questionInterval);
        RedirectUrl("/scores", data);
        return;
      }
      setTimeout(() => {
        canClick = true;
        document.querySelector(".question").querySelector("div").innerHTML =
          response.question;
        country = response.country;
        questionInterval = setInterval(() => {
          if (percent >= 101) {
            canClick = false;
          }
          if (percent >= 105) {
            clearInterval(questionInterval);
            setTimeout(() => wrongAnswer(), TIME_BETWEEN_QUESTION / 3);
            setTimeout(() => nextQuestion(), 1000);
          }
          percent++;
          setProgress(percent);
        }, TIME_TO_ANSWER / 100);
      }, TIME_BETWEEN_QUESTION);
    });
};

const successAnswer = () => {
  blinkItem(document.querySelector(".question"), "green", {
    duration: 500,
    iterations: 3,
  });
  colorLayout("green");
  setTimeout(() => colorLayout("#e0cda9"), 2000);
};

const wrongAnswer = () => {
  mymap.panTo(country.latlng, { animate: true, duration: 0.5 });
  blinkItem(document.querySelector(".question"), "red", {
    duration: 500,
    iterations: 3,
  });
  colorLayout("red");
  setTimeout(() => colorLayout("#e0cda9"), 2000);
};

const onEachFeature = (feature, layer) => {
  layer.on({
    click: onCountryClick,
  });
};

const onCountryClick = (e) => {
  if (!canClick) return;
  canClick = false;
  let selected = e.target.feature.properties.iso2;
  clearInterval(questionInterval);
  fetch("/api/questions/answer", {
    method: "POST",
    body: JSON.stringify({ answer: selected }),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("auth"),
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code : " + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((response) => {
      document.querySelector("#points").innerHTML = `${response.points} points`;
      if (response.answer) {
        successAnswer();
        nextQuestion();
      } else {
        wrongAnswer();
        nextQuestion();
      }
    });
};

const colorLayout = (color) => {
  geojson.eachLayer((layer) => {
    if (layer.feature.properties.iso2 === country.iso2)
      layer.setStyle({
        fillColor: color,
      });
  });
};

export default MapPage;
