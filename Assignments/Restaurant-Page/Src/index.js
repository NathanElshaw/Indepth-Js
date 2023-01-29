import "./styles.css";
import menuPage from "./MenuPage";
import homePage from "./HomePage";
import aboutPage from "./AboutPage";

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");

homePage();

btnHome.addEventListener("click", () => {
  homePage();
});

btnMenu.addEventListener("click", () => {
  menuPage();
});

btnAbout.addEventListener("click", () => {
  aboutPage();
});
