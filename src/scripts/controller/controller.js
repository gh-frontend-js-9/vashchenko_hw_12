import * as LoginVerification from "../logic/form";
import * as Render from "../render/main";
import {AccessTOKEN, usersURL} from "../variable/variables";
import {newConversation} from "../logic/thread";

document.addEventListener('click', function(e) {
// Render LOGIN Form Start
  if (e.target.id === 'logIn') {
    Render.loginForm();
  }
  if (e.target.id === 'signUp') {
    Render.signUpForm();
  }
  if (e.target.id === 'resetPassword') {
    Render.resetForm();
  }
// Render LOGIN Form Start

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

// Render page action END
  if (e.target.id === 'headerLogoImg' || e.target.id === 'homePage') {
    Render.homePageContent();
  }
  if (e.target.id === 'threadPage') {
    Render.threadPageContent();
  }
  if (e.target.id === 'threadHTMLPage') {
    Render.threadHtmlPage();
  }
  if (e.target.id === 'threadHTMLPage') {
    Render.threadHtmlPage();
  }
  if (e.target.id === 'threadHTMLPage') {
    Render.threadHtmlPage();
  }
// Render page action END
  if (e.target.id === 'newConversation') {
    newConversation();
  }

});
