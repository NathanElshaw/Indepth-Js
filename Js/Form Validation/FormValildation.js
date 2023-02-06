const username = document.querySelector("#username");
const email = document.querySelector("#email");
const submit = document.querySelector("#submit");

submit.addEventListener("click", (event) => {
  //validity check should be in the submit function to check validity
  if (email.validity.tooShort) {
    event.preventDefault();
    email.setCustomValidity("It needs to be longer");
  } else {
    email.setCustomValidity("should of gone");
  }
  //Make sure to add report Validity to output
  email.reportValidity();
  console.log(email.validity.tooShort);
});

console.log();
