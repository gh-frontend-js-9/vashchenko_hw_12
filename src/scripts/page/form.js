import {CreateElement} from "../func/createElement";

export function loginForm() {
  let logIn = new CreateElement();
  logIn.addNewElement(
    {id: 'loginTitle'},
    'h2',
    {'class': 'text-uppercase pt-3'},
    'log in'
  );

  logIn.addInput(
    'loginEmail',
    'email',
    'loginEmail',
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
    'loginPassword',
    'passwords',
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

  logIn.addNewElement({id: 'loginBtn'}, 'button', {'class': 'btn btn-secondary text-uppercase'},'Login');
  logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'Don\'t have an account?');
  logIn.addLink('loginStatus', 'signUp','text-capitalize','#signup','Sign Up', 'Create new account', 'Sign up');
  logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'OR');
  logIn.addLink('loginStatus', 'resetPassword','text-capitalize','#reset','Sign Up', 'Reset password', 'Reset password?');
}

export function signUpForm() {
  let logIn = new CreateElement();
  logIn.addNewElement(
    {id: 'loginTitle'},
    'h2',
    {'class': 'text-uppercase pt-3'},
    'sign up'
  );

  logIn.addInput(
    'loginEmail',
    'email',
    'loginEmail',
    'email',
    '',
    'Enter email address',
    'form-control',
    '',
    'Enter your email address',
    '',
    {display: 'none'}
    );

  // logIn.addInput(
  //   'loginPassword',
  //   'password',
  //   'loginPassword',
  //   'passwords',
  //   '',
  //   'Enter your password',
  //   'form-control',
  //   '',
  //   'Enter password',
  //   '',
  //   {display: 'none'}
  //   );
  //
  // logIn.addInput(
  //   'loginRememberMe',
  //   'rememberMe',
  //   'rememberMe',
  //   'checkbox',
  //   '', '', '',
  //   'pl-4 pt-2 pr-2 align-middle text-white ',
  //   'Remember Me'
  // );
  //
  // // logIn.addNewElement({id: 'loginBtn'}, 'button', {'class': 'btn btn-secondary text-uppercase'},'Login');
  // // logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'Don\'t have an account?');
  // // logIn.addLink('loginStatus', 'signUp','text-capitalize','#signup','Sign Up', 'Create new account', 'Sign up');
  // // logIn.addNewElement({id: 'loginStatus'}, 'p', {'class': 'text-white'},'OR');
  // // logIn.addLink('loginStatus', 'resetPassword','text-capitalize','#reset','Sign Up', 'Reset password', 'Reset password?');
}
