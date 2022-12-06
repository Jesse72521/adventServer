// // initialize navbar
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".sidenav");
  var instances = M.Sidenav.init(elems, {});
});

// document.getElementById("mainSubmit").addEventListener("click", (e) => {
//   e.preventDefault();
//   var firstLabel = document.getElementById("first-label").value;
//   var firstAnswer = document.getElementById("first-answer").value;
//   var secondLabel = document.getElementById("second-label").value;
//   var secondAnswer = document.getElementById("second-answer").value;
//   var recipientName = document.getElementById("recipient-name").value;
//   var uniqueCode = document.getElementById("unique-code").value;

//   if (
//     firstLabel === "" ||
//     firstAnswer === "" ||
//     secondLabel === "" ||
//     secondAnswer === "" ||
//     recipientName === "" ||
//     uniqueCode === ""
//   ) {
//     alert("You missed a field, try again.");
//   } else {
//     let url = "http://localhost:3006/getTasting";
//     let params = `uniqueCode=${uniqueCode}`;
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("GET", url + "?" + params, false);
//     xmlHttp.onreadystatechange = () => {
//       if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
//         let response = JSON.parse(xmlHttp.responseText);
//         console.log(response.status);
//         if (response.status != "200") {
//           this.submitTasting(
//             firstLabel,
//             firstAnswer,
//             secondLabel,
//             secondAnswer,
//             recipientName,
//             uniqueCode
//           );
//         } else {
//           alert("unique code already in database");
//         }
//       }
//     };

//     xmlHttp.send(null);
//   }
// });

// function submitTasting(
//   firstLabel,
//   firstAnswer,
//   secondLabel,
//   secondAnswer,
//   recipientName,
//   uniqueCode
// ) {
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
// }
