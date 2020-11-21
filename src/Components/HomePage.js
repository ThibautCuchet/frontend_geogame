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
    id: "afriqua",
    name: "Afriqua",
    img: "map",
  },
  {
    id: "oceania",
    name: "Oceania",
    img: "map",
  },
];

const HomePage = async () => {
  setTitle("Home");
  let page = document.querySelector("#main");
  page.append(WelcomeMessage());
  page.append(WorldSelection());
};

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.innerText = `Hey hi to you young adventurer, are you thirsty for knowledge and adventure? This game is now made for you! Here you can test your knowledge of geography and win as many points as possible. Do you know more about the countries of a certain continent? No worries, we offer you several game mode categories, you can also compare your points with those of your friends! Do not hesitate and go on an adventure! ENJOY;)`;
  element.style.width = "50%";
  element.style.textAlign = "center";
  return element;
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

    worldPart.addEventListener("click", () =>
      RedirectUrl("/map", { map: part.id })
    );
  });

  return element;
};

export default HomePage;
