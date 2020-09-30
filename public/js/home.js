function responsive() {
  var n = document.getElementById("myTopnav");
  "topnav" === n.className
    ? (n.className += " responsive")
    : (n.className = "topnav");
}
function logIn() {
  document.getElementById("login").classList.toggle("show");
}
function signUp() {
  document.getElementById("signup").classList.toggle("show");
}
(window.onclick = function (n) {
  if (!n.target.matches(".dropbtn")) {
    var s,
      t = document.getElementsByClassName("dropdown-content");
    for (s = 0; s < t.length; s++) {
      var e = t[s];
      e.classList.contains("show") && e.classList.remove("show");
    }
  }
}),
  (window.onclick = function (n) {
    if (!n.target.matches(".dropbtn")) {
      var s,
        t = document.getElementsByClassName("dropdown-content");
      for (s = 0; s < t.length; s++) {
        var e = t[s];
        e.classList.contains("show") && e.classList.remove("show");
      }
    }
  });
