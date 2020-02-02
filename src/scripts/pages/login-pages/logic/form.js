import {autoLogin, RequestToServer} from "../../../request/requests";
import {usersURL, ContTYPE, AppJSON} from "../../../variable/variables";
import {elementToId} from "../../../func/elementToID";
import {validEmail, validName, validPassword} from "../../../func/validation";

let reqToServ = new RequestToServer();

export function logIn() {
  let rememberMe = false;
  if (elementToId('rememberMe').checked) {
    rememberMe = true;
  }
  let emailValid = validEmail(elementToId('email'));
  let passwordValid = validPassword(elementToId('password'));
  if (emailValid === true && passwordValid === true) {
    let sendData = {
      "email": elementToId('email').value,
      "password": elementToId('password').value
    };
    console.log(reqToServ.postData(
        `${usersURL}login`,
        ContTYPE,
        AppJSON,
        sendData,
        (response) => {
          sessionStorage.setItem('token', response.headers.get('X-Auth-Token'));
          if (rememberMe === true) {
            localStorage.setItem('token', response.headers.get('X-Auth-Token'));
          }
        }
      )
    );

  }
  setInterval(() => autoLogin(sessionStorage.getItem('token')), 1500);
}

export function signUp() {
  let nameValid = validName(elementToId('name'));
  let emailValid = validEmail(elementToId('email'));
  let passwordValid = validPassword(elementToId('password'), elementToId('confirmationPassword'));

  if (nameValid === true && emailValid === true && passwordValid === true) {
    let sendData = {
      "email": elementToId('email').value,
      "password": elementToId('password').value,
      "name": elementToId('name').value
    };
    reqToServ.postData(usersURL, ContTYPE, AppJSON, sendData);
  }

  setTimeout(() => window.location.href = 'index.html', 2000);
}

export function resetPassword() {
  let emailValid = validEmail(elementToId('email'));
  let passwordValid = validPassword(elementToId('password'), elementToId('confirmationPassword'));

  if (emailValid === true && passwordValid === true) {
    let sendData = {
      "password": elementToId('password').value,
      "confirmationPassword": elementToId('confirmationPassword').value,
      "email": elementToId('email').value
    };
    reqToServ.postData(`${usersURL}reset_password`, ContTYPE, AppJSON, sendData)
  }

  setTimeout(() => window.location.href = 'index.html', 2000);
}

export function logOut () {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = 'index.html';
}
