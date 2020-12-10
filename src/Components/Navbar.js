import menu from "../images/menu.svg";
import portrait from "../images/portrait.svg";
import logo from "../images/logo_terre_TypoNoire.png";
import menuBurger from "../images/menuBurger.png";
import { setImage } from "../utils/render.js";

const Navbar = () => {
  //setImage(menu, "menu-hamburger");
  //setImage(portrait, "profile");
  setImage(logo, "logo", "height: 10em; width: auto; margin-left: -3em");
  setImage(
    menuBurger,
    "menu-hamburger",
    "height: 2.5em; width: auto; margin-left: 3em"
  );
  
  const element = document.createElement("div");
  element.innerHTML = `<nav class="navbar navbar-light light-blue lighten-4">

  <!-- Navbar brand -->
  <a class="navbar-brand" href="#">Navbar</a>

  <!-- Collapse button -->
  <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
    aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
        class="fas fa-bars fa-1x"></i></span></button>

  <!-- Collapsible content -->
  <div class="collapse navbar-collapse" id="navbarSupportedContent1">

    <!-- Links -->
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <!-- Links -->

  </div>
  <!-- Collapsible content -->

</nav>`;
};

export default Navbar;
