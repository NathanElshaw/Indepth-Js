const email = document.getElementById("#email");
const submit = document.querySelector("#submit");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

submit.addEventListener("click", (event) => {
  event.preventDefault();
});
