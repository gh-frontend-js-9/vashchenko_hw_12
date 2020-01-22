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

let status = false;

if (!status) {
  console.log(window.location.pathname);
  if (localStorage.getItem('token')  === null) {
    renderLoginForm();
    status = true;
  } else if ((window.location.pathname === '/' || window.location.pathname === '/index.html') && localStorage.getItem('token')  !== null){
    autoLogin(localStorage.getItem('token'));
  } else if (localStorage.getItem('token')  === null && sessionStorage.getItem('token')  === null ) {
    window.location.replace('index.html');
  }
}

elementToId("logOutHeaderBtn").addEventListener('click', () => {
    sessionStorage.clear();
    localStorage.clear();
    window.location.replace('index.html');
});
