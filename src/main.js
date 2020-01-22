'use strict';


import 'babel-polyfill';
import './styles/main.scss';
import './assets/images/logo.png';
import './assets/images/photo.png';

// Image on deletion
import './assets/images/temp/17-layers.png';
import './assets/images/temp/28-layers.png';
import './assets/images/temp/35-layers.png';
import './assets/images/temp/42-layers.png';
import './assets/images/temp/48-layers.png';
//

import './assets/fonts/themify.eot';
import './assets/fonts/themify.svg';
import './assets/fonts/themify.ttf';
import './assets/fonts/themify.woff';
import {renderLoginForm} from './scripts/page/form.js';
import {autoLogin} from "./scripts/request/requests";
import {elementToId} from "./scripts/func/elementToID";
import './scripts/page/thread.js'

let status = false;

if (!status) {
  if (window.location.pathname === 'signup.html' || window.location.pathname === 'reset.html' ) {
    status = true;
  } else if (sessionStorage.getItem('token')  === null &&
      localStorage.getItem('token')  === null &&
      window.location.pathname !== '/index.html') {
    // window.location.href = 'index.html';
  } else if (sessionStorage.getItem('token')  === null) {
    console.log(window.location.pathname);
    console.log('status 2');
    renderLoginForm();
    status = true;
  } else if ((window.location.pathname === '/' && localStorage.getItem('token') !== null) ||
             (window.location.pathname === '/index.html') && localStorage.getItem('token') !== null) {
    autoLogin(localStorage.getItem('token'));
  }
}

elementToId("logOutHeaderBtn").addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.href = 'index.html';
});
