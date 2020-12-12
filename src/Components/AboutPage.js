let page = document.querySelector("#main");

const AboutPage = () => {
  let html = `
  <h1><strong>ABOUT US</strong></h1>
  <p>We are a group of IPL students.
  We were part of the JavaScript and Ergonomics course to create an application.<br>
  We have chosen to create a small online game, the goal being to place countries, capitals, flags and ISO codes of certain countries on the map.<br>
  Some sites already exist but do not really correspond to what we would like to present.<br>
  We hope that all geography enthusiasts will learn while having fun!<p>
  AMATULLI Giuseppe - CUCHET Thibaut - PENSIS Camille - WALGGRAEVE Thibaud
  `;
  page.style.textAlign = "center";
  page.innerHTML = html;
};

export default AboutPage;
