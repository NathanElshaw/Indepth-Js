const username = document.querySelector("#username");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  event.preventDefault();
});

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("It needs to be longer");
  } else {
    email.setCustomValidity("");
  }
});
