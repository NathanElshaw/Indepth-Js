import "./styles.css";

const btnHome = document.querySelector("#home");
const btnMenu = document.querySelector("#menu");
const btnAbout = document.querySelector("#about");
const content = document.querySelector("#content");

function homePage() {
  content.innerHTML = "";
  content.textContent = "Home";
}

homePage();

function menuPage() {
  content.innerHTML = "";
  content.textContent = "Menu";
}

function aboutPage() {
  content.innerHTML = "";
  content.textContent = "About";
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
