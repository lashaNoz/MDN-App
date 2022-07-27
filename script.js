const inputs = document.querySelectorAll(".form .input");
const star = document.querySelector(".star");

document.querySelector(".form .input").focus();

inputs.forEach((input) => {
  input.addEventListener("focus", () => {
    star.style.cssText = input.textContent;
  });

  input.addEventListener("input", () => {
    star.style.cssText = input.textContent;
  });
});

const defaultValues = Array.from(inputs).map((input) => {
  return input.innerText.replace(/\n/, "");
});

const resetBtn = document.querySelector(".reset-btn");

resetBtn.addEventListener("click", () => {
  inputs.forEach((input, i) => {
    input.textContent = defaultValues[i];
  });

  document.querySelector(".form .input").focus();
});
