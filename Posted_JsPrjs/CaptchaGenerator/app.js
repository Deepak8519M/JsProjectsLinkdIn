const captchaTextBox = document.querySelector(".captcha-box input");
const refreshButton = document.querySelector(".refresh-button");
const captchaInputBox = document.querySelector(".captcha_input input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".button");

let captchaText = null;

const generateCaptcha = () => {
  const randomString = Math.random().toString(36).substring(2, 8);
  //   console.log(randomString);

  const randomStringArray = randomString.split("");
  const changeString = randomStringArray.map((char) =>
    Math.random() > 0.5 ? char.toUpperCase() : char
  );

  captchaText = changeString.join(" ");
  captchaTextBox.value = captchaText;
};

// generateCaptcha();

const refreshBtnClick = () => {
  generateCaptcha();
  captchaInputBox.value = "";
  captchaKeyValidate();
};

const captchaKeyValidate = () => {
  submitButton.classList.toggle("disabled", !captchaInputBox.value);

  if (!captchaInputBox.value) {
    message.classList.remove("active");
  }
};

const submitBtnClick = () => {
  captchaText = captchaText
    .split("")
    .filter((char) => char !== " ")
    .join("");

  message.classList.add("active");

  if (captchaInputBox.value === captchaText) {
    message.innerText = "Entered Captcha is Correct!";
    message.style.color = "rgb(20, 219, 30)";
  } else {
    message.innerText = "Entered Captcha is not Correct!";
    message.style.color = "#FF2525";
  }
};

refreshButton.addEventListener("click", refreshBtnClick);
captchaInputBox.addEventListener("keyup", captchaKeyValidate);
submitButton.addEventListener("click", submitBtnClick);
generateCaptcha();
