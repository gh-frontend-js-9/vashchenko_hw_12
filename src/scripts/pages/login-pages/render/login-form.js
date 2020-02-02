import {CreateElement} from "../../../func/createElement";

let createElement = new CreateElement();

export function loginForm() {
  createElement.delete({id: 'loginTitle'});
  createElement.addNewElement({id: 'loginTitle'},'h2',{id: 'headerPage', 'class': 'text-uppercase pt-3'},'log in');

  createElement.delete({id: 'loginName'});

  createElement.delete({id: 'loginEmail'});
  createElement.addInput('loginEmail','email','email','email','','Enter email address','form-control','',
    'Enter your email address','', {display: 'none'});

  createElement.delete({id: 'loginPassword'});
  createElement.addInput('loginPassword','password','password','password', '', 'Enter your password', 'form-control',
    '', 'Enter password', '', {display: 'none'});

  createElement.delete({id: 'loginRememberMe'});
  createElement.addInput('loginRememberMe', 'rememberMe', 'rememberMe', 'checkbox', '', '', '',
    'pl-4 pt-2 pr-2 align-middle text-white ', 'Remember Me');

  createElement.delete({id: 'loginBtn'});
  createElement.addNewElement({id: 'loginBtn'}, 'button', {id: 'logInSubmit', name: 'logInSubmit', type: 'button',
    value: 'submit', 'class': 'btn btn-secondary text-uppercase', },'Login');

  createElement.delete({id: 'status'});
  createElement.addNewElement({id: 'status'}, 'p', {'class': 'text-white'},'Don\'t have an account?');
  createElement.addLink('status', 'signUp','text-capitalize','#','Sign Up', 'Create new account', 'Sign up');
  createElement.addNewElement({id: 'status'}, 'p', {'class': 'text-white'},'OR');
  createElement.addLink('status', 'resetPassword','text-capitalize','#','Reset password', 'Reset password',
    'Reset password?');
}

export function resetForm() {
  createElement.delete({id: 'loginTitle'});
  createElement.addNewElement({id: 'loginTitle'},'h2',{id: 'headerPage', 'class': 'text-uppercase pt-3'},'Reset password');

  createElement.delete({id: 'loginName'});

  createElement.delete({id: 'loginEmail'});
  createElement.addInput('loginEmail','email','email','email','','Enter email address','form-control','',
    'Enter your email address','', {display: 'none'});

  createElement.delete({id: 'loginPassword'});
  createElement.addInput('loginPassword','password','password','password', '', 'Enter password', 'form-control',
    '', 'Enter password', '', {display: 'none'});
  createElement.addInput('loginPassword','confirmationPassword','confirmationPassword','password', '',
    'Confirm password', 'form-control  mt-3', '', 'Enter password', '', {display: 'none'});

  createElement.delete({id: 'loginRememberMe'});

  createElement.delete({id: 'loginBtn'});
  createElement.addNewElement({id: 'loginBtn'}, 'button', {id: 'resetSubmit', name: 'resetSubmit',
    type: 'button', value: 'submit', 'class': 'btn btn-secondary text-uppercase', },'Reset password');

  createElement.delete({id: 'status'});
  createElement.addNewElement({id: 'status'}, 'p', {'class': 'text-white'},'Don\'t have an account?');
  createElement.addLink('status', 'signUp','text-capitalize','#','Sign Up', 'Create new account', 'Sign up');
  createElement.addNewElement({id: 'status'}, 'p', {'class': 'text-white'},'OR');
  createElement.addLink('status', 'logIn','text-capitalize','#','Log In', 'Log In',
    'Log In Now');
}


export function signUpForm() {
  createElement.delete({id: 'loginTitle'});
  createElement.addNewElement({id: 'loginTitle'},'h2',{id: 'headerPage', 'class': 'text-uppercase pt-3'},
    'Sign Up');

  createElement.delete({id: 'loginName'});
  createElement.addInput('loginName','name','name','text','','Enter your name','form-control','',
    'Enter your name','', {display: 'none'});

  createElement.delete({id: 'loginEmail'});
  createElement.addInput('loginEmail','email','email','email','','Enter email address','form-control','',
    'Enter your email address','', {display: 'none'});

  createElement.delete({id: 'loginPassword'});
  createElement.addInput('loginPassword','password','password','password', '', 'Enter password', 'form-control',
    '', 'Enter password', '', {display: 'none'});
  createElement.addInput('loginPassword','confirmationPassword','confirmationPassword','password', '',
    'Confirm password', 'form-control  mt-3', '', 'Enter password', '', {display: 'none'});

  createElement.delete({id: 'loginRememberMe'});

  createElement.delete({id: 'loginBtn'});
  createElement.addNewElement({id: 'loginBtn'}, 'button', {id: 'signSubmit', name: 'signSubmit',
    type: 'button', value: 'submit', 'class': 'btn btn-secondary text-uppercase', },'Sign Up');

  createElement.delete({id: 'status'});
  createElement.addNewElement({id: 'status'}, 'p', {'class': 'text-white'},'Have account?');
  createElement.addLink('status', 'logIn','text-capitalize','#','Log In', 'Log In', 'Log In Now');
}
