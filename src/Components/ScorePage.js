import { setTitle } from "../utils/render.js";
import { RedirectUrl } from "./Router.js";

let data;
let page = document.querySelector("#main");

const ScorePage = (_data) => {
  setTitle("ScorePage");
  page.innerHTML = "";
  data = _data;
  WelcomeMessage();
  ScoreBoard();
  Result();
};

const WelcomeMessage = () => {
  const element = document.createElement("p");
  element.className = "connectionTitle";
  element.innerHTML = `<h1><strong>GAME OVER</strong></h1>
       Great job adventurer !`;
  element.style.width = "50%";
  element.style.textAlign = "center";
  element.style.fontSize = "25px";
  page.append(element);
};

const ScoreBoard = () => {
  const element = document.createElement("div");
  element.className = "score";
  element.style.width = "65%";
  element.innerHTML = `
      <div id="ScoreContent">
        <div style="display: flex; flex-direction: column; flex: 1; padding:20px">
            <h4> SCOREBOARD </h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">
                                                #                  
                        </th>
                        <th scope="col" colspan="8">
                                                Pseudo                  
                        </th>
                        <th scope="col">
                                                Points                  
                        </th>
                    </tr>
                </thead>
                <tbody id="score-table">
                </tbody>
            </table>
        </div>
        <div style="width: 5px; background: #D3D3D3"></div>
        <!-- RESULT -->
        <div style="display: flex; flex-direction: column; flex: 1; padding:20px">
            <h4> RESULT OF THE GAME </h4>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col" colspan="8">
                            Categorie
                        </th>
                        <th scope="col">
                            Nombre trouvé
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="8">
                            Flags found
                        </td>
                        <td class="text-center" id="flag">
                            0
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            Countries found
                        </td>
                        <td class="text-center" id="country">
                            0
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            Capitals found
                        </td>
                        <td class="text-center" id="capital">
                            0
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            ISO codes found
                        </td>
                        <td class="text-center" id="iso">
                            0
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="yourScore">
                    <strong></strong><br>
                    <div></div>
                    <button type="button" class="boutonRejouer">Play Again</button>
            </div>
        </div>
    </div>`;
  element.style.fontSize = "20px";
  element
    .querySelector(".boutonRejouer")
    .addEventListener("click", () => RedirectUrl("/map", data));
  page.append(element);
};

const Result = () => {
  fetch(`https://backend-geogame.herokuapp.com/api/scores/top/${data.map}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);

      return response.json();
    })
    .then((response) => {
      response.forEach((item, index) => {
        let element = document.createElement("tr");
        if (item.username === localStorage.getItem("username"))
          element.className = "table-info";
        element.innerHTML = `<td scope="row">
                                  <strong>${index + 1}</strong>                
                            </td>
                            <td colspan="8">
                                  ${item.username}               
                            </td>
                            <td>
                                  ${item.points}             
                            </td>`;
        document.querySelector("#score-table").append(element);
      });
    });

  fetch(
    `https://backend-geogame.herokuapp.com/api/scores/game/${
      data.map
    }/${localStorage.getItem("username")}`
  )
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);
      return response.json();
    })
    .then((response) => {
      console.log(response);
      let resultScore = document.querySelector("#yourScore");

      resultScore.querySelector(
        "strong"
      ).innerHTML = `Your score: ${response.current} points`;

      resultScore.querySelector(
        "div"
      ).innerHTML = `High score: ${response.best} points`;

      Object.keys(response.questions).forEach(
        (item) =>
          (document.getElementById(item).innerHTML = response.questions[item])
      );
    });
};

export default ScorePage;
