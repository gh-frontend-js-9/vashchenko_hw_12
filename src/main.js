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

let status = false;

if (!status) {
  status = true;
  renderLoginForm();
  autoLogin(localStorage.getItem('token'));
}

