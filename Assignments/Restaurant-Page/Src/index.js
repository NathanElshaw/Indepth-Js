import "./styles.css";
import menuPage from "./MenuPage";
import homePage from "./HomePage";

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");

function aboutPage() {
  content.innerHTML = "";
  content.innerHTML = "About";
}

btnHome.addEventListener("click", () => {
  homePage();
});

btnMenu.addEventListener("click", () => {
  menuPage();
});

btnAbout.addEventListener("click", () => {
  aboutPage();
});
