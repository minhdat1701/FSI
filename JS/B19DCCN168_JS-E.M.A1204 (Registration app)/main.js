const form = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const successMessage = document.getElementById("successMessage");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const confirmPasswordError = document.getElementById("confirmPassword-error");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (validateRequired()) {
    showSuccessMessage();
    // console.log(usernameInput.value);
    // console.log(passwordInput.value);
  }
});

function validateRequired() {
  let isValid = true;

  if (usernameInput.value.trim() === "") {
    usernameError.textContent = "Username is required";
    isValid = false;
  } else {
    usernameError.textContent = "";
  }
  if (passwordInput.value.trim() === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  if (confirmPasswordInput.value.trim() === "") {
    confirmPasswordError.textContent = "Confirm Password is required";
    isValid = false;
  } else if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordError.textContent = "Passwords and confirm password do not match";
    isValid = false;
  } else {
    confirmPasswordError.textContent = "";
  }
  return isValid;
}

function checkValue(field) {
  if (field.value.trim() !== "") {
    return true;
  }
  return false;
}

function showSuccessMessage() {
  successMessage.textContent = "You have registered successfully";
  successMessage.style.color = "green";
  successMessage.style.textAlign = "center";
}

