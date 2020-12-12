import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre_TypoNoire.png";
import menuBurger from "../images/menuBurger.png";
import { setImage } from "../utils/render.js";
import { RedirectUrl } from "./Router";

let show = false;

const Navbar = () => {
  //setImage(menu, "menu-hamburger");
  //setImage(portrait, "profile");
  setImage(logo, "logo", "width: auto; margin-left: -3em", () =>
    RedirectUrl("/")
  );
  setImage(
    menuBurger,
    "burger",
    "height: 2.5em; width: auto; margin-left: 3em",
    (e) => {
      if (!show) e.stopPropagation();
      Navmodal(e);
      show = !show;
    }
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

const Navmodal = (e) => {
  const modal = document.createElement("div");
  modal.className = "navmodal";
  modal.style.top = e.target.x + 50 + "px";
  modal.style.left = e.target.y + 50 + "px";
  modal.innerHTML = `
    <div id="leaderboard">
      Leaderboard
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
    <hr>
    <div id="about">
      About
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    </div>
  `;
  document.body.addEventListener("click", () => {
    show = false;
    modal.remove();
  });
  document.body.append(modal);
  document.querySelector("#leaderboard").addEventListener("click", () => {
    RedirectUrl("/leaderboard");
  });

  document.querySelector("#about").addEventListener("click", () => {
    RedirectUrl("/about");
  });
};

export default Navbar;
