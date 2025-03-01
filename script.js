const eyeBtn = document.querySelector('.passwordFild .eyeBtn');
const passwordInput = document.querySelector('.passwordFild input');
const errorMsg = document.querySelector('.passwordFild .error');

function showPassword() {
  if (passwordInput.type == `password`) {
    passwordInput.type = 'text';
    eyeBtn.innerHTML = `<i class="fa-solid fa-eye"></i>`;
  } else {
    passwordInput.type = 'password';
    eyeBtn.innerHTML = `<i class="fa-solid fa-eye-slash"></i>`;
  }
}
eyeBtn.addEventListener(`click`, showPassword);

function checkPassword() {
  if (passwordInput.value.length < 8) {
    errorMsg.textContent = `Password must be at least 8 characters.`;
  } else {
    errorMsg.innerText = `Enter your password`;
  }
}
passwordInput.addEventListener(`keyup`, checkPassword);

//BG Color
const changeBgColorBtn = document.querySelector('.changeBgColor');
const body = document.querySelector('body');

function getRandomColor() {
  // Generate a random color in the format #RRGGBB
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16).padStart(2, '0')}${g
    .toString(16)
    .padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}

function getRandomGradientColor() {
  // Generate two random colors rafikul
  const color1 = getRandomColor();
  const color2 = getRandomColor();

  // Generate a random direction for the gradient
  const directions = ['to top', 'to bottom', 'to left', 'to right'];
  const direction = directions[Math.floor(Math.random() * directions.length)];

  // Return the gradient color
  return `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function changeBackgroundColor() {
  // Change the background color to a random gradient color
  body.style.backgroundImage = getRandomGradientColor();
}

// Add an event listener to the button
changeBgColorBtn.addEventListener('click', changeBackgroundColor);

function getRandomGradientColor() {
  const r1 = Math.floor(Math.random() * 256);
  const g1 = Math.floor(Math.random() * 256);
  const b1 = Math.floor(Math.random() * 256);
  const r2 = Math.floor(Math.random() * 256);
  const g2 = Math.floor(Math.random() * 256);
  const b2 = Math.floor(Math.random() * 256);
  const directions = ['to top', 'to bottom', 'to left', 'to right'];
  const direction = directions[Math.floor(Math.random() * directions.length)];
  return `linear-gradient(${direction}, rgb(${r1}, ${g1}, ${b1}), rgb(${r2}, ${g2}, ${b2}))`;
}
