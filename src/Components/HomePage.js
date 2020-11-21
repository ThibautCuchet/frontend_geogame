import { setTitle } from "../utils/render.js";
import { RedirectUrl } from "./Router.js";

const worldParts = [
  {
    id: "world",
    name: "World",
    img: "map",
  },
  {
    id: "europe",
    name: "Europe",
    img: "map",
  },
  {
    id: "america",
    name: "America",
    img: "map",
  },
  {
    id: "asia",
    name: "Asia",
    img: "map",
  },
  {
    id: "africa",
    name: "Africa",
    img: "map",
  },
  {
    id: "oceania",
    name: "Oceania",
    img: "map",
  },
];

const gamemodes = [
  {
    id: "country",
    name: "Countries",
    difficulty: "Easy",
  },
  {
    id: "flag",
    name: "Flags",
    difficulty: "Medium",
  },
  {
    id: "capital",
    name: "Capitals",
    difficulty: "Medium",
  },
  {
    id: "iso",
    name: "ISO",
    difficulty: "Hard",
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
  element.innerText = `Hey hi to you young adventurer, are you thirsty for knowledge and adventure? This game is now made for you! Here you can test your knowledge of geography and win as many points as possible. Do you know more about the countries of a certain continent? No worries, we offer you several game mode categories, you can also compare your points with those of your friends! Do not hesitate and go on an adventure! ENJOY;)`;
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
    worldPart.innerHTML = `<img src=${require(`../images/${part.img}.jpg`)} style="width: 100%">
    <div class="world-title">${part.name}</div>`;
    element.append(worldPart);

    worldPart.addEventListener("click", GamemodeSelection);
  });

  page.append(element);
};

const GamemodeSelection = () => {
  const element = document.createElement("div");
  element.className = "popup";
  element.innerHTML = `<div class="popup-content">
    <div class="popup-title">Select gamemodes</div>  
    <div class="popup-selection"></div> 
  </div>`;

  gamemodes.forEach((mode) => {
    const modeDiv = document.createElement("div");
    modeDiv.className = "popup-boxes";
    modeDiv.innerHTML = `<div>${mode.name}</div>
    <div>Description</div>
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
