import { setLayout } from "../utils/render.js";
let homePage = `<p>Salut</p>
`;

const HomePage = async () => {
  setLayout("Home");
  let page = document.querySelector("#page");
  page.innerHTML = homePage;
};

export default HomePage;
