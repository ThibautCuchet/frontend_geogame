import { setTitle } from "../utils/render.js";

const ScorePage = () => {
    setTitle("ScorePage");
    WelcomeMessage();
    ScoreBoard();
    Result();
}
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
      element.innerHTML = `
      <div id="ScoreContent">
        <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1; padding:20px">
        <h4> SCOREBOARD </h4>
        <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" colspan="2">Pseudo</th>
            <th scope="col"></th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td colspan="2">MaxLaMenace</td>
            <td></td>
            <td>6500</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td colspan="2">MaxLaTerreur</td>
            <td></td>
            <td>6250</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colspan="8">Timmy</td>
            <td></td>
            <td>5700</td>
          </tr>
        </tbody>
      </table>
        </div>
        <div style="width: 5px; background: #bababa"></div>
        <!-- RESULT -->
        <div style="display: flex; flex-direction: column; justify-content: space-between; flex: 1; padding:20px">
        <h4> RESULT OF THE GAME </h4>
        <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col"></th>
            <th scope="col">Categorie</th>
            <th scope="col"></th>
            <th scope="col">Nombre trouvé</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row"></th>
            <td>Flags found</td>
            <td></td>
            <td>5/10</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Countries found</td>
            <td></td>
            <td>8/10</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>Capitals found</td>
            <td></td>
            <td>7/10</td>
          </tr>
          <tr>
            <th scope="row"></th>
            <td>ISO code found</td>
            <td></td>
            <td>2/10</td>
          </tr>
        </tbody>
      </table>
      
        </div>
      </div>`;
      element.style.fontSize = "20px";
      page.append(element);
  }

export default ScorePage;