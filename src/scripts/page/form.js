import {CreateElement} from "../func/createElement";
import {RequestToServer} from "../request/requests";
import {usersURL, ContentType, AppJSON, AccesTOKEN} from "../variable/variables";
import {elementToId} from "../func/elementToID";
import {validEmail, validName, validPassword} from "../func/validation";

let reqToServ = new RequestToServer();

// Render Log In page
export function renderLoginForm() {
  let logIn = new CreateElement();
  logIn.addNewElement(
    {id: 'loginTitle'},
    'h2',
    {
      id: 'headerPage',
      'class': 'text-uppercase pt-3'
    },
    'log in'
  );

  logIn.addInput(
    'loginEmail',
    'email',
    'email',
    'email',
    '',
    'Enter email address',
    'form-control',
    '',
    'Enter your email address',
    '',
    {display: 'none'}
    );

  logIn.addInput(
    'loginPassword',
    'password',
    'password',
    'password',
    '',
    'Enter your password',
    'form-control',
    '',
    'Enter password',
    '',
    {display: 'none'}
    );

  logIn.addInput(
    'loginRememberMe',
    'rememberMe',
    'rememberMe',
    'checkbox',
    '', '', '',
    'pl-4 pt-2 pr-2 align-middle text-white ',
    'Remember Me'
  );

  logIn.addNewElement({id: 'loginBtn'}, 'button', {id: 'logInSubmit', name: 'logInSubmit', type: 'button', value: 'submit', 'class': 'btn btn-secondary text-uppercase', },'Login');
  logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'Don\'t have an account?');
  logIn.addLink('loginStatus', 'signUp','text-capitalize','signup.html','Sign Up', 'Create new account', 'Sign up');
  logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'OR');
  logIn.addLink('loginStatus', 'resetPassword','text-capitalize','reset.html','Sign Up', 'Reset password', 'Reset password?');
}

document.addEventListener('click', function(e) {
  if (e.target.id === 'logInSubmit') {
    let emailValid = validEmail(elementToId('email'));
    let passwordValid = validPassword(elementToId('password'));
    if (emailValid === true && passwordValid === true) {
      let sendData = {
        "email": elementToId('email').value,
        "password": elementToId('password').value
      };
      reqToServ.postData(`${usersURL}login`, ContentType, AppJSON, sendData)
    }
  }
  if (e.target.id === 'signSubmit') {
    let nameValid = validName(elementToId('name'));
    let emailValid = validEmail(elementToId('email'));
    let passwordValid = validPassword(elementToId('password'), elementToId('confirmationPassword'));
    if (nameValid === true && emailValid === true && passwordValid === true) {
      let sendData = {
        "email": elementToId('email').value,
        "password": elementToId('password').value,
        "name": elementToId('name').value
      };
      reqToServ.postData(usersURL, ContentType, AppJSON, sendData);
    }
  }
  if (e.target.id === 'resetSubmit') {
    let emailValid = validEmail(elementToId('email'));
    let passwordValid = validPassword(elementToId('password'), elementToId('confirmationPassword'));
    if (emailValid === true && passwordValid === true) {
      let sendData = {
        "password": elementToId('password').value,
        "confirmationPassword": elementToId('confirmationPassword').value,
        "email": elementToId('email').value
      };
      reqToServ.postData(`${usersURL}reset_password`, ContentType, AppJSON, sendData)
    }
  }
});
