import { setTitle } from "../utils/render.js";
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
    id: "america",
    name: "AMERICA",
    img: "america.jpg",
  },
  {
    id: "asia",
    name: "ASIA",
    img: "asia.jpg",
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

const HomePage = async () => {
  setTitle("Home");
  WelcomeMessage();
  WorldSelection();
};

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.innerHTML = `<h1>Welcome young adventurer</h1> Are you thirsty for knowledge and adventure? 
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

    worldPart.addEventListener("click", GamemodeSelection);
  });

  page.append(element);
};

const GamemodeSelection = () => {
  const element = document.createElement("div");
  element.className = "popup";
  element.innerHTML = `<div class="popup-content">
    <div class="popup-title"><strong>SELECT A GAMEMODE</strong></div>  
    <div class="popup-selection"></div> 
  </div>`;

  gamemodes.forEach((mode) => {
    const modeDiv = document.createElement("div");
    modeDiv.className = "popup-boxes";
    modeDiv.innerHTML = `<div>${mode.name}</div>
    <div>${mode.description}</div>
    <div class="popup-difficulty">${mode.difficulty}</div>`;
    modeDiv.querySelector(".popup-difficulty").style.background = gameColor(
      mode.difficulty
    );

    element.querySelector(".popup-selection").append(modeDiv);
  });

  element
    .querySelector(".popup-content")
    .addEventListener("click", (e) => e.stopPropagation());

  element.addEventListener("click", () => element.remove());

  page.append(element);
};

const gameColor = (difficulty) => {
  if (difficulty === "Easy") return "rgba(0, 200, 0, 0.8)";
  if (difficulty === "Medium") return "rgba(250, 150, 0, 0.8)";
  if (difficulty === "Hard") return "rgba(250, 0, 0, 0.8)";
};

export default HomePage;
