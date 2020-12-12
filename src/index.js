import { Router } from "./Components/Router.js";
import Navbar from "./Components/Navbar.js";
//import Navbar from "./Components/Navbar.js";
//import ThemeDropDown from "./Components/ThemeDropDown.js";
/* use webpack style & css loader*/
/* load bootstrap css (web pack asset management) */
import "bootstrap/dist/css/bootstrap.css";
/* load bootstrap module (JS) */
import "bootstrap";
import "./stylesheets/style.css";
import { setNavSize } from "./utils/render.js";

Navbar();
setNavSize("10em");

Router();
