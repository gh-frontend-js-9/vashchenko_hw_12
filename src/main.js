'use strict';

import 'babel-polyfill';
import './styles/main.scss';
import './assets/images/logo.png';
import './assets/fonts/themify.eot';
import './assets/fonts/themify.svg';
import './assets/fonts/themify.ttf';
import './assets/fonts/themify.woff';
import {renderLoginForm} from './scripts/page/form.js';
import {autoLogin} from "./scripts/request/requests";

let status = false;

if (window.location.pathname === '/home.html' || window.location.pathname === '/' || !status) {
  renderLoginForm();
  autoLogin(localStorage.getItem('token'));
}
