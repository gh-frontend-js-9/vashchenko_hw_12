export function validEmail(emailId, emailVal) {
  let errorMessage = document.getElementById('errorMessage');
  let reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (reg.test(emailVal) === false || emailVal.length < 8) {
    emailId.style.border = "1px solid #ff0000";
    errorMessage.classList.remove('invisible');
    setTimeout(() => errorMessage.classList.add('invisible'), 5000);
  } else {
    emailId.style.border = "1px solid #ced4da";
  }
}

export function validPassword(passwordID, password, passwordConfirm) {
  let errorMessage = document.getElementById("errorMessage");

  if (password.length <= 5 || passwordConfirm !== password) {
    passwordID.style.border = "1px solid #ff0000";
    errorMessage.classList.remove('invisible');
    setTimeout(() => errorMessage.classList.add('invisible'), 5000);
  } else {
    passwordID.style.border = "1px solid #ced4da";
  }
}

export function validName(nameId, name) {
  let errorMessage = document.getElementById("errorMessage");

  if (name.length < 4) {
    nameId.style.border = "1px solid #ff0000";
    errorMessage.classList.remove('invisible');
    setTimeout(() => errorMessage.classList.add('invisible'), 5000);
  } else {
    nameId.style.border = "1px solid #ced4da";
  }
}
