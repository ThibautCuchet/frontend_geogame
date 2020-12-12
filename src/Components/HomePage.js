import { Button } from "bootstrap";
import { setNavSize, setTitle, showError } from "../utils/render.js";
import { RedirectUrl } from "./Router.js";

const worldParts = [
  {
    id: "world",
    name: "WORLD",
    img: "map.jpg",
  },
  {
    id: "europe",
    name: "EUROPE",
    img: "europe.jpg",
  },
  {
    id: "asia",
    name: "ASIA",
    img: "asia.jpg",
  },
  {
    id: "america",
    name: "AMERICA",
    img: "america.jpg",
  },
  {
    id: "africa",
    name: "AFRICA",
    img: "africa.jpg",
  },
  {
    id: "oceania",
    name: "OCEANIA",
    img: "oceania.jpg",
  },
];

const gamemodes = [
  {
    id: "country",
    name: "Countries",
    difficulty: "Easy",
    description: "Try to find the countries on the map!",
  },
  {
    id: "flag",
    name: "Flags",
    difficulty: "Medium",
    description: "Try to find the flags on the map!",
  },
  {
    id: "capital",
    name: "Capitals",
    difficulty: "Medium",
    description: "Try to find the capitals on the map!",
  },
  {
    id: "iso",
    name: "ISO",
    difficulty: "Hard",
    description: "Try to find the ISO codes on the map!",
  },
];
let page = document.querySelector("#main");

const HomePage = () => {
  setTitle("Home");
  page.innerHTML = "";
  WelcomeMessage();
  WorldSelection();
  checkLogged();
};

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.className = "homeTitle";
  element.innerHTML = `<h1><strong>WELCOME YOUNG ADVENTURER</strong></h1> Are you thirsty for knowledge and adventure? 
  This game is now made for you! Here you can test your knowledge of geography and win as many points as possible. 
  Do you know more about the countries of a certain continent? No worries, we offer you several game mode categories, 
  you can also compare your points with those of your friends! Do not hesitate and go on an adventure! ENJOY;)`;
  element.style.width = "50%";
  element.style.textAlign = "center";
  page.append(element);
};

const WorldSelection = () => {
  const element = document.createElement("div");
  element.className = "flex-around";
  element.style.width = "100%";

  worldParts.forEach((part) => {
    const worldPart = document.createElement("div");
    worldPart.className = "world-part";
    worldPart.innerHTML = `<img src=${require(`../images/${part.img}`)} style="width: 100%">
    <div class="world-title"><strong>${part.name}</div>`;
    element.append(worldPart);

    worldPart.addEventListener("click", () => GamemodeSelection(part.id));
  });

  page.append(element);
};

const GamemodeSelection = (mapId) => {
  const element = document.createElement("div");
  element.className = "popup";
  element.innerHTML = `<div class="popup-content">
    <div class="popup-title" style="display: flex; justify-content: center; align-items: center;"><strong>SELECT GAMEMODES (min 1)</strong></div>  
    <div class="popup-selection"></div>
  </div>`;

  gamemodes.forEach((mode) => {
    const modeDiv = document.createElement("div");
    modeDiv.className = "popup-boxes";
    modeDiv.innerHTML = `<div class="row justify-content-end" style="width:100%">
      <div class="col-4" style="text-align: center">
        <strong>${mode.name}</strong>
      </div>
      <div class="col-4 justify-content-end" style="text-align: end">
        <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="${mode.id}">
        <label class="custom-control-label" for="${mode.id}"></label>
        </div>
      </div>
    </div>
    <div>${mode.description}</div>
    <div class="popup-difficulty">${mode.difficulty}</div>`;
    modeDiv.querySelector(".popup-difficulty").style.background = gameColor(
      mode.difficulty
    );

    modeDiv.addEventListener("click", () => {
      modeDiv.querySelector(`#${mode.id}`).checked = !modeDiv.querySelector(
        `#${mode.id}`
      ).checked;
      document.querySelector("#play-button").disabled = !isSwitches();
    });

    modeDiv
      .querySelector(`#${mode.id}`)
      .addEventListener(
        "change",
        () => (document.querySelector("#play-button").disabled = !isSwitches())
      );

    element.querySelector(".popup-selection").append(modeDiv);
  });

  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "btn btn-dark";
  btn.innerHTML = "Play";
  btn.style.alignSelf = "flex-end";
  btn.style.marginRight = "3em";
  btn.style.width = "6em";
  btn.style.margin = "10px";
  btn.disabled = true;
  btn.id = "play-button";
  btn.addEventListener("click", () =>
    RedirectUrl("/map", { ...getSwitchSelection(), map: mapId })
  );
  element.querySelector(".popup-selection").append(btn);

  element
    .querySelector(".popup-content")
    .addEventListener("click", (e) => e.stopPropagation());

  element.addEventListener("click", () => element.remove());

  page.append(element);

  element.animate(
    [
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    100
  );

  element.querySelector(".popup-content").animate(
    [
      {
        transform: "scale(0)",
      },
      {
        transform: "scale(1)",
      },
    ],
    200
  );
};

const gameColor = (difficulty) => {
  if (difficulty === "Easy") return "rgba(0, 200, 0, 0.8)";
  if (difficulty === "Medium") return "rgba(250, 150, 0, 0.8)";
  if (difficulty === "Hard") return "rgba(250, 0, 0, 0.8)";
};

const getSwitchSelection = () => {
  let modes = {};
  document
    .querySelectorAll("input[type=checkbox]")
    .forEach((item) => (modes[item.id] = item.checked));
  return modes;
};

const isSwitches = () => {
  let switches = getSwitchSelection();
  return Object.keys(switches).some((item) => switches[item]);
};

const checkLogged = () => {
  fetch("/api/users/islogged", {
    method: "GET",
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
      showError(error);
    });
};

export default HomePage;
