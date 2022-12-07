document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

// change this is developing locally
// this.baseURL = "http://localhost:3006";
this.baseURL = "https://advent-calendar.herokuapp.com";

document.getElementById("jesseLogin").addEventListener("click", () => {
  clearTastingColumn();
  renderTastingColumn();
  document.getElementById("jesseLogin").classList.add("darken-2");
  document.getElementById("zackLogin").classList.remove("darken-2");
  document.getElementById("westonLogin").classList.remove("darken-2");
  this.selected = "Jesse";
  let url = this.baseURL + "/getAllTastingsByName";
  let params = `name=Jesse`;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url + "?" + params, false);
  xmlHttp.onreadystatechange = function () {
    let response = JSON.parse(xmlHttp.responseText);
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      Object.values(response.response).forEach((val) => {
        notesArea = document.getElementById("notes" + val.day);
        notesArea.innerText = val.notes;
        M.textareaAutoResize(notesArea);
        guessesArea = document.getElementById("guesses" + val.day);
        guessesArea.innerText = val.guesses;
        M.textareaAutoResize(guessesArea);
        ratingArea = document.getElementById("rating" + val.day);
        ratingArea.innerText = val.rating;
      });
    }
  };
  xmlHttp.send(null);
  document.getElementById("tasting-area").classList.remove("hidden");
});

document.getElementById("westonLogin").addEventListener("click", () => {
  clearTastingColumn();
  renderTastingColumn();
  document.getElementById("westonLogin").classList.add("darken-2");
  document.getElementById("zackLogin").classList.remove("darken-2");
  document.getElementById("jesseLogin").classList.remove("darken-2");
  this.selected = "Weston";
  let url = this.baseURL + "/getAllTastingsByName";
  let params = `name=Weston`;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url + "?" + params, false);
  xmlHttp.onreadystatechange = function () {
    let response = JSON.parse(xmlHttp.responseText);
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      if (response.response.length > 0) {
        Object.values(response.response).forEach((val) => {
          notesArea = document.getElementById("notes" + val.day);
          notesArea.innerText = val.notes;
          M.textareaAutoResize(notesArea);
          guessesArea = document.getElementById("guesses" + val.day);
          guessesArea.innerText = val.guesses;
          M.textareaAutoResize(guessesArea);
          ratingArea = document.getElementById("rating" + val.day);
          ratingArea.innerText = val.rating;
        });
      }
    }
  };
  xmlHttp.send(null);
  document.getElementById("tasting-area").classList.remove("hidden");
});

document.getElementById("zackLogin").addEventListener("click", () => {
  clearTastingColumn();
  renderTastingColumn();
  document.getElementById("zackLogin").classList.add("darken-2");
  document.getElementById("jesseLogin").classList.remove("darken-2");
  document.getElementById("westonLogin").classList.remove("darken-2");
  this.selected = "Zack";
  let url = this.baseURL + "/getAllTastingsByName";
  let params = `name=Zack`;
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url + "?" + params, false);
  xmlHttp.onreadystatechange = function () {
    let response = JSON.parse(xmlHttp.responseText);
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      Object.values(response.response).forEach((val) => {
        notesArea = document.getElementById("notes" + val.day);
        notesArea.innerText = val.notes;
        M.textareaAutoResize(notesArea);
        guessesArea = document.getElementById("guesses" + val.day);
        guessesArea.innerText = val.guesses;
        M.textareaAutoResize(guessesArea);
        ratingArea = document.getElementById("rating" + val.day);
        ratingArea.innerText = val.rating;
      });
    }
  };
  xmlHttp.send(null);
  document.getElementById("tasting-area").classList.remove("hidden");
});

function clearTastingColumn() {
  document.getElementById("tasting-area-column").innerHTML = "";
}

function renderTastingColumn() {
  for (var i = 1; i < 13; i++) {
    document.getElementById("tasting-area-column").innerHTML += `
            <div class="card horizontal">
              <div class="card-stacked">
                <div class="card-content">
                  <textarea
                    id="notes${i}"
                    class="materialize-textarea tastingNotes"
                    placeholder="Day ${i} Notes"
                  ></textarea>

                  <textarea
                    id="guesses${i}"
                    class="materialize-textarea tastingGuess"
                    placeholder="Guesses"
                  ></textarea>

                  <textarea
                    id="rating${i}"
                    class="materialize-textarea tastingRating"
                    placeholder="Rating"
                  ></textarea>
                </div>
              </div>
            </div>
            `;
  }
}

function submitTastings(days) {
  let url = this.baseURL + "/saveTastings";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("POST", url, false);
  xmlHttp.setRequestHeader("Content-type", "application/json");
  xmlHttp.onreadystatechange = function () {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
      alert("Tasting submitted succesfully");
    }
  };
  let params = {
    days: days,
    selected: this.selected,
  };

  xmlHttp.send(JSON.stringify(params));
}

document.getElementById("saveTastings").addEventListener("click", () => {
  let notes = [];
  let guesses = [];
  let ratings = [];

  var rawNotes = document.getElementsByClassName("tastingNotes");
  Array.prototype.forEach.call(rawNotes, function (element, index, array) {
    notes.push(element.value);
  });
  var rawGuesses = document.getElementsByClassName("tastingGuess");
  Array.prototype.forEach.call(rawGuesses, function (element, index, array) {
    guesses.push(element.value);
  });
  var rawRatings = document.getElementsByClassName("tastingRating");
  Array.prototype.forEach.call(rawRatings, function (element, index, array) {
    ratings.push(element.value);
  });

  let days = {};

  for (var i = 1; i < 13; i++) {
    var day = {};
    day.day = i;
    day.note = notes.shift() ?? "";
    day.guess = guesses.shift() ?? "";
    day.rating = ratings.shift() ?? "";
    days[i] = day;
  }

  this.submitTastings(days);
});
