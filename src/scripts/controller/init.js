import * as Render from "../render/main";
import {autoLogin} from "../request/requests";

export function init() {
  if (sessionStorage.getItem('token')  === null &&
    localStorage.getItem('token')  === null &&
    window.location.pathname !== '/index.html') {
    window.location.href = 'index.html';
    setTimeout(() => Render.loginForm(), 500);
  } else if (sessionStorage.getItem('token')  !== null  && window.location.pathname === '/' || window.location.pathname == '/index.html') {
    Render.loginForm();
  } else if (window.location.pathname === '/' && localStorage.getItem('token') !== null ||
    window.location.pathname === '/index.html' && localStorage.getItem('token') !== null) {
    autoLogin(localStorage.getItem('token'));
  }
}
