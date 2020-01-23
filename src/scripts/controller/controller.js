import * as LoginVerification from "../logic/form";
import {autoLogin} from "../request/requests";
import * as Render from "../render/main";
import {renderHomePage} from "../render/home_page";

export function init() {
  if (sessionStorage.getItem('token')  === null &&
      localStorage.getItem('token')  === null &&
      window.location.pathname !== '/index.html') {
      window.location.href = 'index.html';
      setTimeout(() => Render.Form.loginForm(), 500);
  } else if (sessionStorage.getItem('token')  !== null  && window.location.pathname === '/' || window.location.pathname == '/index.html') {
      Render.Form.loginForm();
    } else if (window.location.pathname === '/' && localStorage.getItem('token') !== null ||
               window.location.pathname === '/index.html' && localStorage.getItem('token') !== null) {
      autoLogin(localStorage.getItem('token'));
    }
}

document.addEventListener('click', function(e) {

  // Подія для елементу на сторінці (./pages/home.html)
  if (e.target.id === 'searchHeaderBtn') {
    renderHomePage();
  }

  if (e.target.id === 'homePageRender') {
    renderHomePage();
  }
  if (e.target.id === 'threadPageRender') {
    renderHomePage();
  }
  if (e.target.id === 'threadHtmlRender') {
    renderHomePage();
  }

  // User verification action START
  if (e.target.id === 'logInSubmit') {
    LoginVerification.logIn();
  }
  if (e.target.id === 'signSubmit') {
    LoginVerification.signUp();
  }
  if (e.target.id === 'resetSubmit') {
    LoginVerification.resetPassword();
  }
  if (e.target.id === 'logOutHeaderBtn') {
    LoginVerification.logOut();
  }
  // User verification action END

  //APP Action

});
