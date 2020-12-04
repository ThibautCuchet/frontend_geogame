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
                <tbody>
                    <tr>
                        <th scope="row">
                                                1                  
                        </th>
                        <td colspan="8">
                                                MaxLaMenace                  
                        </td>
                        <td>
                                                6500                  
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                                                2                  
                        </th>
                        <td colspan="8">
                                                MaxLaTerreur                  
                        </td>
                        <td>
                                                6250                  
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                                                3                  
                        </th>
                        <td colspan="8">
                                                Timmy                  
                        </td>
                        <td>
                                                5700                  
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                                                4                  
                        </th>
                        <td colspan="8">
                                                Joseph                  
                        </td>
                        <td>
                                                5550                  
                        </td>
                    </tr>
                    <tr class="table-info">
                        <th scope="row">
                                                5                  
                        </th>
                        <td colspan="8">
                                                You                  
                        </td>
                        <td>
                                                5500                  
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                                                6                  
                        </th>
                        <td colspan="8">
                                                Thiybeaultd                  
                        </td>
                        <td>
                                                5400                  
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">
                                                7                  
                        </th>
                        <td colspan="8">
                                                Boby                  
                        </td>
                        <td>
                                                5000                  
                        </td>
                    </tr>
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
  }

export default ScorePage;