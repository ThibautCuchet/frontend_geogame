import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre_TypoNoire.png";
import menuBurger from "../images/menuBurger.png";
import { setImage } from "../utils/render.js";
import { RedirectUrl } from "./Router";

const Navbar = () => {
  //setImage(menu, "menu-hamburger");
  //setImage(portrait, "profile");
  setImage(logo, "logo", "width: auto; margin-left: -3em", () =>
    RedirectUrl("/")
  );
  setImage(
    menuBurger,
    "menu-hamburger",
    "height: 2.5em; width: auto; margin-left: 3em"
  );
  if (localStorage.getItem("auth")) {
    document.querySelector(
      "#profile"
    ).innerHTML = `<button type="button" id="logoutButton">Logout</button>`;
    document.querySelector("#logoutButton").addEventListener("click", () => {
      localStorage.removeItem("auth");
      localStorage.removeItem("username");
      RedirectUrl("/connection");
    });
  } else {
    document.querySelector(
      "#profile"
    ).innerHTML = `<button type="button" id="loginButton">Login / Register</button>`;
    document.querySelector("#loginButton").addEventListener("click", () => {
      RedirectUrl("/connection");
    });
  }
};

export default Navbar;
