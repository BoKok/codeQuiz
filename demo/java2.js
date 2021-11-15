var highScoreFunction = function(){
    window.location.href = "highscore.html";
    var initials = document.getElementById("initial").value;
    localStorage.setItem("initial", initials);
    var loadInitials = localStorage.getItem("inital");
    var scorePage = document.getElementById("score");
    var createScore = document.createElement("h2");
    createScore.textContent = loadInitials;
    console.log(createScore);
    scorePage.appendChild(createScore);
  }

  var goBack = function(){
    window.location.href = "index.html";
  }
  var scoreTable = [];
  
  function printScores() {
    var scoreTable = [];
    var scorePage = document.getElementById("score");
    var createScore = document.createElement("h2");
      if (localStorage.getItem("initial") == null) {
        createScore.innerHTML = "No scores available";
        scorePage.appendChild(createScore)
      } else {
    var points = localStorage.getItem("points");
    var loadInitials = localStorage.getItem("initial");
    var scorePage = document.getElementById("score");

    scoreTable.push({
        name: loadInitials,
        point: points
    });

    localStorage.setItem("playertable", JSON.stringify(scoreTable));
    var loadPlayerTable = localStorage.getItem("playertable");
    var loadPlayerTables = JSON.parse(loadPlayerTable);
    var createScore = document.createElement("h2");
    createScore.textContent = loadPlayerTables[0].name + " " + loadPlayerTables[0].point;
    console.log(createScore);
    console.log(loadInitials);
    console.log(loadPlayerTables)
    scorePage.appendChild(createScore);
      }
  }

  function clearHS() {
      localStorage.clear();
      window.location.href = "highscore.html";
  }

