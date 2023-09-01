// variables
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPass = document.getElementById("confirmPass");
const dateInput = document.getElementById("dateInput");
const btn = document.getElementById("btn");

// checking the name validation
fullname.addEventListener("keyup", () => {
  const nameRegex = RegExp("^[A-Za-zs]*$");
  if (nameRegex.test(fullname.value) && fullname.value.length > 3) {
    fullname.classList.remove("border-danger");
    fullname.classList.add("border-success");
  } else {
    fullname.classList.remove("border-success");
    fullname.classList.add("border-danger");
  }
});

// checking the email validation

email.addEventListener("keyup", (e) => {
  e.preventDefault();
  const emailReg = RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$");
  if (emailReg.test(email.value)) {
    email.classList.remove("border-danger");
    email.classList.add("border-success");
  } else {
    email.classList.remove("border-success");
    email.classList.add("border-danger");
  }
});
// checking the password validation
password.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (password.value.length >= 8) {
    password.classList.remove("border-danger");
    password.classList.add("border-success");
  } else {
    password.classList.remove("border-success");
    password.classList.add("border-danger");
  }
});
// confirm pass validation
confirmPass.addEventListener("keyup", () => {
  if (password.value == confirmPass.value) {
    confirmPass.classList.remove("border-danger");
    confirmPass.classList.add("border-success");
  } else {
    confirmPass.classList.remove("border-success");
    confirmPass.classList.add("border-danger");
  }
});

dateInput.addEventListener("blur", () => {
  // dob validation
  // Get the current date
  const currentDate = new Date();
  const birthdateString = dateInput.value;
  const birthdate = new Date(birthdateString);
  console.log(birthdate);
  // Calculate the age
  const ageInMilliseconds = currentDate - birthdate;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
  console.log(ageInMilliseconds);

  // Check if age is below 18
  if (ageInYears < 18) {
    alert("Age is below 18");
    btn.disabled = true
  } else {
    alert("Age is 18 or above");
    btn.disabled = false
  }
});
