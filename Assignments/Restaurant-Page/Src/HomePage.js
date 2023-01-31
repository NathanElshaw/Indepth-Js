const content = document.querySelector("#content");

function homePage() {
  content.innerHTML = "";
  content.innerHTML = `
    <h2>Welcome to our Pizzaria!</h2>
    <p>We create the best pizzas in our area hands down!</p>
    <p>Voted the best Pizzaria in town for the past 5 years!</p>
    <img src="../Src/hero.jpg" alt="" id="heroImg" />
    <p>Come pay us a visit or order online!</p>
    <div id="cta">
      <button id="ctaDirection">Direction</button>
      <button id="ctaOrder">Order Online</button>
    </div>`;
}

export default homePage;
