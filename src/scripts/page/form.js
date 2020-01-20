import {CreateElement} from "../func/createElement";
import {RequestToServer} from "../request/requests";
import {ApiURL, ContentType, AppJSON, AccesTOKEN} from "../variable/variables";
import {elementToId} from "../func/elementToID";

let reqToServ = new RequestToServer();

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
    let sendData = {
      "email": elementToId('email').value,
      "password": elementToId('password').value
    };
    reqToServ.postData(ApiURL, ContentType, AppJSON, sendData)
  }
  if (e.target.id === 'signSubmit') {
    let sendData = {
      "email": elementToId('email').value,
      "password": elementToId('password').value,
      "name": elementToId('name').value
    };
    reqToServ.postData(ApiURL, ContentType, AppJSON, sendData)
  }
  if (e.target.id === 'resetSubmit') {
    let sendData = {
      "email": elementToId('email').value,
      "password": elementToId('password').value
    };
    reqToServ.postData(ApiURL, ContentType, AppJSON, sendData, 'login.html')
  }
});
