import { setTitle } from "../utils/render.js";

const AchievementPage = () => {
    setTitle("Achievement");
    WelcomeMessage();
}
let page = document.querySelector("#main");

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.className = "connectionTitle";
  element.innerHTML = `<h1><strong>WELCOME ON THE ACHIEVEMENT PAGE</strong></h1>
     Here you can login yourself or create a new account`;
  element.style.width = "50%";
  element.style.textAlign = "center";
  page.append(element);
};

export default AchievementPage;