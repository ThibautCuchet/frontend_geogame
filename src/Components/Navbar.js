import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import { setImage } from "../utils/render.js";

const Navbar = () => {
  setImage(menu, "menu-hamburger");
  setImage(portrait, "profile");
};

export default Navbar;
