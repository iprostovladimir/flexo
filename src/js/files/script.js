// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
function isInternetExplorer() {
  return /Trident|MSIE/.test(window.navigator.userAgent);
}

// Example usage
const isIE = isInternetExplorer();
if (isIE) {
  document.querySelector("body").classList.add("_is-ie");
}
// Output: true or false
//========================================================================================================================================================

const header = document.querySelector("header");
if (header) {
  const setHeaderHeight = () => {
    const headerheight = header.getBoundingClientRect().height;

    document.documentElement.setAttribute(
      "style",
      `--header: ${headerheight}px; `
    );
  };

  window.addEventListener("load", () => {
    setHeaderHeight();
    window.addEventListener("resize", setHeaderHeight);
  });
}

//========================================================================================================================================================

// function TotalLength() {
//   const path = document.querySelector(".sdfsdf");
//   const len = Math.round(path.getTotalLength());
//   alert("Длина " + len);
// }
// TotalLength();
//========================================================================================================================================================
const clearValuses = document.querySelectorAll(".js-clear");
if (clearValuses[0]) {
  clearValuses.forEach((element) => {
    const inputItem = element.querySelector(".js-clear-input");
    const btnItem = element.querySelector(".js-clear-btn");
    btnItem.addEventListener("click", (e) => {
      inputItem.value = "";
      e.preventDefault();
    });
  });
}

//========================================================================================================================================================

const cookie = document.querySelector(".cookie");
if (cookie) {
  const closeBtns = cookie.querySelectorAll("[data-cookie-close]");
  if (closeBtns[0]) {
    closeBtns.forEach((element) => {
      element.addEventListener("click", (e) => {
        cookie.classList.add("active");
      });
    });
  }
}

function isFirefox() {
  return /Firefox\//.test(window.navigator.userAgent);
}

const isFF = isFirefox();
if (isFF) {
  document.querySelector("body").classList.add("_is-firefox");
}

//========================================================================================================================================================
