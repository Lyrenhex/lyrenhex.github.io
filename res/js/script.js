const STRINGS = [
  "Hello",
  "I'm Damian Heaton",
  "a Software Engineer",
  "a Web Developer",
  "a Privacy Advocate",
  "a Mild Progressive"
]
var string = -1;

var dk = false;

function start() {
  try {
    $(window).resize(() => {
      if($(window).width() >= 1040) {
        dk = true;
        $(document.body).addClass("dk");
        document.getElementsByName("itch").forEach((element, index) => {
          element.style.width = 552;
        });
      }else{
        dk = false;
        $(document.body).removeClass("dk");
        document.getElementsByName("itch").forEach((element, index) => {
          element.style.width = 208;
        });
      }
    });

    $(window).resize();

    $(document).ready(() => {
      $('html').mousemove((e) => {
        if(dk){
          var h1 = document.getElementsByTagName("h1")[0];
          h1.style.left = ($(window).width() / 2) + (e.pageX - ($(window).width() / 2)) / 50 + "px";
          h1.style.top = ($(window).height() / 2 - 103.5) + (e.pageY - ($(window).height() / 2)) / 50 + "px";
        }
      });

      var hash = window.location.hash.substring(1);
      if (hash !== "")
        showModal(hash);

      if (dk) {
        changeText();
        setInterval(changeText, 5000);
      }
    });
  }catch(e){
    setTimeout(start, 1);
  }
}

start();

function showModal(id){
  var div = document.getElementById(id);
  div.classList.add("show");
  window.location.hash = id;
}
function hideModal(id){
  var div = document.getElementById(id);
  div.classList.remove("show");
  window.location.hash = "";
}

function menu(id) {
  var menu = document.getElementById(id);
  menu.classList.toggle("shown");
  function hideborder() {
    menu.style.border = "none";
  }
  if (menu.classList.contains("shown"))
    menu.style.border = "1px solid gold";
  else
    setTimeout(hideborder, 500);
}
function toggleNav() {
  var nav = document.getElementById("mobnav");
  nav.classList.toggle("inscreen");
  var backdrop = document.getElementById("mobnav-back");
  backdrop.classList.toggle("inscreen");
}

function changeText() {
  if (string === STRINGS.length - 1)
    string = 0;
  else
    string ++;
  $("h1").fadeOut(function () {
    $(this).text(STRINGS[string]);
  }).fadeIn();
}
