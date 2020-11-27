import { Router } from "./Components/Router.js";
import Navbar from "./Components/Navbar.js";
//import Navbar from "./Components/Navbar.js";
//import ThemeDropDown from "./Components/ThemeDropDown.js";
/* use webpack style & css loader*/
import "./stylesheets/style.css";
/* load bootstrap css (web pack asset management) */
import "bootstrap/dist/css/bootstrap.css";
/* load bootstrap module (JS) */
import "bootstrap";

Navbar();

Router();
