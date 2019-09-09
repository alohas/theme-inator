"use strict";

const dropdown = document.querySelector("#theme");

dropdown.addEventListener("change", function() {
  //console.log(dropdown.value);
  if (dropdown.value === "dark") {
    document
      .querySelector("*")
      .style.setProperty("--font", "signo, sans-serif");
    document.querySelector("html").style.setProperty("--main-bg", "#222831");
    document.querySelector("html").style.setProperty("--txt-clr", "#eeeeee");
    document.querySelector("#theme").style.setProperty("--page-bg", "#393e46");
    document
      .querySelector("div#page")
      .style.setProperty("--shadow", "rgba(255,255,255, 0.25)");
    document
      .querySelector("div#page")
      .style.setProperty("--page-bg", "#393e46");
    document
      .querySelector("p.intro1")
      .style.setProperty("--txt-spc", "#00adb5");
    document.querySelector("#theme").style.setProperty("--txt-spc", "#00adb5");
    document.querySelector("div#page").style.transform = "";
  } else if (dropdown.value === "magic") {
    document
      .querySelector("*")
      .style.setProperty("--font", "elido-ornaments, sans-serif");
    document.querySelector("html").style.setProperty("--main-bg", "#331940");
    document.querySelector("html").style.setProperty("--txt-clr", "#0cca98");
    document
      .querySelector("div#page")
      .style.setProperty("--shadow", "rgba(26, 118, 72, 0.75)");
    document
      .querySelector("div#page")
      .style.setProperty("--page-bg", "#5e366a");
    document.querySelector("#theme").style.setProperty("--page-bg", "#5e366a");
    document
      .querySelector("p.intro1")
      .style.setProperty("--txt-spc", "#ffffff");
    document.querySelector("#theme").style.setProperty("--txt-spc", "#ffffff");
    document.querySelector("div#page").style.transform = "rotate(180deg)";
  } else {
    document
      .querySelector("*")
      .style.setProperty("--font", "big-caslon-fb, serif");
    document.querySelector("html").style.setProperty("--main-bg", "white");
    document.querySelector("html").style.setProperty("--txt-clr", "#black");
    document
      .querySelector("div#page")
      .style.setProperty("--shadow", "rgba(0,0,0, 0.75)");
    document
      .querySelector("div#page")
      .style.setProperty("--page-bg", "#d6d6d6");
    document.querySelector("#theme").style.setProperty("--page-bg", "#d6d6d6");
    document
      .querySelector("p.intro1")
      .style.setProperty("--txt-spc", "rgb(190, 164, 13)");
    document
      .querySelector("#theme")
      .style.setProperty("--txt-spc", "rgb(190, 164, 13)");
    document.querySelector("div#page").style.transform = "";
  }
});
