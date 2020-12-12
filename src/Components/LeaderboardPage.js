let page = document.querySelector("#main");

const LeaderboardPage = () => {
  page.innerHTML = "";
  fetch("/api/scores/leaderboard")
    .then((response) => {
      if (!response.ok)
        throw new Error(response.status + " " + response.statusText);
      return response.json();
    })
    .then((response) => {
      let pageHtml = `
      <div id="Leaderboard">
        <div class="leaderboard">
          <h4> LEADERBOARD </h4>
          <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">
                              Position
                            </th>
                            <th scope="col" colspan="8">
                                Username
                            </th>
                            <th scope="col">
                              Score
                            </th>
                            <th scope="col">
                              Map
                            </th>
                        </tr>
                    </thead>
                    <tbody>
    `;
      pageHtml += response
        .map((item, i) => {
          let location =
            item.location[0].toUpperCase() + item.location.slice(1);
          return `
        <tr>
          <td>${i + 1}</td>
          <td colspan="8">${item.username}</td>
          <td>${item.score}</td>
          <td>${location}
        </tr>
                  
      `;
        })
        .join("");
      pageHtml += `
        </tbody>
      </table>
      `;
      page.innerHTML = pageHtml;
    });
};

export default LeaderboardPage;
