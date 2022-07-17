windwindow.location.hash = "music";
windwindow.location.hash = "ntips";
windwindow.location.hash = "Gym-Wear";
windwindow.location.hash = "quotes";
windwindow.location.hash = "tips";
windwindow.location.hash = "plans";

windwindow.location.hash = "asima";
windwindow.location.hash = "jahra";
windwindow.location.hash = "hawalli";
windwindow.location.hash = "farwaniya";
windwindow.location.hash = "mubark alkabeer";
windwindow.location.hash = "alahmadi";

// let playlistsGenres = ["rock", "hardstyle", "pop"];
// playlistsGenres.forEach((item, index) => {
//   console.log(`1${index}: ${item}`);
// });

// let playlists = ["rock", "hardstyle", "pop"];
// let all_playlists = document.getElementById("all-playlistss");
// // playlists.forEach(
// //   (playlist) => (all_playlists.innerHTML += `<span>${playlist}</span>`)
// // );
// for (let i = 0; i < playlist.length; i++) {
//   all_playlists.innerHTML += `<span> ${playlists[i]} </span>`;
// }

function myFunction() {
  document.getElementById("myDrpdown").classList.toggle("sshow");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDrpdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

// const targetDiv = document.getElementById("musicg");
// const button = document.getElementById("tog");
// button.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };

// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// $(".button1").addEventListener("click", () => {
//   tog("div");
// });
// $(".button2").addEventListener("click", () => {
//   tog("section");
// });

// function tog(element) {
//   if ($(".show")) {
//     Array.from($$(".show")).forEach((ele) => {
//       ele.classList.remove("show");
//     });
//   }
//   $(element).classList.add("show");
// }
