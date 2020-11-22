import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre.png";
import { setImage } from "../utils/render.js";

const Navbar = () => {
  setImage(menu, "menu-hamburger");
  setImage(portrait, "profile");
  setImage(logo, "logo", { height: "100%", width: "auto" });
};

export default Navbar;
