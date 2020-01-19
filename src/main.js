'use strict';

import 'babel-polyfill';
import './styles/main.scss';
import './assets/fonts/themify.eot';
import './assets/fonts/themify.svg';
import './assets/fonts/themify.ttf';
import './assets/fonts/themify.woff';
import {loginForm} from './scripts/page/form.js';
import {createElement} from "./scripts/func/createElement";
import {header} from "./scripts/page/header.js";
import './assets/images/logo.png';
import {signUpForm} from "./scripts/page/form";

let appStatus = false;

if (appStatus === false) {
  appStatus = true;
  console.log('App in a live. App load status: '+ appStatus);
  console.log(window.location.hostname);
  loginForm();
}

document.addEventListener('click', function(e) {
  if (e.target.id === 'login') {
    loginForm();
  }
  if (e.target.id === 'signUp') {
    signUpForm();
  }
  if (e.target.id === 'resetPassword') {
    loginForm();
  }
  if (e.target.id === 'logInSubmit') {
    form();
  }
  if (e.target.id === 'signup') {
    sigupForm();
  }
  if (e.target.id === 'resetpassword') {
    resetForm();
  }
});


//
// import {signUpHTML, sign} from './scripts/sign.js';
// import {resetPasswordHTML, reset} from './scripts/reset.js';
// import {validEmail, validPassword, validName} from './scripts/validation.js';
//
// import './assets/images/user.png';
//
//   const titleElement = document.getElementById('status');
//   const avatar = document.getElementById('avatar');
//   const content = document.getElementById('app');

//
//
//
//   if (avatar.src.substr(-3) !== 'png' || avatar.src.substr(-3) !== 'jpg' ) {
//     avatar.src = "images/user.png";
//   }
//
//   function insertText(value, func) {
//     if (value === undefined) {
//       value = 'Login or register you account'
//     }
//     if (func === undefined) {
//       func = titleElement
//     }
//     func.innerHTML = value;
//   }
//

//
//
// function form () {
//   const emailId = document.getElementById("emailId");
//   const passwordId = document.getElementById("passwordId");
//   const emailVal = emailId.value;
//   const passwordVal = passwordId.value;
//   validEmail(emailId, emailVal);
//   validPassword(passwordId, passwordVal, passwordVal);
//   logIn(emailVal, passwordVal);
// }
//
// function sigupForm () {
//   const nameId = document.getElementById("nameId");
//   const emailId = document.getElementById("emailId");
//   const passwordId = document.getElementById("passwordId");
//   const passwordConfirmId = document.getElementById("confirmPasswordId");
//   const nameVal = nameId.value;
//   const emailVal = emailId.value;
//   const passwordVal = passwordId.value;
//   const passwordConfirmVal = passwordConfirmId.value;
//   validEmail(emailId, emailVal);
//   validPassword(passwordId, passwordVal, passwordConfirmVal);
//   validName(nameId, nameVal);
//   sign(emailVal, passwordVal, nameVal);
// }
//
// function resetForm () {
//   const emailId = document.getElementById("emailId");
//   const passwordId = document.getElementById("passwordId");
//   const passwordConfirmId = document.getElementById("confirmPasswordId");
//   const emailVal = emailId.value;
//   const passwordVal = passwordId.value;
//   const passwordConfirmVal = passwordConfirmId.value;
//   validEmail(emailId, emailVal);
//   validPassword(passwordId, passwordVal, passwordConfirmVal);
//   reset(emailVal, passwordVal, passwordConfirmVal);
// }
