import { setTitle } from "../utils/render.js";
import { RedirectUrl } from "./Router.js";

let page = document.querySelector("#main");

const ConnectionPage = () => {
  setTitle("Connection");
  page.innerHTML = "";
  WelcomeMessage();
  CreateFormConnection();
};

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.className = "connectionTitle";
  element.innerHTML = `<h1><strong>WELCOME ON THE CONNECTION PAGE</strong></h1>
     Here you can login yourself or create a new account`;
  element.style.width = "50%";
  element.style.textAlign = "center";
  page.append(element);
};

const CreateFormConnection = () => {
  let element = document.createElement("div");
  element.className = "formConnection";
  element.innerHTML = `<div class="wrapper fadeInDown">
  <div id="formContent">
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1">
    <!-- Login Form -->
    <h5>USER LOGIN</h5>
    <form id="login">
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" required>
      <input type="password" id="password" class="fadeIn third" name="login" placeholder="password" required>
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>
    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>
    
    <div style="width: 5px; background: #bababa"></div>
    <!-- Register Form -->
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1">
    <h5>USER REGISTER</h5>
    <form id="register">
      <input type="text" id="login" class="fadeIn second" name="register" placeholder="login" required>
      <input type="email" id="email" class="fadeIn four" name="register" placeholder="email" required>
      <input type="password" id="password" class="fadeIn third" name="register" placeholder="password" required>
      <input type="submit" class="fadeIn five" value="Register">
    </form>
    <div id="formFooter">
    </div>
    </div>
  </div>
</div>`;
  page.append(element);
  element = document.createElement("div");
  element.id = "error-message";
  page.append(element);
  page.append(document.createElement("div"));
  setFormListener();
};

const setFormListener = () => {
  document
    .querySelector("#register")
    .addEventListener("submit", registerListener);
  document.querySelector("#login").addEventListener("submit", loginListener);
};

const loginListener = (e) => {
  e.preventDefault();
  console.log("Login");
  fetch("https://backend-geogame.herokuapp.com/api/users/login", {
    method: "POST",
    body: JSON.stringify({
      username: e.target["0"].value,
      password: e.target["1"].value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Error code :" + response.status + " : " + response.statusText
        );
      }
      return response.json();
    })
    .then((response) => {
      if (response.token) {
        localStorage.setItem("auth", response.token);
        localStorage.setItem("username", response.username);
        RedirectUrl("/");
      }
    })
    .catch((err) => showError(err.message));
};

const registerListener = (e) => {
  e.preventDefault();
  fetch("https://backend-geogame.herokuapp.com/api/users/register", {
    method: "POST",
    body: JSON.stringify({
      username: e.target["0"].value,
      email: e.target["1"].value,
      password: e.target["2"].value,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok)
        throw new Error(
          "Error code :" + response.status + " : " + response.statusText
        );
      return response.json();
    })
    .then((response) => {
      if (response.token) {
        localStorage.setItem("auth", response.token);
        localStorage.setItem("username", response.username);
        RedirectUrl("/");
      }
    })
    .catch((err) => showError(err.message));
};

const showError = (message) => {
  let element = document.querySelector("#error-message");
  element.innerHTML = `<div class="error-message alert alert-danger" role="alert">${message}</div>`;
  setTimeout(() => (element.innerHTML = ""), 5000);
};

export default ConnectionPage;
