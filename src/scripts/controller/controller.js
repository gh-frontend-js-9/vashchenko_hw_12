import * as LoginVerification from "../pages/login-pages/logic/form";
import * as Thread from "../pages/thread/logic/thread";
import * as Statistic from "../pages/stat/logic/stats";
import * as Render from "../pages/main";
import {elementToId} from "../func/elementToID";
import {sendMessage} from "../pages/thread/logic/thread";

document.addEventListener('click', function(e) {
  if (e.target.id === 'logIn') {
    Render.loginForm();
  }

  if (e.target.id === 'signUp') {
    Render.signUpForm();
  }

  if (e.target.id === 'resetPassword') {
    Render.resetForm();
  }

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

  if (e.target.id === 'headerLogoImg' || e.target.id === 'homePage') {
    Render.homePageContent();
  }

  if (e.target.id === 'statsPage') {
    Render.statsPageContent();
    Statistic.getAllStats('week');
  }

  if (e.target.id === 'filterByWeek') {
    Render.statsPageContent();
    Statistic.getAllStats('week');
  }


  if (e.target.id === 'filterByMonth') {
    Render.statsPageContent();
    Statistic.getAllStats('month');
  }

  if (e.target.id === 'threadPage') {
    Render.threadPageContent();
    Thread.allThreads();
    if (sessionStorage.getItem('currentThread') !== null && sessionStorage.getItem('currentThreadUser') !== null) {
      setTimeout(() => Thread.allThreadsMessage(sessionStorage.getItem('currentThread'), sessionStorage.getItem('currentThreadUser')), 1000);
    }
  }

  if (e.target.id === 'threadHTMLPage') {
    Render.threadHtmlPage();
  }

  if (e.target.id === 'newConversation') {
    Thread.newCoversation();
  }

});


document.addEventListener('dblclick', function (e) {
  if (e.target.closest('div').id !== null && e.target.closest('#usersList') !== null) {
    Thread.newUserCoversetion(e.target.closest('div').id);
    Thread.createNewThread(e.target.closest('div').id);
  }
  if (e.target.closest('#listConversation') !== null) {
    let threadId = e.target.closest('li').id;
    let coversUserId = e.target.closest('li[data-user-id]').dataset.userId;
      Thread.allThreadsMessage(threadId, coversUserId);
      sessionStorage.setItem('currentThread', threadId);
      sessionStorage.setItem('currentThreadUser', coversUserId);
  }
});

document.addEventListener('keypress', function(e) {
  if (sessionStorage.getItem('currentThread') !== null && e.target.id === 'messageText' && e.keyCode === 13) {
    if (elementToId('messageText').value.split(' ').join('') === '') {
      setTimeout(() => elementToId('messageText').value = '', 300);
    } else {
      sendMessage(elementToId('messageText').value);
      setTimeout(() => elementToId('messageText').value = '', 300);
    }
  }
});
