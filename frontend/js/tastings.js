document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

document.getElementById("jesseLogin").addEventListener("click", () => {
  // let url = "http://localhost:3006/getTasting";
  // let params = `uniqueCode=${uniqueResults}`;
  // var xmlHttp = new XMLHttpRequest();
  // xmlHttp.open("GET", url + "?" + params, false);
  // xmlHttp.onreadystatechange = function () {
  //   let response = JSON.parse(xmlHttp.responseText);
  //   if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
  //     document.getElementById("textarea1label").innerText +=
  //       response.response.first_label;
  //     document.getElementById("textarea2label").innerText +=
  //       response.response.second_label;
  //     document.getElementById("submit-tasting").innerText +=
  //       response.response.first_label + response.second_label;
  //   }
  // };

  // xmlHttp.send(null);

  console.log("jesseClicked");

  document.getElementById("tasting-area").classList.remove("hidden");
});

document.getElementById("westonLogin").addEventListener("click", () => {
  // let url = "http://localhost:3006/getTasting";
  // let params = `uniqueCode=${uniqueResults}`;
  // var xmlHttp = new XMLHttpRequest();
  // xmlHttp.open("GET", url + "?" + params, false);
  // xmlHttp.onreadystatechange = function () {
  //   let response = JSON.parse(xmlHttp.responseText);
  //   if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
  //     document.getElementById("textarea1label").innerText +=
  //       response.response.first_label;
  //     document.getElementById("textarea2label").innerText +=
  //       response.response.second_label;
  //     document.getElementById("submit-tasting").innerText +=
  //       response.response.first_label + response.second_label;
  //   }
  // };

  // xmlHttp.send(null);

  console.log("westonClicked");

  document.getElementById("tasting-area").classList.remove("hidden");
});

document.getElementById("zackLogin").addEventListener("click", () => {
  // let url = "http://localhost:3006/getTasting";
  // let params = `uniqueCode=${uniqueResults}`;
  // var xmlHttp = new XMLHttpRequest();
  // xmlHttp.open("GET", url + "?" + params, false);
  // xmlHttp.onreadystatechange = function () {
  //   let response = JSON.parse(xmlHttp.responseText);
  //   if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
  //     document.getElementById("textarea1label").innerText +=
  //       response.response.first_label;
  //     document.getElementById("textarea2label").innerText +=
  //       response.response.second_label;
  //     document.getElementById("submit-tasting").innerText +=
  //       response.response.first_label + response.second_label;
  //   }
  // };

  // xmlHttp.send(null);

  console.log("zackClicked");

  document.getElementById("tasting-area").classList.remove("hidden");
});

function submitTasting(
  day1,
  day2,
  day3,
  day4,
  day5,
  day6,
  day7,
  day8,
  day9,
  day10,
  day11,
  day12
) {
  console.log("clicked");
  //   let url = "http://localhost:3006/newTasting";
  //   var xmlHttp = new XMLHttpRequest();
  //   xmlHttp.open("POST", url, false);
  //   xmlHttp.setRequestHeader("Content-type", "application/json");
  //   xmlHttp.onreadystatechange = function () {
  //     if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
  //       alert("Tasting submitted succesfully");
  //     }
  //   };
  //   let params = {
  //     firstLabel: firstLabel,
  //     firstAnswer: firstAnswer,
  //     secondLabel: secondLabel,
  //     secondAnswer: secondAnswer,
  //     recipientName: recipientName,
  //     uniqueCode: uniqueCode,
  //   };
  //   xmlHttp.send(JSON.stringify(params));
}

document.getElementById("saveTastings").addEventListener("click", () => {
  this.submitTasting(
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  );
});
