const content = document.querySelector("#content");

function menuPage() {
  content.innerHTML = "";
  content.innerHTML = `<h2>Menu</h2>
    <div class="menuGrid">
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>Classic Cheese</h3>
        <p>A classic cheese pizza with homemade sauce!</p>
        <button>Order Now!</button>
      </div>
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>Pepperoni</h3>
        <p>A classic pepperoni pizza with fresh pepperoni everyday!</p>
        <button>Order Now!</button>
      </div>
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>3 Meat</h3>
        <p>Made fresh everyday with fresh meat and cheese, with ham, sasuage, and pepperoni!</p>
        <button>Order Now!</button>
      </div>
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>Vegetable</h3>
        <p>For all the vegetable lovers out there! our classic cheese pizza with green peppers, red peppers and onions!</p>
        <button>Order Now!</button>
      </div>
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>BBQ Pizza</h3>
        <p>The best local BBQ pizza with home smoked pork and homemade BBQ sauce!</p>
        <button>Order Now!</button>
      </div>
      <div class="pizza">
        <img src="../Src/pizza.svg" alt="" />
        <h3>Sauce Bottom!</h3>
        <p>The classic cheese pizza with a twist! The sauce is on the bottom!</p>
        <button>Order Now!</button>
      </div>
    </div>`;
}

export default menuPage;
