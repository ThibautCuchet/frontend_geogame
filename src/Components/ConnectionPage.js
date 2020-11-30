import { setTitle } from "../utils/render.js";
const ConnectionPage = () => {
  setTitle("Connection");
  WelcomeMessage();
  CreateFormConnection();
};
let page = document.querySelector("#main");
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
  const element = document.createElement("div");
  element.className = "formConnection";
  element.innerHTML = `<div class="wrapper fadeInDown">
  <div id="formContent">
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1">
    <!-- Login Form -->
    <h5>USER LOGIN</h5>
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login">
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password">
      <input type="submit" class="fadeIn fourth" value="Log In">
    </form>
    <!-- Remind Passowrd -->
    <div id="formFooter">
      <a class="underlineHover" href="#">Forgot Password?</a>
    </div>
    </div>
    
    <div style="height: 100%; width: 5px; background: black"></div>
    <!-- Register Form -->
    <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1">
    <h5>USER REGISTER</h5>
    <form>
      <input type="text" id="login" class="fadeIn second" name="register" placeholder="login">
      <input type="text" id="email" class="fadeIn four" name="register" placeholder="email">
      <input type="text" id="password" class="fadeIn third" name="register" placeholder="password">
      <input type="submit" class="fadeIn five" value="Register">
    </form>
    <div id="formFooter">
    </div>
    </div>
  </div>
</div>`;
  page.append(element);
};

export default ConnectionPage;
