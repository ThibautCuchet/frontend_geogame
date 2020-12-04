import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre_TypoNoire.png";
import menuBurger from "../images/menuBurger.png";
import { setImage } from "../utils/render.js";
import { RedirectUrl } from "./Router";

const Navbar = () => {
  //setImage(menu, "menu-hamburger");
  //setImage(portrait, "profile");
  setImage(logo, "logo", "height: 10em; width: auto; margin-left: -3em", () =>
    RedirectUrl("/")
  );
  setImage(
    menuBurger,
    "menu-hamburger",
    "height: 2.5em; width: auto; margin-left: 3em"
  );
};

export default Navbar;
