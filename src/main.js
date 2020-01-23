'use strict';

// Import modules on deletion
import 'babel-polyfill';

// Import style
import './styles/main.scss';

// Import images
import './assets/images/logo.png';
import './assets/images/photo.png';

// Image on deletion
import './assets/images/temp/17-layers.png';
import './assets/images/temp/28-layers.png';
import './assets/images/temp/35-layers.png';
import './assets/images/temp/42-layers.png';
import './assets/images/temp/48-layers.png';
//

// Import fonts
import './assets/fonts/themify.eot';
import './assets/fonts/themify.svg';
import './assets/fonts/themify.ttf';
import './assets/fonts/themify.woff';

// Import JS File
import './scripts/controller/controller'
import {init} from "./scripts/controller/init";

import './scripts/logic/thread'
// import {autoLogin} from "./scripts/request/requests";
// import {renderLoginForm} from './scripts/logic/form';
// import {renderHomePage} from "./scripts/render/home-page";


init();
