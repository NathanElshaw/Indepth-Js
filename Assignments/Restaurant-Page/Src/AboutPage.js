const content = document.querySelector("#content");

function aboutPage() {
  content.innerHTML = "";
  content.innerHTML = `        
        <h3>About</h3>
        <p class="about">
          We started in 2001 with one goal in mind. Make the best pizzas for
          families to enjoy. for over 20 years now we have put many smiles on
          families faces as the bond over pizza and our other fabulous
        </p>
        <div id="cta">
          <button>Contact</button>
          <button>Directions</button>
        </div>
        <img src="../Src/Map.jpg" alt="" />`;
}

export default aboutPage;
