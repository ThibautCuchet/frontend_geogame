import { setTitle } from "../utils/render.js";

let data;

const ScorePage = (_data) => {
  setTitle("ScorePage");
  data = _data;
  WelcomeMessage();
  ScoreBoard();
  Result();
};
let page = document.querySelector("#main");

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
                        <td class="text-center">
                            5/10
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            Countries found
                        </td>
                        <td class="text-center">
                            8/10
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            Capitals found
                        </td>
                        <td class="text-center">
                            7/10
                        </td>
                    </tr>
                    <tr>
                        <td colspan="8">
                            ISO codes found
                        </td>
                        <td class="text-center">
                            2/10
                        </td>
                    </tr>
                </tbody>
            </table>
            <div id="yourScore">
                    <strong>Your score: 3000 points</strong> <br>
                    HighScore: 5500 points
                    <input type="submit" class="boutonRejouer" value="Play Again">
            </div>
        </div>
    </div>`;
  element.style.fontSize = "20px";
  page.append(element);
};

const Result = () => {
  fetch(`/api/scores/top/${data.map}`)
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);

      return response.json();
    })
    .then((response) => {
      response.forEach((item, index) => {
        let element = document.createElement("tr");
        element.innerHTML = `<td scope="row">
                                  ${index + 1}                
                            </td>
                            <td colspan="8">
                                  ${item.username}               
                            </td>
                            <td>
                                  ${item.points}             
                            </td>`;
      });
      document.querySelector("#score-table").append(element);
    });
};

export default ScorePage;
