function showPassword() {
  var passwordInput = document.getElementById("password");
  var eye = document.getElementById("eyeIcon");

  if (passwordInput.type === "password" && eye) {
    passwordInput.type = "text";
    eye.src = "./img/icon_eye_slash.svg"
  } else {
    passwordInput.type = "password";
    eye.src = "./img/icon_eye_.svg"
  }
}

