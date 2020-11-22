import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre_TypoNoire.png";
import { setImage } from "../utils/render.js";

const Navbar = () => {
  //setImage(menu, "menu-hamburger");
  //setImage(portrait, "profile");
  setImage(logo, "logo", "height: 10em; width: auto");
};

export default Navbar;
