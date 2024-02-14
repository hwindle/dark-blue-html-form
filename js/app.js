function passwordValidation(str1, str2) {
  if (str1 === str2) {
    return true;
  } else {
    return false;
  }
}

function alterDOMElements(password1, password2) {
  // two password fields - array
  const passwordInputs = document.querySelectorAll('input[type="password"]');
  // error message
  const errorMessage = document.querySelector('span.error');

  if (typeof password1 === 'string' && typeof password2 === 'string') {
    const result = passwordValidation(password1, password2);
    if (!result) {
      passwordInputs[0].classList.toggle('validation-error');
      passwordInputs[1].classList.toggle('validation-error');
      errorMessage.classList.toggle('hidden');
    } else {
      passwordInputs[0].classList.toggle('validation-error');
      passwordInputs[1].classList.toggle('validation-error');
      errorMessage.classList.toggle('hidden');
    }
  }
}

function onPasswordInputChange() {
  // get two password values
  const password1 = document.querySelector('input#password-1').value;
  const password2 = document.querySelector('input#password-2').value;
  if (password1.length >= 8 && password2.length >= 8) {
    alterDOMElements(password1, password2);
  }
}

const passwordInputOne = document.querySelector('input#password-1');
const passwordInputTwo = document.querySelector('input#password-2');
passwordInputOne.addEventListener('input', onPasswordInputChange);
passwordInputTwo.addEventListener('input', onPasswordInputChange);