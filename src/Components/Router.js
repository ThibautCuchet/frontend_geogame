import HomePage from "./HomePage.js";
import ErrorPage from "./ErrorPage.js";
import MapPage from "./MapPage.js";
import Connection from "./ConnectionPage.js";
import ScorePage from "./ScorePage.js";
import LeaderboardPage from "./LeaderboardPage.js";
import Navbar from "./Navbar.js";
import { setNavSize } from "../utils/render.js";
import AboutPage from "./AboutPage.js";

const routes = {
  "/": HomePage,
  "/map": MapPage,
  "/connection": Connection,
  "/scores": ScorePage,
  "/leaderboard": LeaderboardPage,
  "/about": AboutPage,
};

let navBar = document.querySelector("#navBar");
let componentToRender;

// dictionnary of routes
const Router = () => {
  /* manage to route the right component when the page is loaded */
  window.addEventListener("load", (e) => {
    console.log("onload page:", [window.location.pathname]);
    componentToRender = routes[window.location.pathname];
    if (!componentToRender)
      return ErrorPage(
        new Error(
          "The " + window.location.pathname + " ressource does not exist."
        )
      );
    componentToRender();
  });

  // Display the right component when the user use the browsing history
  window.addEventListener("popstate", () => {
    componentToRender = routes[window.location.pathname];
    componentToRender();
  });
};

const RedirectUrl = (uri, data) => {
  // use Web History API to add current page URL to the user's navigation history & set right URL in the browser (instead of "#")
  window.history.pushState({}, uri, window.location.origin + uri);
  // render the requested component
  // for the components that include JS, we want to assure that the JS included is not runned when the JS file is charged by the browser
  // therefore, those components have to be either a function or a class
  componentToRender = routes[uri];
  if (routes[uri]) {
    if (!data) componentToRender();
    else componentToRender(data);
  } else {
    ErrorPage(new Error("The " + uri + " ressource does not exist"));
  }
  Navbar();
  setNavSize("10em");
};

export { Router, RedirectUrl };
