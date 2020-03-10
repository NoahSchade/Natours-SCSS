var navigationLink = document.getElementsByClassName('navigation__link');


document.getElementById("navi-toggle").onchange = function () {
  if (document.getElementById("navi-toggle").checked === false) {
    setTimeout(
      function () {
        for (var i = 0; i < navigationLink.length; i++) {
          navigationLink[i].style.display = "none";
        }
      }, 400);
  } else {
    setTimeout(
      function () {
        for (var i = 0; i < navigationLink.length; i++) {
          navigationLink[i].style.display = "inline-block";
        }
      }, 350);
  }
};

