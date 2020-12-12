let page = document.querySelector("#main");

const AboutPage = () => {
  let html = `
  <div style="display: flex; justify-content: space-around; height: 50%; flex-direction: column">
  <h1><strong>ABOUT US</strong></h1>
  <p>We are a group of IPL students.
  We were part of the JavaScript and Ergonomics course to create an application.<br>
  We have chosen to create a small online game, the goal being to place countries, capitals, flags and ISO codes of certain countries on the map.<br>
  Some sites already exist but do not really correspond to what we would like to present.<br>
  We hope that all geography enthusiasts will learn while having fun!<p>
  </div>
  <div class="name-footer">AMATULLI Giuseppe - <a href="https://github.com/ThibautCuchet">CUCHET Thibaut</a> - PENSIS Camille - <a href="https://github.com/ThibaudWg">WALGGRAEVE Thibaud</a></div>
  `;
  page.style.textAlign = "center";
  page.innerHTML = html;
};

export default AboutPage;
